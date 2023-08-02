import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Favicon from "./assets/news.png";
import { BrowserRouter } from "react-router-dom";


ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
    <link rel="icon" type="image/png" href={Favicon} />
  </BrowserRouter>
);
