import path from 'path';
import { promises as fs } from 'fs';
import type { PostList } from '@/types/post.type';

export async function getJSONData(fileName: string) {
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
}

export async function getPostMetaData(id: string) {
	const filePath = path.join(process.cwd(), 'data/posts.json');
	try {
		const data = (await fs.readFile(filePath, 'utf-8').then(JSON.parse)) as PostList;
		return data.find(post => post.id == id);
	} catch (err) {
		console.error(err);
	}
}

export async function getPostMD(id: string) {
	const filePath = path.join(process.cwd(), 'data', 'posts', `${id}.md`);

	try {
		const data = await fs.readFile(filePath, 'utf-8');
		return data;
	} catch (err) {
		return null;
	}
}
