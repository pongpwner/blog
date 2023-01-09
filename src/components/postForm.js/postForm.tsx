import React from "react";

const PostForm = () => {
  return (
    <form action="" method="POST" className="post-form">
      <label htmlFor="title">label:</label>
      <input type="text" id="title" name="title" />
      <label htmlFor="content">content:</label>
      <textarea name="content" id="content" cols={30} rows={10}></textarea>
      <button type="submit">Submit</button>
    </form>
  );
};
export default PostForm;
