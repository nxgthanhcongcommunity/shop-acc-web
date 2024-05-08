import { HomePage, ShopPage } from "./pages";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./App.css";
import Layout from "./containers/layout";
import Product from "./pages/product";
import Signup from "./pages/signup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "signup",
        element: <Signup />,
      },
      {
        path: "shop",
        element: <ShopPage />,
      },
      {
        path: "product",
        element: <Product />,
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
], {
  basename: "/shop-acc-web"
});

function App() {
  return <RouterProvider router={router} />
}

export default App;
