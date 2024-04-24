import GameAccountCard from "../account-card";

const GameAccountSection = ({ title, cards }: any) => {
    return (
      <div className="container mx-auto pt-20 ">
          <h2 className="text-3xl font-semibold text-center mb-6">{title}</h2>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 justify-center items-center">
            {cards.map((card: any, index:any) => (
              <GameAccountCard key={index} {...card} />
            ))}
          </div>
          <div className="text-center mt-6">
            <a href="#" className="text-blue-500 hover:text-blue-700 font-semibold flex items-center justify-center">
              View More <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 0a1 1 0 01.946 1.324l-4 10a1 1 0 01-1.892-.648l4-10A1 1 0 0110 0zM1.5 12.5a1 1 0 011-1h15a1 1 0 110 2h-15a1 1 0 01-1-1z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
    );
  };

  export default GameAccountSection