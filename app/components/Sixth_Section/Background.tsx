/* eslint-disable @next/next/no-img-element */
import React from "react";

const Background = () => {
  return (
    <div className="w-full h-[500px] overflow-hidden relative">
      <div className="z-30  h-full w-[50%] flex flex-col absolute text-white top-0 justify-end pl-56 pb-24">
        <div>
          <p className="relative text-start text-5xl font-semibold mt-8 bg-gradient-to-b from-zinc-300  to-white bg-clip-text text-transparent">
            Start Your
            <br /> 7-day free trial
          </p>
        </div>
        <div className="flex w-[330px] justify-between mt-10">
          <div className="flex">
            <span>
              <img src="/Checklist Icon.svg" alt="Icon" />
            </span>
            <span className="text-sm">Free 7-day trial</span>
          </div>
          <div className="flex">
            <span>
              <img src="/Checklist Icon.svg" alt="Icon" />
            </span>
            <span className="text-sm">No credit card required</span>
          </div>
        </div>
      </div>
      <div className="z-30  h-full w-[50%] flex flex-col absolute text-white top-0 right-0 justify-end  pb-24">
        <div className=" w-[400px] mx-auto flex items-center justify-start">
          <img src="/CTA Icon.svg" alt="CTA Icon" className="pl-10 pb-8" />
        </div>
        <div className=" w-[400px] mx-auto flex items-center justify-center">
          <div className=" flex items-center ]">
            {/* <PrimaryButton label="Get Started" /> */}
            <button className="text-black bg-teal-300 rounded-full px-2 py-3 text-sm w-32 mx-auto  relative cursor-pointer">
              Get Started
            </button>
          </div>
          <div className="flex  ml-8">
            <div className="text-[12px] text-zinc-400">
              <p>4.80/5</p>
              <p>From 300+ Customer Reviews</p>
            </div>
          </div>
        </div>
      </div>
      <img
        src="/Hero BG.svg"
        alt="Hero BG Light"
        className="transform scale-y-[-1]"
      />
    </div>
  );
};

export default Background;
