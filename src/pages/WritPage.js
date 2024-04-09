import React, { useEffect, useState } from "react";
import Write from "../components/write/Write";
import Responsive from "../libs/common/Responsive";
import Tag from "../components/write/Tag";
import WriteActionButton from "../components/write/WriteActionButton";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  post_data,
  initialize,
  change_content,
  change_title,
  change_tags,
} from "../modules/write";
import Header from "../libs/common/Header";

const WritPage = () => {
  const { status, title, content, tags } = useSelector((state) => ({
    status: state.auth.status,
    title: state.write.title,
    content: state.write.content,
    tags: state.write.tags,
  }));

  const dispatch = useDispatch();
  // const postData = (id, title, content, tags) =>
  //   dispatch(post_data(id, title, content, tags));
  // const initial = () => dispatch(initialize());
  const changeContent = (content) => dispatch(change_content(content));
  const changeTitle = (title) => dispatch(change_title(title));
  const changeTags = (tags) => dispatch(change_tags(tags));

  return (
    <>
      <Header />
      <div style={{ position: "absolute", marginTop: "100px", left: "20%" }}>
        <Responsive>
          <h1>글 작성하기</h1>
          <Write
            title={title}
            changeTitle={changeTitle}
            content={content}
            changeContent={changeContent}
            changeTags={changeTags}
            tags={tags}
          />
        </Responsive>
      </div>
    </>
  );
};

export default WritPage;
