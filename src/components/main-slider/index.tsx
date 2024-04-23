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
        <div className="relative h-[60vh]">
          <div className="absolute h-full w-full bg-[#160962] opacity-40"></div>
          <img
            className="h-full object-cover lg:h-auto"
            src="https://html.nkdev.info/youplay/assets/images/dark/game-dark-souls-ii-2-1920x1248.jpg"
            alt=""
          />
        </div>
        <div className="absolute left-[10%] top-1/2 flex -translate-y-1/2 flex-col items-start">
          <h1 className="text-2xl font-semibold tracking-wide lg:text-5xl">
            KINGDOMS OF AMALUR: RECKHONG
          </h1>
          <div className="h-6"></div>
          <Button.SM>
            <span className="">Mua hàng</span>
          </Button.SM>
        </div>
      </SwiperSlide>

      <NaviagtionButton navType="prev" />
      <NaviagtionButton navType="next" />
    </Swiper>
  );
};

export default MainSlider;
