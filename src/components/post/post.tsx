import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { origin } from "../../App";

const Container = styled.li`
  border: 1px solid white;
  margin: 1rem 2rem;
`;
const CustomButton = styled.button`
  padding: 1rem 2rem;
  font-size: 2rem;
`;
const FlexContainer = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  font-size: 2rem;
  margin: 1rem 0;
  a {
    color: white;
    font-size: 2rem;
  }
`;
const FlexContainer1 = styled.div`
  display: flex;

  justify-content: center;
  flex-direction: column;
  align-items: center;
  font-size: 2rem;
`;
interface IPostProps {
  id: string;
  title: string;
  content: string;
  category: string;
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
    <Container className="post">
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
          <CustomButton onClick={togglePublishPost}>unpublish</CustomButton>
        ) : (
          <CustomButton onClick={togglePublishPost}>publish</CustomButton>
        )}

        <Link to={`/posts/${id}`}>edit</Link>

        <CustomButton onClick={deletePost}>delete</CustomButton>
      </FlexContainer>
    </Container>
  );
};

export default Post;
