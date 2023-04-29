import CategorySelectorBar from '@/components/CategorySelectorBar';
import FilterablePostGrid from '@/components/FilterablePostGrid';
import PostGrid from '@/components/PostGrid';

import { getJSONData } from '@/service/staticData';
import { CategoryList } from '@/types/category.type';

export default async function PostsPage() {
	const categoryList = (await getJSONData('categoryList')) as CategoryList;
	const postList = await getJSONData('posts');

	return (
		<div className="p-4">
			<FilterablePostGrid categoryData={categoryList} postData={postList} />
			{/* <CategorySelectorBar data={categoryList} onClick={handleClickLi} /> */}
			{/* <PostGrid title="Postings" data={postList} /> */}
		</div>
	);
}
