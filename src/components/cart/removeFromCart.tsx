import { useDispatch } from "react-redux"
import { removeItem } from "../../stores/features/cartSlice";

const RemoveFromCart = (props: { code: string }) => {

    const { code } = props;

    const dispatch = useDispatch();

    const handleRemoveFromCart = () => {
        dispatch(removeItem(code));
    }

    return (
        <span className="font-bold cursor-pointer text-slate-600" onClick={handleRemoveFromCart}>
            <i className="ti ti-close"></i>
        </span>
    )
}

export default RemoveFromCart;