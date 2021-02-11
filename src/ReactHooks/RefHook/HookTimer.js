import React, { useState, useEffect, useRef } from "react";

function HookTimer() {
  const [timer, setTimer] = useState(0);
  const interValRef = useRef();

  useEffect(() => {
    interValRef.current = setInterval(() => {
      setTimer((prevState) => prevState + 1);
    }, 1000);
    return () => {
      clearInterval(interValRef.current);
    };
  }, []);

  return (
    <div>
      HookTimer - {timer} -
      <button onClick={() => clearInterval(interValRef.current)}>
        Stop Timer
      </button>
    </div>
  );
}

export default HookTimer;
