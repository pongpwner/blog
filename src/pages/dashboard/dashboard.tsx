import React, { useEffect } from "react";
import PostList from "../../components/postList/postList";
interface IDashboardProps {
  JWT: string;
}
const Dashboard = ({ JWT }: IDashboardProps) => {
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
    }
    // if (JWT !== "") {
    checkAuth();
    //  }
  }, [JWT]);
  return (
    <div className="dashboard">
      <a href="/create-post">Create a New Post</a>
      <PostList posts={[]}></PostList>
    </div>
  );
};

export default Dashboard;
