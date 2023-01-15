import { link } from "fs";
import React from "react";
interface IPostProps {
  id: string;
  title: string;
  content: string;
  timestamp: Date;
  published: boolean;
}

const Post = ({ id, title, content, timestamp, published }: IPostProps) => {
  return (
    <li className="post">
      <div className="title">{title}</div>
      <div className="timestamp">{timestamp.toString()}</div>
      <button>publish</button>
      <a href={`/post/${id}`}>edit</a>
      <button>delete</button>
    </li>
  );
};

export default Post;
