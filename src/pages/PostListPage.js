import React from "react";
import PostList from "../components/postList/PostList";
import Header from "../libs/common/Header";
import { bring_post } from "../modules/post";
import { useSelector } from "react-redux";

const PostListPage = (props) => {
  const data = useSelector((state) => state.post);
  return (
    <div>
      <Header />
      <PostList data={data} bring_post={bring_post} />
    </div>
  );
};

export default PostListPage;
