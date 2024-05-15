import { Link } from "react-router-dom";
const { REACT_APP_API_URL } = process.env

const GameAccountCard = ({ category }: any) => {

  // console.log(category.category)
  // console.log(category.mainFileUrl)

  return (
    <div className="bg-primary m-4 overflow-hidden rounded shadow-lg transition duration-300 hover:shadow-xl">
      <div className="relative">
        <div className="absolute z-10 h-full w-full bg-[#160962] opacity-20"></div>
        <img
          className="h-[300px] w-full object-cover"
          src={`${REACT_APP_API_URL}/public/categories/${category.mainFileUrl}`}
          alt={category.name}
        />
      </div>
      <div className="px-6 py-4 min-h-[150px]">
        <div className="mb-2 text-xl font-bold">{category.name}</div>
        <p className="text-base">Tài khoản hiện có: 500</p>
      </div>
      <div className="flex justify-end px-6 py-4">
        <Link to="shop">
          <button className="bg-secondary rounded px-4 py-2 font-bold text-white hover:bg-blue-700">
            Mua ngay
          </button>
        </Link>
      </div>
    </div>
  );
};

export default GameAccountCard;
