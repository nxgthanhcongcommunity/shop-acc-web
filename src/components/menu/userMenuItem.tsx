import { UserIcon } from "../../assets/icons";
import MenuItem from "./menuItem";
import { logout } from "../../stores/features/authSlice";
import { useDispatch, useSelector } from "../../stores/hooks";
import { RootState } from "../../stores";

const UserMenuItem = (props: any) => {
  const auth = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  switch (auth.entity.account != null) {
    case true:
      return UserMenuItem.Logged({ handleLogout });
    default:
      return UserMenuItem.UnLogin();
  }
};

UserMenuItem.Logged = ({ handleLogout }: any) => {
  return (
    <MenuItem
      title={<UserIcon className="h-4 w-4" />}
      subMenuItems={[
        { title: "Tài khoản", href: "/account-info" },
        { title: "Nạp thẻ", href: "/recharge" },
        { title: "Lịch sử", href: "/history" },
        { title: "Đăng xuất", href: "", onClick: handleLogout },
      ]}
      side="left"
    />
  );
};

UserMenuItem.UnLogin = () => {
  return (
    <MenuItem
      title={<UserIcon className="h-4 w-4" />}
      subMenuItems={[{ title: "Đăng ký/Đăng nhập", href: "/signup" }]}
      side="left"
    />
  );
};

export default UserMenuItem;
