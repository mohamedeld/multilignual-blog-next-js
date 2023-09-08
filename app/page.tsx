import Image from "next/image";
import PaddingContainer from "./components/layouts/padding-container";
import PostContainer from "./components/post/post-container";
import { DUMMY_POSTS } from "@/DUMMY_DATA";
import PostList from "./components/post/post-list";
import CTACard from "./components/socialMedia/cta-card";

export default function Home() {
  return (
    <PaddingContainer>
      <main className="h-auto space-y-10">
        <PostContainer post={DUMMY_POSTS[0]} />
        <PostList
          posts={DUMMY_POSTS.filter((_post, index) => index > 0 && index < 3)}
        />
        <CTACard />
        <PostContainer post={DUMMY_POSTS[3]} reverse={true} />
        <PostList
          posts={DUMMY_POSTS.filter((_post, index) => index > 3 && index < 6)}
        />
      </main>
    </PaddingContainer>
  );
}
