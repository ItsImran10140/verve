"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const HeroHeading = () => {
  useGSAP(() => {
    gsap.to(".heroTextAnimation", {
      opacity: 1,
      y: 20,
      duration: 2,
      delay: 2,
    });
  });

  return (
    <>
      <p className="relative text-center text-6xl font-semibold mt-8 bg-gradient-to-b from-zinc-300  to-white bg-clip-text text-transparent heroTextAnimation opacity-0">
        Deliver an Enterprise <br /> Quality Project in Minutes
      </p>
      <p className="text-zinc-200 text-center mt-10 heroTextAnimation opacity-0">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam <br />{" "}
        utlorem quis lectus molestie.
      </p>
    </>
  );
};

export default HeroHeading;
