import { UserIcon } from "../../assets/icons";
import MenuItem from "./menuItem";
import { logout } from "../../stores/features/authSlice";
import { useDispatch, useSelector } from "../../stores/hooks";
import { RootState } from "../../stores";

const UserMenuItem = (props: any) => {
  const auth = useSelector((state: RootState) => state.auth);
  const { entity: balanceEtity } = useSelector((state: RootState) => state.balance);

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  const { account } = auth.entity

  switch (account != null) {
    case true:
      return UserMenuItem.Logged({ balanceEtity, account, handleLogout });
    default:
      return UserMenuItem.UnLogin();
  }
};

UserMenuItem.Logged = ({ balanceEtity, account, handleLogout }: any) => {

  const { amount = 0 } = balanceEtity;

  return (
    <MenuItem
      title={<>
        <img src={account.photo} alt="" className="w-6 h-6 rounded-full" />
      </>}
      subMenuItems={[
        { title: `Tài khoản | ${amount}`, href: "/account-management" },
        { title: "Nạp thẻ", href: "/account-management/recharge" },
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
