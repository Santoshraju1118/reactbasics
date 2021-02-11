import React, { useState } from "react";
import ResultComp from "./Components/ResultComp";
import "./Calculator.css";
import KeyPadComp from "./Components/KeyPadComp";

function Calculator() {
  const [result, setResult] = useState("");

  const calculate = () => {
    try {
      setResult((eval(result) || "0") + "");
    } catch (e) {
      setResult("Error");
    }
  };

  const reset = () => {
    setResult("");
  };

  const backspace = () => {
    setResult(result.slice(0, -1));
  };

  const onClick = (button) => {
    if (button === "=") {
      calculate();
    } else if (button === "C") {
      reset();
    } else if (button === "CE") {
      backspace();
    } else {
      setResult(result + button);
    }
  };

  return (
    <div>
      <div className="calculator-body">
        <h1>Simple Calculator</h1>
        <ResultComp result={result} />
        <KeyPadComp onClick={onClick} />
      </div>
    </div>
  );
}

export default Calculator;
