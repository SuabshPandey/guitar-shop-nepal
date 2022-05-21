import React, { useState } from "react";
import "./Cart.css";
import { NavLink } from "react-router-dom";
import CommonBgUI from "../commonBg/CommonBgUI";
import allcommonBg from "../commonBg/allCommonBg";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  updateCart,
  removeToCart,
  addToCart,
} from "../../redux/actions/action";

const Cart = () => {
  const token = localStorage.getItem("key");

  const getCartProductItems = JSON.parse(localStorage.getItem("productItem"));

  const [initcount, setInitcount] = useState(1);
  const count = useSelector((state) => state.cartItems);
  const allProductItems = useSelector(
    (state) => state.productReducer.productItems
  );
  const dispatch = useDispatch();

  return (
    <div className="cart">
      <div className="main_banner"></div>
      <CommonBgUI
        bgImg={allcommonBg[10].bgImg}
        bgTitle={allcommonBg[10].bg_title}
      />
      <div className="container mt-5">
        <div className="cart-area">
          <div className="row">
            <div className="col-12">
              <form>
                <div className="table-content table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th className="product_remove"></th>
                        <th className="product-thumbnail">images</th>
                        <th className="cart-product-name">Product</th>
                        <th className="product-price">Unit Price</th>
                        <th className="product-quantity">Quantity</th>
                        <th className="product-subtotal">Total Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      {allProductItems?.map((item) => {
                        return (
                          <tr>
                            <td className="product_remove">
                              <a>
                                <i
                                  className="far fa-times-circle"
                                  title="Remove"
                                  onClick={() => {
                                    dispatch(removeToCart(item.id));
                                  }}
                                ></i>
                              </a>
                            </td>
                            <td className="product-thumbnail">
                              <a>
                                <img
                                  src={item.image?.map(
                                    (image) => (image = image.image)
                                  )}
                                  alt="Cart Thumbnail"
                                />
                              </a>
                            </td>
                            <td className="product-name">
                              <a>{item.name}</a>
                            </td>
                            <td className="product-price">
                              <span className="amount">{item.total_price}</span>
                            </td>
                            <td className="">
                              <div className="qty">
                                <button
                                  class="qtyminus"
                                  aria-hidden="true"
                                  onClick={(e) => {
                                    e.preventDefault();
                                    setInitcount(
                                      item.quantity <= 1
                                        ? 1
                                        : (item.quantity -= 1)
                                    );
                                    dispatch(addToCart(item, false, 0));
                                  }}
                                >
                                  -
                                </button>
                                <input
                                  type="number"
                                  name="qty"
                                  min="1"
                                  max="10"
                                  step="1"
                                  value={item.quantity}
                                />
                                <button
                                  class="qtyplus"
                                  aria-hidden="true"
                                  onClick={(e) => {
                                    e.preventDefault();
                                    setInitcount(initcount + 1);
                                    dispatch(addToCart(item, true, 1));
                                  }}
                                >
                                  +
                                </button>
                              </div>
                            </td>
                            <td className="product-subtotal">
                              <span className="amount">
                                {item.total_price * item.quantity} /-
                              </span>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
                <div className="total-cart mt-4">
                  <div className="row">
                    {/* <div className="col-lg-6">
                      <div className="coupon-all">
                        <div className="coupon">
                          <input
                            id="coupon-code"
                            className="input-text"
                            name="coupon_code"
                            value=""
                            placeholder="Voucher code"
                            type="text"
                          />
                          <input
                            className="button mt-xxs-30"
                            name="apply_coupon"
                            value="Redeem"
                            type="submit"
                          />
                        </div>
                      </div>
                    </div> */}
                    <div className="offset-md-8 col-md-4">
                      <div className="cart-page-total">
                        <h2>Cart totals</h2>
                        <ul>
                          <li>
                            Subtotal <span>Rs. 80.00 /-</span>
                          </li>
                          <li>
                            Shipping Fee <span>Rs. 80.00 /-</span>
                          </li>
                          <li>
                            Coupon <span>No</span>
                          </li>
                          <li className="cart-total">
                            Total <span>Rs. 80.00 /-</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="checkout-btn">
                    <NavLink to={token ? `/placeOrder` : `/login`}>
                      Proceed to checkout
                    </NavLink>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
