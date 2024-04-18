// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { Autoplay } from "swiper/modules";

import "./sub-slider.css";
import { EmptyStartIcon, StartIcon } from "../../assets/icons";

const SubSlider = (props: any) => {
  return (
    <Swiper
      slidesPerView={4}
      spaceBetween={0}
      className="sub-slider h-[236px]"
      loop={true}
      modules={[Autoplay]}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
    >
      <SwiperSlide>
        <div className="absolute z-10 flex h-full w-full flex-col items-center justify-center gap-y-6">
          <h4 className="text-center text-xl font-bold tracking-wider">
            Lord of fallen
          </h4>
          <ul className="flex gap-x-1">
            <li>
              <StartIcon width={16} height={16} />
            </li>
            <li>
              <StartIcon width={16} height={16} />
            </li>
            <li>
              <StartIcon width={16} height={16} />
            </li>
            <li>
              <StartIcon width={16} height={16} />
            </li>
            <li>
              <EmptyStartIcon width={16} height={16} />
            </li>
          </ul>
        </div>
        <div className="relative h-full w-full -skew-x-6 -skew-y-6 scale-125 bg-[url('https://html.nkdev.info/youplay/assets/images/dark/game-dragons-dogma-500x375.jpg')] bg-cover bg-[center_top] after:absolute after:bottom-0 after:left-0 after:right-0 after:top-0 after:bg-[#160962] after:opacity-40"></div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="absolute z-10 flex h-full w-full flex-col items-center justify-center gap-y-6">
          <h4 className="text-center text-xl font-bold tracking-wider">
            Lord of fallen
          </h4>
          <ul className="flex gap-x-1">
            <li>
              <StartIcon width={16} height={16} />
            </li>
            <li>
              <StartIcon width={16} height={16} />
            </li>
            <li>
              <StartIcon width={16} height={16} />
            </li>
            <li>
              <StartIcon width={16} height={16} />
            </li>
            <li>
              <EmptyStartIcon width={16} height={16} />
            </li>
          </ul>
        </div>
        <div className="relative h-full w-full -skew-x-6 -skew-y-6 scale-125 bg-[url('https://html.nkdev.info/youplay/assets/images/dark/game-dragons-dogma-500x375.jpg')] bg-cover bg-[center_top] after:absolute after:bottom-0 after:left-0 after:right-0 after:top-0 after:bg-[#160962] after:opacity-40"></div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="absolute z-10 flex h-full w-full flex-col items-center justify-center gap-y-6">
          <h4 className="text-center text-xl font-bold tracking-wider">
            Lord of fallen
          </h4>
          <ul className="flex gap-x-1">
            <li>
              <StartIcon width={16} height={16} />
            </li>
            <li>
              <StartIcon width={16} height={16} />
            </li>
            <li>
              <StartIcon width={16} height={16} />
            </li>
            <li>
              <StartIcon width={16} height={16} />
            </li>
            <li>
              <EmptyStartIcon width={16} height={16} />
            </li>
          </ul>
        </div>
        <div className="relative h-full w-full -skew-x-6 -skew-y-6 scale-125 bg-[url('https://html.nkdev.info/youplay/assets/images/dark/game-dragons-dogma-500x375.jpg')] bg-cover bg-[center_top] after:absolute after:bottom-0 after:left-0 after:right-0 after:top-0 after:bg-[#160962] after:opacity-40"></div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="absolute z-10 flex h-full w-full flex-col items-center justify-center gap-y-6">
          <h4 className="text-center text-xl font-bold tracking-wider">
            Lord of fallen
          </h4>
          <ul className="flex gap-x-1">
            <li>
              <StartIcon width={16} height={16} />
            </li>
            <li>
              <StartIcon width={16} height={16} />
            </li>
            <li>
              <StartIcon width={16} height={16} />
            </li>
            <li>
              <StartIcon width={16} height={16} />
            </li>
            <li>
              <EmptyStartIcon width={16} height={16} />
            </li>
          </ul>
        </div>
        <div className="relative h-full w-full -skew-x-6 -skew-y-6 scale-125 bg-[url('https://html.nkdev.info/youplay/assets/images/dark/game-dragons-dogma-500x375.jpg')] bg-cover bg-[center_top] after:absolute after:bottom-0 after:left-0 after:right-0 after:top-0 after:bg-[#160962] after:opacity-40"></div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="absolute z-10 flex h-full w-full flex-col items-center justify-center gap-y-6">
          <h4 className="text-center text-xl font-bold tracking-wider">
            Lord of fallen
          </h4>
          <ul className="flex gap-x-1">
            <li>
              <StartIcon width={16} height={16} />
            </li>
            <li>
              <StartIcon width={16} height={16} />
            </li>
            <li>
              <StartIcon width={16} height={16} />
            </li>
            <li>
              <StartIcon width={16} height={16} />
            </li>
            <li>
              <EmptyStartIcon width={16} height={16} />
            </li>
          </ul>
        </div>
        <div className="relative h-full w-full -skew-x-6 -skew-y-6 scale-125 bg-[url('https://html.nkdev.info/youplay/assets/images/dark/game-dragons-dogma-500x375.jpg')] bg-cover bg-[center_top] after:absolute after:bottom-0 after:left-0 after:right-0 after:top-0 after:bg-[#160962] after:opacity-40"></div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="absolute z-10 flex h-full w-full flex-col items-center justify-center gap-y-6">
          <h4 className="text-center text-xl font-bold tracking-wider">
            Lord of fallen
          </h4>
          <ul className="flex gap-x-1">
            <li>
              <StartIcon width={16} height={16} />
            </li>
            <li>
              <StartIcon width={16} height={16} />
            </li>
            <li>
              <StartIcon width={16} height={16} />
            </li>
            <li>
              <StartIcon width={16} height={16} />
            </li>
            <li>
              <EmptyStartIcon width={16} height={16} />
            </li>
          </ul>
        </div>
        <div className="relative h-full w-full -skew-x-6 -skew-y-6 scale-125 bg-[url('https://html.nkdev.info/youplay/assets/images/dark/game-dragons-dogma-500x375.jpg')] bg-cover bg-[center_top] after:absolute after:bottom-0 after:left-0 after:right-0 after:top-0 after:bg-[#160962] after:opacity-40"></div>
      </SwiperSlide>

      <div className="sub-slider__overlay"></div>
    </Swiper>
  );
};

export default SubSlider;
