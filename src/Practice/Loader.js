import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import Backdrop from "@material-ui/core/Backdrop";

const Loader = (props) => {
  return (
    <div>
      <Backdrop open={props.open}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
};
export default Loader;
