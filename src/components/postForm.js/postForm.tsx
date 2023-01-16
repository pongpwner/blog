import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

interface IPostFormProps {
  actionRoute: string;
  method?: "PUT" | "POST";
  JWT: string;
}
const PostForm = ({ actionRoute, method, JWT }: IPostFormProps) => {
  console.log(JWT);
  const navigate = useNavigate();
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  function handleChange(
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ): void {
    if (e.target.name === "title") {
      setTitle(e.target.value);
    }
    if (e.target.name === "content") {
      setContent(e.target.value);
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
      body: JSON.stringify({ title: title, content: content }),
    });
    let data = await response.json();
    console.log(data);
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
      <label htmlFor="title">label:</label>
      <input
        type="text"
        id="title"
        name="title"
        value={title}
        onChange={(e) => handleChange(e)}
      />
      <label htmlFor="content">content:</label>
      <textarea
        name="content"
        id="content"
        cols={30}
        rows={10}
        value={content}
        onChange={(e) => handleChange(e)}
      ></textarea>
      <button type="submit">Submit</button>
    </form>
  );
};
export default PostForm;
