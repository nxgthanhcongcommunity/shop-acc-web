import { Link, Outlet } from "react-router-dom";
import { PrivateRoute } from "../../components";

const AccountManagement = () => {
  return (
    <>
      <PrivateRoute />
      <div className="mt-[120px] flex">
        <aside
          id="logo-sidebar"
          className="w-64 -translate-x-full border-r border-slate-800 bg-gray-900 py-4 transition-transform sm:translate-x-0"
          aria-label="Sidebar"
        >
          <div className="h-full overflow-y-auto px-3 pb-4 ">
            <ul className="space-y-2 font-medium">
              <li>
                <Link
                  to="/account-management/account-info"
                  className="group flex items-center rounded-lg p-2 text-gray-100 hover:bg-gray-100"
                >
                  <i className="ti ti-user"></i>
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
                  <i className="ti ti-exchange-vertical"></i>
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
                  <i className="ti ti-align-justify"></i>
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