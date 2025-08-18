interface ButtonType {
  label: string;
}
const PrimaryButton = ({ label }: ButtonType) => {
  return (
    <button className="text-black bg-teal-200 rounded-full px-3 py-3 text-sm w-44 mx-auto mt-8 relative cursor-pointer">
      {label}
    </button>
  );
};

export default PrimaryButton;
