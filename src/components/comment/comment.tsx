import React from "react";

interface ICommentProps {
  id?: string;
  author: string;
  content: string;
  timestamp: Date;
  postId: string;
}
const Comment = ({ author, id, content, timestamp, postId }: ICommentProps) => {
  return (
    <div className="comment">
      <span>{author}</span>
      <span>{content}</span>
      <span>{timestamp.toString()}</span>
    </div>
  );
};

export default Comment;
