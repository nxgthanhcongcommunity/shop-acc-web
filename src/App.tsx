import { HomePage, Shop } from "./pages";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./App.css";
import Product from "./pages/product";
import Signup from "./pages/signup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    children: [

    ],
  },
  {
    path: "signup",
    element: <Signup />,
  },
  {
    path: "shop",
    element: <Shop />,
  },
  {
    path: "product",
    element: <Product />,
  },
], {
  basename: "/shop-acc-web"
});

function App() {
  return <RouterProvider router={router} />
}

export default App;
