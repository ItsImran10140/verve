/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Plus, X } from "lucide-react";

const AccordionItem = ({ title, content, isOpen, onToggle }: any) => {
  return (
    <div className="relative z-20">
      <div className="border-b border-zinc-200/20 overflow-hidden w-[80%] mx-auto">
        <button
          onClick={onToggle}
          className="w-full flex items-center justify-between p-6 text-left transition-colors duration-200 focus:outline-none"
        >
          <div className="flex items-center space-x-4">
            <div className="relative w-6 h-6 flex items-center justify-center">
              <Plus
                className={`absolute w-5 h-5 text-zinc-300 transition-all duration-300 transform ${
                  isOpen
                    ? "rotate-90 opacity-0 scale-75"
                    : "rotate-0 opacity-100 scale-100"
                }`}
              />
              <X
                className={`absolute w-5 h-5 text-zinc-300 transition-all duration-300 transform ${
                  isOpen
                    ? "rotate-0 opacity-100 scale-100"
                    : "rotate-90 opacity-0 scale-75"
                }`}
              />
            </div>
            <span className="text-sm font-medium text-zinc-300">{title}</span>
          </div>
        </button>

        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-6 pb-6 pl-16 text-zinc-400 leading-relaxed text-sm">
            {content}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccordionItem;
