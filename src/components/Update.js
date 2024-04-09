import React, { useCallback, useMemo, useRef, useState } from "react";
import QuillEditor from "react-quill";
import "react-quill/dist/quill.snow.css";
import palette from "../libs/styles/palette";
import Responsive from "../libs/common/Responsive";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import Tag from "./write/Tag";
import { post_edit } from "../modules/write";
import Button from "../libs/common/Button";
import { useParams, useNavigate } from "react-router-dom";

const ActionButtonDiv = styled.div`
  float: left;
  margin-top: 1rem;
  margin-bottom: 3rem;
  button + button {
    margin-left: 0.5rem;
  }
`;
const StyleButton = styled(Button)`
  width: 100px;
  height: 3.5;
  & + & {
    margin-left: 0.5rem;
  }
`;
const WriteDiv = styled(Responsive)`
  padding-top: 5rem;
  padding-bottom: 5rem;
`;
const TitleInput = styled.input`
  font-size: 3rem;
  outline: none;
  padding-bottom: 0.5rem;
  border: none;
  border-bottom: 1px solid ${palette.Indigo[4]};
  margin-bottom: 2rem;
  width: 100%;
`;

const QuillDiv = styled.div`
  .ql-editor {
    padding: 0;
    min-height: 320px;
    font-size: 1.125rem;
    line-height: 1.5;
  }
  .ql-editor.ql-blank::before {
    left: 0px;
  }
`;
const UpdatePage = (props) => {
  const [tags, setTags] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();
  const { postData } = useSelector((state) => state.write);
  // console.log(postData);
  // const { title, changeTitle, content, changeContent } = props;
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();
  const onEditData = (id, title, content, tags) =>
    dispatch(post_edit(id, title, content, tags));
  const postContent = postData.find((item) => item.id === Number(id));
  const [content, setContent] = useState(postContent.content);

  // Editor ref
  const quill = useRef();

  // Handler to handle button clicked
  const Click = (e) => {
    onEditData(id, title, content, tags);
    navigate("/");
  };

  const imageHandler = useCallback(() => {
    // Create an input element of type 'file'
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.click();

    // When a file is selected
    input.onchange = () => {
      const file = input.files[0];
      const reader = new FileReader();

      // Read the selected file as a data URL
      reader.onload = () => {
        const imageUrl = reader.result;
        const quillEditor = quill.current.getEditor();

        // Get the current selection range and insert the image at that index
        const range = quillEditor.getSelection(true);
        quillEditor.insertEmbed(range.index, "image", imageUrl, "user");
      };

      reader.readAsDataURL(file);
    };
  }, []);

  const modules = useMemo(
    () => ({
      toolbar: {
        container: [
          [{ header: [2, 3, 4, false] }],
          ["bold", "italic", "underline", "blockquote"],
          [{ color: [] }],
          [
            { list: "ordered" },
            { list: "bullet" },
            { indent: "-1" },
            { indent: "+1" },
          ],
          ["link", "image"],
          ["clean"],
        ],
        handlers: {
          image: imageHandler,
        },
      },
      clipboard: {
        matchVisual: true,
      },
    }),
    [imageHandler]
  );

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "color",
    "clean",
  ];

  return (
    <WriteDiv>
      <TitleInput
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        type="text"
        placeholder="제목을 입력하세요"
      />
      <QuillDiv>
        <QuillEditor
          ref={(ko) => (quill.current = ko)}
          theme="snow"
          value={content}
          formats={formats}
          modules={modules}
          onChange={(content) => setContent(content)}
        />
      </QuillDiv>
      <Tag tags={tags} setTags={setTags} />
      <ActionButtonDiv>
        <Button onClick={Click}>수정</Button>
        <StyleButton>취소</StyleButton>
      </ActionButtonDiv>
    </WriteDiv>
  );
};

export default UpdatePage;
