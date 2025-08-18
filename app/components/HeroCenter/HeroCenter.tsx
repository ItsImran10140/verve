import HeroHeading from "../UI/HeroHeading/HeroHeading";
import VPO from "../UI/Verve_Product_Overview/VPO";

const HeroCenter = () => {
  return (
    <div className="w-[70%] border mt-24 border-white mx-auto p-2">
      <VPO />
      <HeroHeading />
    </div>
  );
};

export default HeroCenter;
