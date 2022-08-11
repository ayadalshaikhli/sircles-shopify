import React from "react";
import ExtraProductCard from "./ExtraProductCard";

export default function ExtraProductList({ products }) {
  return (
    <div className="container border border-bg-dark mt-3">
      <div className="card-header">
        <h3 className="fs-1">Featured</h3>
      </div>
      <div className="card-body">
        <div className="row">
          {products.map((product) => (
            <ExtraProductCard key={product.node.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
{
  /* <div className="bg-white ">
<div className=" px-5  ">
  <h2 className="text-2xl flex font-extrabold pb-5 pl-5 text-gray-900 mb-6 border-black border-b-2 ">
    Featured
  </h2>
  <div className=" container">
    <div className="row g-4 px-3">
      {products.map((product) => (
        <ExtraProductCard key={product.node.id} product={product} />
      ))}
    </div>
  </div>
</div>
</div> */
}
