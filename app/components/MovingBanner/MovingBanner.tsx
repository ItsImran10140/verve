/* eslint-disable @next/next/no-img-element */
"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const MovingBanner = () => {
  const moveingBannerRef = useRef(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Sample cards with different colors
  const cards = [
    {
      id: 1,
      logo: "/Logo 01.svg",
    },
    {
      id: 2,
      logo: "/Logo 02.svg",
    },
    {
      id: 3,
      logo: "/Logo 03.svg",
    },
    {
      id: 4,
      logo: "/Logo 04.svg",
    },
    {
      id: 5,
      logo: "/Logo 05.svg",
    },
    {
      id: 6,
      logo: "/Logo 06.svg",
    },
  ];

  // Duplicate cards for seamless loop
  const duplicatedCards = [...cards, ...cards, ...cards];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    const cardWidth = 200; // Width of each card including margin
    const totalWidth = cards.length * cardWidth;
    let scrollPosition = cardWidth * cards.length; // Start from the second set

    // Set initial position
    scrollContainer.scrollLeft = scrollPosition;

    const scroll = () => {
      scrollPosition += 1; // Adjust speed here (higher = faster)

      // Reset position when we've scrolled through one complete set
      if (scrollPosition >= totalWidth * 2) {
        scrollPosition = totalWidth;
        if (scrollContainer) {
          scrollContainer.scrollLeft = scrollPosition;
        }
      } else {
        if (scrollContainer) {
          scrollContainer.scrollLeft = scrollPosition;
        }
      }

      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [cards.length]);

  useGSAP(() => {
    gsap.to(moveingBannerRef.current, {
      y: -10,
      opacity: 1,
      delay: 1,
      duration: 2,
      scrollTrigger: {
        trigger: moveingBannerRef.current,
        // markers: true,
      },
    });
  });

  return (
    <div ref={moveingBannerRef} className="opacity-0 mt-[10px]">
      <div className="mt-48 ">
        <p className="relative text-center text-3xl font-semibold mt-8 bg-gradient-to-b from-zinc-300  to-white bg-clip-text text-transparent ">
          The worlds best companies trust Verve.
        </p>
      </div>
      <div className="relative overflow-hidden w-[80%] mx-auto">
        {/* Gradient overlays for smooth edges */}
        <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

        {/* Scrolling container */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-hidden"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {duplicatedCards.map((card, index) => (
            <div
              key={`${card.id}-${index}`}
              className={`flex-shrink-0 w-44 h-32 rounded-xl shadow-lg flex items-center justify-center cursor-pointer`}
            >
              <img src={card.logo} alt="logos" />
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center text-center mb-20">
        <p className="text-sm text-zinc-200/60">
          Trusted by leading companies from around the globe.
        </p>
      </div>
    </div>
  );
};

export default MovingBanner;
