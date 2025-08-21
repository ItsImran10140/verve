const BackGround = () => {
  return (
    <div className="border border-white h-[700px] w-full overflow-hidden relative">
      <div>
        <img src="/FAQ Light 01.svg" alt="FAQ Light 01" />
      </div>
      <img
        src="/FAQ Pattern 01.svg"
        alt="FAQ Background Pattern"
        className="h-full w-full object-cover"
      />
    </div>
  );
};

export default BackGround;
