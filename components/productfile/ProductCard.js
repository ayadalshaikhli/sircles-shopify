import React from "react";
import Image from "next/image";
import Link from "next/link";
import { formatter } from "../../utils/helpers";

export const ProductCard = ({ product }) => {
  const { handle, title } = product.node;
  const { altText, originalSrc } = product.node.images.edges[0].node;
  const price = product.node.priceRange.minVariantPrice.amount;

  return (
    <Link href={`/products/${handle}`}>
      <a
        className="col-12 text-dark border border-dark text-decoration-none rounded  p-3 
      col-sm-6 
      col-md-4  
      col-xl-3 "
      >
        <div className="">
          <div className="w-full bg-gray-200 rounded-3xl overflow-hidden ">
            <div className="">
              <Image
                className="rounded"
                src={originalSrc}
                alt={altText}
                width={300}
                height={300}
              />
            </div>
          </div>
        </div>
        <div className="d-flex border-top border-dark   py-2 justify-content-between">
          <div className="text-dark font-weight-bold fs-2">{title}</div>
          <div className="text-dark fs-4">{formatter.format(price)}</div>
        </div>
        <div className="text-dark">{product.node.description}</div>
      </a>
    </Link>
  );
};
