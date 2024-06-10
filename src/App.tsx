import {
  HomePage,
  ProductPage,
  ShopPage,
  SignupPage,
  OrderPage,
  AccountManagementPage,
  RechargePage,
} from "./pages";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./App.css";
import Layout from "./containers/layout";
import { AccountInfoPage } from "./pages/account-management";
import { BasketTab, PaymentTab, ReceivedTab } from "./pages/order";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <HomePage /> },
        {
          path: "signup",
          element: <SignupPage />,
        },
        {
          path: "shop",
          element: <ShopPage />,
        },
        {
          path: "product",
          element: <ProductPage />,
        },
        {
          path: "order",
          element: <OrderPage />,
          children: [
            {
              index: true,
              element: <BasketTab />,
            },
            {
              path: "payment",
              element: <PaymentTab />,
            },
            {
              path: "received",
              element: <ReceivedTab />,
            },
          ],
        },
        {
          path: "account-management",
          element: <AccountManagementPage />,
          children: [
            {
              index: true,
              element: <AccountInfoPage />,
            },
            {
              path: "account-info",
              element: <AccountInfoPage />,
            },
            {
              path: "recharge",
              element: <RechargePage />,
            },
          ],
        },
        // {
        //   path: "/courses",
        //   element: <Courses />,
        //   children: [
        //     { index: true, element: <CoursesIndex /> },
        //     { path: "/courses/:id", element: <Course /> },
        //   ],
        // },
        // { path: "*", element: <NoMatch /> },
      ],
    },
  ],
  {
    basename: "/",
  },
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
