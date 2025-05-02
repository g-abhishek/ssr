import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { setPost } from "../store/slices/post.slice";
const Post = () => {
  const { id } = useParams();
  const post = useSelector((state) => state.post.currentPost);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!post || post.id != id)
      fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((res) => res.json())
        .then((data) => dispatch(setPost(data)));
  }, [id, post]);

  if (!post) return <p>Loading...</p>;
  return (
    <div>
      <h1>{post?.title}</h1>
      <p>{post?.body}</p>
    </div>
  );
};

export default Post;
