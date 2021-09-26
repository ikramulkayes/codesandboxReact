import React from "react"
import ReactDOM from "react-dom"
var d = new Date(2021,1,1,13);
var j = (d.getHours())
//alert(j)
if (j>=0 && j <= 12){
  ReactDOM.render(<h1 className="heading" style={{color:"red"}}>Good Morning</h1>,document.getElementById("root"))
}else if(j>12 && j<=18){
  ReactDOM.render(<h1 className="heading" style={{color:"green"}}>Good Afternoon</h1>,document.getElementById("root"))
}else{
  ReactDOM.render(<h1 className="heading" style={{color:"blue"}}>Good Evening</h1>,document.getElementById("root"))
}