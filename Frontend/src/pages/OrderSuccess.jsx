import { Link } from "react-router-dom";

export default function OrderSuccess() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold text-green-600">
        Order Placed Successfully 🎉
      </h1>

      <Link
        to="/"
        className="mt-6 text-orange-500 font-semibold"
      >
        Continue Shopping
      </Link>
    </div>
  );
}
