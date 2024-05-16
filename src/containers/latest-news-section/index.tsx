import { Swiper, SwiperSlide } from "swiper/react";

const getRandomArbitrary = (min: any, max: any) => {
    return Math.ceil(Math.random() * (max - min) + min);
}

const LatestNewItem = (props: any) => {

    const height = getRandomArbitrary(200, 350);
    const { src, title, date, commnentCount } = props
    return (
        <div >
            <img style={{ height, width: "100%" }} className="object-cover" src={src} alt="" />
            <p className="text-md font-medium uppercase my-2">games</p>
            <h5 className="text-[30px] font-bold my-3">{title}</h5>
            <div className="flex text-slate-400">
                <span>{date} &sdot; {commnentCount} Comments</span>
            </div>
        </div>
    );
}

const LatestNew = () => {
    const fakeData = [
        { src: "https://imba.themerex.net/wp-content/uploads/2022/03/imba-img-61-copyright-840x795.jpg", title: "Building the best Minecraft world of at all time", date: "Mar 19, 2020", commnentCount: 200 },
        { src: "https://imba.themerex.net/wp-content/uploads/2022/03/imba-img-61-copyright-840x795.jpg", title: "Building the best Minecraft world of at all time", date: "Mar 19, 2020", commnentCount: 200 },
        { src: "https://imba.themerex.net/wp-content/uploads/2022/03/imba-img-61-copyright-840x795.jpg", title: "Building the best Minecraft world of at all time", date: "Mar 19, 2020", commnentCount: 200 },
        { src: "https://imba.themerex.net/wp-content/uploads/2022/03/imba-img-61-copyright-840x795.jpg", title: "Building the best Minecraft world of at all time", date: "Mar 19, 2020", commnentCount: 200 },
        { src: "https://imba.themerex.net/wp-content/uploads/2022/03/imba-img-61-copyright-840x795.jpg", title: "Building the best Minecraft world of at all time", date: "Mar 19, 2020", commnentCount: 200 },
        { src: "https://imba.themerex.net/wp-content/uploads/2022/03/imba-img-61-copyright-840x795.jpg", title: "Building the best Minecraft world of at all time", date: "Mar 19, 2020", commnentCount: 200 },
        { src: "https://imba.themerex.net/wp-content/uploads/2022/03/imba-img-61-copyright-840x795.jpg", title: "Building the best Minecraft world of at all time", date: "Mar 19, 2020", commnentCount: 200 },
        { src: "https://imba.themerex.net/wp-content/uploads/2022/03/imba-img-61-copyright-840x795.jpg", title: "Building the best Minecraft world of at all time", date: "Mar 19, 2020", commnentCount: 200 },

    ]


    return (
        <section className="my-28">
            <h1 className="my-12 text-5xl font-extrabold text-title text-center">Tin tức mới nhất</h1>
            <div className="lg:px-0 px-6">
                <Swiper
                    initialSlide={2}
                    slidesPerView={1}
                    breakpoints={{
                        768: {
                            slidesPerView: 4,
                        },
                    }}
                    loop={true}
                    centeredSlides={true}
                    slot="container-start"
                    spaceBetween={50}
                    grabCursor={true}
                >
                    {
                        fakeData.map((item, index) => (
                            <SwiperSlide key={index}>
                                <LatestNewItem {...item} />
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </section>
    )
}

export default LatestNew;