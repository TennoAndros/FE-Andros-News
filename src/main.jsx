import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Favicon from "../public/news.png";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <link rel="icon" type="image/png" href={Favicon} />
  </React.StrictMode>
);
