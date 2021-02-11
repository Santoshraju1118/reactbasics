import React from "react";
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
      minWidth: 320,
      maxWidth: 720,
      marginTop: "20px",
      display: "inline-flex",
      marginLeft: "20px",
    },

  }));

export default ({ message, id, deleteNote }) => (
  <Grid container component="main" style={{display: "flex",flexDirection: "column",alignItems: "center"}}>
    <Card style={{minWidth: "320",marginTop: "20px"}} >
      <CardContent>
        <Typography variant="h5" component="h2">
          {message}
        </Typography>
        <Button
          onClick={deleteNote}
          style={{ backgroundColor: "#DC143C", color: "white" }}
        >
          Delete
        </Button>
      </CardContent>
    </Card>
  </Grid>
);
