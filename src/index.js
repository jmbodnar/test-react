import React from "react";
import ReactDOM from "react-dom";

// ----- CSS Imports ----- //
import "../node_modules/sanitize.css/sanitize.css";
import "../node_modules/sanitize.css/typography.css";
import "../node_modules/sanitize.css/forms.css";
import "../node_modules/sanitize.css/assets.css";
import "./assets/css/main.scss";

import App from "./App.js";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
