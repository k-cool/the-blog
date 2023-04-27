'use client';

import { PostList } from '@/types/post.type';
import PostCard from './PostCard';

interface PostVScrollProps {
	data: PostList;
	title?: string;
}

export default function PostVScroll({ title, data }: PostVScrollProps) {
	return (
		<section>
			{title && <h2 className="text-2xl my-2">{title}</h2>}
			<ul className="flex gap-3 h-fit pb-1 overflow-x-auto scrollbar-thin  scrollbar-track-slate-700 scrollbar-thumb-purple-300 scrollbar-thumb-rounded-md">
				{data.map(item => (
					<li key={item.id} className="min-w-[300px]">
						<PostCard postData={item} />
					</li>
				))}
			</ul>
		</section>
	);
}
