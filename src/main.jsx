import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Lenis from "./components/Lenis.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Lenis>

    <App />
    </Lenis>
  </React.StrictMode>
);
