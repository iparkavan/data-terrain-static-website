import React, { CSSProperties } from "react";

interface WhiteCardProps {
  children: React.ReactNode;
  className?: string;
}

const WhiteCard: React.FC<WhiteCardProps> = ({ children, className }) => {
  return (
    <div className={`bg-[#ffffff] drop-shadow-lg rounded-md ${className}`}>
      {children}
    </div>
  );
};

export default WhiteCard;
