import { GameSection, LatestNewsSection, MainSliderSection } from "../containers";
import { selectMaster, selectMasterLoading } from "../stores/features/masterSlice";
import { useSelector } from '../stores/hooks';

const Home = () => {

  const masterData = useSelector(selectMaster);
  const masterDataLoading = useSelector(selectMasterLoading);

  if (masterDataLoading) { return <p>loading...</p> }

  const { banners } = masterData.entity;

  return (
    <>
      <MainSliderSection />
      {banners && banners.map((banner: any) => (
        <GameSection key={banner.code} banner={banner} />
      ))}
      <LatestNewsSection />
    </>
  );
};

export default Home;
