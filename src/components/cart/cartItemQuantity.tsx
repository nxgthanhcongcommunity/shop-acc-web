import { useDispatch } from "react-redux";
import { RootState } from "../../stores";
import { updateItemQuantity } from "../../stores/features/cartSlice";
import { useSelector } from "../../stores/hooks";

const CartItemQuantity = (props: any) => {

    const { code } = props;
    const itemQuantity = useSelector((state: RootState) => state.cart.items.find(item => item.code === code)?.quantity);

    const dispatch = useDispatch();

    const handleItemQuantityChange = (e: any) => {
        const newQuantity = e.target.value;
        dispatch(updateItemQuantity({
            code,
            quantity: newQuantity,
        }))
    }

    return (
        <input
            className="w-12 rounded-md border border-slate-600 bg-transparent pl-2 text-slate-300 outline-none"
            type="number"
            name=""
            id=""
            onChange={handleItemQuantityChange}
            value={itemQuantity}
        />
    )
}

export default CartItemQuantity;