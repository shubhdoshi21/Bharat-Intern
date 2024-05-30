import { useContext } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/post-list-store";

const PostList = () => {
  const { postList } = useContext(PostListData);
  return (
    <>
      {postList.length === 0 && (
        <center className="m-5">
          <h4 className="">There are no posts yet...!!!</h4>
        </center>
      )}
      <div className=" d-flex flex-wrap justify-content-evenly">
        {postList.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </>
  );
};

export default PostList;
