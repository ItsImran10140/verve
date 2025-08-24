/_ eslint-disable @next/next/no-img-element _/
import React from "react";

const Background = () => {
return (
<div className="w-full h-full overflow-hidden relative">
<div className="z-30 border border-white h-full w-[50%] absolute text-white top-0">
Imran
</div>
<img
        src="/Hero BG.svg"
        alt="Hero BG Light"
        className="transform scale-y-[-1]"
      />
</div>
);
};

export default Background;
