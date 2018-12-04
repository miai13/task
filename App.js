import React, { Component } from 'react';
import "./App.css";
import {colors} from "./index.js";

let colors2 = ["6ccc7b", "f47c23"]; // Pokušala sam uvesti iz index.js ali bi mi vraćalo undefined pa sam ovako rješila zadatak

// Component which replaced <p>
class App extends Component {
  constructor(props){
    super(props);
    this.state = {background: "black"};
    this.handleClick = this.handleClick.bind(this);
  }
 
  handleClick(){
    let color1 = `#${colors2[Math.floor(Math.random()+0.5)]}`;
    let newColor = this.state.background === "black" ? color1 : "black";
    this.setState({background: newColor});
  }

  render() {
    return (
      <div 
        className="App" 
        style={this.state}
        onClick={this.handleClick}
        >
        <p>{this.props.value}</p>
      </div>
    );
  }
}

// Component that holds previous component and <input>
class BigApp extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ""};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({value: e.target.value})
  }

  render() {
    
    return(
      <div>
        <App value={this.state.value}/>
        <input type="text" value={this.state.value} onChange={this.handleChange}></input>
      </div>
    )
  }
}

export default BigApp;