import { Link } from "react-router-dom";
import { ArrowRightIcon } from "../../assets/icons";
import GameAccountCard from "../account-card";

const GameAccountSection = ({ title, cards }: any) => {
  return (
    <div className="container mx-auto pt-20 ">
      <h1 className="my-12 text-center text-5xl font-extrabold text-[#9536e8]">
        {title}
      </h1>
      <div className="grid grid-cols-1 items-center justify-center gap-4 lg:grid-cols-4">
        {cards.map((card: any, index: any) => (
          <GameAccountCard key={index} {...card} />
        ))}
      </div>
      <div className="mt-6 text-center">
        <Link to="shop">
          <div className="text-title flex items-center justify-center gap-x-2 font-semibold hover:text-blue-500">
            View More <ArrowRightIcon className="h-5 w-5" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default GameAccountSection;
