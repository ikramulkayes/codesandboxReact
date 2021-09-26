import React from "react";
import ReactDOM from "react-dom";
var cusstyle = {
  color: "red",
  fontSize: "50px",
  border: "1px"
};
cusstyle.color = "blue";
ReactDOM.render(
  <h1 style={cusstyle}>Hello World!</h1>,
  document.getElementById("root")
);