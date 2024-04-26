import { HomePage, Shop } from "./pages";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/shop",
    element: <Shop />,
  },
]);

function App() {
  return <RouterProvider router={router} />
}

export default App;
