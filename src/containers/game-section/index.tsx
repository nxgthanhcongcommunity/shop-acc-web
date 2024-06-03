import { Swiper, SwiperSlide } from "swiper/react";
import { AccountCard, NeonText } from "../../components";
import { Autoplay, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import { ArrowRightIcon } from "../../assets/icons";
import { useGetCategoriesByBannerCodeQuery } from "../../stores/services/master-data-api";

const GameSection = ({ banner }: any) => {

    const { name, code, isSeeMore = false } = banner;
    const { data: categories, isLoading: categoriesLoading } = useGetCategoriesByBannerCodeQuery(code);
    if (categoriesLoading) { return <p>loading...</p> }

    return (
        <div className="container mx-auto pt-20 ">
            <div className="px-6 text-center">
                <NeonText text={name}
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
                {
                    categories.map((category: any) => (
                        <SwiperSlide key={category.code}>
                            <AccountCard key={category.id} category={category} />
                        </SwiperSlide>
                    ))
                }
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