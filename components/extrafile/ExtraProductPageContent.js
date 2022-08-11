import React, { useState, useContext, useEffect } from "react";
import { formatter } from "../../utils/helpers";
import Image from "next/image";

import { CartContext } from "../../context/shopContext";
import client, { getProduct } from "../../lib/shopify";
import ExtraProductForm from "./ExtraProductForm";
export const ExtraProductPageContent = ({ handle, setShow }) => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    client.product.fetchByHandle(handle).then(setProduct);
  }, []);
  if (!product) {
    return "";
  }
  console.log(product);
  return (
    <div
      style={{
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
      className="position-fixed card w-75 h-75"
    >
      <div className="card-header">
        <div className="row product_info">
          <div className="col-lg-8 col-sm-7">
            <h3>{product.title}</h3>
          </div>
          <div className="col-lg-3 col-sm-3">
            <h3 className="float-right">
              {formatter.format(product.variants[0].price)}
            </h3>
          </div>
          <div className="col-lg-1 col-sm-2">
            <a
              onClick={() => {
                setShow(false);
              }}
            >
              <button type="button" className="btn float-right" id="x-btn">
                X
              </button>
            </a>
          </div>
        </div>
      </div>

      <div className="card-body ">
        <div className="row">
          <div className="col-lg-7 col-md-6 col-12">
            <div className="row">
              <div className="col-lg-12 mx-auto text-center">
                <div id="main-image-content-box">
                  <Image
                    src={product.images[0].src}
                    alt={product.images[0].altText}
                    width={300}
                    height={300}
                  />
                </div>
                <div
                  id="player-carousel"
                  className="carousel"
                  data-autoplay="false"
                  data-items="3"
                  data-lightbox="gallery"
                >
                  {/* <div className="portfolio-item img-zoom ct-photography ct-marketing ct-media">
								<div className="portfolio-item-wrap">
									<div className="portfolio-image ">
										<a href="#"><img src="assets/images/products/lavendar.jpg" alt=""></a>
									</div>
									<div className="img_to_main portfolio-description" data-img_url="assets/images/products/lavendar.jpg">
										
									</div>
								</div>
							</div> */}
                  {/* <!-- portfolio item --> */}
                  {/* <div className="portfolio-item img-zoom ct-photography ct-marketing ct-media">
								<div className="portfolio-item-wrap">
									<div className="portfolio-image">
										<a href="#"><img src="assets/images/products/lavendar_4.jpg" alt=""></a>
									</div>
									<div className="img_to_main portfolio-description" data-img_url="assets/images/products/lavendar_4.jpg">
										
									</div>
								</div>
							</div> */}
                  {/* <!-- portfolio item --> */}
                  {/* <div className="portfolio-item img-zoom ct-photography ct-marketing ct-media">
								<div className="portfolio-item-wrap">
									<div className="portfolio-image">
										<a href="#"><img src="assets/images/products/lavendar_art.jpg" alt=""></a>
									</div>
									<div className="img_to_main portfolio-description" data-img_url="assets/images/products/lavendar_art.jpg">
										
									</div>
								</div>
							</div> */}
                </div>
              </div>
            </div>
          </div>
          {/* <div className="w-full rounded">
            <div
              style={{
                zIndex: "15",
              }}
              className="w-100 h-50"
            >
              <Image
                src={product.images[0].src}
                alt={product.images[0].altText}
                width={300}
                height={300}
              />
            </div>
          </div> */}

          <ExtraProductForm product={product} />
        </div>
      </div>
    </div>
  );
};
