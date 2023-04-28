import Image from 'next/image';

import { intl } from '@/util/intl';
import type { IPost } from '@/types/post.type';

interface PostCardProps {
	postData: IPost;
}

export default function PostCard({ postData }: PostCardProps) {
	return (
		<div className="relative w-full h-[300px] bg-themeBlack rounded-lg shadow-md overflow-hidden cursor-pointer">
			<div className="w-full h-[150px] overflow-hidden">
				<div className="w-full h-[150px] relative hover:scale-110 duration-300">
					<Image
						src={postData.thumb}
						alt={postData.title}
						fill
						sizes="(max-width: 640px) 100vw, (max-width: 1200px) 50vw, 33vw" // 사이즈를 정해주면 뷰포트에 맞는 필요한 사이즈의 이미지를 불러온다.
						style={{ objectFit: 'cover' }}
					/>
				</div>
			</div>
			<div className="py-2 px-4">
				<div className="flex flex-col justify-between items-center">
					<span className="w-full text-lg truncate">{postData.title}</span>
					<span className="text-xs opacity-50">
						{intl.formatToParts(new Date(postData.createdAt)).map((el, idx, arr) => {
							if (idx - 1 > 0 && arr[idx - 1].type === 'day') return ' ';
							if (el.value === '. ') return '-';
							else return el.value;
						})}
					</span>
				</div>
				<p className="w-full my-2 line-clamp-2 ">{postData.description}</p>
				<div className="absolute bottom-4 w-fit px-[6px] bg-contrast rounded-sm text-sm ">
					{postData.category}
				</div>
			</div>
		</div>
	);
}
