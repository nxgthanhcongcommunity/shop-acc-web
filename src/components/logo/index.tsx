import { GamePadIcon } from "../../assets/icons";

const Logo = () => {
  return (
    <div className="flex items-center gap-x-3">
      <GamePadIcon width={40} height={40} />
      <h1 className="text-2xl font-medium">Shop Acc LH</h1>
    </div>
  );
};

export default Logo;
