import React from "react";
import styled from "styled-components";
import { origin } from "../../App";
const P = styled.p`
  overflow-wrap: break-word;
  font-size: 2rem;
`;
const Author = styled.span`
  font-weight: 700;
  font-size: 2rem;
`;
const Li = styled.li`
  margin: 2rem 3rem;
  font-size: 2rem;
`;
const Time = styled.span`
  font-style: italic;
  font-size: 2rem;
`;
const Content = styled.p`
  overflow-wrap: break-word;
  font-size: 2rem;
`;
const DeleteButton = styled.button`
  padding: 0.5rem 1rem;
  margin: 0 1rem;
  font-size: 1.5rem;
`;

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
    await fetch(`${origin}/posts/${postId}/comments/${id}`, {
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
    <Li className="comment">
      <Author>{author}</Author>
      <Content>{content}</Content>
      <Time>
        {new Date(timestamp).toLocaleDateString("en-us", {
          year: "numeric",
          month: "short",
          day: "numeric",
        })}
      </Time>
      <DeleteButton onClick={deleteComment}>delete comment</DeleteButton>
    </Li>
  );
};

export default Comment;
