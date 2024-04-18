const SliderItem = (props: any) => {
  return (
    <>
      <div className="relative h-full w-full bg-[url('https://html.nkdev.info/youplay/assets/images/dark/game-dark-souls-ii-2-1920x1248.jpg')] bg-cover bg-[center_top] after:absolute after:bottom-0 after:left-0 after:right-0 after:top-0 after:bg-[#160962] after:opacity-40"></div>
      <div className="absolute left-[10%] top-1/2 w-[40%] -translate-y-[40%]">
        <h1 className="text-5xl font-semibold tracking-wide">
          KINGDOMS OF AMALUR: RECKHONG
        </h1>
        <div className="h-8"></div>
        <div
          className="text-md inline-block cursor-pointer border-2 px-[30px] py-[10px] font-medium hover:border-[#d92b4c] hover:bg-[#d92b4c]"
          style={{
            transform: "skew(-7deg)",
            transition: ".3s background ease, .3s border ease",
          }}
        >
          Purchase
        </div>
      </div>
    </>
  );
};
export default SliderItem;
