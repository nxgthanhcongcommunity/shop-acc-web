import { gameSections } from "../constants";
import { GameSection, LatestNewsSection, MainSliderSection } from "../containers";

const Home = (props: any) => {
  return (
    <>
      <MainSliderSection />
      {gameSections.map((item) => (
        <GameSection data={item} />
      ))}
      <LatestNewsSection />
    </>
  );
};

export default Home;
