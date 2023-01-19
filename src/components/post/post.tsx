import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const FlexContainer = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
`;
interface IPostProps {
  id: string;
  title: string;
  content: string;
  timestamp: Date;
  published: boolean;
  JWT: string;
}

const Post = ({
  id,
  title,
  content,
  timestamp,
  published,
  JWT,
}: IPostProps) => {
  async function togglePublishPost() {
    console.log(published);
    let response = await fetch(`http://localhost:5000/posts/${id}`, {
      method: "PUT",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${JWT}`,
      },

      body: JSON.stringify({
        title: title,
        content: content,
        published: !published,
      }),
    });
    let data = await response.json();
    console.log(data);
    window.location.reload();
  }
  async function deletePost() {
    await fetch(`http://localhost:5000/posts/${id}`, {
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
      <div className="title">{title}</div>
      <div className="timestamp">
        {new Date(timestamp).toLocaleDateString("en-us", {
          year: "numeric",
          month: "short",
          day: "numeric",
        })}
      </div>
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
