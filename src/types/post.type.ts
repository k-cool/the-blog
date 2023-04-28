export interface IPost {
	id: string | number;
	title: string;
	description: string;
	thumb: string;
	path: string;
	category: string;
	createdAt: string;
	updatedAt: string;
}

export type PostList = IPost[];

export interface IPostNavigatorData {
	prev: IPost | null;
	target: IPost;
	next: IPost | null;
}
