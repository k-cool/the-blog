import type { CategoryList } from '@/types/category.type';
import { MouseEventHandler, useState } from 'react';

interface CategorySelectorBarProps {
	data: CategoryList;
	onClick: (name: string) => void;
}

export default function CategorySelectorBar({ data, onClick }: CategorySelectorBarProps) {
	return <>{/* <h3 className="text-lg border-b">Category</h3> */}</>;
}
