import React from "react";
import PostList from "../../components/postList/postList";
const Dashboard = () => {
  return (
    <div className="dashboard">
      <a href="/create-post">Create a New Post</a>
      <PostList posts={[]}></PostList>
    </div>
  );
};

export default Dashboard;
