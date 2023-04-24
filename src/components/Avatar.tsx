import Image from "next/image";

import profileImg from "../../public/Images/profile_image.png";

interface AvatarProps {
  src: string;
}

export default function Avatar() {
  return (
    <div className="w-[250px] h-[250px] rounded-full overflow-hidden">
      <Image src={profileImg} alt="profile image" width={250} height={250} />
    </div>
  );
}
