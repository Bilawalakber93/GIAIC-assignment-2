import React from "react";

export default function Card3 ({ title='default title', description='default description' }) {
    return (
      <div className="bg-[#23A6F0] text-white p-6 space-y-8 shadow-lg max-w-xs">
        <div className="flex  mb-4">
          <div className="w-16 h-20  rounded-lg bg-[#FFFFFF]"></div>
        </div>
        <h2 className="text-lg font-bold mb-4 relative">
          {title}
          <div className="w-14 h-0.5 bg-[#E74040] absolute "></div>
        </h2>
        <p className="text-sm text-white w-400" >{description}</p>
      </div>
    );
  };