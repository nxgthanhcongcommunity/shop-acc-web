// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const MainSlider = (props: any) => {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="h-[600px]"
    >
      <SwiperSlide className="relative after:content-[' '] after:absolute after:top-0 after:left-0 after:right-0 after:bottom-0 after:bg-[#160962] after:opacity-40 bg-[url('https://html.nkdev.info/youplay/assets/images/dark/banner-bg.jpg')] bg-[center_top] bg-cover"></SwiperSlide>
      <SwiperSlide className="relative after:content-[' '] after:absolute after:top-0 after:left-0 after:right-0 after:bottom-0 after:bg-[#160962] after:opacity-40 bg-[url('https://html.nkdev.info/youplay/assets/images/dark/game-dark-souls-ii-2-1920x1248.jpg')] bg-[center_top] bg-cover"></SwiperSlide>
    </Swiper>
  );
};

export default MainSlider;
