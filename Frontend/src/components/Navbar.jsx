import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { jwtDecode } from "jwt-decode";

export default function Navbar() {
  const count = useSelector((state) => state.cart.items.length);
  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  /* ======================
     ADMIN CHECK
  ====================== */
  let isAdmin = false;

  if (token) {
    try {
      const decoded = jwtDecode(token);
      isAdmin = decoded.role === "admin";
    } catch (err) {
      isAdmin = false;
    }
  }

  /* ======================
     LOGOUT
  ====================== */
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className="bg-white shadow-md px-10 py-4 flex justify-between items-center">
      
      {/* LOGO */}
      <Link to="/" className="text-2xl font-bold text-pink-600">
        FASHIONLY
      </Link>

      {/* CATEGORY LINKS */}
      <div className="flex gap-6 font-medium">
        <Link to="/products/men">Men</Link>
        <Link to="/products/women">Women</Link>
        <Link to="/products/kids">Kids</Link>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex gap-6 items-center font-medium">
        <Link to="/cart">Cart ({count})</Link>

        {/* ORDERS */}
        {token && <Link to="/orders">Orders</Link>}

        {/* ADMIN LINK */}
        {isAdmin && (
          <Link
            to="/admin"
            className="text-blue-600 font-semibold"
          >
            Admin
          </Link>
        )}

        {/* AUTH BUTTONS */}
        {!token ? (
          <>
            <Link to="/login" className="font-semibold">
              Login
            </Link>

            <Link
              to="/signup"
              className="bg-pink-600 text-white px-4 py-1 rounded"
            >
              Signup
            </Link>
          </>
        ) : (
          <button
            onClick={handleLogout}
            className="font-semibold text-red-500"
          >
            Logout
          </button>
        )}
      </div>
    </nav>
  );
}
