import { Link, Outlet } from "react-router-dom";
import { PrivateRoute } from "../../components";
import { UserIcon } from "../../assets/icons";

const AccountManagement = () => {
  return (
    <>
      <PrivateRoute />
      <div className="mt-[120px] flex">
        <aside
          id="logo-sidebar"
          className="w-64 -translate-x-full bg-[#12082d] py-4 transition-transform sm:translate-x-0"
          aria-label="Sidebar"
        >
          <div className="h-full overflow-y-auto px-3 pb-4 ">
            <ul className="space-y-2 font-medium">
              <li>
                <Link
                  to="/account-management/account-info"
                  className="group flex items-center rounded-lg p-2 text-gray-100 hover:bg-gray-100"
                >
                  <UserIcon className="w-4 h-4" />
                  <span className="ms-3">Tài khoản</span>
                </Link>
              </li>
              <li>
                <button
                  type="button"
                  className="group flex w-full items-center rounded-lg p-2 text-base text-gray-100 transition duration-75 hover:bg-gray-100"
                  aria-controls="dropdown-example"
                  data-collapse-toggle="dropdown-example"
                >
                  <svg className="w-4 h-4" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 150.6c12.5-12.5 12.5-32.8 0-45.3l-96-96c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.7 96 32 96C14.3 96 0 110.3 0 128s14.3 32 32 32l306.7 0-41.4 41.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l96-96zm-333.3 352c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 416 416 416c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0 41.4-41.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-96 96c-12.5 12.5-12.5 32.8 0 45.3l96 96z" /></svg>
                  <span className="ms-3 flex-1 whitespace-nowrap text-left rtl:text-right">
                    Giao dịch
                  </span>
                  <i className="ti ti-angle-down"></i>
                </button>
                <ul id="dropdown-example" className="space-y-2 py-2">
                  <li>
                    <Link to={"/account-management/recharge"}>
                      <span className="group flex w-full items-center rounded-lg p-2 pl-11 text-gray-100 transition duration-75 hover:bg-gray-100">
                        Nạp ATM
                      </span>
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <button
                  type="button"
                  className="group flex w-full items-center rounded-lg p-2 text-base text-gray-100 transition duration-75 hover:bg-gray-100 "
                  aria-controls="dropdown-example"
                  data-collapse-toggle="dropdown-example"
                >
                  <svg className="w-4 h-4" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M24 56c0-13.3 10.7-24 24-24H80c13.3 0 24 10.7 24 24V176h16c13.3 0 24 10.7 24 24s-10.7 24-24 24H40c-13.3 0-24-10.7-24-24s10.7-24 24-24H56V80H48C34.7 80 24 69.3 24 56zM86.7 341.2c-6.5-7.4-18.3-6.9-24 1.2L51.5 357.9c-7.7 10.8-22.7 13.3-33.5 5.6s-13.3-22.7-5.6-33.5l11.1-15.6c23.7-33.2 72.3-35.6 99.2-4.9c21.3 24.4 20.8 60.9-1.1 84.7L86.8 432H120c13.3 0 24 10.7 24 24s-10.7 24-24 24H32c-9.5 0-18.2-5.6-22-14.4s-2.1-18.9 4.3-25.9l72-78c5.3-5.8 5.4-14.6 .3-20.5zM224 64H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H224c-17.7 0-32-14.3-32-32s14.3-32 32-32zm0 160H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H224c-17.7 0-32-14.3-32-32s14.3-32 32-32zm0 160H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H224c-17.7 0-32-14.3-32-32s14.3-32 32-32z" /></svg>
                  <span className="ms-3 flex-1 whitespace-nowrap text-left rtl:text-right">
                    Lịch sử
                  </span>
                  <i className="ti ti-angle-down"></i>
                </button>
                <ul id="dropdown-example" className="space-y-2 py-2">
                  <li>
                    <Link to={"/accounts"}>
                      <span className="group flex w-full items-center rounded-lg p-2 pl-11 text-gray-100 transition duration-75 hover:bg-gray-100">
                        Lịch sử mua nick
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link to={"/accounts"}>
                      <span className="group flex w-full items-center rounded-lg p-2 pl-11 text-gray-100 transition duration-75 hover:bg-gray-100">
                        Lịch sử nạp thẻ
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link to={"/accounts"}>
                      <span className="group flex w-full items-center rounded-lg p-2 pl-11 text-gray-100 transition duration-75 hover:bg-gray-100">
                        Lịch sử đổi quà
                      </span>
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </aside>
        <div className="w-full">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default AccountManagement;

export { default as AccountInfoPage } from "./accountInfo";
export { default as ReceivedPage } from "./received";
