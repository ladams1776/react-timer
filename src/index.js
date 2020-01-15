import React from "react";
import ReactDOM from "react-dom";
import Main from "./Main";
import "./vendor/bootstrap/css/bootstrap.min.css";
import "./index.css";


// ========================================

ReactDOM.render(
  // <Form list={JSON.parse('../resources/dropdownDefinition.js')}/>,
  // <EditTaskForm list={list} />,
  <Main />,
  document.getElementById("root")
);
