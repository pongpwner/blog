import React, { useEffect, useState } from "react";
import PostForm from "../../components/postForm.js/postForm";
import { useParams, Link } from "react-router-dom";
import { IPost } from "../../App";
import CommentList from "../../components/commentList/commentList";
import { origin } from "../../App";
import styled from "styled-components";
interface IEditPost {
  JWT: string;
}

const CommentHeading = styled.h2`
  display: flex;
  justify-content: center;
  font-size: 3rem;
`;
const EditPost = ({ JWT }: IEditPost) => {
  const [currentPost, setCurrentPost] = useState<IPost | null>(null);
  const { postId } = useParams();

  useEffect(() => {
    async function getPost() {
      let response = await fetch(`${origin}/posts/${postId}`, {
        method: "GET",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${JWT}`,
        },
      });
      let data = await response.json();

      setCurrentPost(data.post);
    }
    getPost();
  }, []);

  return (
    <div>
      <PostForm
        JWT={JWT}
        currentPost={currentPost}
        method="PUT"
        actionRoute={`${origin}/posts/${postId}`}
      ></PostForm>

      <CommentHeading>Comments</CommentHeading>
      <CommentList JWT={JWT}></CommentList>
    </div>
  );
};

export default EditPost;
// {postId}

// ;
//<Link to="/posts/:postId/comments">View comments</Link>
