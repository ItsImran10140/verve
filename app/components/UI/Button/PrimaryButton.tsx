"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

interface ButtonType {
  label: string;
}
const PrimaryButton = ({ label }: ButtonType) => {
  useGSAP(() => {
    gsap.to(".heroPrimaryBtnAnimation", {
      opacity: 1,
      y: 20,
      duration: 2,
      delay: 3,
    });
  });

  return (
    <button className="text-black bg-teal-200 rounded-full px-3 py-3 text-sm w-44 mx-auto mt-8 relative cursor-pointer heroPrimaryBtnAnimation opacity-0">
      {label}
    </button>
  );
};

export default PrimaryButton;
