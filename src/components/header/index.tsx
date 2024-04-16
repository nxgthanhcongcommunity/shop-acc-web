import { MenuItem } from "..";

const Header = (props: any) => {
  return (
    <header className="fixed top-0 left-0 w-screen h-[80px] bg-headerBackground z-50">
      <div className="max-w-[1170px] mx-auto flex justify-between h-full items-center">
        <div className="flex items-center gap-x-12">
          <img
            width={160}
            src="https://html.nkdev.info/youplay/assets/images/logo-light.png"
            alt=""
          />
          <ul className="flex gap-x-8">
            <MenuItem />
          </ul>
        </div>
        <div className="">right</div>
      </div>
    </header>
  );
};

export default Header;
