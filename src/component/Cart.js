import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartitems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="min-h-[100vh] text-center m-4 p-4">
      <h1 className="font-bold text-2xl">Cart</h1>
      <div className="w-6/12 m-auto">
        <button
          className="bg-black text-white rounded-lg p-2 mt-2"
          onClick={handleClearCart}
        >
          ClearCart
        </button>
        {cartitems.length == 0 && (
          <h1 className="mt-10">Cart is Empty.Add new Items.</h1>
        )}
        <ItemList items={cartitems} />
      </div>
    </div>
  );
};
export default Cart;
