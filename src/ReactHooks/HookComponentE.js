import React, { useContext } from "react";
import HookComponentF from "./HookComponentF";
import { ChannelContext, UserNameContext } from "../App";

function HookComponentE() {
  const user = useContext(ChannelContext);
  const channel = useContext(UserNameContext);

  return (
    <div>
      <h1>
        This is another form of getting Context in Component E : {user} & {channel}{" "}
      </h1>
      <HookComponentF />
    </div>
  );
}

export default HookComponentE;
