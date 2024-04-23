import { Swiper, SwiperSlide } from "swiper/react";
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

  ContentCenter: (props: ISubSliderProps) => {
    return (
      <Swiper
        slidesPerView={2}
        breakpoints={{
          768: {
            slidesPerView: 4,
          },
        }}
        spaceBetween={0}
        className="sub-slider h-[180px] lg:h-auto"
        loop={true}
        modules={[Autoplay]}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      >
        {[1, 2, 3, 4, 1, 1, 1, 1, 1, 11].map((item, index) => (
          <SwiperSlide key={index}>
            <div className="absolute z-10 flex h-full w-full flex-col items-center justify-center gap-y-6">
              <h4 className="text-md text-center font-bold tracking-wider lg:text-xl">
                Lord of fallen
              </h4>
              <ul className="flex gap-x-1">
                <li>
                  <StartIcon className="h-3 w-3 lg:h-4 lg:w-4" />
                </li>
                <li>
                  <StartIcon className="h-3 w-3 lg:h-4 lg:w-4" />
                </li>
                <li>
                  <StartIcon className="h-3 w-3 lg:h-4 lg:w-4" />
                </li>
                <li>
                  <StartIcon className="h-3 w-3 lg:h-4 lg:w-4" />
                </li>
                <li>
                  <EmptyStartIcon className="h-3 w-3 lg:h-4 lg:w-4" />
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

  ContentBottom: (props: ISubSliderProps) => {
    return (
      <Swiper
        slidesPerView={2}
        breakpoints={{
          768: {
            slidesPerView: 4,
          },
        }}
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
        {[1, 2, 3, 4, 1, 1, 1, 1, 1, 11].map((item, index) => (
          <SwiperSlide key={index}>
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
