'use client';

import PostCard from './PostCard';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import type { PostList } from '@/types/post.type';
import { useRouter } from 'next/navigation';

const responsive = {
	desktop: {
		breakpoint: { max: 3000, min: 1024 },
		items: 3,
		slidesToSlide: 3, // optional, default to 1.
		partialVisibilityGutter: 100,
	},
	tablet: {
		breakpoint: { max: 1024, min: 640 },
		items: 2,
		slidesToSlide: 2, // optional, default to 1.
		partialVisibilityGutter: 70,
	},
	mobile: {
		breakpoint: { max: 640, min: 0 },
		items: 1,
		slidesToSlide: 1, // optional, default to 1.
		partialVisibilityGutter: 50,
	},
};

interface PostCarouselProps {
	data: PostList;
	title?: string;
}

export default function PostCarousel({ data, title }: PostCarouselProps) {
	const router = useRouter();

	const goToPost = (id: string | number) => {
		router.push(`/posts/${id}`);
	};

	return (
		<>
			{title && <h2 className="text-2xl my-2">{title}</h2>}
			<Carousel
				centerMode
				// partialVisbile
				swipeable={false}
				draggable
				responsive={responsive}
				ssr={true} // means to render carousel on server-side.
				infinite={true}
				autoPlay={true} // 모바일 일경우 false 하는 경우도 있다.
				autoPlaySpeed={5000}
				shouldResetAutoplay
				keyBoardControl={true}
				customTransition="all 500ms ease"
				transitionDuration={500}
				dotListClass="custom-dot-list-style"
			>
				{data.map(item => (
					<div
						key={item.id}
						className="mr-[15px] hover:shadow-xl"
						onClick={() => goToPost(item.id)}
					>
						<PostCard postData={item} />
					</div>
				))}
			</Carousel>
		</>
	);
}
