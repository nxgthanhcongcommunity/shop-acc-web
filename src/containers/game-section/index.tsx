import { Swiper, SwiperSlide } from "swiper/react";
import { AccountCard, NeonText } from "../../components";
import { Autoplay, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import { ArrowRightIcon } from "../../assets/icons";

const GameSection = ({ data, ...restProps }: any) => {
    const { title, cards, isSeeMore } = data;
    return (
        <div className="container mx-auto pt-20 ">
            <div className="px-6 text-center">
                <NeonText text={title}
                    className="my-12 inline-block text-center text-4xl font-extrabold lg:text-5xl"
                />
            </div>
            <Swiper
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                loop={true}
                slidesPerView={1}
                breakpoints={{
                    768: {
                        slidesPerView: 4,
                    },
                }}
                pagination={{
                    dynamicBullets: true,
                }}
                modules={[Autoplay, Pagination]}
                className="w-full"
            >
                {cards.map((card: any, index: any) => (
                    <SwiperSlide>
                        <AccountCard key={index} {...card} />
                    </SwiperSlide>
                ))}
            </Swiper>
            {isSeeMore && (
                <div className="mt-12 text-right">
                    <Link to="shop">
                        <div className="mr-32 inline-flex items-center gap-x-2 font-semibold text-title hover:text-blue-500">
                            Xem thêm <ArrowRightIcon className="h-5 w-5" />
                        </div>
                    </Link>
                </div>
            )}
        </div>
    );
}
export default GameSection;