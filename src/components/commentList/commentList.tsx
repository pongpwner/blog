import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Comment from "../comment/comment";
export interface IComment {
  _id?: string;
  author: string;
  content: string;
  timestamp: Date;
  postId: string;
}
interface ICommentListProps {
  JWT: string;
}
const CommentList = ({ JWT }: ICommentListProps) => {
  const [comments, setComments] = useState<[IComment] | null>(null);
  const { postId } = useParams();
  //fetch
  useEffect(() => {
    async function getComments() {
      let data = await fetch(
        `https://blog-api-production-9a5f.up.railway.appposts/${postId}/comments`,
        {
          method: "GET",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      let response = await data.json();
      console.log(response);
      setComments(response.comments);
    }
    getComments();
  }, []);

  return comments ? (
    <ul>
      {comments.map((comment) => (
        <Comment
          author={comment.author}
          content={comment.content}
          timestamp={comment.timestamp}
          postId={comment.postId}
          id={comment._id}
          JWT={JWT}
        />
      ))}
    </ul>
  ) : (
    <div>there are no comments</div>
  );
};

export default CommentList;
