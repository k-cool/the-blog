export interface IPost {
  id: number;
  title: string;
  description: string;
  thumb: string;
  path: string;
  createdAt: string;
  updatedAt: string;
}

export type PostList = IPost[];
