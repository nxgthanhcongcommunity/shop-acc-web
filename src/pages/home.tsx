import { MainSlider, MobileNavbar } from "../components";
import GameAccountSection from "../components/game-account-section";
import MenuToggle from "../components/menu-toggle";
import { gameSections } from "../constants";
import { Header } from "../containers";
import Footer from "../containers/footer";
import LatestNew from "../containers/latest-news";

const Home = (props: any) => {
  return (
    <div
      className="
      relative 
      text-white"
    >
      <MobileNavbar />
      <MenuToggle />
      <Header />
      <MainSlider />
      {gameSections.map((item) => (
        <GameAccountSection data={item} />
      ))}
      <LatestNew />
      <Footer />
    </div>
  );
};

export default Home;
