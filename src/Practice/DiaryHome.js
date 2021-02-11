import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  card: {
    maxWidth: 370,
    marginTop: "20px",
    display: "inline-flex",
    marginLeft: "20px",
  },
  pos: {
    display: "flex",
  },
}));

function DiaryHome() {
  const classes = useStyles();
  const [notes, setNotes] = useState([
    {
      id: 1,
      title: "Title Name",
      date: "Date",
      description: "Description",
    },
  ]);

  const handleSubmit = (e, notes, setNotes) => {
    e.preventDefault();
    const id = notes.length ? notes[notes.length - 1].id + 1 : 0;
    setNotes([...notes, formData]);
    console.log(notes);
  };

  const initialFormData = Object.freeze({
    id: {},
    title: {},
    date: {},
    description: {},
  });

  const [formData, updateFormData] = useState(initialFormData);

  const onFormDataChange = (e) => {
    updateFormData({
      ...formData,
      [e.target.name]: e.target.value.trim(),
    });
  };

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7}>
        <Typography component="h1" variant="h5">
          Your Diary
        </Typography>
        {notes.map((note) => {
          return (
            <Card className={classes.card}>
              <CardContent>
                <CardContent>
                  <Typography className={classes.pos} variant="body">
                    {note.date}
                  </Typography>
                </CardContent>
                <Typography variant="h5" component="h2">
                  Title: {note.title}
                </Typography>
                <CardContent>
                  <Typography className={classes.description}>
                    Description: {note.description}
                  </Typography>
                </CardContent>
              </CardContent>
            </Card>
          );
        })}
      </Grid>

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
              onChange={onFormDataChange}
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
              onChange={onFormDataChange}
            />
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              name="description"
              label="Description"
              onChange={onFormDataChange}
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
    </Grid>
  );
}

export default DiaryHome;
