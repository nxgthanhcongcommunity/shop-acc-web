
import { useDispatch } from "react-redux";
import { Button } from "../../components";
import { addItem } from "../../stores/features/cartSlice";

interface IAddToCartProps {
    product: any;
}

const AddToCart = (props: IAddToCartProps) => {

    const { product } = props;

    console.log("product: ", product)

    const dispatch = useDispatch();

    const handleAddToCart = () => {



        const item = {
            id: product.id,
            code: product.code,
            name: product.name,
            price: product.price,
            quantity: 1,
            mainFileCLDId: product.mainFileCLDId,
        }

        dispatch(addItem(item));

    }

    return (
        <Button type="primary" onClick={handleAddToCart} >
            <i className="ti ti-shopping-cart mr-2"></i>
            Add to cart
        </Button>
    )
}

export default AddToCart;