import React from "react";
import ReactDom from "react-dom";

function PortalRootDemo() {
  return ReactDom.createPortal(
    <div>
      <h1>Protals Demo</h1>
    </div>,
    document.getElementById("portal-root")
  );
}

export default PortalRootDemo;
