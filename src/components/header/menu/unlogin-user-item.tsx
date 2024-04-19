import { CarretDownIcon, SquareCheckIcon, SquareNofillIcon, UserIcon } from "../../../assets/icons";
import HiddenContainer from "../../hidden-container";
import { Button } from "../..";
import React, { useRef, useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../stores";
import { setIsShowUnloginHiddenContainer } from "../../../stores/features/appSlice";

const UnLoginUserItem = () => {

    const [remember, setRemember] = useState(false);
    const [password, setPassword] =  useState('');
    const [username, setUsername] =  useState('');

    const {isShowUnloginHiddenContainer} = useSelector((state: RootState) => state.app);

    const dispatch = useDispatch();

    const handleMouseEnter = () => {
      dispatch(setIsShowUnloginHiddenContainer(true));
    };
  
    const handleMouseLeave = () => {
      if((username + password).length > 0) {
        return;
      }
      dispatch(setIsShowUnloginHiddenContainer(false));
    };

    return (
        <li className="group relative flex items-center gap-x-1 cursor-pointer" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <UserIcon width={14} height={14} />
            <CarretDownIcon width={10} height={10} />

            <HiddenContainer side="bottom-left" isShow={isShowUnloginHiddenContainer}>
                <div className="p-6 grid gap-y-4 w-[300px]">
                    <div>
                        <h4 className="text-sm font-medium">Username:</h4>
                        <div className="h-2"></div>
                        <input value={username} onChange={e => setUsername(e.target.value)} className=" focus:text-black focus:bg-white duration-200 block w-full bg-slate-700 -skew-x-6 border-0 outline-0 px-2 h-10" type="text" />
                    </div>
                    <div>
                        <h4 className="text-sm font-medium">Password:</h4>
                        <div className="h-2"></div>
                        <input value={password} onChange={e => setPassword(e.target.value)} className=" focus:text-black focus:bg-white duration-200 block w-full bg-slate-700 -skew-x-6 border-0 outline-0 px-2 h-10" type="password" />
                    </div>
                    <div>
                        <label className="flex items-center gap-x-4" onClick={() => setRemember(!remember)} >
                            {
                                !remember 
                                    ? <SquareNofillIcon 
                                    className="-skew-x-6" width={16} height={16} />
                                    : <SquareCheckIcon 
                                    className="-skew-x-6" width={16} height={16} />
                            }   
                            <span>Remember me</span>
                        </label>
                    </div>
                    <div>
                        <Button.XS>Log In</Button.XS>
                    </div>
                    <div>
                        <span className="text-sm font-medium">Lost password? | Register</span>
                    </div>
                </div>
            </HiddenContainer>
        </li>
    );
}

export default UnLoginUserItem;