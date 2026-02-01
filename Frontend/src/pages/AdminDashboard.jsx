import { useEffect, useState } from "react";

export default function AdminDashboard() {
  const [orders, setOrders] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    fetch("http://localhost:5000/api/orders/admin", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load orders");
        return res.json();
      })
      .then(setOrders)
      .catch(() => alert("Failed to load orders"));
  }, []);

  const updateStatus = async (id, status) => {
    await fetch(`http://localhost:5000/api/orders/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ status }),
    });

    setOrders((prev) =>
      prev.map((o) =>
        o._id === id ? { ...o, status } : o
      )
    );
  };

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-6">Admin Orders</h1>

      {orders.map((order) => (
        <div
          key={order._id}
          className="border p-4 mb-4 rounded"
        >
          <p><b>User:</b> {order.user?.email}</p>
          <p><b>Status:</b> {order.status}</p>

          <select
            value={order.status}
            onChange={(e) =>
              updateStatus(order._id, e.target.value)
            }
            className="border mt-2 p-1"
          >
            <option>Pending</option>
            <option>Shipped</option>
            <option>Delivered</option>
          </select>
        </div>
      ))}
    </div>
  );
}
