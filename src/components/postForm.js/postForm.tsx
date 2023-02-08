import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IPost } from "../../App";
import styled from "styled-components";

interface IPostFormProps {
  actionRoute: string;
  method?: "PUT" | "POST";
  JWT: string;
  currentPost?: IPost | null;
}
const PostForm = ({
  actionRoute,
  method,
  JWT,
  currentPost,
}: IPostFormProps) => {
  const navigate = useNavigate();
  const [title1, setTitle1] = useState<string | null>(
    currentPost ? currentPost.title : ""
  );
  const [content1, setContent1] = useState<string | null>(
    currentPost ? currentPost.content : ""
  );
  useEffect(() => {
    if (currentPost) {
      setTitle1(currentPost.title);
      setContent1(currentPost.content);
    }
  }, [currentPost]);

  function handleChange(
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ): void {
    if (e.target.name === "title") {
      setTitle1(e.target.value);
    }
    if (e.target.name === "content") {
      setContent1(e.target.value);
    }
  }

  async function handleSubmit(event: React.SyntheticEvent) {
    event.preventDefault();
    let response = await fetch(actionRoute, {
      method: method,
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${JWT}`,
      },
      body: JSON.stringify({ title: title1, content: content1 }),
    });
    let data = await response.json();

    if (data.message === "post created") {
      navigate("/dashboard");
    }
  }
  return (
    <form
      action={actionRoute}
      method="POST"
      onSubmit={handleSubmit}
      className="post-form"
    >
      <label htmlFor="title">title:</label>
      <div>
        <input
          type="text"
          id="title"
          name="title"
          value={title1!}
          onChange={(e) => handleChange(e)}
        />
      </div>
      <label htmlFor="content">content:</label>
      <div>
        <textarea
          name="content"
          id="content"
          cols={100}
          rows={40}
          value={content1!}
          onChange={(e) => handleChange(e)}
        ></textarea>
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};
export default PostForm;
