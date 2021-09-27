import React from 'react';
//import ReactDOM from 'react-dom';
var d = new Date();

var n = d.getFullYear();
function Foot(){
    return <footer><p>Copyright {n}</p></footer>
}
export default Foot;