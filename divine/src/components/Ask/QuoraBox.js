/* import { Avatar } from "@material-ui/core"; */



import React from "react";
import { useSelector } from "react-redux";

import "../css/QuoraBox.css";

function QuoraBox() {
  const user = useSelector();
  return (
    <div className="quoraBox">
      <div className="quoraBox__info">
        <p> Image here </p>
      </div>
      <div className="quoraBox__quora">
        <h5>What is your question or link?</h5>
      </div>
    </div>
  );
}

export default QuoraBox;