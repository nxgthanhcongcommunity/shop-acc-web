import { Swiper, SwiperSlide } from "swiper/react";
import "./bullet.css";

import { Autoplay, Navigation, Pagination } from "swiper/modules";

const MainSliderItem = () => {
  return (
    <>
      <div className="relative h-screen">
        <div className="absolute z-10 h-full w-full bg-[#160962] opacity-30"></div>
        <img
          className="absolute h-full w-full object-cover"
          src="https://moewalls.com/wp-content/uploads/2023/10/goku-super-saiyan-rose-dragon-ball-thumb.jpg"
          alt=""
        />
        <div className="absolute bottom-[10%] left-6 z-20 lg:left-24">
          <h4 className="mb-3 text-2xl font-semibold lg:mb-6 lg:text-3xl">
            Game blower with LH Shop
          </h4>
          <h1 className="text-5xl font-extrabold uppercase tracking-wide lg:text-8xl">
            Pro Insight
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
      {[1, 2, 3, 4].map(() => (
        <SwiperSlide>
          <MainSliderItem />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default MainSlider;
