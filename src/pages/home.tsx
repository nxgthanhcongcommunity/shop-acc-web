import { MainSlider, MobileNavbar } from "../components";
import GameAccountSection from "../components/game-account-section";
import { Header } from "../containers";
import AboutMe from "../containers/about-me";
import LatestNew from "../containers/latest-news";

const Home = (props: any) => {
  return (
    <div
      className="
    relative 
    min-h-screen
    bg-[#1C1632] bg-[url('https://imba.themerex.net/wp-content/uploads/2024/01/ingame-deco-main-back.png')] bg-fixed
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
      <GameAccountSection
        title="Sale Game Accounts"
        cards={[
          {
            imageSrc:
              "https://assets-prd.ignimgs.com/2022/10/28/dragonballlegends-1666977025016.jpg",
            title: "Tài khoản Dragon Ball Legends",
            subtitle: "Tài khoản hiện có: 100",
            buttonText: "Lựa account thôi",
          },
          {
            imageSrc:
              "https://html.nkdev.info/youplay/assets/images/dark/game-dragons-dogma-500x375.jpg",
            title: "Minecraft Account",
            subtitle: "Premium account with mods",
            buttonText: "Buy Now",
          },
          {
            imageSrc:
              "https://html.nkdev.info/youplay/assets/images/dark/game-dragons-dogma-500x375.jpg",
            title: "Minecraft Account",
            subtitle: "Premium account with mods",
            buttonText: "Buy Now",
          },
          {
            imageSrc:
              "https://html.nkdev.info/youplay/assets/images/dark/game-dragons-dogma-500x375.jpg",
            title: "Minecraft Account",
            subtitle: "Premium account with mods",
            buttonText: "Buy Now",
          },
          {
            imageSrc:
              "https://html.nkdev.info/youplay/assets/images/dark/game-dragons-dogma-500x375.jpg",
            title: "Minecraft Account",
            subtitle: "Premium account with mods",
            buttonText: "Buy Now",
          },
          {
            imageSrc:
              "https://html.nkdev.info/youplay/assets/images/dark/game-dragons-dogma-500x375.jpg",
            title: "Minecraft Account",
            subtitle: "Premium account with mods",
            buttonText: "Buy Now",
          },
          // Add more card objects as needed
        ]}
      />
      <GameAccountSection
        title="Sale Game Accounts1"
        cards={[
          {
            imageSrc:
              "https://html.nkdev.info/youplay/assets/images/dark/game-dragons-dogma-500x375.jpg",
            title: "Fortnite Account",
            subtitle: "Level 100, rare skins",
            buttonText: "Buy Now",
          },
          {
            imageSrc:
              "https://html.nkdev.info/youplay/assets/images/dark/game-dragons-dogma-500x375.jpg",
            title: "Minecraft Account",
            subtitle: "Premium account with mods",
            buttonText: "Buy Now",
          },
          {
            imageSrc:
              "https://html.nkdev.info/youplay/assets/images/dark/game-dragons-dogma-500x375.jpg",
            title: "Minecraft Account",
            subtitle: "Premium account with mods",
            buttonText: "Buy Now",
          },
          {
            imageSrc:
              "https://html.nkdev.info/youplay/assets/images/dark/game-dragons-dogma-500x375.jpg",
            title: "Minecraft Account",
            subtitle: "Premium account with mods",
            buttonText: "Buy Now",
          },
          {
            imageSrc:
              "https://html.nkdev.info/youplay/assets/images/dark/game-dragons-dogma-500x375.jpg",
            title: "Minecraft Account",
            subtitle: "Premium account with mods",
            buttonText: "Buy Now",
          },
          {
            imageSrc:
              "https://html.nkdev.info/youplay/assets/images/dark/game-dragons-dogma-500x375.jpg",
            title: "Minecraft Account",
            subtitle: "Premium account with mods",
            buttonText: "Buy Now",
          },
          // Add more card objects as needed
        ]}
      />
      <LatestNew />
      <AboutMe />
    </div>
  );
};

export default Home;
