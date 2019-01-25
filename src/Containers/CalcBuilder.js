import React, { Component } from "react";
import Calc from "../Components/Calc/Calc";

class CalcBuilder extends Component {
  state = {
    currentOperation: "",
    numberOnScreen: "0",
    savedNumber: "0"
  };

  setScreen = num => {
    if (this.state.numberOnScreen.length > 8) return;

    if (num === ".") {
      if (this.state.numberOnScreen.indexOf(".") !== -1) {
        return;
      }
    }
    this.state.numberOnScreen === "0"
      ? this.setState({ numberOnScreen: num })
      : this.setState({ numberOnScreen: this.state.numberOnScreen + num });
  };

  clearScreen = () => {
    this.setState({
      numberOnScreen: "0",
      savedNumber: "0",
      currentOperation: ""
    });
  };

  divide = () => {
    this.setState({
      currentOperation: "/",
      savedNumber: this.state.numberOnScreen
    });
    this.setState({ numberOnScreen: "0" });
  };

  multiply = () => {
    this.setState({
      currentOperation: "*",
      savedNumber: this.state.numberOnScreen
    });
    this.setState({ numberOnScreen: "0" });
  };

  subtract = () => {
    this.setState({
      currentOperation: "-",
      savedNumber: this.state.numberOnScreen
    });
    this.setState({ numberOnScreen: "0" });
  };

  add = () => {
    this.setState({
      currentOperation: "+",
      savedNumber: this.state.numberOnScreen
    });
    this.setState({ numberOnScreen: "0" });
  };

  solveResult = () => {
    let firstNumber = parseFloat(this.state.savedNumber);
    let secondNumber = parseFloat(this.state.numberOnScreen);
    let finalNumber;

    if (
      firstNumber + secondNumber > 999999999 ||
      firstNumber * secondNumber > 999999999
    ) {
      alert("Value is too large");
      this.clearScreen();
      return;
    }

    switch (this.state.currentOperation) {
      case "+":
        finalNumber = firstNumber + secondNumber;
        this.setState({ numberOnScreen: finalNumber.toString() });
        break;
      case "-":
        finalNumber = firstNumber - secondNumber;
        this.setState({ numberOnScreen: finalNumber.toString() });
        break;
      case "*":
        finalNumber = firstNumber * secondNumber;
        let finalNumberString = finalNumber.toString();
        let dotPosition = finalNumberString.indexOf(".");
        if (dotPosition !== -1) {
          if (finalNumberString.length - dotPosition > 5) {
            finalNumberString = finalNumber.toFixed(5);
          }
        }
        this.setState({ numberOnScreen: finalNumberString });
        break;
      case "/":
        if (secondNumber === 0) {
          alert("divide by 0");
        } else {
          finalNumber = firstNumber / secondNumber;
          let finalNumberString = finalNumber.toString();
          let dotPosition = finalNumberString.indexOf(".");
          if (dotPosition !== -1) {
            if (finalNumberString.length - dotPosition > 5) {
              finalNumberString = finalNumber.toFixed(5);
            }
          }
          this.setState({ numberOnScreen: finalNumberString });
        }
        break;

      default:
        console.log("Nothing selected");
    }
    this.setState({ currentOperation: "" });
  };

  render() {
    return (
      <div>
        <Calc
          result={this.state.result}
          add={this.add}
          subtract={this.subtract}
          multiply={this.multiply}
          divide={this.divide}
          solveResult={this.solveResult}
          setScreen={this.setScreen}
          numberOnScreen={this.state.numberOnScreen}
          clearScreen={this.clearScreen}
        />
      </div>
    );
  }
}

export default CalcBuilder;
