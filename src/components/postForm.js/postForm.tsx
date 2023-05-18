import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IPost } from "../../App";
import styled from "styled-components";

import parse from "html-react-parser";
import Tiptap from "./tiptap";

// import ImageInsert from "@ckeditor/ckeditor5-image/src/imageinsert";
// const editorPlaceholder = document.querySelector("#editor") as HTMLElement;
// ClassicEditor.create(editorPlaceholder, {
//   plugins: [ImageInsert],
//   toolbar: ["imageInsert"],
// });

interface IPostFormProps {
  actionRoute: string;
  method?: "PUT" | "POST";
  JWT: string;
  currentPost?: IPost | null;
}
interface IContainerProps {
  display?: string;
  flexDirection?: string;
  justifyContent?: string;
  alignItems?: string;
  fontSize?: string;
  minWidth?: string;
  maxWidth?: string;
  backgroundColor?: string;
  padding?: string;
}
const Container = styled.div`
  margin: 2rem auto;
  min-width: ${(props: IContainerProps) =>
    props.minWidth ? props.minWidth : "unset"};
  max-width: ${(props: IContainerProps) =>
    props.maxWidth ? props.maxWidth : "unset"};
  font-size: 2rem;
`;
const SubmitButton = styled.button`
  border-radius: 10px;
  font-size: 2rem;
  padding: 1rem 2rem;
  margin-top: 1rem;
  &:hover {
    cursor: pointer;
  }
`;
const PostInput = styled.input`
  font-size: 2rem;
`;
const PostLabel = styled.label`
  font-size: 2rem;
`;

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
  const [category1, setCategory1] = useState<string | null | undefined>(
    currentPost ? currentPost.category : ""
  );
  useEffect(() => {
    if (currentPost) {
      setTitle1(currentPost.title);
      setContent1(currentPost.content);
      setCategory1(currentPost.category);
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
    if (e.target.name === "category") {
      setCategory1(e.target.value);
    }
  }

  async function handleSubmit(event: React.SyntheticEvent) {
    event.preventDefault();
    console.log("submit");
    let response = await fetch(actionRoute, {
      method: method,
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${JWT}`,
      },
      body: JSON.stringify({
        title: title1,
        content: content1,
        category: category1,
      }),
    });
    let data = await response.json();

    if (data.message === "post created") {
      navigate("/dashboard");
    }
  }
  return (
    <Container minWidth="15rem" maxWidth="70rem">
      <PostLabel htmlFor="title">title:</PostLabel>

      <PostInput
        type="text"
        id="title"
        name="title"
        value={title1!}
        onChange={(e) => handleChange(e)}
      />
      <PostLabel htmlFor="title">category:</PostLabel>

      <PostInput
        type="text"
        id="category"
        name="category"
        value={category1!}
        onChange={(e) => handleChange(e)}
      />
      {content1 ? (
        <Tiptap content={content1} onChange={setContent1}></Tiptap>
      ) : null}

      <SubmitButton onClick={handleSubmit}> post</SubmitButton>
    </Container>
  );
};
export default PostForm;

{
  /* <form
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
</form> */
}
