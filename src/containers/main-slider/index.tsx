import { Swiper, SwiperSlide } from "swiper/react";
import "./bullet.css";

import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { selectMaster, selectMasterLoading } from "../../stores/features/masterSlice";
import { useSelector } from "../../stores/hooks";
const { REACT_APP_API_URL } = process.env

const MainSliderItem = ({ item, ...restProps }: any) => {

  const { imgUrl, title, } = item;

  return (
    <>
      <div className="relative h-screen">
        <div className="absolute z-10 h-full w-full bg-[#160962] opacity-30"></div>
        <img
          className="absolute h-full w-full object-cover"
          src={`${REACT_APP_API_URL}/public/masters/${imgUrl}`}
          alt=""
        />
        <div className="absolute bottom-[10%] left-6 z-20 lg:left-24">
          <h4 className="mb-3 text-2xl font-semibold lg:mb-6 lg:text-3xl">
            {title}
          </h4>
        </div>
      </div>
    </>
  );
};

const MainSlider = () => {

  const masterData = useSelector(selectMaster);
  const masterDataLoading = useSelector(selectMasterLoading);

  if (masterDataLoading) { return <p>loading...</p> }

  const sliderConfigs = masterData.entity.sliders;

  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      loop={true}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
        bulletClass: "c-swiper-pagination-bullet",
        bulletActiveClass: "c-swiper-pagination-bullet--active",
      }}
      modules={[Autoplay, Pagination, Navigation]}
      className="group"
      parallax={true}
    >
      {sliderConfigs.map((item: any) => (
        <SwiperSlide key={item.code}>
          <MainSliderItem item={item} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default MainSlider;
