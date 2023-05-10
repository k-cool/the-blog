import PostGrid from '@/components/PostGrid';
import ProfileCard from '@/components/ProfileCard';
import { getJSONData } from '@/service/staticData';
import PostCarousel from '@/components/PostCarousel';

export default async function HomePage() {
	const posts = await getJSONData('posts');

	return (
		<>
			<ProfileCard />
			<div className="p-4">
				<PostCarousel title="You may like" data={posts} />
				{/* <PostVScroll title="Featured Posts" data={posts} /> */}
				<PostGrid title="Recommendation" data={posts.slice(0, 6)} />
			</div>
		</>
	);
}
