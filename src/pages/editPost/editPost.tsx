import React from "react";
import PostForm from "../../components/postForm.js/postForm";
import { useParams } from "react-router-dom";

const EditPost = () => {
  const { postId } = useParams();
  return <div></div>;
};

export default EditPost;
// {postId}
// <PostForm
//   method="PUT"
//   actionRoute={`http"//localhost:5000/posts/${postId}`}
// ></PostForm>
// ;
