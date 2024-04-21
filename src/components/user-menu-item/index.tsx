import { useEffect, useState } from "react";
import { Button } from "..";
import {
  CarretDownIcon,
  SquareCheckIcon,
  SquareNofillIcon,
  UserIcon,
  XmarkIcon,
} from "../../assets/icons";
import { IMenuItemProps } from "../../types";
import HiddenContainer from "../hidden-container";
import MenuItem from "../menu-item";

const UserMenuItem = () => {
  const loggined = false;
  const userMenuItem: IMenuItemProps = {
    title: "Ng Thanh Cong",
    subTitle: "user",
    subMenuItems: [
      {
        title: "Activity",
        href: "/",
      },
      {
        title: "Profile",
        href: "/",
      },
      {
        title: "Message",
        href: "/",
      },
      {
        title: "Activity",
        href: "/",
      },
      {
        title: "Profile",
        href: "/",
      },
      {
        title: "Message",
        href: "/",
      },
    ],
    column: 1,
  };
  const [remember, setRemember] = useState(false);
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [isShowHiddenContent, setIsShowHiddenContent] = useState(false);

  const handleMouseEnter = () => {
    setIsShowHiddenContent(true);
  };

  const handleMouseLeave = () => {
    if ((username + password).length > 0) {
      return;
    }
    setIsShowHiddenContent(false);
  };

  const handleCloseClick = () => {
    setIsShowHiddenContent(false);
  };

  useEffect(() => {
    if (!isShowHiddenContent) {
      setUsername("");
      setPassword("");
      setRemember(false);
    }
  }, [isShowHiddenContent]);

  if (loggined) {
    return <MenuItem {...userMenuItem} />;
  }

  return (
    <li
      className="group relative flex cursor-pointer items-center gap-x-1"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <UserIcon width={14} height={14} />
      <CarretDownIcon width={10} height={10} />

      <HiddenContainer side="bottom-left" show={isShowHiddenContent}>
        <div className="relative grid w-[360px] gap-y-4 p-6">
          <span>
            <XmarkIcon
              className="absolute right-2 top-2"
              width={20}
              height={20}
              onClick={handleCloseClick}
            />
          </span>
          <div>
            <h4 className="text-sm font-medium">Username:</h4>
            <div className="h-2"></div>
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className=" block h-10 w-full -skew-x-6 border-0 bg-slate-700 px-2 outline-0 duration-200 focus:bg-white focus:text-black"
              type="text"
            />
          </div>
          <div>
            <h4 className="text-sm font-medium">Password:</h4>
            <div className="h-2"></div>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className=" block h-10 w-full -skew-x-6 border-0 bg-slate-700 px-2 outline-0 duration-200 focus:bg-white focus:text-black"
              type="password"
            />
          </div>
          <div>
            <label
              className="flex items-center gap-x-4"
              onClick={() => setRemember(!remember)}
            >
              {!remember ? (
                <SquareNofillIcon
                  className="-skew-x-6"
                  width={16}
                  height={16}
                />
              ) : (
                <SquareCheckIcon className="-skew-x-6" width={16} height={16} />
              )}
              <span>Remember me</span>
            </label>
          </div>
          <div>
            <Button.SM>Log In</Button.SM>
          </div>
          <div>
            <span className="text-sm font-medium">
              Lost password? | Register
            </span>
          </div>
        </div>
      </HiddenContainer>
    </li>
  );
};

export default UserMenuItem;
