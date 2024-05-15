import { GameSection, LatestNewsSection, MainSliderSection } from "../containers";
import { useGetBannersQuery } from "../stores/services/master-data-api";

const Home = () => {

  const { data, error, isLoading } = useGetBannersQuery();
  if (isLoading) return <span>loading..</span>
  const banners = data.data;

  const sortedData = [...banners].sort((a: any, b: any) => a.order - b.order);

  console.log(sortedData)

  return (
    <>
      <MainSliderSection />
      {banners && sortedData.map((item: any) => (
        <GameSection banner={item} />
      ))}
      <LatestNewsSection />
    </>
  );
};

export default Home;
