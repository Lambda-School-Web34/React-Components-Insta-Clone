import React from "react";
import Post from "./Post";
import "./Posts.css";

const Posts = (props) => {
  // 🔥 Make sure the parent of Posts is passing the right props!
  const { likePost, posts } = props;

  return (
    <div className="posts-container-wrapper">
      {/* {console.log(props.posts)} */}
      {/* Map through the posts array returning a Post component at each iteration */}
      {posts.map((postInfo, i) => {
        // console.log(postInfo);
        return <Post post={postInfo} likePost={likePost} key={i} />
       
      })}
      {/* Check the implementation of Post to see what props it requires! */}
    </div>
  );
};

export default Posts;
