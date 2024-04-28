import { Swiper, SwiperSlide } from "swiper/react";
import "./bullet.css";

import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { mainSliderItems } from "../../constants";

const MainSliderItem = ({ item, ...restProps }: any) => {
  const { src, slogan, shortWords } = item;
  return (
    <>
      <div className="relative h-screen">
        <div className="absolute z-10 h-full w-full bg-[#160962] opacity-30"></div>
        <img
          className="absolute h-full w-full object-cover"
          src={src}
          alt=""
        />
        <div className="absolute bottom-[10%] left-6 z-20 lg:left-24">
          <h4 className="mb-3 text-2xl font-semibold lg:mb-6 lg:text-3xl">
            {slogan}
          </h4>
          <h1 className="text-5xl font-extrabold uppercase tracking-wide lg:text-8xl">
            {shortWords}
          </h1>
        </div>
      </div>
    </>
  );
};

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
      {mainSliderItems.map((item) => (
        <SwiperSlide key={item.id}>
          <MainSliderItem item={item} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default MainSlider;
