import VPO from "../UI/Verve_Product_Overview/VPO";

const Header = () => {
  return (
    <div className="mt-56">
      <VPO />
      <p className="relative text-center text-6xl font-semibold mt-8 bg-gradient-to-b from-zinc-300  to-white bg-clip-text text-transparent">
        Build a solution that wins you
        <br /> more customers.
      </p>
    </div>
  );
};

export default Header;
