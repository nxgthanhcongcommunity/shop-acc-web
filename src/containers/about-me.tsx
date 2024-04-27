import { FacebookIcon, TelegramIcon, YoutubeIcon } from "../assets/icons";

const AboutMe = () => {
  return (
    <div className="bg-[#12082d]">
      <div className="mt-20 flex flex-col justify-between px-[12vw] py-10 lg:flex-row lg:py-0">
        <div className="flex flex-col items-start justify-center gap-y-16">
          <ul className="mb-12 flex gap-x-16">
            <li>
              <FacebookIcon width={30} height={30} />
            </li>
            <li>
              <TelegramIcon width={30} height={30} />
            </li>
            <li>
              <YoutubeIcon width={30} height={30} />
            </li>
          </ul>
          <div className="hidden text-5xl font-bold lg:block">
            <p>Let’s play together</p>
            <div className="flex">
              <p>just write to me</p>
              <span>&nbsp;-&nbsp;</span>
              <p className="text-[#dd53f5]">info@xmpl.com</p>
            </div>
          </div>
          <div className="text-2xl font-bold lg:hidden">
            <p>Let’s play together</p>
            <p>just write to me: </p>
            <p className="mt-4 text-[#dd53f5]">info@xmpl.com</p>
          </div>
        </div>
        <div>
          <img
            src="https://imba.themerex.net/wp-content/uploads/2024/01/footer-deco-img-copyright.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
