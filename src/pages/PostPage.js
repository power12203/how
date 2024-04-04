import React from "react";
import Post from "../components/post/Post";
import PostActionButton from "../components/post/PostActionButton";
import Header from "../libs/common/Header";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { postData } from "../libs/data/postData";

const PostPage = () => {
  const { username, id } = useParams();
  console.log(username, id);
  return (
    <div>
      <Header />
      <Post username={username} id={id} postData={postData} />
      <PostActionButton />
    </div>
  );
};

export default connect((state) => ({
  postData: state.postList,
}))(PostPage);
