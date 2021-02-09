import logo from './logo.svg';
import './App.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import { Helmet } from 'react-helmet';

const TITLE = "calc.js";

function isOp(s) {
  return s === '+' || s === '-' || s === '/' || s === '*';
}

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: "",
      value: "0",
      demicalUsed: false,
      evaluated: false
    }
    // this.handleClick = this.handleClick.bind(this);
    this.inputNumber = this.inputNumber.bind(this);
  }
  inputNumber(num) {
    if(num === ".") {
      if(this.state.value === "0" && !this.state.decimalUsed) { 
        this.setState( { value: "0.", history: "0.", decimalUsed: true }); 
      } else if(isOp(this.state.value)) {
        this.setState(state => ({ value: "0.", history: state.history.concat("0."), decimalUsed: true }));
      } else if(!this.state.decimalUsed) { 
        this.setState(state => ({
          value: state.value.concat(num),
          history: state.history.concat(num),
          decimalUsed: true
        }))
      }
    } else {
      if(isOp(this.state.value)) { this.setState(state => ({ value: num, history: state.history.concat(num) })); }
      else if(this.state.value === "0") { this.setState( { value: num, history: num } ); }
      else if(num !== ".") { this.setState(state => ({ 
        value: state.value.concat(num),
        history: state.history.concat(num)
      }) ); }
    }
  }
  inputOperation(op) {
    // still need to implement negative number calculation
    const lastIndex = this.state.history.length - 1;
    if(this.state.evaluated) {
      const resultVal = this.state.value; // store temporarily before resetting with clear()
      this.clear()
      this.setState({
        value: op,
        history: resultVal.concat(op)
      })
    } else {
      this.setState( { value: op, decimalUsed: false } );
      if(op === "-") { // for - operator
        if(!isOp(this.state.history[lastIndex])) {
          this.setState(state => ({ history: state.history.concat(op) }));
        } else if(isOp(this.state.history[lastIndex]) && !isOp(this.state.history[lastIndex - 1])) { // only one op in place
          this.setState(state => ({ history: state.history.concat(op) }));
        } else if(isOp(this.state.history[lastIndex]) && isOp(this.state.history[lastIndex - 1])) { // two op in place
          this.setState(state => ({ history: state.history.substr(0,state.history.length - 1).concat(op) }));
        }
      } else { // for rest of the operators
        if(!isOp(this.state.history[lastIndex])) {
          this.setState(state => ({ history: state.history.concat(op) }));
        } else if(isOp(this.state.history[lastIndex]) && !isOp(this.state.history[lastIndex - 1])) {
          this.setState(state => ({ history: state.history.substr(0,state.history.length - 1).concat(op) }));
        } else if(isOp(this.state.history[lastIndex]) && isOp(this.state.history[lastIndex - 1])) {
          this.setState(state => ({ history: state.history.substr(0, state.history.length - 2).concat(op) }));
        }
      }
    }
  }
  clear() {
    this.setState({
      history: "",
      value: "0",
      decimalUsed: false,
      evaluated: false
    })
  }
  evaluate() {
    const result = eval(this.state.history).toString();
    this.setState(state => ({ 
      value: result,
      history: state.history.concat("=").concat(result),
      evaluated: true,
      decimalUsed: false
    }));
  }
  render() {
    return (
      <div class="main">
        <div class="container">
          <div class="display-div">
            <div id="display-history">
              {this.state.history}
            </div>
            <div id="display">
              {this.state.value}
            </div>
          </div>
          <div class="input-div">
            <div class="key num-key" id="zero" onClick={() => this.inputNumber("0")}>0</div>
            <div class="key num-key" id="one" onClick={() => this.inputNumber("1")}>1</div>
            <div class="key num-key" id="two" onClick={() => this.inputNumber("2")}>2</div>
            <div class="key num-key" id="three" onClick={() => this.inputNumber("3")}>3</div>
            <div class="key num-key" id="four" onClick={() => this.inputNumber("4")}>4</div>
            <div class="key num-key" id="five" onClick={() => this.inputNumber("5")}>5</div>
            <div class="key num-key" id="six" onClick={() => this.inputNumber("6")}>6</div>
            <div class="key num-key" id="seven" onClick={() => this.inputNumber("7")}>7</div>
            <div class="key num-key" id="eight" onClick={() => this.inputNumber("8")}>8</div>
            <div class="key num-key" id="nine" onClick={() => this.inputNumber("9")}>9</div>
            <div class="key calc-key" id="equals" onClick={() => this.evaluate()}>=</div>
            <div class="key op-key" id="add" onClick={() => this.inputOperation("+")}>+</div>
            <div class="key op-key" id="subtract" onClick={() => this.inputOperation("-")}>-</div>
            <div class="key op-key" id="multiply" onClick={() => this.inputOperation("*")}>*</div>
            <div class="key op-key" id="divide" onClick={() => this.inputOperation("/")}>/</div>
            <div class="key num-key" id="decimal" onClick={() => this.inputNumber(".")}>.</div>
            <div class="key clear-key" id="clear" onClick={() => this.clear()}>AC</div>
          </div>
        </div>
        <div class="credit">
          Coded and designed by <a href="https://kurtchoi.dev" target="_blank">Kurt Choi</a>
        </div>
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <Helmet>
        <title>{TITLE}</title>
      </Helmet>
      <Calculator />
    </div>
  );
}

export default App;
