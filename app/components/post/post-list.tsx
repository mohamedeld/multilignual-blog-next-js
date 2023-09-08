import { Post } from "@/types/collection";
import React from "react";
import PostContainer from "./post-container";
interface Props {
  posts: Post[];
  layout?: "vertical" | "horizontal";
}
const PostList = ({ posts, layout = "vertical" }: Props) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
      {posts.map((post) => (
        <PostContainer post={post} key={post.id} layout={layout} />
      ))}
    </div>
  );
};

export default PostList;
