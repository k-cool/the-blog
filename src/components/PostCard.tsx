import Image from "next/image";

import { intl } from "@/util/intl";
import type { IPost } from "@/types/post.type";

interface PostCardProps {
  postData: IPost;
}

export default function PostCard({ postData }: PostCardProps) {
  return (
    <div className="relative w-full max-h-[400px] bg-themeBlack rounded-lg shadow-md overflow-hidden">
      <div className="w-full h-[150px] relative">
        <Image
          src={postData.thumb}
          alt={postData.title}
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="py-2 px-4">
        <div className="flex justify-between items-center">
          <span className="text-lg">{postData.title}</span>
          <span className="text-xs opacity-50">
            {intl
              .formatToParts(new Date(postData.createdAt))
              .map((el, idx, arr) => {
                if (idx - 1 > 0 && arr[idx - 1].type === "day") return " ";
                if (el.value === ". ") return "-";
                else return el.value;
              })}
          </span>
        </div>
        <p className="my-2">{postData.description}</p>
        <div className="w-fit px-[6px] bg-contrast rounded-sm text-sm">
          {postData.category}
        </div>
      </div>
    </div>
  );
}
