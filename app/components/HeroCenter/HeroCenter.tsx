import PrimaryButton from "../UI/Button/PrimaryButton";
import HeroHeading from "../UI/HeroHeading/HeroHeading";
import VPO from "../UI/Verve_Product_Overview/VPO";
import HeroImage from "./HeroImage";

const HeroCenter = () => {
  return (
    <div className="w-[80%]  mt-24 border-white mx-auto p-2 flex flex-col justify-center">
      <VPO />
      <HeroHeading />
      <PrimaryButton label="Get started for free" />
      <HeroImage />
    </div>
  );
};

export default HeroCenter;
