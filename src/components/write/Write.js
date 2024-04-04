import React, { memo, useEffect, useRef } from "react";
import Quill from "quill";
import "quill/dist/quill.snow.css";
import palette from "../../libs/styles/palette";
import Responsive from "../../libs/common/Responsive";
import styled from "styled-components";

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
const Write = (props) => {
  const { title, changeContent, onChange } = props;
  const quillElement = useRef(null);
  const quillInstance = useRef(null);
  useEffect(() => {
    quillInstance.current = new Quill(quillElement.current, {
      theme: "snow",
      placeholder: "내용을 작성하세요...",
      modules: {
        toolbar: [
          [{ header: "1" }, { header: "2" }],
          ["bold", "italic", "underline", "strike"],
          [{ list: "ordered" }, { list: "bullet" }],
          ["blockquote", "code-block", "link", "image"],
        ],
      },
    });
    const quill = quillInstance.current;
    quill.on("text-change", (delta, oldDelta, source) => {
      if (source === "user") {
        changeContent(quill.root.innerHTML);
      }
    });
  }, []);

  const mounted = useRef(false);
  //   useEffect(() => {
  // if (mounted.current) return;
  // mounted.current = true;
  // quillInstance.current.root.innerHTML = body;
  //   }, []);
  return (
    <WriteDiv>
      <TitleInput
        value={title}
        onChange={changeContent}
        placeholder="제목을 입력하세요"
      />
      <QuillDiv>
        <div ref={quillElement} />
      </QuillDiv>
    </WriteDiv>
  );
};

export default memo(Write);
