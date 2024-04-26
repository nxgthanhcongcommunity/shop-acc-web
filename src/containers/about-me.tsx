import { FacebookIcon, TelegramIcon, YoutubeIcon } from "../assets/icons";

const AboutMe = () => {
    return (
        <div>
            <div className="py-10 lg:py-0 lg:flex-row flex-col flex justify-between bg-[#12082d] mt-20 px-[12vw]">
                <div className="flex justify-center items-start flex-col gap-y-16">
                    <ul className="flex gap-x-16 mb-12">
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
                    <div className="hidden lg:block text-5xl font-bold">
                        <p>Let’s play together</p>
                        <div className="flex">
                            <p>just write to me</p>
                            <span>&nbsp;-&nbsp;</span>
                            <p className="text-[#dd53f5]">info@xmpl.com</p>
                        </div>
                    </div>
                    <div className="lg:hidden text-2xl font-bold">
                        <p>Let’s play together</p>
                        <p>just write to me: </p>
                        <p className="text-[#dd53f5] mt-4">info@xmpl.com</p>
                    </div>
                    
                    <p className="text-[rgb(186,175,220)] font-medium">ThemeREX © 2024. All Rights Reserved. Developer: nxgthanhcong</p>
                </div>
                <div>
                    <img src="https://imba.themerex.net/wp-content/uploads/2024/01/footer-deco-img-copyright.png" alt="" />
                </div>
            </div>
        </div>
    );
}

export default AboutMe;