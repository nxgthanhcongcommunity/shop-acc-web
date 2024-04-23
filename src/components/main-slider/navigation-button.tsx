import { useSwiper } from "swiper/react";
import { CarretLeftIcon, CarretRightIcon } from "../../assets/icons";

const NaviagtionButton = (props: any) => {
  const swiper = useSwiper();
  const { navType } = props;
  let isPrev = navType === "prev";

  return (
    <div
      className={`invisible absolute opacity-0 group-hover:opacity-100 lg:visible ${isPrev ? "left-4" : "right-4"} top-1/2 z-20 -translate-y-1/2 -skew-x-6 -skew-y-6 cursor-pointer bg-headerBackground px-[1px] py-4 duration-300 ease-in-out lg:px-1 lg:py-8`}
      onClick={() => {
        if (isPrev) {
          swiper.slidePrev();
        } else {
          swiper.slideNext();
        }
      }}
    >
      {isPrev ? (
        <CarretLeftIcon className="h-5 lg:w-5" />
      ) : (
        <CarretRightIcon className="h-5 w-5" />
      )}
    </div>
  );
};

export default NaviagtionButton;
