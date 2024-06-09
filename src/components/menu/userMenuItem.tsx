import { UserIcon } from "../../assets/icons";
import MenuItem from "./menuItem";
import { removeAuthInfo } from "../../stores/features/authSlice";
import { useDispatch, useSelector } from "../../stores/hooks";
import { RootState } from "../../stores";
import { useEffect, useState } from "react";
import { accountApi } from "../../api";

const UserMenuItem = (props: any) => {
  const auth = useSelector((state: RootState) => state.auth);
  const [amount, setAmount] = useState(0);

  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(removeAuthInfo());
  };

  const account = auth.entity;

  useEffect(() => {
    (async () => {
      if (account != null) {
        const response = await accountApi.GetBalanceByAccountId({
          accountId: account.id,
        });

        setAmount(response.amount);
      }
    })();
  }, [account]);

  return (
    <>
      {account == null ? (
        <MenuItem
          title={<UserIcon className="h-4 w-4" />}
          subMenuItems={[{ title: "Đăng ký/Đăng nhập", href: "/signup" }]}
          side="left"
        />
      ) : (
        <MenuItem
          title={
            <>
              <img
                src={account.photo}
                alt=""
                className="h-6 w-6 rounded-full"
              />
            </>
          }
          subMenuItems={[
            { title: `Tài khoản | ${amount}`, href: "/account-management" },
            { title: "Nạp thẻ", href: "/account-management/recharge" },
            { title: "Lịch sử", href: "/account-management/history" },
            { title: "Đăng xuất", href: "", onClick: handleLogout },
          ]}
          side="left"
        />
      )}
    </>
  );
};

export default UserMenuItem;
