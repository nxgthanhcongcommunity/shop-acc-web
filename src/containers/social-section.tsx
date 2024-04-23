import { Parallax } from "react-scroll-parallax";
import { GamePadIcon } from "../assets/icons";

const SocialSection = () => {
  return (
    <>
      <section className="relative mt-20 h-[60vh] overflow-hidden">
        <div className="absolute z-10 h-full w-full bg-[#160962] opacity-30"></div>
        <img
          className="h-full object-cover"
          src="https://html.nkdev.info/youplay/assets/images/dark/footer-bg.jpg"
          alt=""
        />
        <div className="absolute left-1/2 top-1/2 z-20 flex h-full w-full -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center gap-y-8 lg:w-[60vw] lg:gap-y-16">
          <h3 className="text-center text-2xl font-medium lg:text-3xl">
            Connect socially with Youplay
          </h3>
          <ul className="grid grid-cols-2 gap-x-12 gap-y-12 lg:grid-cols-4 lg:gap-x-16">
            {[1, 2, 3, 4].map(() => (
              <li className="flex flex-col content-center items-center justify-center gap-y-4 font-medium">
                <div className="flex items-center justify-center bg-[rgba(8,3,37,.7)] p-10 lg:-skew-x-6">
                  <GamePadIcon width={50} height={50} />
                </div>
                <h4 className="text-center">Subscribe to Discord</h4>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <div className="flex h-[80px] w-full items-center justify-center bg-headerBackground">
        <h4 className="text-center">2020 © nK. All rights reserved</h4>
      </div>
    </>
  );
};

export default SocialSection;
