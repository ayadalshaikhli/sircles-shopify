import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { formatter } from "../../utils/helpers";
import $ from "jquery";

import { getAllProducts, getProduct } from "../../lib/shopify";
import { ExtraProductPageContent } from "./ExtraProductPageContent";

export default function ExtraProductCard({ product }) {
  const { handle, title } = product.node;
  const { altText, originalSrc } = product.node.images.edges[0].node;
  const price = product.node.priceRange.minVariantPrice.amount;
  const [show, setShow] = useState(false);

  return (
    <>
      {show && (
        <div
          id="product-portal"
          className="position-fixed"
          style={{
            zIndex: "12",
            width: "100vw",
            height: "100vh",
          }}
        >
          <ExtraProductPageContent handle={handle} setShow={setShow} />
        </div>
      )}
      <a
        onClick={() => setShow(true)}
        className="col-sm-4 col-12 text-dark text-decoration-none"
      >
        <div className="card featured_item ">
          <div className="card-header ">
            <div className="row product_info ">
              <div className="col-lg-8 col-sm-7">
                <Image
                  className="rounded"
                  src={originalSrc}
                  alt={altText}
                  width={400}
                  height={400}
                  objectFit="contain"
                />
              </div>
            </div>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-sm-8 col-7">
                <h4>{title}</h4>
              </div>
              <div className="col-sm-4 col-5">
                <h4>{formatter.format(price)}</h4>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <p>{product.node.description}</p>
              </div>
            </div>
          </div>
        </div>
      </a>
    </>
  );
}

{
  /* <a
className=" col-12 text-dark border border-dark text-decoration-none rounded  p-3 
col-sm-6 
col-md-4  
col-xl-3"
onClick={() => setShow(true)}
>
<div className="">
  <div className="w-full bg-gray-200 rounded-3xl overflow-hidden">
    <div className=" ">
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
</a> */
}
