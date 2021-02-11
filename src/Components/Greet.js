import React from "react";

const Greet = ({ name, placeName, children }) => {    //this is one way of Destructuring
//   const { name, placeName, children } = props;    Another way of Destructuring
  return (
    <div>
      <h1 className="textColor">
        Hello {name} welcome to {placeName}
      </h1>
      {children}
    </div>
  );
};

export default Greet;
