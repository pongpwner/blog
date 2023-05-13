import React from "react";
import Post from "../post/post";
import { IPost } from "../../App";
interface IPostListProps {
  posts: [IPost] | null;
  JWT: string;
}
const PostList = ({ posts, JWT }: IPostListProps) => {
  //move fetch to this component
  return (
    <ul>
      {posts
        ? posts.map((post, i) => {
            return (
              <Post
                key={i}
                id={post._id}
                title={post.title}
                content={post.content}
                category={post.category}
                timestamp={post.timestamp}
                published={post.published}
                JWT={JWT}
              ></Post>
            );
          })
        : null}
    </ul>
  );
};

export default PostList;
