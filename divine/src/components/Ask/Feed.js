import React, { useEffect, useState } from "react";
import QuoraBox from "./QuoraBox";
import Post from "./Post"

import "../css/Feed.css"


function Feed() {
    return (
      <div className="feed">
        <QuoraBox />
        <Post/>
      </div>
    );
  }
  
  export default Feed;