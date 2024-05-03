// Import Swiper React components
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Slider = () => {
  return (
    <Swiper
      pagination={{
        dynamicBullets: true,
      }}
      modules={[Pagination]}
      className="mx-auto"
    >
      <SwiperSlide></SwiperSlide>
    </Swiper>
  );
};

export default Slider;
