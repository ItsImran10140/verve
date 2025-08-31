"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

/* eslint-disable @next/next/no-img-element */
const VPO = () => {
  useGSAP(() => {
    gsap.to(".heroButtonAnimation", {
      opacity: 1,
      y: 20,
      duration: 2,
      delay: 1,
    });
  });

  return (
    <div className="relative  lg:w-[300px] mx-auto h-10 flex justify-center text-white heroButtonAnimation opacity-0 ">
      <div className="flex items-center space-x-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm  text-zinc-300 hover:bg-white/20 hover:text-white transition-all duration-300 inset-shadow-sm inset-shadow-zinc-100/30">
        <img src="/Badge 01.svg" alt="Hero Stars" />
        <p className="ml-2 text-sm">Verve Product OverView</p>
      </div>
    </div>
  );
};

export default VPO;
