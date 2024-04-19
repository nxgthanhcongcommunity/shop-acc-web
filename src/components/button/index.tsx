
const Button = {
    XS: (props : any) => {
        const {fill, children} = props;
        if(fill) {
            return (
                <div className="inline-block text-xs px-6 py-2 border-2 bg-[#d92b4c] border-[#d92b4c] cursor-pointer -skew-x-6 duration-300">
                    {children}
                </div>
            )
        }
        return (
            <div className="inline-block text-xs px-6 py-2 border-2 hover:bg-[#d92b4c] hover:border-[#d92b4c] cursor-pointer -skew-x-6 duration-300">
              {children}
            </div>
        )
    },
}

export default Button;