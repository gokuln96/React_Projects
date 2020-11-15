import React, { Component } from 'react';
import ResultComponent from './Components/ResultComponent.js'
import KeypadComponent from './Components/KeypadCompnent.js'
import logo from './logo.svg';
import './App.css';
class App extends Component {
  constructor() {
    super()

    this.state = {
      result: ""
    }
    this.onClick = this.onClick.bind(this)

  }
  onClick(button){
    if (button === '=') {
      this.calculate()
    } 
    else if (button === "C") {
      this.reset()
    }
    else if (button === "CE") {
      this.backspace()
    }
    else{
      this.setState({
        result : this.state.result + button
      })
    }
  }

  calculate = () => {
    try {
      this.setState({
        result: (eval(this.state.result) || "") + ""
      })
    } catch (error) {
      this.setState({
        result: ("error") + ""
      })
    }
   
  }

  reset = () => {
    this.setState({
      result: ""
    })
  };

  backspace = () => {
    this.setState({
      result: this.state.result.slice(0, -1)
    })
  };


  render() {
    return (
      <div className="calculator-body">
        <h1>Simple Calculator</h1>
        <ResultComponent result = {this.state.result} />
        <KeypadComponent onClick={this.onClick} />
      </div>


    );
  }
}


export default App;
