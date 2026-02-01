export const createOrder = async (orderData) => {
     const token = localStorage.getItem("token");
  const response = await fetch("http://localhost:5000/api/orders", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(orderData),
  });

  if (!response.ok) {
    throw new Error("Failed to place order");
  }

  return response.json();
};

export const getOrders = async () => {
  const token = localStorage.getItem("token");

  const response = await fetch("http://localhost:5000/api/orders", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error("Unauthorized");
  }

  return response.json();
};

