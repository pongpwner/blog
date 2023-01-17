import { link } from "fs";
import React from "react";
import { Link } from "react-router-dom";
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
      <div className="timestamp">{timestamp.toString()}</div>
      {published ? (
        <button onClick={togglePublishPost}>unpublish</button>
      ) : (
        <button onClick={togglePublishPost}>publish</button>
      )}
      <Link to={`/posts/${id}`}>edit</Link>

      <button onClick={deletePost}>delete</button>
    </li>
  );
};

export default Post;
