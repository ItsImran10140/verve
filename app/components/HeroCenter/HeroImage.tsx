/* eslint-disable @next/next/no-img-element */
"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

const HeroImage = () => {
  const heroImgAnimation = useRef(null);
  useGSAP(() => {
    gsap.to(heroImgAnimation.current, {
      y: -20,
      opacity: 1,
      duration: 2,
      delay: 4,
      scrollTrigger: {
        trigger: heroImgAnimation.current,
        markers: true,
      },
    });
  });
  return (
    <div>
      <div
        ref={heroImgAnimation}
        className="border-[0.75px] border-white/10 rounded-3xl mt-16  relative bg-black heroImgAnimation opacity-0"
      >
        <img
          src="/Dashboard.png"
          alt="Dashbaord image"
          className="rounded-3xl"
        />
      </div>
    </div>
  );
};

export default HeroImage;
