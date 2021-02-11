import React, { useState, useEffect } from "react";
import axios from "axios";

function DataFetchingOne() {
  const [loading, setloading] = useState(true);
  const [posts, setposts] = useState({});
  const [error, seterror] = useState("");

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((res) => {
        setloading(false);
        setposts(res.data);
        seterror("");
      })
      .catch((error) => {
        setloading(false);
        setposts({});
        seterror("Something Went Wrong..!");
      });
  }, []);

  return (
    <div>
      {loading ? "Loading" : posts.title}
      {error ? error : null}
    </div>
  );
}

export default DataFetchingOne;
