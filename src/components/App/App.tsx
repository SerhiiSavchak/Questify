import { Route, Routes } from "react-router-dom";
import { Layout } from "../Layout/Layout";
import { Home } from "../../pages/Home/Home";
import { Dashboard } from "../../pages/Dashboard/Dashboard";
import { PublicRoute } from "../PublicRoute/PublicRoute";
import { PrivateRoute } from "../PrivateRoute/PrivateRoute";
import { Register } from "../../pages/Register/Register";
import { Login } from "../../pages/Login/Login";
import "./App.scss";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />

        <Route
          path="/register"
          element={
            <PublicRoute component={Register} redirectedTo="/dashboard" />
          }
        />
        <Route
          path="/login"
          element={<PublicRoute component={Login} redirectedTo="/dashboard" />}
        />
        <Route
          path="/dashboard"
          element={<PrivateRoute component={Dashboard} redirectedTo="/login" />}
        />
      </Route>
      <Route path="*" element={<Home />} />
    </Routes>
  );
};
