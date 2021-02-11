import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
  card: {
    minWidth: 320,
    maxWidth: 720,
    marginTop: "20px",
    display: "inline-flex",
    marginLeft: "20px",
  },
  date: {
    display: "flex",
  },
  description: {
    minWidth: 220,
  },
});

export default (props) => {
  const classes = useStyles();

  return (
    <div>
      <Card key={props.note.id} className={classes.card}>
        <CardContent>
          <CardContent>
            <Typography className={classes.date} variant="body">
              {props.note.date}
            </Typography>
          </CardContent>
          <Typography variant="h5" component="h2">
            Title: {props.note.title}
          </Typography>
          <CardContent>
            <Typography variant="body2" className={classes.description}>
              Description: {props.note.description}
            </Typography>
          </CardContent>
          <Button
            onClick={props.deleteNotes}
            className={classes.delete}
            style={{ backgroundColor: "#DC143C", color: "white" }}
          >
            Delete
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};
