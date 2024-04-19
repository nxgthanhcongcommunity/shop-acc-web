
const HiddenContainer = ({children, ...restProps}: any) => {

  const {side, isShow} = restProps;

  console.log('isShow: ', isShow)

  let displayClasses = "top-[calc(100%+50px)] opacity-0 invisible";
  if(isShow) {
    displayClasses = "top-[calc(100%+20px)] opacity-100 visible";
  }

  let defaultClassNames = "absolute bg-menuItemBackground before:absolute before:top-[-40px] before:h-12 before:w-1/2 after:absolute after:bottom-full after:border-8 after:border-b-menuItemBackground after:border-l-transparent after:border-r-transparent after:border-t-transparent grid w-max h-max duration-150" + " " + displayClasses;

  if(side == "bottom-left"){
    return (
      <div className={defaultClassNames + " before:right-0 after:right-2 right-0"}>
      <div>
        {children}
      </div>
    </div>
  );
  }

    return (
        <div className={defaultClassNames + " before:left-0 after:left-2 left-0"}>
        <div>
          {children}
        </div>
      </div>
    );
}

export default HiddenContainer;