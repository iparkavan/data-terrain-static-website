import Image from "next/image";
import React from "react";

interface ActivityProps {
  userImage: string;
}

const Activity: React.FC<ActivityProps> = ({ userImage }) => {
  return (
    <div className="flex w-full items-center justify-start gap-4">
      <div className="relative">
        <Image src={userImage} width={55} height={55} alt="#activity1" />
      </div>
      <div className="flex justify-center flex-col gap-1 align-baseline">
        <h2 className="text-xs">
          John Doe
          <span className="text-[#0b74ad] text-xs"> [Python Developer]</span>
        </h2>
        <p className="text-xs">Interview with Stella</p>
        <p className="text-xs">15 mins ago</p>
      </div>
    </div>
  );
};

export default Activity;
