import React from "react";
import { useHistory } from "react-router-dom";

const Post = ({ id, posts }) => {
  const history = useHistory();
  console.log("history ", history);
  const handeleSave = () => {
    history.push("/posts");
  };
  const getPostById = (id) => {
    return posts.find((post) => post.id.toString() === id);
  };
  const post = getPostById(id);
  console.log("post", post);

  return (
    <>
      <h2>{post ? post.label : `пост с id:${id} не найден`}</h2>
      <button onClick={handeleSave}>Сохранить</button>
    </>
  );
};

export default Post;
