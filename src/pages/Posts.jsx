import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../store/slices/post.slice";

const Posts = () => {
  const dispatch = useDispatch();
  const { items = [], loading } = useSelector((state) => state.post || {});

  useEffect(() => {
    if (!items.length) dispatch(fetchPosts());
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      {items?.map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Posts;
