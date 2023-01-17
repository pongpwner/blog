import React from "react";

interface ICommentProps {
  id?: string;
  author: string;
  content: string;
  timestamp: Date;
  postId: string;
  JWT: string;
}
const Comment = ({
  author,
  id,
  content,
  timestamp,
  postId,
  JWT,
}: ICommentProps) => {
  async function deleteComment() {
    await fetch(`http://localhost:5000/posts/${postId}/comments/${id}`, {
      method: "DELETE",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${JWT}`,
      },
    });
    window.location.reload();
  }
  return (
    <div className="comment">
      <span>{author}</span>
      <span>{content}</span>
      <span>{timestamp.toString()}</span>
      <button onClick={deleteComment}>delete comment</button>
    </div>
  );
};

export default Comment;
