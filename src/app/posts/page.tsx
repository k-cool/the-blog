import PostGrid from '@/components/PostGrid';
import { getJSONData } from '@/service/staticData';

export default async function PostsPage() {
	const postList = await getJSONData('posts');

	return (
		<div className="p-4">
			{/* 카테고리 셀렉터 */}
			<PostGrid title="Postings" data={postList} />
		</div>
	);
}
