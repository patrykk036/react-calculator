import React from "react";
import Button from "./Button/Button";
import Screen from "./Screen/Screen";
import "./Calc.css";

const calc = props => (
  <div className="calc">
    <Screen numberOnScreen={props.numberOnScreen} />
    <Button clicked={props.divide} colorClass="btn-orange">
      /
    </Button>
    <Button clicked={() => props.setScreen("7")}>7</Button>
    <Button clicked={() => props.setScreen("8")}>8</Button>
    <Button clicked={() => props.setScreen("9")}>9</Button>
    <Button clicked={props.multiply} colorClass="btn-orange">
      *
    </Button>
    <Button clicked={() => props.setScreen("4")}>4</Button>
    <Button clicked={() => props.setScreen("5")}>5</Button>
    <Button clicked={() => props.setScreen("6")}>6</Button>
    <Button clicked={props.subtract} colorClass="btn-orange">
      -
    </Button>
    <Button clicked={() => props.setScreen("1")}>1</Button>
    <Button clicked={() => props.setScreen("2")}>2</Button>
    <Button clicked={() => props.setScreen("3")}>3</Button>
    <Button clicked={props.add} colorClass="btn-orange">
      +
    </Button>
    <Button clicked={() => props.setScreen("0")}>0</Button>
    <Button clicked={() => props.setScreen(".")}>.</Button>
    <Button clicked={props.clearScreen}>C</Button>
    <Button clicked={props.solveResult} colorClass="btn-orange">
      =
    </Button>
  </div>
);

export default calc;
