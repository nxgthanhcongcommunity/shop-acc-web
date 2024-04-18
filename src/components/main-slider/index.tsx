// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./bullet.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import NaviagtionButton from "../NavigationButton";
import SliderItem from "./slider-item";

const MainSlider = (props: any) => {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      loop={true}
      autoplay={{
        delay: 10000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
        bulletClass: "c-swiper-pagination-bullet",
        bulletActiveClass: "c-swiper-pagination-bullet--active",
      }}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper1 group h-[600px]"
    >
      <SwiperSlide>
        <SliderItem />
      </SwiperSlide>
      <SwiperSlide>
        <SliderItem />
      </SwiperSlide>
      <SwiperSlide>
        <SliderItem />
      </SwiperSlide>

      <NaviagtionButton navType="prev" />
      <NaviagtionButton navType="next" />
    </Swiper>
  );
};

export default MainSlider;
