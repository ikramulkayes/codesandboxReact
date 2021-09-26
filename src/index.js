import React from "react";
import ReactDOM from "react-dom";
var food = "Teheri";
var shop = "Salam";
var reso = "Chicken";
var resu = "Leg Piece";
ReactDOM.render(
  <div>
    <h1 className="bb" contentEditable="true" spellCheck="false">
      My Favourite Foods
    </h1>
    <ul>
      <li>Dhaka's {shop + " " + food}</li>
      <li>
        {reso} {resu}
      </li>
      <li>Chiken Leg piece</li>
    </ul>
  </div>,
  document.getElementById("root")
);
