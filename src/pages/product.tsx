import { MobileNavbar } from "../components";
import BreadCrumb from "../components/breadcrumb";
import { Header } from "../containers";
import AboutMe from "../containers/about-me";
import ProductContainer from "../containers/product-container";

const Product = () => {
  return (
    <div className="relative min-h-screen bg-[url('https://imba.themerex.net/wp-content/uploads/2024/01/ingame-deco-main-back.png')] bg-fixed text-white">
      <div className="absolute right-0 top-[calc(100vh-50px)] z-[-1] ">
        <img
          src="https://imba.themerex.net/wp-content/uploads/2024/01/ingame-deco-img-1.png"
          alt=""
        />
      </div>
      <div className="absolute -left-[40px] top-[200vh] z-[-1]">
        <img
          src="https://imba.themerex.net/wp-content/uploads/2024/01/ingame-deco-img-2.png"
          alt=""
        />
      </div>
      <MobileNavbar />
      <Header />
      <BreadCrumb />
      <ProductContainer />
      <AboutMe />
    </div>
  );
};

export default Product;
