import React from "react";
import { useParams, Link } from "react-router-dom";
import CommentList from "../../components/commentList/commentList";
const PostComments = () => {
  return (
    <div className="post-comments">
      <CommentList></CommentList>
    </div>
  );
};

export default PostComments;
