/* eslint-disable @next/next/no-img-element */
"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const CardDetails = [
  {
    image: "/Benefit Image 01.svg",
    icons: "/Benefit 01.svg",
    number: "01",
    titleFirst: "Express ideas like a",
    titleSecond: "human, not a machine.",
    descriptionFirst: "Lorem ipsum dolor sit amet, consectetur",
    descriptionSecond: "adipiscing elit Nullam utlorem quis lectus molestie.",
    reverse: false, // Normal layout: text left, image right
  },
  {
    image: "/Benefit Image 02.svg",
    icons: "/Benefit 02.svg",
    number: "02",
    titleFirst: "Build your",
    titleSecond: "model block by block.",
    descriptionFirst: "Lorem ipsum dolor sit amet, consectetur",
    descriptionSecond: "adipiscing elit Nullam utlorem quis lectus molestie.",
    reverse: true, // Reversed layout: image left, text right
  },
  {
    image: "/Benefit Image 03.svg",
    icons: "/Benefit 03.svg",
    number: "03",
    titleFirst: "Express ideas like a",
    titleSecond: "human, not a machine.",
    descriptionFirst: "Lorem ipsum dolor sit amet, consectetur",
    descriptionSecond: "adipiscing elit Nullam utlorem quis lectus molestie.",
    reverse: false, // Reversed layout: image left, text right
  },
];

const Cards = () => {
  // const cardAnimationRef = useRef(null);
  useGSAP(() => {
    gsap.to(".cardAnimationRef", {
      y: -30,
      opacity: 1,
      // delay: 1,
      duration: 1.5,
      stagger: 2,
      scrollTrigger: {
        trigger: ".cardAnimationRef",
        // trigger: cardAnimationRef.current,
        // markers: true,
        start: "top 90%",
      },
    });
  });
  return (
    <div
      // ref={cardAnimationRef}
      className="lg:w-[80%]  lg:mx-auto mx-4 lg:mt-[40px] "
    >
      {CardDetails.map((data, i) => (
        <div
          key={i}
          className={`cardAnimationRef opacity-0 border border-white/10 rounded-3xl lg:flex justify-between mb-8 ${
            data.reverse ? "flex-row-reverse" : ""
          }`}
        >
          <div className="p-15 lg:w-[50%] flex flex-col justify-between">
            <div className="flex justify-between">
              <img src={data.icons} alt="Icon" />
              <p className="text-4xl text-zinc-800 font-semibold flex items-center">
                {data.number}
              </p>
            </div>
            <div>
              <p className="relative text-start text-3xl font-semibold mt-8 bg-gradient-to-b from-zinc-300 to-white bg-clip-text text-transparent">
                {data.titleFirst} <br /> {data.titleSecond}
              </p>
              <p className="text-zinc-200 text-start mt-4 text-sm">
                {data.descriptionFirst} <br /> {data.descriptionSecond}
              </p>
            </div>
          </div>
          <div className="border border-white/10 rounded-3xl lg:w-[50%] m-3">
            <img src={data.image} alt="Benefit Image" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
