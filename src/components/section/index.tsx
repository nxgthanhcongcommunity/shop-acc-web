import Button from "../button";

const Section = ({ title, seeMoreUrl, children }: any) => {
  return (
    <section className="mt-8">
      <header className="flex justify-between px-20 py-12">
        <h2 className="text-5xl font-medium">{title}</h2>
        {("" + seeMoreUrl).length > 0 && <Button.MD>See more</Button.MD>}
      </header>
      {children}
    </section>
  );
};

export default Section;
