import React from "react";
import { ChannelContext, UserNameContext } from "../App";

function HookComponentF() {
  return (
    <div>
      <UserNameContext.Consumer>
        {(user) => {
          return (
            <ChannelContext.Consumer>
              {(channel) => {
                return (
                  <div>
                   <h2> Hook Component F {user} from {channel} </h2>
                  </div>
                );
              }}
            </ChannelContext.Consumer>
          );
        }}
      </UserNameContext.Consumer>
    </div>
  );
}

export default HookComponentF;
