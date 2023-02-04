import React from "react";
import styled from "styled-components";
const P = styled.p`
  overflow-wrap: break-word;
`;
const Author = styled.span`
  font-weight: 700;
`;
const Li = styled.li`
  margin: 2rem 3rem;
`;
const Time = styled.span`
  font-style: italic;
`;
const Content = styled.p`
  overflow-wrap: break-word;
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
    await fetch(
      `https://blog-api-production-9a5f.up.railway.app/posts/${postId}/comments/${id}`,
      {
        method: "DELETE",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${JWT}`,
        },
      }
    );
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
      <button onClick={deleteComment}>delete comment</button>
    </Li>
  );
};

export default Comment;
