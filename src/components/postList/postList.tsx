import React from "react";
import Post from "../post/post";
interface IPostListProps {
  posts: [Object] | [];
}
const PostList = ({ posts }: IPostListProps) => {
  return (
    <ul>
      {posts
        ? posts.map((post) => {
            return <Post></Post>;
          })
        : null}
    </ul>
  );
};

export default PostList;
