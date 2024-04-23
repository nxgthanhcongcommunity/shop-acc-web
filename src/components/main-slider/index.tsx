import { Swiper, SwiperSlide } from "swiper/react";
import "./bullet.css";

import { Autoplay, Navigation, Pagination } from "swiper/modules";
import NaviagtionButton from "./navigation-button";
import Button from "../button";

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
      <SwiperSlide>
        <div className="relative h-[85vh] lg:h-[60vh]">
          <div className="absolute h-full w-full bg-[#160962] opacity-40"></div>
          <img
            className="h-full object-cover lg:h-auto"
            src="https://html.nkdev.info/youplay/assets/images/dark/game-dark-souls-ii-2-1920x1248.jpg"
            alt=""
          />
        </div>
        <div className="absolute left-0 top-[60%] flex -translate-y-1/2 flex-col items-center lg:left-[10%] lg:top-1/2 lg:items-start">
          <h1 className="text-center text-2xl font-semibold tracking-wide lg:text-5xl">
            KINGDOMS OF AMALUR: RECKHONG
          </h1>
          <div className="h-6"></div>
          <Button.SM>Mua hàng</Button.SM>
        </div>
      </SwiperSlide>

      <NaviagtionButton navType="prev" />
      <NaviagtionButton navType="next" />
    </Swiper>
  );
};

export default MainSlider;
