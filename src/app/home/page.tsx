import Grid from "@/components/Grid";
import ProfileCard from "@/components/ProfileCard";
import VScroll from "@/components/VScroll";
import { getJSONData } from "@/service/staticData";

export default async function HomePage() {
  const posts = await getJSONData("posts");

  return (
    <>
      <ProfileCard />
      <div className="p-4">
        <VScroll title="Featured Posts" data={posts} />
        <Grid title="Recommendation" data={posts.slice(0, 6)} />
      </div>
    </>
  );
}
