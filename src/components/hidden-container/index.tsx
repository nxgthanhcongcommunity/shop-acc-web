import classNames from "classnames";

const HiddenContainer = ({ children, ...restProps }: any) => {
  const { side, show = false } = restProps;

  const defaultClasses =
    "absolute bg-menuItemBackground before:absolute before:top-[-40px] before:h-12 before:w-1/2 after:absolute after:bottom-full after:border-8 after:border-b-menuItemBackground after:border-l-transparent after:border-r-transparent after:border-t-transparent grid w-max h-max duration-300";

  const classNamesConfig = {
    "top-[calc(100%+50px)] opacity-0 invisible": show === false,
    "top-[calc(100%+20px)] opacity-100 visible": show === true,
    "right-0 before:right-0 after:right-2": side === "bottom-left",
    "left-0 before:left-0 after:left-2": side !== "bottom-left",
  };

  const resolvedClasses = `${defaultClasses} ${classNames(classNamesConfig)}`;

  return (
    <div className={resolvedClasses}>
      <div>{children}</div>
    </div>
  );
};

export default HiddenContainer;
