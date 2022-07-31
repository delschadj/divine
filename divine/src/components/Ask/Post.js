import { Avatar } from "@material-ui/core";
import React from "react";
import "../css/Post.css";

function Post () {
    return (
        <div className="post">
            <div className="post__info">
                <Avatar />
                <h4> User Name </h4>
                <small> Timestamp </small>
            </div>

            <div className="post__body">
                <p> This is test question</p>
                <button className="post__btnAnswer"> Answer </button>
            </div>

            <div className="psot_footer">
                <div className="post_footerAction"></div>
            </div>
        </div>
    )
}

export default Post