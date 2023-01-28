import React from "react";

const Post = ({ id, posts }) => {
  const getPostById = (id) => {
    return posts.find((post) => post.id.toString() === id);
  };
  const post = getPostById(id);
  console.log("post", post);

  return <h2>{post ? post.label : `пост с id:${id} не найден`}</h2>;
};

export default Post;
