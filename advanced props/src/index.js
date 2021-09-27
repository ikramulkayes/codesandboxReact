import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import contracts from "./contacts"
ReactDOM.render(<div><App
    name = "Beyonce"
    image = "https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
    alter = "jjj.jpg"
    phone = "4466446"
    email = "446466@yahoo.com"
  />
  <App 
  name = "Jack"
  image = "https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg"
  alter = "jack.png"
  phone = "4664644646"
  email = "jack@gmail.com"
  />
  <App
  name = {contracts[2].name}
  image = {contracts[2].imgURL}
  alter = "555664"
  phone = {contracts[2].phone}
  email = {contracts[2].email}
  />
  </div>
  , document.getElementById("root"));

//1. Apply CSS styles to App.jsx component
//to match the appearance on the completed app:
//https://c6fkx.csb.app/
//2. Extract the contact card as a reusable Card component.
//3. Use props to render the default Beyonce contact card
//so the Card component can be reused for other contacts.
//4. Import the contacts.js file to create card components.
