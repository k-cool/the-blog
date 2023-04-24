"use client";

import { useRouter } from "next/navigation";
import Avatar from "./Avatar";
import Button from "./Button";

export default function ProfileCard() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/contact");
  };

  return (
    <div className="flex flex-col items-center gap-1 py-8">
      <Avatar />
      <span className="text-3xl">Purple Space</span>
      <span className="text-lg">Javascript Engineer</span>
      <span className="mb-4">가치를 만들어 내는데 집중합니다.</span>
      <Button onClick={handleClick}>Contact Me</Button>
    </div>
  );
}
