import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    textAlign: "left"
  },
  formControl: {
    margin: theme.spacing(1),
    textAlign: "left"
  },
}));

function CheckboxProd(props) {
  const classes = useStyles();
  const [state, setState] = React.useState({});

  // const handleChange = (event, selectedValue,index) => {
  //   props.onOptionFilter(event.target.checked, selectedValue, props.type,index);
  // };

  return (
    <div className={classes.root}>
      <FormControl component="fieldset" className={classes.formControl}>
        <FormGroup>
          {props.categories.map((category,index) => {
            return (
              <FormControlLabel
                control={
                  <Checkbox value={category.name}
                    disabled={category.enabled}
                    checked={category.selected}
                    // onChange={(event) => {
                    //   handleChange(event, category.value,index)
                    // }} name={category.name} 
                    />
                }
                label={category.name}
              />
            );
          })}
        </FormGroup>
      </FormControl>
    </div>
  );
}

export default CheckboxProd;