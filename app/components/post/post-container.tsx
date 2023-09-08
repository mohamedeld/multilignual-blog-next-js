import { Post } from "@/types/collection";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import PostContent from "./post-context";
interface Props {
  post: Post;
  layout?: "vertical" | "horizontal";
  reverse?: boolean;
}
const PostContainer = ({
  post,
  layout = "horizontal",
  reverse = false,
}: Props) => {
  return (
    <Link
      className={`${
        layout === "horizontal"
          ? "grid grid-cols-2 gap-10 items-center"
          : "space-y-10"
      }`}
      href={`/posts/${post.slug}`}
    >
      <Image
        className={`rounded-md w-full h-[300px] object-cover object-center ${
          reverse ? "order-last" : ""
        }`}
        src={post.image}
        width={600}
        height={300}
        alt={post.title}
      />
      <PostContent post={post} />
    </Link>
  );
};

export default PostContainer;
