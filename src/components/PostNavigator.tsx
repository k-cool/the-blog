'use client';

import Link from 'next/link';
import Image from 'next/image';

import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import type { IPostNavigatorData } from '@/types/post.type';
import { useState } from 'react';

interface PostNavigatorProps {
	data: IPostNavigatorData;
	title?: string;
}

export default function PostNavigator({
	data: { prev, next },
	title,
}: PostNavigatorProps) {
	const [isLeftIn, setIsLeftIn] = useState(false);
	const [isRightIn, setIsRightIn] = useState(false);

	return (
		<>
			<p>{title}</p>
			<div className="relative w-full h-[150px] flex overflow-hidden rounded-xl">
				{prev ? (
					<Link
						href={`/posts/${prev.id}`}
						className="relative flex-1 w-auto h-[150px] overflow-hidden"
						onMouseEnter={() => setIsLeftIn(() => true)}
						onMouseLeave={() => setIsLeftIn(() => false)}
					>
						<div
							className={`relative w-full h-full brightness-[.5] duration-300 ${
								isLeftIn ? 'scale-110 blur-sm' : ''
							}`}
						>
							<Image
								src={prev.thumb}
								alt={prev.title}
								fill
								sizes="(max-width: 640px) 100vw, (max-width: 1200px) 50vw, 33vw"
								style={{ objectFit: 'cover' }}
							/>
						</div>
						<p
							className={`absolute w-full top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-10 flex flex-col items-center ${
								isLeftIn ? 'text-primary' : ''
							}`}
						>
							<span className="lg:hidden text-sm">이전 포스팅</span>
							<span className="w-[60%] text-xl sm:text-2xl text-center truncate">
								{prev.title}
							</span>
							<span className="hidden md:block w-[50%] text-center truncate">
								{prev.description}
							</span>
						</p>
						<FaArrowLeft
							size={30}
							className={`hidden lg:block absolute top-1/2 left-8 z-10 -translate-y-1/2 hover:opacity-50 ${
								isLeftIn ? 'scale-110 fill-primary' : ''
							}`}
						/>
					</Link>
				) : (
					<div />
				)}
				{next ? (
					<Link
						href={`/posts/${next.id}`}
						className="relative flex-1 w-auto h-[150px] overflow-hidden"
						onMouseEnter={() => setIsRightIn(() => true)}
						onMouseLeave={() => setIsRightIn(() => false)}
					>
						<div
							className={`relative w-full h-full brightness-[.5] duration-300 ${
								isRightIn ? 'scale-110 blur-sm' : ''
							}`}
						>
							<Image
								src={next.thumb}
								alt={next.title}
								fill
								sizes="(max-width: 640px) 100vw, (max-width: 1200px) 50vw, 33vw"
								style={{ objectFit: 'cover' }}
							/>
						</div>
						<p
							className={`absolute w-full top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-10 flex flex-col items-center ${
								isRightIn ? 'text-primary' : ''
							}`}
						>
							<span className="lg:hidden text-sm">다음 포스팅</span>
							<span className="w-[60%] text-xl sm:text-2xl text-center truncate">
								{next.title}
							</span>
							<span className="hidden md:block w-[50%] text-center truncate">
								{next.description}
							</span>
						</p>
						<FaArrowRight
							size={30}
							className={`hidden lg:block absolute top-1/2 right-8 z-10 -translate-y-1/2 hover:opacity-50 ${
								isRightIn ? 'scale-110 fill-primary' : ''
							}`}
						/>
					</Link>
				) : (
					<div />
				)}
			</div>
		</>
	);
}
