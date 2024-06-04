import { toggleCheckItem } from "../../stores/features/cartSlice";
import { useDispatch } from "../../stores/hooks";
import { IToggleCheckedItemProps } from "./props";

const ToggleCheckedItem = (props: IToggleCheckedItemProps) => {

    const { code, isChecked } = props;

    const dispatch = useDispatch();

    const handleChange = (e: any) => {
        dispatch(toggleCheckItem(code));
    }

    return (
        <input type="checkbox" onChange={handleChange} defaultChecked={isChecked} />
    )
}


export default ToggleCheckedItem;