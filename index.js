import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import BigApp from './App';
import * as serviceWorker from './serviceWorker';

// Creating and replacing <p>
let p = document.createElement("p");
p.appendChild(document.createTextNode("This is a paragraph."));
let parent = document.getElementById("root");
parent.appendChild(p);

let replacement = document.createElement("div");
parent.replaceChild(replacement, p);

// Array which stores 2 random colors got by fetch
export let colors = [];

fetch("http://www.colr.org/json/color/random")
    .then(response => response.json())
    .then(json => {
        colors.push(json.colors[0].hex);
        return colors;
    } )

fetch("http://www.colr.org/json/color/random")
.then(response => response.json())
.then(json => {
    colors.push(json.colors[0].hex);
    return colors;
} )

ReactDOM.render(<BigApp />, replacement);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
