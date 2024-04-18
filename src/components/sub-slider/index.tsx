// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { Autoplay } from "swiper/modules";

import "./sub-slider.css";
import { EmptyStartIcon, StartIcon } from "../../assets/icons";

interface ISubSliderProps {}

const SubSlider = {
  data: [
    {
      src: "https://html.nkdev.info/youplay/assets/images/dark/game-dragons-dogma-500x375.jpg",
    },
  ],

  Style1: (props: ISubSliderProps) => {
    return (
      <Swiper
        slidesPerView={4}
        spaceBetween={0}
        className="sub-slider"
        loop={true}
        modules={[Autoplay]}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      >
        {[1, 2, 3, 4, 1, 1, 1, 1, 1, 11].map(() => (
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
            <div className="-skew-x-6">
              <div className="relative before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:bg-[#160962] before:opacity-40 before:hover:opacity-20">
                <img
                  src="https://html.nkdev.info/youplay/assets/images/dark/game-dragons-dogma-500x375.jpg"
                  alt=""
                />
              </div>
            </div>
          </SwiperSlide>
        ))}

        <div className="sub-slider__overlay"></div>
      </Swiper>
    );
  },
  Style2: (props: ISubSliderProps) => {
    return (
      <Swiper
        slidesPerView={4}
        spaceBetween={0}
        className="sub-slider"
        loop={true}
        modules={[Autoplay]}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      >
        {[1, 2, 3, 4, 1, 1, 1, 1, 1, 11].map(() => (
          <SwiperSlide>
            <div className="-skew-x-6">
              <div className="relative before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:bg-[#160962] before:opacity-40 before:hover:opacity-20">
                <img
                  src="https://html.nkdev.info/youplay/assets/images/dark/game-dragons-dogma-500x375.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-y-3 py-6">
              <h4 className="text-center text-xl font-bold tracking-wider">
                Nick đột kích
              </h4>
              <span className="block h-[1px] w-[60%] bg-slate-700"></span>
              <p>Số tài khoản: 103</p>
            </div>
          </SwiperSlide>
        ))}
        <div className="sub-slider__overlay"></div>
      </Swiper>
    );
  },
};

export default SubSlider;
