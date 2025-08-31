/* eslint-disable @next/next/no-img-element */
import React from "react";

const Background = () => {
  return (
    <div className="w-full lg:h-[500px] overflow-hidden relative">
      <div className="z-30  h-full lg:w-[50%] lg:flex lg:flex-col absolute text-white top-0 justify-end lg:pl-56 pb-24 pl-10">
        <div>
          <p className="relative text-start lg:text-5xl font-semibold mt-8 bg-gradient-to-b from-zinc-300  to-white bg-clip-text text-transparent">
            Start Your
            <br /> 7-day free trial
          </p>
        </div>
        <div className="lg:flex lg:w-[330px] justify-between mt-10">
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
      <div className="z-30  h-full lg:w-[50%] lg:flex lg:flex-col absolute text-white top-0 right-0 justify-end  pb-24">
        <div className=" lg:w-[400px] mx-auto lg:flex items-center justify-start">
          <img src="/CTA Icon.svg" alt="CTA Icon" className="pl-10 pb-8" />
        </div>
        <div className=" lg:w-[400px] mx-auto lg:flex lg:items-center lg:justify-center">
          <div className=" flex items-center ]">
            {/* <PrimaryButton label="Get Started" /> */}
            <button className="text-black bg-teal-300 rounded-full lg:px-2 px-2 lg:py-3 py-1 lg:text-sm text-[15px] lg:w-32 mx-auto  relative cursor-pointer">
              Get Started
            </button>
          </div>
          <div className="lg:flex  lg:ml-8 ml-10">
            <div className="lg:text-[12px] text-[10px] text-zinc-400">
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
