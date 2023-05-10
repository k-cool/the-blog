import path from 'path';
import { promises as fs } from 'fs';
import type { IPostNavigatorData, PostList } from '@/types/post.type';
import { cache } from 'react';

export const getJSONData = cache(async (fileName: string) => {
	// console.log('getJSONData', fileName);
	const filePath = path.join(
		process.cwd(),
		'data',
		fileName.endsWith('.json') ? fileName : `${fileName}.json`
	);

	try {
		const data = await fs.readFile(filePath, 'utf-8');
		return JSON.parse(data);
	} catch (err) {
		return null;
	}
});

export const getPostMetaData = cache(async (id: string) => {
	// console.log('getPostMetaData', id);
	const filePath = path.join(process.cwd(), 'data/posts.json');

	try {
		const data = (await fs.readFile(filePath, 'utf-8').then(JSON.parse)) as PostList;
		const index = data.findIndex(post => post.id == id);
		const prev = index > 0 ? data[index - 1] : null;
		const target = data[index];
		const next = index < data.length - 1 ? data[index + 1] : null;

		return { prev, target, next };
	} catch (err) {
		console.error(err);
		throw err;
	}
});

export const getPostMD = cache(async (id: string) => {
	// console.log('getPostMD', id);
	const filePath = path.join(process.cwd(), 'data', 'posts', `${id}.md`);

	try {
		const data = await fs.readFile(filePath, 'utf-8');
		return data;
	} catch (err) {
		return null;
	}
});
