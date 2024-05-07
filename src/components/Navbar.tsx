import Image from "next/image";
import React from "react";
import appLogo from "../../public/logo.png";
import { CiSearch } from "react-icons/ci";
import { FaUserCircle } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { IoNotificationsOutline } from "react-icons/io5";
import { AiOutlineMessage } from "react-icons/ai";
import { PiSunLight } from "react-icons/pi";
import userLogo from "../../public/user-logo.png";

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 w-screen h-20 bg-[#ffffff] drop-shadow-lg z-20">
      <div className="flex items-center px-2 py-3.5 justify-between">
        <div className="flex items-center justify-start gap-10">
          <div className="relative w-44 h-12">
            <Image src={appLogo} alt="#logo" fill />
          </div>
          <div className="bg-[#ffffff] drop-shadow-lg p-2 flex items-center justify-between rounded-md">
            <input
              type="text"
              placeholder="Search"
              className="focus:outline-none"
            />
            <CiSearch className="w-6 h-6" color="#6e6e6e" />
          </div>
        </div>
        <div className="flex items-center gap-16 pr-8">
          <PiSunLight className="w-5 h-5" />
          <AiOutlineMessage className="w-5 h-5" />
          <IoNotificationsOutline className="w-5 h-5" />
          <IoSettingsOutline className="w-5 h-5" />
          <div>
            <Image src={userLogo} alt="#userLogo" width={30} height={30} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
