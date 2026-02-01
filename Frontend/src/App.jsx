import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Address from "./pages/Address";
import Payment from "./pages/Payment";
import OrderSuccess from "./pages/OrderSuccess";
import OrderHistory from "./pages/OrderHistory";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import AdminDashboard from "./pages/AdminDashboard";

import {jwtDecode} from "jwt-decode";

/* ======================
   AUTH HELPERS
====================== */

const isLoggedIn = () => {
  return !!localStorage.getItem("token");
};

const isAdmin = () => {
  const token = localStorage.getItem("token");
  if (!token) return false;

  try {
    const decoded = jwtDecode(token);
    return decoded.role === "admin";
  } catch {
    return false;
  }
};

/* ======================
   APP
====================== */

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        {/* PUBLIC */}
        <Route path="/" element={<Home />} />
        <Route path="/products/:category" element={<ProductList />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* CART FLOW */}
        <Route path="/cart" element={<Cart />} />

        <Route
          path="/checkout"
          element={isLoggedIn() ? <Checkout /> : <Navigate to="/login" />}
        />

        <Route
          path="/address"
          element={isLoggedIn() ? <Address /> : <Navigate to="/login" />}
        />

        <Route
          path="/payment"
          element={isLoggedIn() ? <Payment /> : <Navigate to="/login" />}
        />

        <Route
          path="/success"
          element={isLoggedIn() ? <OrderSuccess /> : <Navigate to="/login" />}
        />

        <Route
          path="/orders"
          element={isLoggedIn() ? <OrderHistory /> : <Navigate to="/login" />}
        />

        {/* ADMIN */}
        <Route
          path="/admin"
          element={isAdmin() ? <AdminDashboard /> : <Navigate to="/" />}
        />
      </Routes>
    </BrowserRouter>
  );
}

