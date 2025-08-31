/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */
"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useState } from "react";

const TopNavbarLinks = ["About", "Integrations", "Price", "Blogs"];

const TopNavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.to(".bgGradientAnimation", {
      y: 200,
      duration: 2,
    });

    tl.to(".logoImg", {
      y: 40,
      duration: 0.5,
    });

    // Only animate desktop nav links
    tl.to(".navLink:not(.mobile-nav-link)", {
      y: 40,
      duration: 0.5,
      stagger: 0.1,
    });

    tl.to(".bgColumnAnimation", {
      opacity: 1,
      duration: 2,
    });
  });

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="text-white  lg:w-[100%] lg:mx-auto">
      <div
        style={{
          background: `radial-gradient(circle at 50% -40%, rgba(18, 139, 135, 0.68) 0%, transparent 70%)`,
        }}
        className="h-[700px] w-full absolute bgGradientAnimation mt-[-200px]"
      >
        <div className="flex h-full w-full justify-center relative bgColumnAnimation opacity-0">
          <div className="h-full border-r-[0.75px] lg:w-80 border-green-100/20 bg-teal-700/5 w-20"></div>
          <div className="h-full border-x border-[0.75px] lg:w-80 w-20 border-green-100/20 bg-teal-700/5 lg:ml-8"></div>
          <div className="h-full border-x border-[0.75px] lg:w-80 w-20 border-green-100/20 bg-teal-700/5 lg:ml-8"></div>
          <div className="h-full border-l-[0.75px] lg:w-80 w-20 border-green-100/20 bg-teal-700/5 lg:ml-8"></div>
        </div>
      </div>

      {/* Desktop and Mobile Header */}
      <div className="flex items-center justify-between h-20 relative px-4 lg:px-0">
        {/* Logo */}
        <img
          src="/Logo.svg"
          alt="Main Logo"
          className=" logoImg mt-[-100px] h-8 w-auto"
        />

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:ml-[20%] mt-[-100px]">
          {TopNavbarLinks.map((item, i) => (
            <div key={i}>
              <ul className="hover:border-[0.75px] hover:border-zinc-50/20 text-md py-2 px-4 rounded-full mx-2 border-[0.75px] border-transparent cursor-pointer navLink">
                <p>{item}</p>
              </ul>
            </div>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden lg:mt-[-100px] z-50 border border-zinc-50/20 relative"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <div className="w-6 h-6 flex flex-col justify-center items-center">
            <div
              className={`w-5 h-0.5 bg-zinc-50/20 transition-all duration-300 ${
                isMobileMenuOpen ? "rotate-45 translate-y-1" : ""
              }`}
            ></div>
            <div
              className={`w-5 h-0.5 bg-zinc-50/20 transition-all duration-300 mt-1 ${
                isMobileMenuOpen ? "opacity-0" : ""
              }`}
            ></div>
            <div
              className={`w-5 h-0.5 bg-zinc-50/20 transition-all duration-300 mt-1 ${
                isMobileMenuOpen ? "-rotate-45 -translate-y-1" : ""
              }`}
            ></div>
          </div>
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`lg:hidden absolute top-20 left-0 right-0 bg-teal-950 z-50 transition-all duration-300 ease-in-out overflow-hidden ${
          isMobileMenuOpen
            ? "max-h-96 opacity-100 border-t border-zinc-700/50"
            : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 py-4">
          {TopNavbarLinks.map((item, i) => (
            <div
              key={i}
              className={`mobile-nav-link transform transition-all duration-300 ${
                isMobileMenuOpen
                  ? "translate-y-0 opacity-100"
                  : "-translate-y-4 opacity-0"
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="hover:bg-zinc-700/30 active:bg-zinc-600/40 text-md py-3 px-4 rounded-lg my-1 border border-transparent cursor-pointer transition-all duration-200 hover:border-zinc-600/30">
                <p className="text-white">{item}</p>
              </div>
            </div>
          ))}

          {/* Optional: Add additional mobile menu items */}
          <div
            className={`mt-4 pt-4 border-t border-zinc-700/50 transform transition-all duration-300 ${
              isMobileMenuOpen
                ? "translate-y-0 opacity-100"
                : "-translate-y-4 opacity-0"
            }`}
            style={{ transitionDelay: `${TopNavbarLinks.length * 100}ms` }}
          >
            <button className="w-full bg-teal-600 hover:bg-teal-700 active:bg-teal-800 text-white py-2 px-4 rounded-lg transition-colors duration-200 font-medium">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNavBar;
