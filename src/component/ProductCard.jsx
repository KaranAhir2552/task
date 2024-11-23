import React from "react";
const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-48 object-contain mb-4"
      />
      <h3 className="text-lg font-semibold mb-2 truncate">{product.title}</h3>
      <p className="text-gray-600 mb-2 text-sm">{product.category}</p>
      <p className="text-blue-600 font-bold">${product.price.toFixed(2)}</p>
    </div>
  );
};

export default ProductCard