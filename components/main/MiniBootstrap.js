import Offcanvas from "react-bootstrap/Offcanvas";
import { Fragment, useContext, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";
import Image from "next/image";
import Link from "next/link";
import { CartContext } from "../../context/shopContext";
import { formatter } from "../../utils/helpers";

function MiniBootstrap({ cart }) {
  const cancelButtonRef = useRef();

  const { cartOpen, setCartOpen, checkoutUrl, removeCartItem } =
    useContext(CartContext);

  let cartTotal = 0;
  cart.map((item) => {
    cartTotal += item?.variantPrice * item?.variantQuantity;
  });
  return (
    <>
      <Offcanvas placement="end" show={cartOpen} as={Fragment}>
        <div className="">
          <div
            style={{
              overflowY: "auto",
            }}
            className="h-100 d-flex flex-column bg-white px-2"
          >
            <div className="flex-1 py-6  px-2 sm:px-6">
              <Offcanvas.Header>
                <Offcanvas.Title className="text-center">
                  Your cart
                </Offcanvas.Title>
                <button
                  className="  bg-white text-gray-400 hover:text-gray-500"
                  type="button"
                  ref={cancelButtonRef}
                  onClick={() => setCartOpen(false)}
                >
                  <h6>X</h6>
                </button>
              </Offcanvas.Header>
              <div className="mt-3 border-bottom-0 border-primary">
                <div className="">
                  {cart.length > 0 ? (
                    <ul
                      style={{
                        overflowY: "scroll",
                        height: "600px",
                      }}
                      role="list"
                      className="px-1 text-decoration-none "
                    >
                      {cart.map((product) => (
                        <li
                          key={product.id + Math.random()}
                          className="d-flex gap-3 text-decoration-none border-bottom mt-3 mb-3"
                        >
                          <div className="relative  w-25 h-25 rounded overflow-hidden">
                            <Image
                              className=""
                              src={product.image}
                              alt={product.title}
                              width={300}
                              height={300}
                              objectFit="cover"
                            />
                          </div>

                          <div className=" d-flex flex-column w-100">
                            <div>
                              <div className="d-flex justify-content-between text-base font-medium ">
                                <Link
                                  href={`/products/${product.handle}`}
                                  passHref
                                >
                                  <a
                                    className="text-decoration-none fs-6 text-black"
                                    onClick={() => setCartOpen(false)}
                                  >
                                    {product.title}
                                  </a>
                                </Link>

                                <p className="">
                                  {formatter.format(product.variantPrice)}
                                </p>
                              </div>
                              <p className="">{product.variantTitle}</p>
                            </div>
                            <div className="d-flex align-items-end justify-content-between fs-6">
                              <p className="">Qty {product.variantQuantity}</p>

                              <div className="d-flex">
                                <button
                                  onClick={() => removeCartItem(product.id)}
                                  type="button"
                                  className="btn text-secondary text-decoration-none"
                                >
                                  Remove
                                </button>
                              </div>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <div>
                      <p>Nothing in your cart!</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
            {cart.length > 0 ? (
              <div className="border-t border-gray-200 py-6  sm:px-6">
                <div className="d-flex justify-content-between border-bottom  text-base font-medium">
                  <p>Subtotal</p>
                  <p>{formatter.format(cartTotal)}</p>
                </div>
                <div className="d-flex justify-content-between border-bottom  text-base font-medium">
                  <p>TAX</p>
                  <p>{formatter.format(cartTotal)}</p>
                </div>
                <p className="mt-0.5 text-sm text-gray-500">
                  Shipping and taxes calculated at checkout.
                </p>
                <div className="mt-6">
                  <a
                    href={checkoutUrl}
                    className="d-flex rounded text-decoration-none justify-content-center items-center px-6 py-3 border border-transparent shadow-sm text-base font-medium text-white bg-black hover:bg-gray-800"
                  >
                    Checkout
                  </a>
                </div>
                <div className="mt-6 d-flex justify-content-center text-sm text-center text-gray-500">
                  <p>
                    or
                    <button
                      type="button"
                      className="btn  text-gray-500 hover:text-gray-800 text-decoration-none"
                      onClick={() => setCartOpen(false)}
                    >
                      Continue Shopping
                      <span aria-hidden="true"> &rarr;</span>
                    </button>
                  </p>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </Offcanvas>
    </>
  );
}
export default MiniBootstrap;
