import React from "react";
import ReactDOM from "react-dom";
import faker from "@faker-js/faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

const App = function () {
  return (
    <div className="ui container comments">
        <ApprovalCard>
      <CommentDetail
        author="mr bruh"
        timeAgo="today at 4:69am"
        comment="this was good blogpost"
        imagep="faker.image.image()"
      />
      </ApprovalCard>
      <ApprovalCard>
      <CommentDetail
        author="samuel"
        timeAgo="yesterday at 7:09pm "
        comment="wow it was a great read! thank you so much author"
        imagep="faker.image.image()"
      />
      </ApprovalCard>
      <ApprovalCard>warning! do you really want to do this </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
