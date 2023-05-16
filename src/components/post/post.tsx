import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { origin } from "../../App";
const FlexContainer = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
`;
const FlexContainer1 = styled.div`
  display: flex;

  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
interface IPostProps {
  id: string;
  title: string;
  content: string;
  category: string | undefined;
  timestamp: Date;
  published: boolean;
  JWT: string;
}

const Post = ({
  id,
  title,
  content,
  category,
  timestamp,
  published,
  JWT,
}: IPostProps) => {
  async function togglePublishPost() {
    let response = await fetch(`${origin}/posts/${id}`, {
      method: "PUT",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${JWT}`,
      },

      body: JSON.stringify({
        title: title,
        content: content,
        category: category,
        published: !published,
      }),
    });
    let data = await response.json();

    window.location.reload();
  }
  async function deletePost() {
    await fetch(`${origin}/posts/${id}`, {
      method: "DELETE",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${JWT}`,
      },
    });
    // delete comments with same post id
    await fetch(`${origin}/posts/${id}/comments`, {
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
    <li className="post">
      <FlexContainer1>
        <h2 className="title">{title}</h2>
        <div>{category}</div>
        <div className="timestamp">
          {new Date(timestamp).toLocaleDateString("en-us", {
            year: "numeric",
            month: "short",
            day: "numeric",
          })}
        </div>
      </FlexContainer1>
      <FlexContainer>
        {published ? (
          <button onClick={togglePublishPost}>unpublish</button>
        ) : (
          <button onClick={togglePublishPost}>publish</button>
        )}
        <Link to={`/posts/${id}`}>edit</Link>

        <button onClick={deletePost}>delete</button>
      </FlexContainer>
    </li>
  );
};

export default Post;
