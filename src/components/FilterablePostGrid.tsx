'use client';

import type { Category, CategoryList } from '@/types/category.type';
import type { PostList } from '@/types/post.type';
import PostGrid from './PostGrid';
import { useState } from 'react';

interface FilterablePostGridProps {
	categoryData: CategoryList;
	postData: PostList;
}

export default function FilterablePostGrid({
	categoryData,
	postData,
}: FilterablePostGridProps) {
	const [selectedCategory, setSelectedCategory] = useState<Category>('All Posts');

	const handleClickLi = (name: Category) => {
		setSelectedCategory(name);
	};

	const posts =
		selectedCategory === 'All Posts'
			? postData
			: postData.filter(post => post.category === selectedCategory);

	return (
		<>
			<ul className="w-fit mt-8 mb-4 flex gap-4 ">
				{categoryData.map(category => (
					<li
						className={`text-2xl cursor-pointer ${
							category === selectedCategory
								? 'text-contrast border-b-4 border-contrast font-bold'
								: ''
						}`}
						key={category}
						onClick={() => handleClickLi(category)}
					>
						{category}
					</li>
				))}
			</ul>
			<PostGrid data={posts} />
		</>
	);
}
