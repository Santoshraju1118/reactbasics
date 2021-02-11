import React, { useState, useEffect } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import DiaryCard from "./DiaryCard";
import HomeScreen from "./HomeScreen";

const useStyles = makeStyles({
  root: {
    height: "100vh",
  },
});

function DiaryView() {
  const classes = useStyles();
  const [notes, setNotes] = useState([
    {
      id: 1,
      title: "Title Name",
      date: "Date",
      description: "Description",
    },
  ]);
  const [inputTitle, setInputTitle] = useState("");
  const [inputDate, setInputDate] = useState("");
  const [inputDescription, setInputDescription] = useState("");

  const handleSubmit = (e, notes, setNotes) => {
    e.preventDefault();
    const id = notes.length ? notes[notes.length - 1].id + 1 : 0;
    setNotes([
      ...notes,
      {
        id: id,
        title: inputTitle,
        date: inputDate,
        description: inputDescription,
      },
    ]);
  };

  const deleteNotes = (id) => {
    const newNotes = [...notes];
    newNotes.splice(id, 1);
    setNotes(newNotes);
  };

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
    
      <Grid item xs={false} sm={4} md={7}>
        <Typography component="h1" variant="h5">
          Your Diary
        </Typography>
        {notes.map((note) => {
          return <DiaryCard note={note} deleteNotes={deleteNotes} />;
        })}
      </Grid>
      <HomeScreen
        handleSubmit={handleSubmit}
        setInputTitle={setInputTitle}
        setInputDate={setInputDate}
        setInputDescription={setInputDescription}
        inputTitle={inputTitle}
        inputDate={inputDate}
        inputDescription={inputDescription}
        notes={notes}
        setNotes={setNotes}
      />
    </Grid>
  );
}

export default DiaryView;
