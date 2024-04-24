import { Swiper, SwiperSlide } from "swiper/react";
import "./bullet.css";

import { Autoplay, Navigation, Pagination } from "swiper/modules";

const MainSliderItem = () => {
  return(
    <>
      <div className="relative h-screen">
            <div className="absolute z-10 h-full w-full bg-[#160962] opacity-50"></div>
            <img
              className="absolute h-full w-full object-cover"
              src="https://r4.wallpaperflare.com/wallpaper/104/517/295/dragon-ball-super-vegeta-super-saiyajin-blue-super-saiyan-blue-wallpaper-c9b0580df1faeddb76b7987f0001862d.jpg"
              alt=""
            />
            <div className="absolute z-20 left-6 lg:left-24 bottom-[10%]">
              <h4 className="font-semibold lg:text-3xl text-2xl lg:mb-6 mb-3">
                  Game blower with LH Shop
              </h4>
              <h1 className="tracking-wide uppercase font-extrabold lg:text-8xl text-5xl">
                Pro Insight
              </h1>
            </div>
            
      </div>
    </>
  );
}

const MainSlider = (props: any) => {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      loop={true}
      // autoplay={{
      //   delay: 10000,
      //   disableOnInteraction: false,
      // }}
      pagination={{
        clickable: true,
        bulletClass: "c-swiper-pagination-bullet",
        bulletActiveClass: "c-swiper-pagination-bullet--active",
      }}
      modules={[Autoplay, Pagination, Navigation]}
      className="group"
    >
      {
        [1,2,3,4].map(() => (
          <SwiperSlide>
              <MainSliderItem />
          </SwiperSlide>
        ))
      }
    </Swiper>
  );
};

export default MainSlider;
