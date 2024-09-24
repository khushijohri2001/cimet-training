/* eslint-disable react/prop-types */
const CrossButton = ({onClick}) => {
  return (
    <div className="bg-white w-6 h-6 rounded-full border border-slate-300 text-center text-sm cursor-pointer hover:bg-gray-200" onClick={onClick}>
      <p>X</p>
    </div>
  );
};

export default CrossButton;
