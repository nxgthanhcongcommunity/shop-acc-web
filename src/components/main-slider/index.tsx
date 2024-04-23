import { Swiper, SwiperSlide } from "swiper/react";
import "./bullet.css";

import { Autoplay, Navigation, Pagination } from "swiper/modules";
import NaviagtionButton from "./navigation-button";

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
      className="mySwiper1 group lg:h-[60vh] h-full"
    >
      <SwiperSlide>
        <div className="absolute before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:bg-[#160962] before:opacity-40">
          <img
            className="h-full"
            src="https://html.nkdev.info/youplay/assets/images/dark/game-dark-souls-ii-2-1920x1248.jpg"
            alt=""
          />
        </div>
        <div className="absolute w-full h-full left-0 top-1/2 -translate-y-1/2 flex items-center">
          <h1 className="text-3xl lg:text-5xl font-semibold tracking-wide">
            KINGDOMS OF AMALUR: RECKHONG
          </h1>
          <div className="h-8"></div>
          <div
            className="text-md inline-block cursor-pointer border-2 px-[30px] py-[10px] font-medium hover:border-[#d92b4c] hover:bg-[#d92b4c]"
            style={{
              transform: "skew(-7deg)",
              transition: ".3s background ease, .3s border ease",
            }}
          >
            Purchase
          </div>
        </div>
      </SwiperSlide>

      <NaviagtionButton navType="prev" />
      <NaviagtionButton navType="next" />
    </Swiper>
  );
};

export default MainSlider;
