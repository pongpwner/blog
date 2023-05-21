import "./styles.scss";
import Image from "@tiptap/extension-image";
import { Color } from "@tiptap/extension-color";
import ListItem from "@tiptap/extension-list-item";
import TextStyle from "@tiptap/extension-text-style";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import React from "react";
import styled from "styled-components";
import { FaBold } from "react-icons/fa";
import { FaHeading } from "react-icons/fa";
import { FaItalic } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import { FaStrikethrough } from "react-icons/fa";
import { FaListUl } from "react-icons/fa";
import { FaListOl } from "react-icons/fa";
import { FaParagraph } from "react-icons/fa";
import { FaQuoteLeft } from "react-icons/fa";
interface IColorProps {
  backgroundColor: string;
}
const MenuContainer = styled.div`
  background-color: white;
  border-radius: 10px;
`;
const ColorButton = styled.button`
  background-color: ${(props: IColorProps) =>
    props.backgroundColor ? props.backgroundColor : "unset"};
  width: 2.5rem;
  height: 2.5rem;
`;
//@ts-ignore
const MenuBar = ({ editor }) => {
  if (!editor) {
    return null;
  }
  const addImage = () => {
    const url = window.prompt("URL");

    if (url) {
      //@ts-ignore
      editor.chain().focus().setImage({ src: url }).run();
    }
  };
  return (
    <MenuContainer>
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        disabled={!editor.can().chain().focus().toggleBold().run()}
        className={editor.isActive("bold") ? "is-active" : ""}
      >
        <FaBold></FaBold>
      </button>
      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        disabled={!editor.can().chain().focus().toggleItalic().run()}
        className={editor.isActive("italic") ? "is-active" : ""}
      >
        <FaItalic></FaItalic>
      </button>
      <button
        onClick={() => editor.chain().focus().toggleStrike().run()}
        disabled={!editor.can().chain().focus().toggleStrike().run()}
        className={editor.isActive("strike") ? "is-active" : ""}
      >
        <FaStrikethrough></FaStrikethrough>
      </button>
      <button
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        className={editor.isActive("codeBlock") ? "is-active" : ""}
      >
        code block
      </button>
      <button
        onClick={() => editor.chain().focus().toggleCode().run()}
        disabled={!editor.can().chain().focus().toggleCode().run()}
        className={editor.isActive("code") ? "is-active" : ""}
      >
        <FaCode></FaCode>
      </button>

      <button
        onClick={() => editor.chain().focus().setParagraph().run()}
        className={editor.isActive("paragraph") ? "is-active" : ""}
      >
        <FaParagraph></FaParagraph>
      </button>

      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={editor.isActive("heading", { level: 2 }) ? "is-active" : ""}
      >
        <FaHeading></FaHeading>
      </button>

      <button
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={editor.isActive("bulletList") ? "is-active" : ""}
      >
        <FaListUl></FaListUl>
      </button>
      <button
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={editor.isActive("orderedList") ? "is-active" : ""}
      >
        <FaListOl></FaListOl>
      </button>

      <button
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        className={editor.isActive("blockquote") ? "is-active" : ""}
      >
        <FaQuoteLeft></FaQuoteLeft>
      </button>
      <button onClick={() => editor.chain().focus().setHorizontalRule().run()}>
        horizontal rule
      </button>
      <button onClick={addImage}>add image from URL</button>

      <button
        onClick={() => editor.chain().focus().undo().run()}
        disabled={!editor.can().chain().focus().undo().run()}
      >
        undo
      </button>
      <button
        onClick={() => editor.chain().focus().redo().run()}
        disabled={!editor.can().chain().focus().redo().run()}
      >
        redo
      </button>
      <ColorButton
        backgroundColor="#fffb00"
        onClick={() => editor.chain().focus().setColor("#fffb00").run()}
        className={
          editor.isActive("textStyle", { color: "#fffb00" }) ? "is-active" : ""
        }
      ></ColorButton>
      <ColorButton
        backgroundColor="#0042ea"
        onClick={() => editor.chain().focus().setColor("#0042ea").run()}
        className={
          editor.isActive("textStyle", { color: "#0042ea" }) ? "is-active" : ""
        }
      ></ColorButton>
      <ColorButton
        backgroundColor="#f50056"
        onClick={() => editor.chain().focus().setColor("#f50056").run()}
        className={
          editor.isActive("textStyle", { color: "#f50056" }) ? "is-active" : ""
        }
      ></ColorButton>
      <ColorButton
        backgroundColor="#958DF1"
        onClick={() => editor.chain().focus().setColor("#958DF1").run()}
        className={
          editor.isActive("textStyle", { color: "#958DF1" }) ? "is-active" : ""
        }
      ></ColorButton>
    </MenuContainer>
  );
};
//@ts-ignore
export default ({ content, onChange }) => {
  const editor = useEditor({
    extensions: [
      Image,
      Color.configure({ types: [TextStyle.name, ListItem.name] }),
      //@ts-ignore
      TextStyle.configure({ types: [ListItem.name] }),
      StarterKit.configure({
        bulletList: {
          keepMarks: true,
          keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
        },
        orderedList: {
          keepMarks: true,
          keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
        },
      }),
    ],
    content: content,

    onUpdate: ({ editor }) => {
      const html = editor.getHTML();

      onChange(html);
    },
  });

  return (
    <div className="text-editor">
      <MenuBar editor={editor} />
      <EditorContent editor={editor} />
    </div>
  );
};
