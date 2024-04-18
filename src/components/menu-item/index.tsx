import { CarretDownIcon } from "../../assets/icons";

const MenuItem = (props: any) => {
  return (
    <li className="group relative flex flex-col">
      <div className="flex items-center gap-x-1">
        <h4 className="text-sm font-medium uppercase">store</h4>
        <span>
          <CarretDownIcon width={10} height={10} />
        </span>
      </div>
      <span className="text-[10px] leading-[10px] text-white/50">games</span>

      <ul className="absolute top-[calc(100%+30px)] hidden w-max grid-cols-2  gap-x-12 gap-y-4 bg-menuItemBackground  px-6 py-4 before:absolute before:left-0 before:top-[-40px] before:h-12 before:w-1/2 after:absolute after:bottom-full after:left-2 after:border-8 after:border-b-menuItemBackground after:border-l-transparent after:border-r-transparent after:border-t-transparent group-hover:grid">
        <li className="">Store Style 1</li>
        <li className="">Store Style 1</li>
        <li className="">Store Style 1</li>
        <li className="">Store Style 1</li>
        <li className="">Store Style 1</li>
        <li className="">Store Style 1</li>
      </ul>
    </li>
  );
};
export default MenuItem;
