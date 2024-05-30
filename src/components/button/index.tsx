
const Button = (props: any) => {

    const { type, twClasses, children } = props;

    switch (type) {
        case 'primary': return (
            <button className={`h-[46px] grow rounded-xl bg-[#1745a5] font-bold text-white hover:bg-blue-700 px-8 duration-150 ${twClasses}`}>
                {children}
            </button>
        )
        case 'special': return (
            <button className={`flex h-8 w-8 items-center justify-center rounded-md border border-slate-800 bg-[#12082d] text-xs font-bold text-slate-400 ${twClasses}`}>
                {children}
            </button>
        )
        default: return (
            <button className={`h-[46px] grow rounded-xl border-2 border-slate-200 hover:border-3like font-bold hover:text-3like text-slate-200  px-8 duration-150 ${twClasses}`}>
                {children}
            </button>
        )
    }
}

export default Button