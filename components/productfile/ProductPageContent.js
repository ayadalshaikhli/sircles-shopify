import React from "react";
import Image from "next/image";
import ProductForm from "./ProductForm";

export default function ProductPageContent({ product }) {
  return (
    <div className="flex-md-row d-flex flex-column justify-content-center items-content-center mt-5 mx-auto">
      <div className="w-full max-w-md  mt-2 p-3">
        <div className="">
          <Image
            src={product.images.edges[0].node.originalSrc}
            alt={product.images.edges[0].node.altText}
            width={300}
            height={300}
            objectFit="cover"
          />
        </div>
        <div className="d-flex  justify-content-around ">
          <Image
            src={product.images.edges[0].node.originalSrc}
            alt={product.images.edges[0].node.altText}
            width={100}
            height={100}
            objectFit="cover"
          />
          <Image
            src={product.images.edges[0].node.originalSrc}
            alt={product.images.edges[0].node.altText}
            width={100}
            height={100}
            objectFit="cover"
          />
          <Image
            src={product.images.edges[0].node.originalSrc}
            alt={product.images.edges[0].node.altText}
            width={100}
            height={100}
            objectFit="cover"
          />
        </div>
      </div>
      <ProductForm product={product} />
    </div>
  );
}
