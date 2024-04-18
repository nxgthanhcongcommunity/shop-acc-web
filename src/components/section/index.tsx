const Section = ({
  title,
  seeMoreUrl,
  children,
}: {
  title: any;
  seeMoreUrl: any;
  children: any;
}) => {
  return (
    <section className="mt-8">
      <header className="flex justify-between px-20 py-12">
        <h2 className="text-5xl font-medium">{title}</h2>
        {("" + seeMoreUrl).length > 0 && (
          <div
            className="text-md -skew-x-6  cursor-pointer border-2 px-[30px] py-[8px] hover:border-[#d92b4c] hover:bg-[#d92b4c]"
            style={{
              transition: ".3s background ease, .3s border ease",
            }}
          >
            See more
          </div>
        )}
      </header>
      {children}
    </section>
  );
};

export default Section;
