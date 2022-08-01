import React, { useEffect, useState } from "react";
import QuoraBox from "./QuoraBox";
import Post from "./Post"

function Feed() {
    return (
      <div className="feed">
        <QuoraBox />
        <Post/>
        <Post/>
        <Post/>
        <Post/>
      </div>
    );
  }
  
  export default Feed;