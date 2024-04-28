import { MainSlider, MobileNavbar } from "../components";
import GameAccountSection from "../components/game-account-section";
import { gameSections } from "../constants";
import { Header } from "../containers";
import AboutMe from "../containers/about-me";
import LatestNew from "../containers/latest-news";

// bg-[url('https://imba.themerex.net/wp-content/uploads/2024/01/ingame-deco-main-back.png')] 

const Home = (props: any) => {
  return (
    <div
      className="
      relative 
      min-h-screen
      bg-[##1c1632]
      bg-fixed
      text-white"
    >
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
      <MainSlider />
      {
        gameSections.map(item => (
          <GameAccountSection data={item} />
        ))
      }
      <LatestNew />
      <AboutMe />
    </div>
  );
};

export default Home;
