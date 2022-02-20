import React from "react";
import faker from "@faker-js/faker";

const CommentDetail = function (props) {
  return (
    <div className="comment">
      <a href="/" className="avator">
        <img src={props.imagep} alt="avator" />
      </a>
      <div className="content">
        <a href="/" className="author">
          {props.author}
        </a>
        <div className="metadata">
          <span className="date">{props.timeAgo}</span>
        </div>
        <div className="text">{props.comment}</div>
      </div>
    </div>
  );
};

export default CommentDetail;
