import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Checkout() {
  const cartItems = useSelector(state => state.cart.items);
  const navigate = useNavigate();

  if (cartItems.length === 0) {
    return <div className="p-10">Your cart is empty</div>;
  }

  return (
    <div className="max-w-5xl mx-auto p-8">
      <h1 className="text-2xl font-semibold mb-6">Checkout</h1>

      {cartItems.map(item => (
        <div key={item.id} className="flex gap-4 mb-4 border-b pb-4">
          <img src={item.image} className="w-20 h-24 object-cover" />
          <div>
            <h3 className="font-semibold">{item.name}</h3>
            <p className="text-sm">
              {item.color} | {item.size}
            </p>
            <p>Qty: {item.qty}</p>
            <p className="font-semibold">₹{item.price}</p>
          </div>
        </div>
      ))}

      <button
        onClick={() => navigate("/address")}
        className="mt-6 bg-orange-500 text-white px-6 py-3 font-semibold"
      >
        CONTINUE
      </button>
    </div>
  );
}
