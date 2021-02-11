///Forward Ref
import React from "react";

//  function FRInput() {
//      return (
//          <div>
//              <input type="text" ref={ref} ></input>
//          </div>
//      )
//  }

const FRInput = React.forwardRef((props, ref) => {     //Gave Conponent as parameter to Forward Ref
  return (
    <div>
      <input type="text" ref={ref}></input>
    </div>
  );
});

export default FRInput;
