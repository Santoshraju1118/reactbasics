import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function HomeScreen({
  setInputDate,
  setInputDescription,
  setInputTitle,
  handleSubmit,
  inputDate,
  inputDescription,
  inputTitle,
  notes,
  setNotes,
}) {
  const classes = useStyles();

  return (
    <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Diary
        </Typography>
        <form
          className={classes.form}
          noValidate
          onSubmit={(e) => handleSubmit(e, notes, setNotes)}
        >
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            label="Title Name"
            name="title"
            autoFocus
            onChange={(e) => setInputTitle(e.target.value)}
            value={inputTitle}
          />
          <TextField
            variant="outlined"
            fullWidth
            label="Date"
            type="date"
            name="date"
            InputLabelProps={{
              shrink: true,
            }}
            onChange={(e) => setInputDate(e.target.value)}
            value={inputDate}
          />
          <TextField
            variant="outlined"
            multiline
            margin="normal"
            fullWidth
            name="description"
            label="Description"
            onChange={(e) => setInputDescription(e.target.value)}
            value={inputDescription}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Save
          </Button>
        </form>
      </div>
    </Grid>
  );
}

export default HomeScreen;
