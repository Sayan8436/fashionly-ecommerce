import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../redux/cartSlice";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const cartItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  if (cartItems.length === 0) {
    return (
      <div className="p-10 text-center">
        <h2 className="text-xl font-semibold">Your cart is empty</h2>
      </div>
    );
  }

  return (
    <div className="p-10 bg-gray-100 min-h-screen">
      <h1 className="text-xl font-semibold mb-6">Cart</h1>

      <div className="grid md:grid-cols-3 gap-6">
        
        {/* LEFT: CART ITEMS */}
        <div className="md:col-span-2 space-y-4">
          {cartItems.map(item => (
            <div
              key={`${item.id}-${item.color}-${item.size}`}
              className="bg-white p-4 flex gap-4 shadow-sm"
            >
              {/* IMAGE */}
              <img
                src={item.image}
                alt={item.name}
                className="w-28 h-36 object-cover"
              />

              {/* DETAILS */}
              <div className="flex-1">
                <h3 className="font-semibold">{item.name}</h3>

                <p className="text-sm text-gray-600">
                  Color: {item.color}
                  {item.size && ` | Size: ${item.size}`}
                </p>

                <p className="mt-2 font-semibold">₹{item.price}</p>

                {/* QUANTITY CONTROLS */}
                <div className="flex items-center gap-3 mt-3">
                  <button
                    onClick={() =>
                      dispatch(
                        addToCart({
                          ...item,
                          qty: -1,
                        })
                      )
                    }
                    disabled={item.qty <= 1}
                    className="w-8 h-8 border"
                  >
                    −
                  </button>

                  <span>{item.qty}</span>

                  <button
                    onClick={() =>
                      dispatch(
                        addToCart({
                          ...item,
                          qty: 1,
                        })
                      )
                    }
                    className="w-8 h-8 border"
                  >
                    +
                  </button>
                </div>

                {/* ACTIONS */}
                <div className="flex gap-6 mt-3 text-sm font-semibold">
                  <button className="text-gray-500">
                    SAVE FOR LATER
                  </button>

                  <button
                    onClick={() =>
                      dispatch(
                        removeFromCart({
                          id: item.id,
                          color: item.color,
                          size: item.size,
                        })
                      )
                    }
                    className="text-gray-500"
                  >
                    REMOVE
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT: PRICE SUMMARY */}
        <div className="bg-white p-6 shadow-sm h-fit">
          <h3 className="font-semibold mb-4">PRICE DETAILS</h3>

          <div className="flex justify-between text-sm mb-2">
            <span>Total Items</span>
            <span>{cartItems.length}</span>
          </div>

          <div className="flex justify-between text-sm mb-2">
            <span>Total Price</span>
            <span>₹{totalPrice}</span>
          </div>

          <hr className="my-3" />

          <div className="flex justify-between font-semibold text-lg">
            <span>Total Amount</span>
            <span>₹{totalPrice}</span>
          </div>

          <button
            onClick={() => navigate("/checkout")}
            className="w-full mt-6 bg-orange-500 hover:bg-orange-600 text-white py-3 font-semibold"
          >
            PLACE ORDER
          </button>
        </div>
      </div>
    </div>
  );
}
