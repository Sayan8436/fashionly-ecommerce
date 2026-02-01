const BASE_URL = "https://fashionly-backend-26ij.onrender.com";

/* =========================
   CREATE ORDER
========================= */
export const createOrder = async (orderData) => {
  const token = localStorage.getItem("token");

  const response = await fetch(`${BASE_URL}/api/orders`, {
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

/* =========================
   GET USER ORDERS
========================= */
export const getOrders = async () => {
  const token = localStorage.getItem("token");

  const response = await fetch(`${BASE_URL}/api/orders`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error("Unauthorized");
  }

  return response.json();
};

