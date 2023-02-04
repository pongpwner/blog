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
        actionRoute={`https://blog-api-production-9a5f.up.railway.app/posts/`}
        JWT={JWT}
      ></PostForm>
    </div>
  );
};

export default CreatePost;
