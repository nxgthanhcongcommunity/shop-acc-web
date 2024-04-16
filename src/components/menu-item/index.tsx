const MenuItem = (props: any) => {
  return (
    <li className="relative flex flex-col">
      <div className="flex items-center gap-x-1">
        <h4 className="text-sm font-medium uppercase">store</h4>
        <span>
          <svg
            fill="currentColor"
            width={10}
            height={10}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512"
          >
            <path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z" />
          </svg>
        </span>
      </div>
      <span className="text-[10px] text-white/50">games</span>

      <ul
        style={{ top: "calc(100% + 10px)" }}
        className="absolute top-full grid w-max
        grid-cols-2 gap-x-12
        bg-menuItemBackground px-6
        py-4 before:absolute before:left-0 before:top-[-10px] before:h-4 before:w-1/2"
      >
        <li className="">item</li>
        <li className="">item</li>
        <li className="">item</li>
        <li className="">item</li>
        <li className="">item</li>
      </ul>
    </li>
  );
};
export default MenuItem;
