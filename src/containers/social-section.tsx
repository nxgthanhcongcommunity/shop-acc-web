import { Parallax } from "react-scroll-parallax";
import { GamePadIcon } from "../assets/icons";

const SocialSection = () => {
  return (
    <section className="relative z-10 mt-20 flex h-[50vh] flex-col items-center justify-between overflow-hidden">
      <div className="absolute left-0 top-0 -z-20 h-full w-full">
        <Parallax translateY={[-30, 30]}>
          <div className="relative z-20 before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:bg-[#160962] before:opacity-10">
            <img
              src="https://html.nkdev.info/youplay/assets/images/dark/footer-bg.jpg"
              alt=""
            />
          </div>
        </Parallax>
      </div>
      <div className="flex grow flex-col items-center justify-center">
        <h3 className="my-10 text-2xl font-medium">
          Connect socially with Youplay
        </h3>
        <ul className="grid grid-cols-4 gap-x-8">
          {[1, 2, 3, 4].map(() => (
            <li className="flex flex-col items-center gap-y-4 font-medium">
              <div className="flex h-[120px] w-[120px] -skew-x-6 items-center justify-center bg-[rgba(8,3,37,.7)] p-8">
                <GamePadIcon width={50} height={50} />
              </div>
              <h4>Subscribe to Discord</h4>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex h-[80px] w-full items-center justify-center bg-headerBackground">
        <h4 className="text-center">2020 © nK. All rights reserved</h4>
      </div>
    </section>
  );
};

export default SocialSection;
