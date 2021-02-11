import React from "react";

function ResultComp(props) {
  return (
    <div className="result">
        <h1>Result</h1>
      <p>{props.result}</p>
    </div>
  );
}

export default ResultComp;
