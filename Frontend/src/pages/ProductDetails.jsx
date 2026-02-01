// import { useParams } from "react-router-dom";
// import { useState, useEffect } from "react";
// import { useDispatch } from "react-redux";
// import { addToCart } from "../redux/cartSlice";
// import { products } from "../data/products";
// import StarRating from "../components/StarRating";


// export default function ProductDetails() {
//   const { id } = useParams();
//   const dispatch = useDispatch();

//   // ✅ SAFE PRODUCT FIND
//   const product = products.find(p => String(p.id) === String(id));

//   if (!product) {
//     return (
//       <div className="p-10 text-center">
//         <h2 className="text-xl font-semibold">Product not found</h2>
//       </div>
//     );
//   }

//   // ✅ INITIAL COLOR (FIRST COLOR)
//   const initialColor = product.colors?.[0];

//   // ✅ ALL IMAGES FROM imagesByColor
//   const allImages = product.imagesByColor
//     ? Object.values(product.imagesByColor)
//     : product.images || [];

//   const [selectedColor, setSelectedColor] = useState(initialColor);
//   const [activeImage, setActiveImage] = useState(
//     product.imagesByColor
//       ? product.imagesByColor[initialColor]
//       : allImages[0]
//   );
//   const [selectedSize, setSelectedSize] = useState(null);
//   const [quantity, setQuantity] = useState(1);

//   // 🔁 CHANGE IMAGE WHEN COLOR CHANGES
//   useEffect(() => {
//     if (product.imagesByColor && selectedColor) {
//       setActiveImage(product.imagesByColor[selectedColor]);
//     }
//   }, [selectedColor, product.imagesByColor]);

//   return (
//     <div className="p-10 grid md:grid-cols-2 gap-10 bg-white">

//       {/* LEFT: IMAGE GALLERY */}
//       <div className="flex gap-4">
//         {/* THUMBNAILS */}
//         <div className="flex flex-col gap-3">
//           {allImages.map((img, index) => (
//             <img
//               key={index}
//               src={img}
//               onClick={() => setActiveImage(img)}
//               className={`w-20 h-25 object-cover border cursor-pointer
//                 ${
//                   activeImage === img
//                     ? "border-black"
//                     : "border-gray-300"
//                 }`}
//               alt="thumbnail"
//             />
//           ))}
//         </div>

//         {/* MAIN IMAGE */}
//         <img
//           src={activeImage}
//           alt={product.name}
//           className="w-[300] h-[500px] object-cover"
//         />
//       </div>

//       {/* RIGHT: PRODUCT DETAILS */}
//       <div>
//         <h1 className="text-2xl font-semibold">{product.name}</h1>

//         {/* RATING */}
//         <div className="flex items-center gap-2 mt-2">
//           <div className="bg-green-600 text-white text-sm px-2 py-1 rounded">
//             ⭐ {product.rating}
//           </div>
//           <span className="text-gray-600 text-sm">
//             {product.reviewsCount} reviews
//           </span>
//         </div>

//         {/* PRICE */}
//         <div className="flex items-center gap-3 mt-3">
//           <span className="text-xl font-bold">₹{product.price}</span>
//           <span className="line-through text-gray-400">
//             ₹{product.mrp}
//           </span>
//           <span className="text-green-600 font-semibold">
//             {Math.round(
//               ((product.mrp - product.price) / product.mrp) * 100
//             )}% OFF
//           </span>
//         </div>

//         {/* COLOR */}
//         <div className="mt-6">
//           <h3 className="font-semibold mb-2">Select Color</h3>
//           <div className="flex gap-3 flex-wrap">
//             {product.colors.map(color => (
//               <button
//                 key={color}
//                 onClick={() => setSelectedColor(color)}
//                 className={`px-4 py-2 border transition
//                   ${
//                     selectedColor === color
//                       ? "border-black bg-black text-white"
//                       : "border-gray-300"
//                   }`}
//               >
//                 {color}
//               </button>
//             ))}
//           </div>
//         </div>

//                    {/* SIZE (ONLY IF AVAILABLE) */}
// {product.sizes && product.sizes.length > 0 && (
//   <div className="mt-6">
//     <h3 className="font-semibold mb-2">Select Size</h3>
//     <div className="flex gap-3">
//       {product.sizes.map(size => (
//         <button
//           key={size}
//           onClick={() => setSelectedSize(size)}
//           className={`w-10 h-10 rounded-full border transition
//             ${
//               selectedSize === size
//                 ? "border-black bg-black text-white"
//                 : "border-gray-300"
//             }`}
//         >
//           {size}
//         </button>
//       ))}
//     </div>
//   </div>
// )}


//         {/* QUANTITY */}
//         <div className="mt-6">
//           <h3 className="font-semibold mb-2">Quantity</h3>
//           <div className="flex items-center gap-4">
//             <button
//               onClick={() => setQuantity(q => Math.max(1, q - 1))}
//               className="w-8 h-8 border"
//             >
//               −
//             </button>
//             <span className="font-semibold">{quantity}</span>
//             <button
//               onClick={() => setQuantity(q => q + 1)}
//               className="w-8 h-8 border"
//             >
//               +
//             </button>
//           </div>
//         </div>

//         {/* ADD TO CART */}
//         <button
//           onClick={() => {
//             if (!selectedColor) {
//              alert("Please select a color");
//              return;
//            }

//            if (product.sizes && product.sizes.length > 0 && !selectedSize) {
//              alert("Please select a size");
//              return;
//            }


//             dispatch(
//               addToCart({
//                 id: product.id,
//                 name: product.name,
//                 price: product.price,
//                 image: activeImage,
//                 color: selectedColor,
//                 size: selectedSize || null,
//                 qty: quantity,
//               })
//             );
//           }}
//           className="mt-8 bg-pink-600 hover:bg-pink-700 text-white px-10 py-3 font-semibold"
//         >
//           ADD TO CART
//         </button>
//       </div>
//     </div>
    
//   );
// }



// import { useParams } from "react-router-dom";
// import { useState, useEffect } from "react";
// import { useDispatch } from "react-redux";
// import { addToCart } from "../redux/cartSlice";
// import { products } from "../data/products";
// import StarRating from "../components/StarRating";

// export default function ProductDetails() {
//   const { id } = useParams();
//   const dispatch = useDispatch();

//   // 🔒 SAFE PRODUCT FIND (ID STRING SAFE)
//   const product = products.find(p => String(p.id) === String(id));

//   if (!product) {
//     return (
//       <div className="p-10 text-center">
//         <h2 className="text-xl font-semibold">Product not found</h2>
//       </div>
//     );
//   }

//   // 🔧 NORMALIZE COLOR → IMAGE (VERY IMPORTANT)
//   const getImageByColor = (color) => {
//     if (!product.imagesByColor) return null;

//     const normalized = color.trim().toLowerCase();

//     const match = Object.entries(product.imagesByColor).find(
//       ([key]) => key.trim().toLowerCase() === normalized
//     );

//     return match ? match[1] : null;
//   };

//   const initialColor = product.colors?.[0]?.trim();

//   const allImages = product.imagesByColor
//     ? Object.values(product.imagesByColor)
//     : product.images || [];

//   const [selectedColor, setSelectedColor] = useState(initialColor);
//   const [activeImage, setActiveImage] = useState(
//     product.imagesByColor
//       ? getImageByColor(initialColor)
//       : allImages[0]
//   );
//   const [selectedSize, setSelectedSize] = useState(null);
//   const [quantity, setQuantity] = useState(1);

//   // 🔁 UPDATE IMAGE WHEN COLOR CHANGES
//   useEffect(() => {
//     if (selectedColor) {
//       const img = getImageByColor(selectedColor);
//       if (img) setActiveImage(img);
//     }
//   }, [selectedColor]);

//   return (
//     <div className="p-10 bg-white">

//       {/* TOP SECTION */}
//       <div className="grid md:grid-cols-2 gap-10">

//         {/* LEFT — IMAGES */}
//         <div className="flex gap-4 w-1/2">
//           <div className="flex flex-col gap-3">
//             {allImages.map((img, idx) => (
//               <img
//                 key={idx}
//                 src={img}
//                 onClick={() => setActiveImage(img)}
//                 className={`w-20 h-24 object-cover border cursor-pointer
//                   ${activeImage === img ? "border-black" : "border-gray-300"}`}
//                 alt="thumbnail"
//               />
//             ))}
//           </div>

//           <img
//             src={activeImage}
//             alt={product.name}
//             className="w-full max-h-[500] object-contain"
//           />
//         </div>

//         {/* RIGHT — DETAILS */}
//         <div>
//           <h1 className="text-2xl font-semibold">{product.name}</h1>

//           {/* RATING */}
//           <div className="flex items-center gap-2 mt-2">
//             <StarRating rating={product.rating} />
//             <span className="text-sm text-gray-600">
//               {product.reviewsCount} reviews
//             </span>
//           </div>

//           {/* PRICE */}
//           <div className="flex items-center gap-3 mt-3">
//             <span className="text-xl font-bold">₹{product.price}</span>
//             <span className="line-through text-gray-400">₹{product.mrp}</span>
//             <span className="text-green-600 font-semibold">
//               {Math.round(((product.mrp - product.price) / product.mrp) * 100)}% OFF
//             </span>
//           </div>

//           {/* COLOR */}
//           <div className="mt-6">
//             <h3 className="font-semibold mb-2">Select Color</h3>
//             <div className="flex gap-3 flex-wrap">
//               {product.colors.map(color => (
//                 <button
//                   key={color}
//                   onClick={() => setSelectedColor(color)}
//                   className={`px-4 py-2 border transition
//                     ${
//                       selectedColor === color.trim()
//                         ? "border-black bg-black text-white"
//                         : "border-gray-300"
//                     }`}
//                 >
//                   {color.trim()}
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* SIZE — ONLY IF PRESENT */}
//           {product.sizes && product.sizes.length > 0 && (
//             <div className="mt-6">
//               <h3 className="font-semibold mb-2">Select Size</h3>
//               <div className="flex gap-3 flex-wrap">
//                 {product.sizes.map(size => (
//                   <button
//                     key={size}
//                     onClick={() => setSelectedSize(size)}
//                     className={`w-10 h-10 rounded-full border transition
//                       ${
//                         selectedSize === size
//                           ? "border-black bg-black text-white"
//                           : "border-gray-300"
//                       }`}
//                   >
//                     {size}
//                   </button>
//                 ))}
//               </div>
//             </div>
//           )}

//           {/* QUANTITY */}
//           <div className="mt-6">
//             <h3 className="font-semibold mb-2">Quantity</h3>
//             <div className="flex items-center gap-4">
//               <button
//                 onClick={() => setQuantity(q => Math.max(1, q - 1))}
//                 className="w-8 h-8 border"
//               >
//                 −
//               </button>
//               <span className="font-semibold">{quantity}</span>
//               <button
//                 onClick={() => setQuantity(q => q + 1)}
//                 className="w-8 h-8 border"
//               >
//                 +
//               </button>
//             </div>
//           </div>

//           {/* ADD TO CART */}
//           <button
//             onClick={() => {
//               if (!selectedColor) {
//                 alert("Please select a color");
//                 return;
//               }

//               if (product.sizes && product.sizes.length > 0 && !selectedSize) {
//                 alert("Please select a size");
//                 return;
//               }

//               dispatch(
//                 addToCart({
//                   id: product.id,
//                   name: product.name,
//                   price: product.price,
//                   image: activeImage,
//                   color: selectedColor,
//                   size: selectedSize || null,
//                   qty: quantity,
//                 })
//               );
//             }}
//             className="mt-8 bg-pink-600 hover:bg-pink-700 text-white px-10 py-3 font-semibold"
//           >
//             ADD TO CART
//           </button>
//         </div>
//       </div>

//       {/* REVIEWS SECTION */}
//       <div className="mt-14 border-t pt-6">
//         <h2 className="text-xl font-semibold mb-4">Customer Reviews</h2>

//         {product.reviews && product.reviews.length > 0 ? (
//           product.reviews.map(review => (
//             <div
//               key={review.id}
//               className="border p-4 rounded mb-3 bg-gray-50"
//             >
//               <div className="flex items-center gap-2">
//                 <span className="font-semibold">{review.user}</span>
//                 <StarRating rating={review.rating} />
//               </div>
//               <p className="mt-2 text-gray-700">{review.comment}</p>
//             </div>
//           ))
//         ) : (
//           <p className="text-gray-600">No reviews yet.</p>
//         )}
//       </div>
//     </div>
//   );
// }


import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import { products } from "../data/products";
import StarRating from "../components/StarRating";

export default function ProductDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const product = products.find(p => String(p.id) === String(id));

  if (!product) {
    return (
      <div className="p-10 text-center text-xl font-semibold">
        Product not found
      </div>
    );
  }

  /* =========================
     IMAGE + COLOR HANDLING
  ========================== */

  const getImageByColor = (color) => {
    if (!product.imagesByColor) return null;

    const normalized = color.trim().toLowerCase();

    const match = Object.entries(product.imagesByColor).find(
      ([key]) => key.trim().toLowerCase() === normalized
    );

    return match ? match[1] : null;
  };

  const initialColor = product.colors?.[0]?.trim();
  const allImages = product.imagesByColor
    ? Object.values(product.imagesByColor)
    : product.images || [];

  const [selectedColor, setSelectedColor] = useState(initialColor);
  const [activeImage, setActiveImage] = useState(
    product.imagesByColor
      ? getImageByColor(initialColor)
      : allImages[0]
  );
  const [selectedSize, setSelectedSize] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (selectedColor) {
      const img = getImageByColor(selectedColor);
      if (img) setActiveImage(img);
    }
  }, [selectedColor]);

  return (
    <div className="max-w-7xl mx-auto p-10">

      {/* =========================
          TOP SECTION
      ========================== */}
      <div className="grid md:grid-cols-2 gap-12">

        {/* ================= LEFT SIDE (IMAGES) ================= */}
        <div className="flex gap-4">

          {/* THUMBNAILS */}
          <div className="flex flex-col gap-3">
            {allImages.map((img, idx) => (
              <img
                key={idx}
                src={img}
                onClick={() => setActiveImage(img)}
                className={`w-20 h-24 object-contain border cursor-pointer
                  ${activeImage === img ? "border-black" : "border-gray-300"}`}
                alt="thumbnail"
              />
            ))}
          </div>

          {/* MAIN IMAGE */}
          <div className="flex-1 flex items-center justify-center border">
            <img
              src={activeImage}
              alt={product.name}
              className="max-h-[500px] object-contain"
            />
          </div>
        </div>

        {/* ================= RIGHT SIDE (DETAILS) ================= */}
        <div>
          <h1 className="text-2xl font-semibold">{product.name}</h1>

          {/* RATING */}
          <div className="flex items-center gap-2 mt-2">
            <StarRating rating={product.rating} />
            <span className="text-sm text-gray-600">
              {product.reviewsCount} reviews
            </span>
          </div>

          {/* PRICE */}
          <div className="flex items-center gap-3 mt-4">
            <span className="text-xl font-bold">₹{product.price}</span>
            <span className="line-through text-gray-400">
              ₹{product.mrp}
            </span>
            <span className="text-green-600 font-semibold">
              {Math.round(((product.mrp - product.price) / product.mrp) * 100)}%
              OFF
            </span>
          </div>

          {/* COLORS */}
          <div className="mt-6">
            <h3 className="font-semibold mb-2">Select Color</h3>
            <div className="flex gap-3 flex-wrap">
              {product.colors.map(color => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color.trim())}
                  className={`px-4 py-2 border transition
                    ${
                      selectedColor === color.trim()
                        ? "border-black bg-black text-white"
                        : "border-gray-300"
                    }`}
                >
                  {color.trim()}
                </button>
              ))}
            </div>
          </div>

          {/* SIZE (OPTIONAL) */}
          {product.sizes && product.sizes.length > 0 && (
            <div className="mt-6">
              <h3 className="font-semibold mb-2">Select Size</h3>
              <div className="flex gap-3">
                {product.sizes.map(size => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`w-10 h-10 rounded-full border transition
                      ${
                        selectedSize === size
                          ? "border-black bg-black text-white"
                          : "border-gray-300"
                      }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* QUANTITY */}
          <div className="mt-6">
            <h3 className="font-semibold mb-2">Quantity</h3>
            <div className="flex items-center gap-4">
              <button
                onClick={() => setQuantity(q => Math.max(1, q - 1))}
                className="w-8 h-8 border"
              >
                −
              </button>
              <span className="font-semibold">{quantity}</span>
              <button
                onClick={() => setQuantity(q => q + 1)}
                className="w-8 h-8 border"
              >
                +
              </button>
            </div>
          </div>

          {/* ADD TO CART */}
          <button
            onClick={() => {
              if (!selectedColor) {
                alert("Please select a color");
                return;
              }

              if (product.sizes && product.sizes.length > 0 && !selectedSize) {
                alert("Please select a size");
                return;
              }

              dispatch(
                addToCart({
                  id: product.id,
                  name: product.name,
                  price: product.price,
                  image: activeImage,
                  color: selectedColor,
                  size: selectedSize || null,
                  qty: quantity,
                })
              );
            }}
            className="mt-8 bg-pink-600 hover:bg-pink-700 text-white px-10 py-3 font-semibold"
          >
            ADD TO CART
          </button>
        </div>
      </div>

      {/* =========================
          REVIEWS
      ========================== */}
      <div className="mt-14 border-t pt-6">
        <h2 className="text-xl font-semibold mb-4">Customer Reviews</h2>

        {product.reviews && product.reviews.length > 0 ? (
          product.reviews.map(review => (
            <div
              key={review.id}
              className="border p-4 rounded mb-3 bg-gray-50"
            >
              <div className="flex items-center gap-2">
                <span className="font-semibold">{review.user}</span>
                <StarRating rating={review.rating} />
              </div>
              <p className="mt-2 text-gray-700">{review.comment}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-600">No reviews yet.</p>
        )}
      </div>
    </div>
  );
}
