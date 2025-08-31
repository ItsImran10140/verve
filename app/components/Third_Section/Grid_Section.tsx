/* eslint-disable react/jsx-key */
"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

/* eslint-disable @next/next/no-img-element */
const CardDetails = [
  {
    title: "Responsive Break Points",
    icon: "/Feature Icon 01.svg",
    descriptionFirst: "Lorem ipsum dolor sit amet, consectetur",
    descriptionSecond: "adipiscing elit commodo ornare.",
    footerDescription: "Vestibulum lobortis ligula vehicula, semper.",
  },
  {
    title: "Easy to Customize",
    icon: "/Feature Icon 02.svg",
    descriptionFirst: "Lorem ipsum dolor sit amet, consectetur",
    descriptionSecond: "adipiscing elit commodo ornare.",
    footerDescription: "Vestibulum lobortis ligula vehicula, semper.",
  },
  {
    title: "Framer CMS",
    icon: "/Feature Icon 03.svg",
    descriptionFirst: "Lorem ipsum dolor sit amet, consectetur",
    descriptionSecond: "adipiscing elit commodo ornare.",
    footerDescription: "Vestibulum lobortis ligula vehicula, semper.",
  },
  {
    title: "Structured Layers",
    icon: "/Feature Icon 05.svg",
    descriptionFirst: "Lorem ipsum dolor sit amet, consectetur",
    descriptionSecond: "adipiscing elit commodo ornare.",
    footerDescription: "Vestibulum lobortis ligula vehicula, semper.",
  },
  {
    title: "Text Effects",
    icon: "/Feature Icon 04.svg",
    descriptionFirst: "Lorem ipsum dolor sit amet, consectetur",
    descriptionSecond: "adipiscing elit commodo ornare.",
    footerDescription: "Vestibulum lobortis ligula vehicula, semper.",
  },
  {
    title: "Time Animations",
    icon: "/Feature Icon 06.svg",
    descriptionFirst: "Lorem ipsum dolor sit amet, consectetur",
    descriptionSecond: "adipiscing elit commodo ornare.",
    footerDescription: "Vestibulum lobortis ligula vehicula, semper.",
  },
];

const Grid_Section = () => {
  // const cardAnimationRef = useRef(null);

  useGSAP(() => {
    gsap.to(".cardAnimationRef", {
      y: -40,
      duration: 1.5,
      opacity: 1,
      delay: 2,
      stagger: 0.5,
      scrollTrigger: {
        trigger: ".cardAnimationRef",
        // trigger: cardAnimationRef.current,
        // markers: true,
        start: "top 50%",
      },
    });
  });

  return (
    <div>
      <div className="lg:grid gap-4 lg:grid-cols-3 text-white w-[80%] mx-auto mt-15 ">
        {CardDetails.map((data, i) => (
          <div
            // ref={cardAnimationRef}
            key={i}
            className="border-[0.75px] border-zinc-100/10 bg-zinc-100/4 m-2 rounded-3xl p-8 opacity-0 cardAnimationRef my-5"
          >
            <img src={data.icon} alt="Feature Icons" className="mb-8" />
            <p className="text-2xl mb-4 font-semibold">{data.title}</p>
            <p className="text-sm text-zinc-400">
              {data.descriptionFirst} <br /> {data.descriptionSecond}
            </p>
            <p className="text-sm mt-6 text-zinc-400">
              {data.footerDescription}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Grid_Section;
