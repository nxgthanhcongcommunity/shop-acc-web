import {
  HomePage,
  ProductPage,
  ShopPage,
  SignupPage,
  ViewCartPage,
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
          path: "view-cart",
          element: <ViewCartPage />,
        },
        {
          path: "account-management",
          element: <AccountManagementPage />,
          children: [
            {
              index: true,
              element: <AccountInfoPage />
            },
            {
              path: "/account-management/account-info",
              element: <AccountInfoPage />
            },
            {
              path: "/account-management/recharge",
              element: <RechargePage />
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
    basename: "/web",
  },
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
