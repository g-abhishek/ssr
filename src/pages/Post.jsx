import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const Post = ({ initialData }) => {
  const { id } = useParams();
  const [post, setPost] = useState(initialData || null);

  useEffect(() => {
    if (!post)
      fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((res) => res.json())
        .then((data) => setPost(data));
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
