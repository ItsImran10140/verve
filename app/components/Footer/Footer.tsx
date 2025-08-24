/* eslint-disable @next/next/no-img-element */
const Footer = () => {
  return (
    <div className=" flex flex-col">
      <div className="text-white  w-[70%] mx-auto flex justify-between">
        <div className="">
          <img className="mb-4 mt-24" src="/Logo.svg" alt="Logo" />
          <p className="text-sm mb-8">
            Lorem ipsum dolor sit amet, consectetur <br />
            adipiscing elit, curabitur maximus quam.
          </p>
          <div className="flex items-center mb-16 space-x-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm  text-zinc-300 hover:bg-white/20 hover:text-white transition-all duration-300 inset-shadow-sm inset-shadow-zinc-100/30 w-[120px]">
            <p className="text-[12px]"> 0000 000 000</p>
          </div>
        </div>
        <div className="flex  gap-20 items-center mt-12">
          <div className="flex flex-col gap-6 text-sm">
            <p className="text-zinc-400">PRODUCT</p>
            <div className="text-[12px] flex flex-col gap-6">
              <p>Verve Footer Link</p>
              <p>Verve Footer Link</p>
              <p>Verve Footer Link</p>
            </div>
          </div>
          <div>
            <div className="flex flex-col gap-6 text-sm">
              <p className="text-zinc-400">FEATURE</p>
              <div className="text-[12px] flex flex-col gap-6">
                <p>Verve Footer Link</p>
                <p>Verve Footer Link</p>
                <p>Verve Footer Link</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" w-[70%] mx-auto flex justify-between text-[12px] text-zinc-300 border-t border-zinc-400/20 py-12 mb-8">
        <p>CopyWrite@2025 Flowbase.co</p>
        <p>Changlog &nbsp; &nbsp; | &nbsp; &nbsp; Licence</p>
      </div>
    </div>
  );
};

export default Footer;

{
  /* <div className="w-full h-full overflow-hidden relative">
      <div className=" border border-white h-full w-[50%] absolute text-white top-0">
        Imran
      </div>
    </div> */
}
