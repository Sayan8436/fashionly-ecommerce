// import { Link } from "react-router-dom";
// import { useCart } from "../context/CartContext";

// export default function ProductCard({ product }) {
//   const { addToCart } = useCart();

//   return (
//     <div className="group">
      
//       {/* Image → Details Page */}
//       <Link to={`/product/${product.id}`}>
//         <div className="overflow-hidden rounded-xl h-[320px] bg-gray-100">
//           <img
//             src={product.image}
//             alt={product.name}
//             className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
//           />
//         </div>
//       </Link>

//       <div className="mt-4">
//         <h4 className="font-medium">{product.name}</h4>
//         <p className="text-gray-500">₹{product.price}</p>
//       </div>

//       {/* ACTION BUTTON */}
//       <button
//         onClick={() => addToCart(product)}
//         className="mt-3 w-full bg-black text-white py-2 rounded-full text-sm hover:bg-gray-800"
//       >
//         Add to Cart
//       </button>
//     </div>
//   );
// }


import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <Link to={`/product/${product._id}`}>
      <div className="bg-white p-3 shadow hover:shadow-lg transition">
        <img
          src={product.image}
          alt={product.name}
          className="h-64 w-full object-cover"
        />
        <h3 className="mt-2 text-sm">{product.name}</h3>
        <p className="text-sm font-semibold">₹{product.price}</p>
      </div>
    </Link>
  );
}
