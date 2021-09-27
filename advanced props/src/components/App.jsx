import React from "react";
import Info from "./info";
function App(props) {
  return (
    <div>
     
      <div className="card">
        <div className="top">
          <h2 className = "name">{props.name}</h2>
          <img className = "circle-img"
            src = {props.image}
            alt={props.alter}
          />
        </div>
        <div className="bottom ">
        <Info email = {props.phone} phone = {props.email} />
        </div>
      </div>
    </div>
  );
}

export default App;
