import React from "react";
import Post from "../components/post/Post";
// import PostActionButton from "../components/post/PostActionButton";
import Header from "../libs/common/Header";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const PostPage = () => {
  const { username, id } = useParams();
  const { postData } = useSelector((state) => state.write);
  console.log(username, id, postData);
  return (
    <div>
      <Header />
      <Post username={username} id={id} postData={postData} />
    </div>
  );
};

export default PostPage;
