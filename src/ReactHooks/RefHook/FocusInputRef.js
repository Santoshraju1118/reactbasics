import React, { useRef, useEffect } from "react";

function FocusInput() {

  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <input ref={inputRef} type="text" />
    </div>
  );
}

export default FocusInput;