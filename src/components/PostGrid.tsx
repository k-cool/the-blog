'use client';

import { PostList } from '@/types/post.type';
import PostCard from './PostCard';
import { useRouter } from 'next/navigation';

interface PostGridProps {
	data: PostList;
	title?: string;
}

export default function PostGrid({ title, data }: PostGridProps) {
	const router = useRouter();

	const goToPost = (id: string | number) => {
		router.push(`/posts/${id}`);
	};

	return (
		<section>
			{title && <h2 className="text-2xl my-2">{title}</h2>}
			<ul className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  h-fit pb-1 overflow-x-auto scrollbar-thin  scrollbar-track-slate-700 scrollbar-thumb-purple-300 scrollbar-thumb-rounded-md">
				{data.map(item => (
					<li key={item.id} className="min-w-[230px]" onClick={() => goToPost(item.id)}>
						<PostCard postData={item} />
					</li>
				))}
			</ul>
		</section>
	);
}
