import { useSwiper } from "swiper/react";
import { CarretLeftIcon, CarretRightIcon } from "../../assets/icons";

const NaviagtionButton = (props: any) => {
  const swiper = useSwiper();
  const { navType } = props;
  let isPrev = navType === "prev";

  return (
    <div
      className={`absolute opacity-0 group-hover:opacity-100 ${isPrev ? "left-4" : "right-4"} top-1/2 z-20 -translate-y-1/2 -skew-x-6 -skew-y-6 cursor-pointer bg-headerBackground px-1 py-8 duration-300 ease-in-out`}
      onClick={() => {
        if (isPrev) {
          swiper.slidePrev();
        } else {
          swiper.slideNext();
        }
      }}
    >
      {isPrev ? (
        <CarretLeftIcon width={20} height={20} />
      ) : (
        <CarretRightIcon width={20} height={20} />
      )}
    </div>
  );
};

export default NaviagtionButton;
