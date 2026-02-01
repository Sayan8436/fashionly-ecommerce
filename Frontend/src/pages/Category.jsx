// import { useParams } from "react-router-dom";
// import ProductCard from "../components/ProductCard";
// import products from "../data/products";

// export default function Category() {
//   const { name } = useParams();
//   const filtered = products.filter(p => p.category === name);

//   return (
//     <div className="px-10 py-20">
//       <h1 className="text-3xl font-semibold mb-10">{name}</h1>

//       <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
//         {filtered.map(product => (
//           <ProductCard key={product.id} product={product} />
//         ))}
//       </div>
//     </div>
//   );
// }
