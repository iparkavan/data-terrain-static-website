import React from "react";
import AssistantLady from "../../../public/AssistantLady.png";
import Image from "next/image";
import { IoDocumentTextOutline } from "react-icons/io5";

const AssessmentCard = () => {
  return (
    <div className="w-full h-[300px] bg-gradient-to-tr from-[#0A66C2] to-[#5994CE] drop-shadow-lg rounded-md ">
      <div className="flex">
        <div className="flex flex-col gap-7 p-12">
          <div className="w-24 h-24 bg-white flex items-center justify-center">
            <IoDocumentTextOutline className="w-20 h-20" color="#0a66c2" />
          </div>
          <div className="text-4xl font-bold text-white">0033</div>
          <span className="text-white">New Assessment's</span>
        </div>
        <div className="relative">
          <div className="relative w-24 h-[120px] left-8 top-6">
            <Image src={AssistantLady} alt="#assistantLady" fill />
          </div>
          <div className="relative w-48 h-[250px] left-24 bottom-[160px]">
            <Image src={AssistantLady} alt="#assistantLady" fill />
          </div>
        </div>
        <div className="fixed bottom-0 right-0 pr-8 pb-10">
          <button className="bg-[#ffffff] py-2.5 text-xs font-medium rounded-md px-4">
            VIEW DETAILS
          </button>
        </div>
      </div>
    </div>
  );
};

export default AssessmentCard;
