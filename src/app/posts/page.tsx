import PostCard from "@/components/PostCard";
import { getJSONData } from "@/service/staticData";

export default async function PostsPage() {
  const posts = await getJSONData("posts");
  return (
    <div className="p-4">
      <div className="grid grid-cols-2 grid-rows-1 gap-3">
        <PostCard postData={posts[0]} />
        <PostCard postData={posts[0]} />
        <PostCard postData={posts[0]} />
        <PostCard postData={posts[0]} />
        <PostCard postData={posts[0]} />
        <PostCard postData={posts[0]} />
        <PostCard postData={posts[0]} />
        <PostCard postData={posts[0]} />
        <PostCard postData={posts[0]} />
      </div>
    </div>
  );
}
