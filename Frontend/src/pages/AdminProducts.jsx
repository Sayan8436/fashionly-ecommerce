import { useEffect, useState } from "react";

export default function AdminProducts() {
  const [products, setProducts] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    fetch("https://fashionly-backend-26ij.onrender.com/api/admin/products", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(res => res.json())
      .then(setProducts);
  }, []);

  const deleteProduct = async (id) => {
    if (!window.confirm("Delete this product?")) return;

    await fetch(
      `https://fashionly-backend-26ij.onrender.com/api/admin/product/${id}`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    setProducts(products.filter(p => p._id !== id));
  };

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-6">Admin Products</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map(product => (
          <div key={product._id} className="border p-4 rounded">
            <img
              src={product.imagesByColor?.[Object.keys(product.imagesByColor)[0]]}
              className="h-40 w-full object-cover mb-3"
              alt={product.name}
            />

            <h2 className="font-semibold">{product.name}</h2>
            <p>₹{product.price}</p>

            <button
              onClick={() => deleteProduct(product._id)}
              className="mt-3 bg-red-600 text-white px-4 py-2"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
