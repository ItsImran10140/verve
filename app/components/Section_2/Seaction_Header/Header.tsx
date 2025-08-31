"use client";
import { useRef } from "react";
import VPO from "../../UI/Verve_Product_Overview/VPO";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Header = () => {
  const headerTextRef = useRef(null);
  const headerTextDesRef = useRef(null);

  useGSAP(() => {
    gsap.to(headerTextRef.current, {
      y: -40,
      opacity: 1,
      delay: 0.5,
      duration: 2,
      scrollTrigger: {
        trigger: headerTextRef.current,
        // markers: true,
      },
    });
  });
  useGSAP(() => {
    gsap.to(headerTextDesRef.current, {
      y: -40,
      opacity: 1,
      delay: 0.5,
      duration: 2,
      scrollTrigger: {
        trigger: headerTextDesRef.current,
        // markers: true,
      },
    });
  });
  return (
    <div>
      <div className="flex  w-[80%] mx-auto justify-between mb-8 mt-64">
        <div ref={headerTextRef} className="flex flex-col mt-[40px] opacity-0">
          <div className=" flex justify-start">
            <VPO />
          </div>
          <p className="relative text-start text-5xl font-semibold mt-8 bg-gradient-to-b from-zinc-300  to-white bg-clip-text text-transparent">
            Discover a simple <br /> notebook solution today.
          </p>
        </div>
        <div
          ref={headerTextDesRef}
          className=" flex flex-col justify-end opacity-0"
        >
          <p className="text-zinc-200 text-start mt-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit.
            Nullam utlorem quis lectus molestie.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
