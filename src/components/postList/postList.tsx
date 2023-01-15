import React from "react";
import Post from "../post/post";
import { IPost } from "../../App";
interface IPostListProps {
  posts: [IPost] | null;
}
const PostList = ({ posts }: IPostListProps) => {
  return (
    <ul>
      {posts
        ? posts.map((post) => {
            return (
              <Post
                id={post._id}
                title={post.title}
                content={post.content}
                timestamp={post.timestamp}
                published={post.published}
              ></Post>
            );
          })
        : null}
    </ul>
  );
};

export default PostList;
