import { link } from "fs";
import React from "react";

const Post = () => {
  return (
    <li className="post">
      <button>publish</button>
      <button>edit</button>
      <button>delete</button>
    </li>
  );
};

export default Post;
