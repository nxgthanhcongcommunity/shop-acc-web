import classNames from "classnames";

const Button = {
  getClasses: (actived: any) => {
    const defaultClasses =
      "inline-block h-full -skew-x-6 cursor-pointer border-2 duration-300";

    const classNamesConfig = {
      "hover:border-[#d92b4c] hover:bg-[#d92b4c]": actived === false,
      "border-[#d92b4c] bg-[#d92b4c]": actived === true,
    };

    return `${defaultClasses} ${classNames(classNamesConfig)}`;
  },

  XS: ({ actived = false, children, ...restProps }: any) => {
    return (
      <div
        className={`px-[15px] py-[4px] text-xs ${Button.getClasses(actived)}`}
        {...restProps}
      >
        {children}
      </div>
    );
  },

  SM: ({ actived = false, children, ...restProps }: any) => {
    return (
      <div
        className={`px-5 py-2 text-sm ${Button.getClasses(actived)}`}
        {...restProps}
      >
        {children}
      </div>
    );
  },

  MD: ({ actived = false, children, ...restProps }: any) => {
    return (
      <div
        className={`text-md px-[30px] py-[10px] ${Button.getClasses(actived)}`}
        {...restProps}
      >
        {children}
      </div>
    );
  },

  LG: ({ actived = false, children, ...restProps }: any) => {
    return (
      <div
        className={`px-[50px] py-[15px] text-lg ${Button.getClasses(actived)}`}
        {...restProps}
      >
        {children}
      </div>
    );
  },

  Public: () => ({
    XS: Button.XS,
    SM: Button.SM,
    MD: Button.MD,
    LG: Button.LG,
  }),
};

export default Button.Public();
