import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./pages/signIn/signIn";
import Dashboard from "./pages/dashboard/dashboard";
import CreatePost from "./pages/createPost/createPost";

function App() {
  const [JWT, setJWT] = useState<string>("");

  // get jwt from localstorage
  useEffect(() => {
    let tokenFromStorage = localStorage.getItem("jwt");
    if (tokenFromStorage) {
      setJWT(tokenFromStorage);
    }
  }, []);
  //put jwt in localstorage
  useEffect(() => {
    localStorage.setItem("jwt", JWT);
  }, [JWT]);
  useEffect(() => {
    console.log(JWT);
  }, [JWT]);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignIn setJWT={setJWT}></SignIn>}></Route>
          <Route
            path="/dashboard"
            element={<Dashboard JWT={JWT}></Dashboard>}
          ></Route>
          <Route path="/create-post" element={<CreatePost />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
