import { Link } from "react-router-dom";

const GameAccountCard = ({ imageSrc, title, subtitle, buttonText }: any) => {
  return (
    <div className="bg-primary m-4 overflow-hidden rounded shadow-lg transition duration-300 hover:shadow-xl">
      <img
        className="h-[340px] w-full object-cover"
        src={imageSrc}
        alt={title}
      />
      <div className="px-6 py-4">
        <div className="mb-2 text-xl font-bold">{title}</div>
        <p className="text-base">{subtitle}</p>
      </div>
      <div className="flex justify-end px-6 py-4">
        <Link to="shop">
          <button className="bg-secondary rounded px-4 py-2 font-bold text-white hover:bg-blue-700">
            {buttonText}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default GameAccountCard;
