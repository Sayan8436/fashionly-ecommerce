import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { createOrder } from "../api/orderApi";

export default function Payment() {
  const navigate = useNavigate();
  const cartItems = useSelector(state => state.cart.items);
  const address = useSelector(state => state.cart.address); // if you saved address
  const dispatch = useDispatch();

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  const handlePlaceOrder = async () => {
    try {
      const orderData = {
        items: cartItems,
        shippingAddress: address || {
          fullName: "Guest User",
          address: "Not Provided",
          city: "NA",
          postalCode: "000000",
          country: "India",
        },
        totalPrice,
      };

      await createOrder(orderData);
      navigate("/success");
    } catch (error) {
      alert("Order failed");
    }
  };

  return (
    <div className="max-w-xl mx-auto p-8">
      <h1 className="text-xl font-semibold mb-4">
        Order Summary
      </h1>

      <p className="mb-4 font-semibold">
        Total: ₹{totalPrice}
      </p>

      <button
        onClick={handlePlaceOrder}
        className="w-full bg-green-600 text-white py-3 font-semibold"
      >
        PLACE ORDER
      </button>
    </div>
  );
}
