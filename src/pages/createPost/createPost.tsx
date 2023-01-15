import React, { useEffect } from "react";
import PostForm from "../../components/postForm.js/postForm";
interface ICreatePostProps {
  JWT: string;
}
const CreatePost = ({ JWT }: ICreatePostProps) => {
  return (
    <div className="create-post">
      <PostForm
        method="POST"
        actionRoute={`http://localhost:5000/posts/`}
        JWT={JWT}
      ></PostForm>
    </div>
  );
};

export default CreatePost;
