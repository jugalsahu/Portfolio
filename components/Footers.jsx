import React from 'react';
import Image from 'next/image';

const Footers = () => {
  return (
    <div className="bg-blue-950 w-full px-8 md:px-[8%] pt-12 pb-5 flex flex-col items-center gap-y-8">
      {/* Logo Section */}
      <div>
        <Image
          src="/logo-primary.png"
          alt="Logo"
          width={40}
          height={40}
          className="w-16 h-16 md:w-20 md:h-20"
        />
      </div>

      {/* Navigation Links */}
      <div className="text-white">
        <ul className="flex flex-col md:flex-row gap-4 md:gap-12 text-lg text-center">
          <li className="hover:underline cursor-pointer">Home</li>
          <li className="hover:underline cursor-pointer">Portfolio</li>
          <li className="hover:underline cursor-pointer">Resume</li>
          <li className="hover:underline cursor-pointer">Contact</li>
        </ul>
      </div>

      {/* Copyright Section */}
      <div>
        <h1 className="text-blue-400 text-center text-sm md:text-base">
          © 2024 All Rights Reserved by Jugal Kishore Sahu
        </h1>
      </div>
    </div>
  );
};

export default Footers;
