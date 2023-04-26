"use client";

import { PostList } from "@/types/post.type";
import PostCard from "./PostCard";

interface VScrollProps {
  title: string;
  data: any[];
}

export default function VScroll({ title, data }: VScrollProps) {
  return (
    <section>
      <h2 className="text-2xl my-2">{title}</h2>
      <ul className="flex gap-3 h-fit pb-1 overflow-x-auto scrollbar-thin  scrollbar-track-slate-700 scrollbar-thumb-purple-300 scrollbar-thumb-rounded-md">
        {data.map((item) => (
          <li key={item.id} className="min-w-[300px]">
            <PostCard postData={item} />
          </li>
        ))}
      </ul>
    </section>
  );
}
