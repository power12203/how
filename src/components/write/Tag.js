import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import palette from "../../libs/styles/palette";

const TagDiv = styled.div`
  width: 100%;
  border-top: 1px solid ${palette.Indigo[2]};
  padding-top: 2rem;
  h4 {
    color: ${palette.Indigo[8]};
    margin-top: 0;
    margin-bottom: 0.5rem;
  }
`;

const TagForm = styled.form`
  border-radius: 4px;
  overflow: hidden;
  display: flex;
  width: 256px;
  border: 1px solid ${palette.Indigo[9]};
  input,
  button {
    outline: none;
    border: none;
    font-size: 1rem;
  }
  input {
    padding: 0.5rem;
    flex: 1;
    min-width: 0;
  }
  button {
    cursor: pointer;
    padding-left: 1rem;
    padding-right: 1rem;
    border: none;
    background: ${palette.Indigo[8]};
    color: white;
    font-weight: bold;
    &:hover {
      background: ${palette.Indigo[6]};
    }
  }
`;
const TagListUl = styled.ul`
  list-style: "#";
  display: flex;
  justify-content: space-between;
  margin-top: 0.5rem;
`;

const Tag = (props) => {
  const { setTags, tags } = props;
  const [tagInput, setTagInput] = useState("");
  // const [tagsList, setTags] = useState([]);

  const handleInputChange = (e) => {
    setTagInput(e.target.value);
  };

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (!tagInput) return;
      if (tags.includes(tagInput)) {
        return;
      } else {
        const newTagList = [...tags, tagInput];
        setTags(newTagList);
        // setTags(newTagList && newTagList);
      }
      setTagInput("");
    },
    [tags, tagInput]
  );
  // useEffect(() => {
  //   setTags(tags);
  // }, [tags]);

  const handleDelete = (index) => {
    const newTags = [...tags];
    newTags.splice(index, 1);
    setTags(newTags);
  };

  return (
    <TagDiv>
      <h4>태그</h4>
      <TagForm onSubmit={handleSubmit}>
        <input
          placeholder="태그를 입력하세요"
          value={tagInput}
          onChange={handleInputChange}
        />
        <button type="submit">추가</button>
      </TagForm>
      <TagListUl>
        {tags &&
          tags.map((tag, index) => (
            <div
              style={{ display: "flex" }}
              onClick={() => handleDelete(index)}
            >
              #{tag}
              <div style={{ color: "red", cursor: "pointer" }}>x</div>
            </div>
          ))}
      </TagListUl>
    </TagDiv>
  );
};

export default Tag;
