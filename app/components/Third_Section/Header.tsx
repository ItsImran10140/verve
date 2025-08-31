"use client";
import { useRef } from "react";
import VPO from "../UI/Verve_Product_Overview/VPO";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Header = () => {
  const headerTextRef = useRef(null);

  useGSAP(() => {
    gsap.to(headerTextRef.current, {
      y: -40,
      duration: 1.5,
      opacity: 1,
      scrollTrigger: {
        trigger: headerTextRef.current,
        // markers: true,
        start: "top 80%",
      },
    });
  });

  return (
    <div ref={headerTextRef} className="mt-56 opacity-0">
      <div className="lg:w-[80%] lg:mx-auto lg:ml-[-22%]">
        <VPO />
      </div>
      <p className="relative lg:text-start text-center lg:text-6xl text-4xl lg:ml-40 font-semibold mt-8 bg-gradient-to-b from-zinc-300  to-white bg-clip-text text-transparent">
        Build a solution that wins you
        <br /> more customers.
      </p>
    </div>
  );
};

export default Header;
