import React from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router-dom";
import App from "./app";
import history from "./history";

ReactDOM.render(
    <Router history={history} className="mainContainer">
      <App />
    </Router>,
  document.getElementById("app")
);
