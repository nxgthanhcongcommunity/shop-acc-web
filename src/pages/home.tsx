import { MainSlider, SubSlider, GameWidget, WhyUsWidget } from "../components";

const Home = (props: any) => {
  return (
    <>
      <MainSlider />
      <SubSlider.Style1 />
      <GameWidget title="Acc đột kích" />
      <GameWidget title="Acc DragonBall" />
      <GameWidget title="Events" />
      <WhyUsWidget />
    </>
  );
};

export default Home;
