/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import VPO from "../UI/Verve_Product_Overview/VPO";
import AccordionItem from "./DropDownMenu";
import { useState } from "react";

/* eslint-disable @next/next/no-img-element */
const BackGround = () => {
  const [openItems, setOpenItems] = useState(new Set());

  const toggleItem = (index: any) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index);
    } else {
      newOpenItems.add(index);
    }
    setOpenItems(newOpenItems);
  };

  const faqItems = [
    {
      title: "Are there any additional costs or hidden fees?",
      content:
        "No, there are no hidden fees. All costs are transparently displayed during checkout. Our pricing includes all standard features, and any premium add-ons are clearly marked with their respective prices.",
    },
    {
      title: "What are the highlights of your product?",
      content:
        "Our product offers cutting-edge technology with user-friendly design, 24/7 customer support, seamless integration capabilities, robust security features, and scalable solutions that grow with your business needs.",
    },
    {
      title: "Where can I buy your product or how can I place an order?",
      content:
        "You can purchase our product directly through our website, authorized retailers, or by contacting our sales team. Simply click the 'Buy Now' button on our homepage or call our sales hotline for personalized assistance.",
    },
    {
      title: "What is your product's return or exchange policy?",
      content:
        "We offer a 30-day money-back guarantee on all purchases. If you're not completely satisfied, you can return the product in its original condition for a full refund. Exchanges are processed within 2-3 business days.",
    },
  ];

  return (
    <div className="h-full w-full mt-52 overflow-hidden flex relative">
      {/* Pattern - positioned absolutely to fill container, lower z-index */}
      <img
        src="/FAQ Pattern 01.svg"
        alt="FAQ Background Pattern"
        className="absolute inset-0 h-full w-full object-cover z-10 opacity-10"
      />
      {/* Light - positioned absolutely on top, higher z-index */}
      <div className="absolute top-0 z-20">
        <img src="/FAQ Light 01.svg" alt="FAQ Light 01" />
      </div>
      <div className="h-full text-white w-[60%]">
        <div className="flex justify-start ml-20 mt-32">
          <VPO />
        </div>
        <p className="relative text-center text-5xl font-semibold mt-8 bg-gradient-to-b from-zinc-300  to-white bg-clip-text text-transparent">
          Frequently Asked Questions
        </p>
        <div className="ml-20">
          <p className="text-zinc-200 text-start mt-4">
            For any other question reach out to our team.
          </p>
        </div>
        <div className="w-[75%]">
          {faqItems.map((item, index) => (
            <AccordionItem
              key={index}
              title={item.title}
              content={item.content}
              isOpen={openItems.has(index)}
              onToggle={() => toggleItem(index)}
            />
          ))}
        </div>
      </div>
      <div className="h-full text-white w-[40%] flex items-center mt-32">
        <img src="/FAQ Image.svg" alt=" Box Image" className="object-fill " />
      </div>
    </div>
  );
};
export default BackGround;
