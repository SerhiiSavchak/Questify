import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./components/App/App.tsx";
import { BrowserRouter } from "react-router-dom";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter basename="/questify">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
