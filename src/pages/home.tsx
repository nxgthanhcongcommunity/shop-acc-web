import { MainSlider, MobileNavbar } from "../components";
import GameAccountSection from "../components/game-account-section";
import { Header } from "../containers";
import AboutMe from "../containers/about-me";
import BankCard from "../containers/bank-card";

const Home = (props: any) => {
  return (
    <div className="min-h-screen text-white bg-[url('https://imba.themerex.net/wp-content/uploads/2024/01/ingame-deco-main-back.png')] bg-fixed relative">
      <div className="absolute z-[-1] top-[calc(100vh-50px)] right-0">
        <img src="https://imba.themerex.net/wp-content/uploads/2024/01/ingame-deco-img-1.png" alt="" />
      </div>
      <div className="absolute z-[-1] top-[200vh] -left-[40px]">
        <img src="https://imba.themerex.net/wp-content/uploads/2024/01/ingame-deco-img-2.png" alt="" />
      </div>
      <MobileNavbar />
      <Header />
      <MainSlider />
      <GameAccountSection
        title="Sale Game Accounts"
        cards={[
          { imageSrc: "https://html.nkdev.info/youplay/assets/images/dark/game-dragons-dogma-500x375.jpg", title: "Fortnite Account", subtitle: "Level 100, rare skins", buttonText: "Buy Now" },
          { imageSrc: "https://html.nkdev.info/youplay/assets/images/dark/game-dragons-dogma-500x375.jpg", title: "Minecraft Account", subtitle: "Premium account with mods", buttonText: "Buy Now" },
          { imageSrc: "https://html.nkdev.info/youplay/assets/images/dark/game-dragons-dogma-500x375.jpg", title: "Minecraft Account", subtitle: "Premium account with mods", buttonText: "Buy Now" },
          { imageSrc: "https://html.nkdev.info/youplay/assets/images/dark/game-dragons-dogma-500x375.jpg", title: "Minecraft Account", subtitle: "Premium account with mods", buttonText: "Buy Now" },
          { imageSrc: "https://html.nkdev.info/youplay/assets/images/dark/game-dragons-dogma-500x375.jpg", title: "Minecraft Account", subtitle: "Premium account with mods", buttonText: "Buy Now" },
          { imageSrc: "https://html.nkdev.info/youplay/assets/images/dark/game-dragons-dogma-500x375.jpg", title: "Minecraft Account", subtitle: "Premium account with mods", buttonText: "Buy Now" },
          // Add more card objects as needed
        ]}
      />
      <GameAccountSection
        title="Sale Game Accounts1"
        cards={[
          { imageSrc: "https://html.nkdev.info/youplay/assets/images/dark/game-dragons-dogma-500x375.jpg", title: "Fortnite Account", subtitle: "Level 100, rare skins", buttonText: "Buy Now" },
          { imageSrc: "https://html.nkdev.info/youplay/assets/images/dark/game-dragons-dogma-500x375.jpg", title: "Minecraft Account", subtitle: "Premium account with mods", buttonText: "Buy Now" },
          { imageSrc: "https://html.nkdev.info/youplay/assets/images/dark/game-dragons-dogma-500x375.jpg", title: "Minecraft Account", subtitle: "Premium account with mods", buttonText: "Buy Now" },
          { imageSrc: "https://html.nkdev.info/youplay/assets/images/dark/game-dragons-dogma-500x375.jpg", title: "Minecraft Account", subtitle: "Premium account with mods", buttonText: "Buy Now" },
          { imageSrc: "https://html.nkdev.info/youplay/assets/images/dark/game-dragons-dogma-500x375.jpg", title: "Minecraft Account", subtitle: "Premium account with mods", buttonText: "Buy Now" },
          { imageSrc: "https://html.nkdev.info/youplay/assets/images/dark/game-dragons-dogma-500x375.jpg", title: "Minecraft Account", subtitle: "Premium account with mods", buttonText: "Buy Now" },
          // Add more card objects as needed
        ]}
      />
      <BankCard />
      <AboutMe />
    </div>
  );
};

export default Home;
