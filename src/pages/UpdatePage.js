import React, { useEffect, useState } from "react";
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
import Update from "../components/Update";
import PostActionButton from "../components/post/PostActionButton";

const UpdatePage = () => {
  const { postData } = useSelector((state) => state.write);
  const { title, content, tags, postTitle, postTags, postId } = useSelector(
    (state) => ({
      id: state.auth.status,
      title: state.write.postData.title,
      content: state.write.postData.content,
      tags: state.write.tags,
      // postId: state.write.id,
      // postTitle: state.write.title,
      // postTags: state.write.tags,
    })
  );
  const { id } = useParams();
  const postContent = postData.find((item) => item.id === Number(id));

  const dispatch = useDispatch();
  // const postData = (id, title, content, tags) =>
  //   dispatch(post_data(id, title, content, tags));
  const initial = () => dispatch(initialize());
  const changeContent = (content) => dispatch(change_content(content));
  const changeTitle = (title) => dispatch(change_title(title));
  const changeTags = (tags) => dispatch(change_tags(tags));
  const onChange = (e) => {
    if (postId) {
      changeTitle(postTitle);
      return;
    }
  };
  const onClick = (e) => {
    postData(id, title, content, tags);
  };
  useEffect(() => {
    if (postId) {
      changeTitle(postTitle);
      changeTags(postTags);
    }
    return () => {
      initial();
    };
  }, [postTitle, postTags]);
  return (
    <>
      <Header />
      <div style={{ position: "absolute", marginTop: "100px", left: "20%" }}>
        <Responsive>
          <h1>글 작성하기</h1>
          <Update
            value={title}
            changeContent={changeContent}
            onChange={onChange}
            postContent={postContent.content ? postContent.content : ""}
          />
          {/* <Tag changeTags={changeTags} tags={tags} postContent={postContent} />
          <WriteActionButton onClick={onClick} /> */}
        </Responsive>
      </div>
    </>
  );
};

export default UpdatePage;
