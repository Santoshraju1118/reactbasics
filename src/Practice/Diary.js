import React, { useEffect, useState } from "react";
import axios from "axios";
import Loader from "./Loader";
import HomeScreen from "./DiaryApp/HomeScreen";
import Button from "@material-ui/core/Button";

function DiaryApp() {
  const [posts, setPosts] = useState({});
  const [loading, setLoading] = useState(true);

  const initialFormData = Object.freeze({
    title: [],
    date: [],
    description: [],
  });

  const [formData, updateFormData] = React.useState(initialFormData);

  const onFormDataChange = (e) => {
    updateFormData({
      ...formData,
      [e.target.name]: e.target.value.trim(),
    });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(formData);
    axios
      .post("https://jsonplaceholder.typicode.com/posts", formData)
      .then((response) => {
        setLoading(true);
        console.log(response);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  };

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((responce) => {
        setPosts(responce.data);
        console.log(responce.data);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  }, []);

  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <div>
          <label> Title: </label>
          <input
            type="text"
            placeholder="Title Name"
            name="title"
            onChange={onFormDataChange}
          ></input>
        </div>
        <div>
          <label> Date: </label>
          <input type="date" name="date" onChange={onFormDataChange}></input>
        </div>
        <div>
          <label> Description : </label>
          <textarea
            name="description"
            cols="40"
            rows="5"
            placeholder="Description"
            onChange={onFormDataChange}
          ></textarea>
        </div>
        <Button
          type="submit"
          style={{ backgroundColor: "#dc004e", color: "#ffffff" }}
        >
          Save
        </Button>
      </form>

      {formData.length
        ? formData.map((post) => (
            <div key={post.id}>
              <HomeScreen post={formData} />
            </div>
          ))
        : null}
      {loading ? <Loader open={loading} /> : null}
      {/* 
      <div> {date} </div>
      <div> {description} </div> */}
    </div>
  );
}

export default DiaryApp;
