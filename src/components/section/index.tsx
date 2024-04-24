import Button from "../button";

const Section = ({ title, seeMoreUrl, children }: any) => {
  return (
    <section className="mt-8">
      <header className="flex items-center justify-between px-6 py-8 lg:px-20 lg:py-12">
        <h2 className="text-2xl font-semibold lg:text-4xl text-center w-full">{title}</h2>
        {
          seeMoreUrl != null && seeMoreUrl.length > 0
          ? <Button.SM>See more</Button.SM>
          : null
        }
      </header>
      {children}
    </section>
  );
};

export default Section;
