import "./Navigation.scss";
import { Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <nav style={{ backgroundColor: "black" }}>
      <Link to="/login">login</Link>
      <Link to="/register">register</Link>
      <Link to="/">home</Link>
      <Link to="/dashboard">dashboard</Link>
    </nav>
  );
};
