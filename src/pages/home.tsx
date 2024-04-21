import { MainSlider, MobileNavbar, SubSlider } from "../components";
import { SocialSection } from "../containers";
import { AccountCategorySection, Header, WhyUsSection } from "../containers";

const Home = (props: any) => {
  return (
    <div className="min-h-screen bg-bodyBackground text-white">
      <MobileNavbar />
      <Header logined />
      <div className="mx-auto max-w-[1400px] bg-[#080325]">
        <MainSlider />
        <SubSlider.ContentCenter />
        <AccountCategorySection />
        <WhyUsSection />
        <SocialSection />
      </div>
    </div>
  );
};

export default Home;
