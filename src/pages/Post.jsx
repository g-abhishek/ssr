import React from "react";
import { useParams } from "react-router-dom";
const Post = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>Post #{id}</h1>
      <p>This is the content for post with ID: {id}</p>
    </div>
  );
};

export default Post;
