import React from "react";

import Sidebar from "../components/Ask/Sidebar";
import Feed from "../components/Ask/Feed"
import Widget from "../components/Ask/Widget";

import "../components/css/Quora.css"

function Quora() {
  return (
    <div className="quora">
      <div className="quora__contents">
        <div className="quora__content">
          <Sidebar />
          <Feed />
          <Widget />
        </div>
      </div>
    </div>
  );
}

export default Quora;