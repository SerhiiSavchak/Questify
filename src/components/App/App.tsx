import { Route, Routes } from "react-router-dom";
import { Layout } from "../Layout/Layout";
import { Welcome } from "../../pages/Welcome/Welcome";
import { Dashboard } from "../../pages/Dashboard/Dashboard";
import "./App.css";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Welcome />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>
      <Route path="*" element={<Welcome />} />
    </Routes>
  );
};
