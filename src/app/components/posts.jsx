import PostList from "./postList";
import Post from "./post";
import { useParams } from "react-router-dom";
// import _ from "lodash";
// import query from "query-string";

const Posts = () => {
  const params = useParams();
  const posts = [
    { id: 1, label: "post 1" },
    { id: 2, label: "post 2" },
    { id: 3, label: "post 3" },
    { id: 4, label: "post 4" },
  ];
  // const search = query.parse(location.search);
  const { postId } = params;
  console.log("postId", postId);
  // const cropPosts = search
  //   ? _(posts).slice(0).take(search.count).value()
  //   : posts;
  return (
    <>
      {postId ? (
        <Post id={postId} posts={posts} />
      ) : (
        <PostList posts={posts} />
        // <PostList posts={cropPosts} />
      )}
    </>
  );
};

export default Posts;
