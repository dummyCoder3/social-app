import { currentUser } from "@clerk/nextjs/server";

import WhoToFollow from "@/components/WhoToFollow";
import CreatePost from "@/components/CreatePost";
import PostCard from "@/components/PostCard";

export default async function Home() {
  const user = await currentUser();
  const posts = await getPosts();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-10 gap-6">
      <div className="lg:col-span-6">
        {user ? <CreatePost /> : null}
        <div className="space-y-6">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </div>
      <div className="hidden sticky top-20 lg:block lg:col-span-4">
        <WhoToFollow />
      </div>
    </div>
  );
}
