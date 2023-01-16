import React, { useEffect, useState } from "react";
import PostList from "../../components/postList/postList";
import { IPost } from "../../App";
interface IDashboardProps {
  JWT: string;
  posts: [IPost] | null;
  setPosts: Function;
}

const Dashboard = ({ JWT, posts, setPosts }: IDashboardProps) => {
  useEffect(() => {
    async function checkAuth() {
      console.log(JWT);
      let response = await fetch("http://localhost:5000/dashboard", {
        method: "GET",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${JWT}`,
        },
      });
      let data = await response.json();
      //do something with response
      console.log(data);
      setPosts(data.posts);
    }
    // if (JWT !== "") {
    checkAuth();
    //  }
  }, [JWT]);
  return (
    <div className="dashboard">
      <a href="/create-post">Create a New Post</a>
      <PostList posts={posts} JWT={JWT}></PostList>
    </div>
  );
};

export default Dashboard;
