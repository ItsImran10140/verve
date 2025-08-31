import PrimaryButton from "../UI/Button/PrimaryButton";
import HeroHeading from "../UI/HeroHeading/HeroHeading";
import VPO from "../UI/Verve_Product_Overview/VPO";
import HeroImage from "./HeroImage";

const HeroCenter = () => {
  return (
    <div className="lg:w-[80%] w-full mt-24  mx-auto p-2 flex flex-col justify-center">
      <VPO />
      <HeroHeading />
      <PrimaryButton label="Get started for free" />
      <HeroImage />
    </div>
  );
};

export default HeroCenter;
