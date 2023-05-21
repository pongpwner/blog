import React, { useEffect } from "react";
import PostForm from "../../components/postForm.js/postForm";
import { origin } from "../../App";

interface ICreatePostProps {
  JWT: string;
}
const CreatePost = ({ JWT }: ICreatePostProps) => {
  return (
    <div className="create-post">
      <PostForm
        method="POST"
        actionRoute={`${origin}/posts/`}
        JWT={JWT}
      ></PostForm>
    </div>
  );
};

export default CreatePost;
