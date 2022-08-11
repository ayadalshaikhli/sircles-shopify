import React from "react";
import { ProductCard } from "./ProductCard";

const ProductList = ({ products }) => {
  return (
    <div className="bg-white ">
      <div className=" px-5">
        <h2 className="text-2xl flex font-extrabold  pb-5 pl-5 text-gray-900 mb-6 border-black border-b-2 ">
          Featured
        </h2>
        <div className=" container">
          <div className="row g-4 px-3">
            {products.map((product) => (
              <ProductCard key={product.node.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
