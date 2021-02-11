import React from "react";

function FunctionClick() {
    function clickHandler() {
        console.log("button clicked")
    }
  return (
    <div>
      <button onClick={clickHandler} >functionclick</button>
    </div>
  );
}

export default FunctionClick;
