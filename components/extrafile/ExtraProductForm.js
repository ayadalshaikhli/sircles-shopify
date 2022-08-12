import React, { useState, useContext, useEffect } from "react";
import { formatter } from "../../utils/helpers";

import { CartContext } from "../../context/shopContext";
import client, { addAnotherProduct, createNewProduct, getProduct } from "../../lib/shopify";
import ExtraProductOptions from "./ExtraProductOptions";

export default function ExtraProductForm({ product }) {
  const { addToCart, newPorductCon, setCreateNewProduct } = useContext(CartContext);
  const allVariantOptions = product.variants.map((variant) => {
    const allOptions = {};
    variant.selectedOptions.map((item) => {
      allOptions[item.name] = item.value;
    });
      
    return {
      id: variant.id,
      title: product.title,
      handle: product.handle,
      image: variant.image.src,
      options: allOptions,
      variantTitle: variant.title,
      variantPrice: variant.priceV2.amount,
      variantQuantity: 1,
    };
  });

  const defaultValues = {};
  product.options.map((item) => {
    defaultValues[item.name] = item.values[0];
  });

  const [selectedVariant, setSelectedVariant] = useState(allVariantOptions[0]);
  const [selectedOptions, setSelectedOptions] = useState(defaultValues);

  function setOptions(name, value) {
    setSelectedOptions((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });

    const selection = {
      ...selectedOptions,
      [name]: value,
    };

    allVariantOptions.map((item) => {
      if (JSON.stringify(item.options) === JSON.stringify(selection)) {
        setSelectedVariant(item);
      }
    });
  }

  return (
    <div className="col-lg-5 col-md-6 col-12">
      {product.options.map(({ name, values }) => (
        <ExtraProductOptions
          key={`key-${name}`}
          name={name}
          values={values}
          selectedOptions={selectedOptions}
          setOptions={setOptions}
        />
      ))}
      {/* Add to Cart */}
      <div className="row product_info">
        <div className="col-12">
          <button
            onClick={() => {
              addToCart(selectedVariant);
            }}
            className="btn rounded btn-primary btn-block"
            id="add-to-cart-portal-btn"
          >
            Add to cart
          </button>
          <button
            onClick={() => {
              createNewProduct()
              console.log("clicked" + createNewProduct());
              // newPorductCon()
             
            }}
            className="btn rounded btn-primary btn-block"
            id="add-to-cart-portal-btn"
          >
            Product test
          </button>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <h4>Description</h4>
        </div>
        <div className="col-12">
          <p>{product.description}</p>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <h4>Reviews</h4>
        </div>
        <div className="col-12 ">
          <p className="overflow-hidden">
            Lorem ipsum dolor sit amet, tellus in metus vulputate eu. Justo nec
            ultrices dui sapien eget mi proin sed.
          </p>
        </div>
      </div>
    </div>
  );
}

{
  /* <div className="ms-3">
<h2 className="text-2xl font-bold">{product.title}</h2>
<span className="pb-6">
  {formatter.format(product.variants[0].priceV2.amount)}
</span>
{product.options.map(({ name, values }) => (
  <ExtraProductOptions
    key={`key-${name}`}
    name={name}
    values={values}
    selectedOptions={selectedOptions}
    setOptions={setOptions}
  />
))}
<button
  onClick={() => {
    addToCart(selectedVariant);
  }}
  className="bg-dark rounded text-white px-2 py-3"
>
  Add to cart
</button>
</div> */
}
