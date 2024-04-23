import useToggleVisibility from "../../hooks/useToggleVisibility";

const ToggleContainer = ({children}: any) => {
    const [isVisible, toggleVisibility, ref] = useToggleVisibility(false);
    return <div ref={ref} onClick={toggleVisibility}>
        {children}
    </div>
}

export default ToggleContainer;