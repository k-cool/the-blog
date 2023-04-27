'use client';

import { PostList } from '@/types/post.type';
import PostCard from './PostCard';
import { useRouter } from 'next/navigation';

interface PostVScrollProps {
	data: PostList;
	title?: string;
}

export default function PostVScroll({ title, data }: PostVScrollProps) {
	const router = useRouter();

	const goToPost = (id: string | number) => {
		router.push(`/posts/${id}`);
	};

	return (
		<section>
			{title && <h2 className="text-2xl my-2">{title}</h2>}
			<ul className="flex gap-3 h-fit pb-1 overflow-x-auto scrollbar-thin  scrollbar-track-slate-700 scrollbar-thumb-purple-300 scrollbar-thumb-rounded-md">
				{data.map(item => (
					<li key={item.id} className="min-w-[300px]" onClick={() => goToPost(item.id)}>
						<PostCard postData={item} />
					</li>
				))}
			</ul>
		</section>
	);
}
