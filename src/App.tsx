import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./pages/signIn/signIn";
import Dashboard from "./pages/dashboard/dashboard";
import CreatePost from "./pages/createPost/createPost";
import EditPost from "./pages/editPost/editPost";
import Header from "./components/header/header.component";
import GlobalStyle from "./global.styles";
//import PostComments from "./pages/postComment/postComments";
//https://blog-api-production-9a5f.up.railway.app
//http://localhost:5000
export const origin = "https://blog-api-production-9a5f.up.railway.app";
export interface IPost {
  _id: string;
  title: string;
  content: string;
  category?: string | undefined;
  timestamp: Date;
  published: boolean;
}
function App() {
  const [JWT, setJWT] = useState<string>("");
  const [user, setUser] = useState<string | null>(null);
  const [posts, setPosts] = useState<[IPost] | null>(null);

  // get jwt from localstorage
  useEffect(() => {
    let tokenFromStorage = localStorage.getItem("jwt");
    if (tokenFromStorage) {
      setJWT(tokenFromStorage);
      let userFromStorage = localStorage.getItem("blogAdmin");
      setUser(userFromStorage);
    }
  }, []);
  //put jwt in localstorage
  useEffect(() => {
    localStorage.setItem("jwt", JWT);
  }, [JWT]);
  useEffect(() => {
    localStorage.setItem("blogAdmin", user!);
  }, [user]);

  return (
    <div className="App">
      <GlobalStyle></GlobalStyle>
      <BrowserRouter>
        <Header
          user={user}
          setUser={setUser}
          setJWT={setJWT}
          setPosts={setPosts}
        ></Header>
        <Routes>
          <Route
            path="/"
            element={<SignIn setJWT={setJWT} setUser={setUser}></SignIn>}
          ></Route>
          <Route
            path="/dashboard"
            element={
              <Dashboard
                JWT={JWT}
                posts={posts}
                setPosts={setPosts}
              ></Dashboard>
            }
          ></Route>
          <Route path="/create-post" element={<CreatePost JWT={JWT} />}></Route>
          <Route path="/posts/:postId" element={<EditPost JWT={JWT} />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
{
  /* <Route
path="/posts/:postId/comments"
element={<PostComments></PostComments>}
></Route> */
}
