import { CreditCardIcon } from "../assets/icons";
import { Section } from "../components";

const WhyUsSection = (props: any) => {
  return (
    <Section title="Why Buy from Us" seeMoreUrl="">
      <ul className="grid grid-cols-2 gap-x-8  gap-y-8 px-8 lg:grid-cols-4 lg:px-20">
        {[1, 2, 3, 4].map((itemm, key) => (
          <li className="relative left-0 top-0 flex flex-col  items-center justify-center p-8 after:absolute after:h-full after:w-full after:bg-[rgba(255,255,255,.1)] lg:after:-skew-x-6">
            <span>
              <CreditCardIcon width={40} />
            </span>
            <h3 className="mb-3 mt-8 text-2xl font-semibold">Payment</h3>
            <p className="text-center font-medium">
              More than 10 payment systems
            </p>
          </li>
        ))}
      </ul>
    </Section>
  );
};
export default WhyUsSection;
