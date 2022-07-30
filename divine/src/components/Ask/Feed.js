/* import Post from "./Post"; */

import React, { useEffect, useState } from "react";
import QuoraBox from "./QuoraBox";
import "../css/Feed.css"

import axios from "axios";

function Feed() {
  /* const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios
      .get("/api/questions")
      .then((res) => {
        console.log(res.data.reverse());
        setPosts(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []); */
  return (
    <div className="feed">
      
      <h1>Post</h1>
    </div>
  );
}

export default Feed;