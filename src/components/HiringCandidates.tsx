import Image from "next/image";
import React from "react";

interface HiringCandidatesProps {
  userImage: string;
}

const HiringCandidates: React.FC<HiringCandidatesProps> = ({ userImage }) => {
  return (
    <div className="flex w-full items-center justify-between">
      <div className="relative w-14 h-14">
        <Image src={userImage} className="rounded-full object-cover object-top" fill alt="#activity1" />
      </div>
      <div className="flex justify-center flex-col gap-1 align-baseline">
        <h2 className="text-xs">John Doe</h2>
        <p className="text-xs">Senior Python Develpper</p>
        <p className="text-xs">Hired by: Stella</p>
      </div>
      <div>
        <button className="text-sm border-[#0a66c2] text-[#0a66c2] p-2 rounded-md">
          Details
        </button>
      </div>
    </div>
  );
};

export default HiringCandidates;
