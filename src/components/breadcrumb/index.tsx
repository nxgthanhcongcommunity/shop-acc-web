import { CarretDownIcon } from "../../assets/icons";

const BreadCrumb = () => {
  return (
    <div className="bg-primary flex h-[40vh] flex-col items-center justify-center">
      <div className="h-[120px]"></div>
      <h1 className="text-3xl font-bold lg:text-6xl">Shop</h1>
      <CarretDownIcon className="h-6 w-6 lg:h-12 lg:w-12" />
    </div>
  );
};

export default BreadCrumb;
