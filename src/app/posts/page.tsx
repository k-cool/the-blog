import VScroll from '@/components/PostVScroll';
import { getJSONData } from '@/service/staticData';

export default async function PostsPage() {
	const posts = await getJSONData('posts');
	return (
		<div className="p-4">
			<h1>post</h1>
		</div>
	);
}
