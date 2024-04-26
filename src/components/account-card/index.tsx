import { Link } from "react-router-dom";

const GameAccountCard = ({ imageSrc, title, subtitle, buttonText }: any) => {
  const bg = '#0F0A3C';
  return (
    <div className="rounded overflow-hidden shadow-lg m-4 bg-[#1e1041] hover:shadow-xl transition duration-300">
      <img className="w-full object-cover" src={imageSrc} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-base">{subtitle}</p>
      </div>
      <div className="px-6 py-4 flex justify-end">
        <Link to="shop">
          <button className="bg-[#1745a5] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            {buttonText}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default GameAccountCard