import VPO from "../UI/Verve_Product_Overview/VPO";

const Header = () => {
  return (
    <div className="lg:flex justify-between">
      <div className="flex flex-col justify-start">
        <div className="flex justify-start  lg:ml-[-120px]">
          <VPO />
        </div>
        <p className="relative  text-5xl font-semibold lg:mt-8 mt-8 bg-gradient-to-b from-zinc-300  to-white bg-clip-text text-transparent">
          Blogs & Articles
        </p>
      </div>
      <div>
        <p className="text-zinc-200 text-start mt-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam <br />{" "}
          utlorem quis lectus molestie.
        </p>
      </div>
    </div>
  );
};

export default Header;
