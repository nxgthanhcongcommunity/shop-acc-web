import Button from "../button";

const Section = ({ title, seeMoreUrl, children }: any) => {
  return (
    <section className="mt-8">
      <header className="flex justify-between px-6 py-12 lg:px-20">
        <h2 className="text-3xl font-medium lg:text-5xl">{title}</h2>
        {("" + seeMoreUrl).length > 0 && <Button.SM>See more</Button.SM>}
      </header>
      {children}
    </section>
  );
};

export default Section;
