// import { useState } from "react";
// import ProductCard from "../components/ProductCard";
// import productsData from "../data/products";

// const categories = ["All", "Men", "Women", "Accessories"];

// export default function Home() {
//   const [active, setActive] = useState("All");

//   const filtered =
//     active === "All"
//       ? productsData
//       : productsData.filter(p => p.category === active);

//   return (
//     <div className="bg-white min-h-screen">

//       {/* HERO */}
//       <section className="bg-black text-white py-28 text-center px-6">
//         <h2 className="text-5xl font-bold mb-4">Elevate Your Style</h2>
//         <p className="text-gray-400 max-w-xl mx-auto">
//           Premium fashion crafted for modern lifestyles.
//         </p>
//       </section>

//       {/* CATEGORIES */}
//       <div className="flex gap-6 justify-center py-12 text-sm font-medium">
//         {categories.map(cat => (
//           <button
//             key={cat}
//             onClick={() => setActive(cat)}
//             className={`pb-2 ${
//               active === cat
//                 ? "border-b-2 border-black"
//                 : "text-gray-400"
//             }`}
//           >
//             {cat}
//           </button>
//         ))}
//       </div>

//       {/* PRODUCTS */}
//       <section className="px-6 md:px-10 pb-20">
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
//           {filtered.map(product => (
//             <ProductCard key={product.id} product={product} />
//           ))}
//         </div>
//       </section>

//     </div>
//   );
// }

import { Link } from "react-router-dom";
import { products } from "../data/products";

export default function Home() {
  return (
    <div className="bg-gray-50">

      {/* HERO SECTION */}
      <section className="bg-gradient-to-r from-pink-600 to-orange-500 text-white">
        <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Fashion That <br /> Defines You
            </h1>
            <p className="mt-4 text-lg opacity-90">
              Discover the latest trends in fashion for Men, Women & Kids.
            </p>

            <div className="mt-6 flex gap-4">
              <Link
                to="/products/men"
                className="bg-white text-black px-6 py-3 font-semibold"
              >
                Shop Men
              </Link>

              <Link
                to="/products/women"
                className="border border-white px-6 py-3 font-semibold"
              >
                Shop Women
              </Link>
            </div>
          </div>

          <img
            src="/images/hero-fashion.png"
            alt="Fashion"
           className="
    hidden md:block
    w-[320px] lg:w-[380px]
    mx-auto
    drop-shadow-2xl
  "
          />
        </div>
      </section>

      {/* CATEGORY SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-semibold mb-8 text-center">
          Shop By Category
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: "Men", img: "/images/category-men.jpg", link: "/products/men" },
            { title: "Women", img: "/images/category-women.avif", link: "/products/women" },
            { title: "Kids", img: "/images/category-kids.jpg", link: "/products/kids" },
          ].map(cat => (
            <Link
              key={cat.title}
              to={cat.link}
              className="group bg-white shadow hover:shadow-lg transition"
            >
              <img
                src={cat.img}
                alt={cat.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold group-hover:text-pink-600">
                  {cat.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-semibold mb-8 text-center">
            Featured Products
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {products.slice(0, 8).map(product => {
              const image =
                product.imagesByColor
                  ? Object.values(product.imagesByColor)[0]
                  : product.images?.[0];

              return (
                <Link
                  key={product.id}
                  to={`/product/${product.id}`}
                  className="border hover:shadow-lg transition bg-white"
                >
                  <img
                    src={image}
                    alt={product.name}
                    className="w-full h-64 object-cover"
                  />

                  <div className="p-4">
                    <h3 className="font-semibold text-sm">
                      {product.name}
                    </h3>

                    <div className="flex items-center gap-2 mt-1">
                      <span className="font-semibold">
                        ₹{product.price}
                      </span>
                      <span className="text-gray-400 line-through text-sm">
                        ₹{product.mrp}
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-black text-white py-16 text-center">
        <h2 className="text-3xl font-bold">
          Upgrade Your Wardrobe Today
        </h2>
        <p className="mt-3 opacity-80">
          New arrivals every week. Limited time offers.
        </p>

        <Link
          to="/products/men"
          className="inline-block mt-6 bg-pink-600 px-8 py-3 font-semibold"
        >
          Shop Now
        </Link>
      </section>

    </div>
  );
}
