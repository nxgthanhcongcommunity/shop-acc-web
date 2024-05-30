import { GameSection, LatestNewsSection, MainSliderSection } from "../containers";
import { selectMaster, selectMasterLoading } from "../stores/features/masterSlice";
import { useSelector } from '../stores/hooks';

const Home = () => {

  const masterData = useSelector(selectMaster);
  const masterDataLoading = useSelector(selectMasterLoading);

  if (masterDataLoading) { return <p>loading...</p> }

  const bannerConfigs = masterData.entity.banners;

  return (
    <>
      <MainSliderSection />
      {bannerConfigs && bannerConfigs.map((bannerConfig: any) => (
        <GameSection key={bannerConfig.code} bannerConfig={bannerConfig} />
      ))}
      <LatestNewsSection />
    </>
  );
};

export default Home;
