/* eslint-disable @next/next/no-img-element */
import React from "react";

const TopNavbarLinks = ["About", "Integrations", "Price", "Blogs"];
const TopNavBar = () => {
  return (
    <div className="text-white">
      <div
        style={{
          background: `radial-gradient(circle at 50% -40%, rgba(18, 139, 135, 0.68) 0%, transparent 70%)`,
        }}
        className="h-[700px] w-full absolute"
      >
        <div className="flex h-full w-full justify-center  relative">
          <div className="h-full border-r-[0.75px] w-80 border-green-100/20 bg-teal-700/5  "></div>
          <div className="h-full border-x border-[0.75px] w-80 border-green-100/20 bg-teal-700/5 ml-8 "></div>
          <div className="h-full border-x border-[0.75px] w-80 border-green-100/20 bg-teal-700/5 ml-8"></div>
          <div className="h-full border-l-[0.75px] w-80 border-green-100/20 bg-teal-700/5 ml-8 "></div>
        </div>
      </div>
      <div className="flex items-center h-20 relative">
        <img src="/Logo.svg" alt="Main Logo" className="ml-52" />
        <div className="flex ml-[20%]">
          {TopNavbarLinks.map((item, i) => {
            return (
              <>
                <ul
                  key={i}
                  className="hover:border-[0.75px] hover:border-zinc-50/20 text-md py-2 px-4 rounded-full mx-2 border-[0.75px] border-transparent cursor-pointer ]"
                >
                  <p>{item}</p>
                </ul>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TopNavBar;
