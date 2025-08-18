import VPO from "../../UI/Verve_Product_Overview/VPO";

const Header = () => {
  return (
    <div>
      <div className="flex  w-[80%] mx-auto justify-between mb-8 mt-64">
        <div className="flex flex-col">
          <div className=" flex justify-start">
            <VPO />
          </div>
          <p className="relative text-start text-5xl font-semibold mt-8 bg-gradient-to-b from-zinc-300  to-white bg-clip-text text-transparent">
            Discover a simple <br /> notebook solution today.
          </p>
        </div>
        <div className=" flex flex-col justify-end">
          <p className="text-zinc-200 text-start mt-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam{" "}
            <br /> utlorem quis lectus molestie.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
