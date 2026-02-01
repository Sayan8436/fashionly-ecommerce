import { Link, useParams } from "react-router-dom";
import { products } from "../data/products";

export default function ProductList() {
  const { category } = useParams();

  const filteredProducts = products.filter(
    product => product.category === category
  );

  return (
    <div className="p-10">
      <h1 className="text-xl font-semibold mb-6 capitalize">
        {category} Products
      </h1>

      {filteredProducts.length === 0 && (
        <p>No products found</p>
      )}

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {filteredProducts.map(product => {
          const previewImage = product.images
            ? product.images[0]
            : Object.values(product.imagesByColor)[0];

          return (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              className="bg-white p-3 shadow hover:shadow-lg transition"
            >
              <img
                src={previewImage}
                alt={product.name}
                className="h-64 w-full object-cover mb-3"
              />

              <h3 className="text-sm">{product.name}</h3>

              <div className="flex gap-2 items-center">
                <span className="font-semibold">₹{product.price}</span>
                <span className="text-gray-400 line-through text-sm">
                  ₹{product.mrp}
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}


