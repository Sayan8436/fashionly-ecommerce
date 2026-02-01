import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Address() {
  const navigate = useNavigate();
  const [address, setAddress] = useState("");

  return (
    <div className="max-w-xl mx-auto p-8">
      <h1 className="text-2xl font-semibold mb-6">Delivery Address</h1>

      <textarea
        className="w-full border p-3 mb-4"
        rows="4"
        placeholder="Enter your full address"
        value={address}
        onChange={e => setAddress(e.target.value)}
      />

      <button
        disabled={!address}
        onClick={() => navigate("/payment")}
        className="bg-orange-500 text-white px-6 py-3 font-semibold disabled:opacity-50"
      >
        CONTINUE TO PAYMENT
      </button>
    </div>
  );
}
