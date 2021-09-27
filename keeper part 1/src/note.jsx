import React from 'react';
import ReactDOM from 'react-dom';
import Head from "./head"
import Foot from './foot';
import App from './app';
function Note(){
    return <div><Head />
            <App />
            <Foot />
    </div>
}
export default Note;