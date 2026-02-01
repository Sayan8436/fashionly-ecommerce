import { useEffect, useState } from "react";
import { getOrders } from "../api/orderApi";

export default function OrderHistory() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const data = await getOrders();
        setOrders(data);
      } catch (error) {
        alert("Failed to load orders");
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  if (loading) {
    return <div className="p-10">Loading orders...</div>;
  }

  if (orders.length === 0) {
    return <div className="p-10">No orders found</div>;
  }

  return (
    <div className="max-w-5xl mx-auto p-8">
      <h1 className="text-2xl font-semibold mb-6">
        My Orders
      </h1>

      {orders.map(order => (
        <div
          key={order._id}
          className="border p-4 mb-6 rounded"
        >
          <p className="text-sm text-gray-500">
            Order ID: {order._id}
          </p>

          <p className="font-semibold mt-2">
            Total: ₹{order.totalPrice}
          </p>

          <p className="text-sm">
            Payment Status: {order.paymentStatus}
          </p>

          <div className="mt-3">
            {order.items.map((item, index) => (
              <div key={index} className="text-sm">
                {item.name} × {item.qty}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
