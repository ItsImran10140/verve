/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */
"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";

const TopNavbarLinks = ["About", "Integrations", "Price", "Blogs"];

const TopNavBar = () => {
  // useGSAP(() => {
  //   gsap.to(".logoImg", {
  //     y: 40,
  //     duration: 2,
  //     delay: 2,
  //   });

  // });

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.to(".bgGradientAnimation", {
      y: 200,
      duration: 2,
    });

    tl.to(".logoImg", {
      y: 40,
      duration: 0.5,
      // delay: 2,
    });
    tl.to(".navLink", {
      y: 40,
      duration: 0.5,
      // delay: 2,
      stagger: 1,
    });
    tl.to(".bgColumnAnimation", {
      opacity: 1,
      duration: 2,
      // delay: 2,
    });
  });

  return (
    <div className="text-white">
      <div
        style={{
          background: `radial-gradient(circle at 50% -40%, rgba(18, 139, 135, 0.68) 0%, transparent 70%)`,
        }}
        className="h-[700px] w-full absolute bgGradientAnimation mt-[-200px]"
      >
        <div className="flex h-full w-full justify-center  relative bgColumnAnimation opacity-0">
          <div className="h-full border-r-[0.75px] w-80 border-green-100/20 bg-teal-700/5  "></div>
          <div className="h-full border-x border-[0.75px] w-80 border-green-100/20 bg-teal-700/5 ml-8 "></div>
          <div className="h-full border-x border-[0.75px] w-80 border-green-100/20 bg-teal-700/5 ml-8"></div>
          <div className="h-full border-l-[0.75px] w-80 border-green-100/20 bg-teal-700/5 ml-8 "></div>
        </div>
      </div>
      <div className="flex items-center h-20 relative">
        <img
          src="/Logo.svg"
          alt="Main Logo"
          className="ml-52 logoImg mt-[-100px]"
        />
        <div className="flex ml-[20%] mt-[-100px]">
          {TopNavbarLinks.map((item, i) => {
            return (
              <div key={i}>
                <ul
                  key={i}
                  className="hover:border-[0.75px] hover:border-zinc-50/20 text-md py-2 px-4 rounded-full mx-2 border-[0.75px] border-transparent cursor-pointer ] navLink"
                >
                  <p>{item}</p>
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TopNavBar;
