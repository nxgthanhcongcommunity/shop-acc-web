import { CreditCardIcon, GamePadIcon } from "../assets/icons";

const SocialSection = () => {
  return (
    <>
      <section className="relative mt-20 h-[80vh] overflow-hidden lg:h-[60vh]">
        <div className="absolute z-10 h-full w-full bg-[#160962] opacity-30"></div>
        <div className="absolute z-[9] h-full">
          <img
            className="h-full object-cover"
            src="https://html.nkdev.info/youplay/assets/images/dark/footer-bg.jpg"
            alt=""
          />
        </div>

        <div className="absolute left-1/2 top-1/2 z-20 flex h-full w-full -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center gap-y-8 lg:w-[60vw] lg:gap-y-16">
          <h3 className="text-center text-2xl font-medium lg:text-3xl">
            Connect socially with Youplay
          </h3>
          <ul className="grid grid-cols-2 gap-x-8 gap-y-8 px-8 lg:grid-cols-4 lg:gap-x-24">
            {[1, 2, 3, 4].map(() => (
              <li className="relative flex flex-col  items-center justify-center px-12 py-4 lg:px-24 lg:py-6">
                <div className="absolute left-0 top-0 z-[-1] h-full w-full -skew-x-6 bg-headerBackground"></div>
                <span>
                  <CreditCardIcon className="w-8 lg:w-12" />
                </span>
                <h3 className="text-md lg:text-md mt-3 font-semibold">
                  Discord
                </h3>
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
