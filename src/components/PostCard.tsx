import Image from "next/image";

import type { IPost } from "@/types/post.type";

interface PostCardProps {
  postData: IPost;
}

export default function PostCard({ postData }: PostCardProps) {
  return (
    <div className="w-full max-h-[400px] bg-themeBlack rounded-lg">
      {/* <Image src=/> */}
      <span>2023-12-12</span>
      <span>title</span>
      <span>description</span>
      <div>category</div>
    </div>
  );
}
