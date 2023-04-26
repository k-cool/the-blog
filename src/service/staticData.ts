import path from "path";
import { promises as fs } from "fs";

export async function getJSONData(fileName: string) {
  const filePath = path.join(
    process.cwd(),
    "data",
    fileName.endsWith(".json") ? fileName : `${fileName}.json`
  );
  const data = await fs.readFile(filePath, "utf-8");
  return JSON.parse(data);
}

export async function getPosts() {
  const posts = await fs.readFile("data/posts.json", "utf-8");
  return JSON.parse(posts);
}

export async function getPost(id: string) {
  const posts = await getPosts();
  return posts.find((post: any) => post.id === id);
}
