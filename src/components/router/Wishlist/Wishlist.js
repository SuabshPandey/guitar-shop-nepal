import React from "react";
import "./Wishlist.css";
import CommonBgUI from "../commonBg/CommonBgUI";
import allcommonBg from "../commonBg/allCommonBg";

const Wishlist = () => {
  return (
    <div className="cart">
      <div className="main_banner"></div>
      <CommonBgUI
        bgImg={allcommonBg[11].bgImg}
        bgTitle={allcommonBg[11].bg_title}
      />
      {/* <div className="page_gap"></div>
      <div className="container">
        <div className="page-section">
          <div className="container-fluid">
            <div className="page-section-content">
              <div className="page-title">
                <h3>Wishlist</h3>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <div className="container my-5">
        <div className="cart-area">
          <div className="row">
            <div className="col-12">
              <form action="#">
                <div className="table-content table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th className="product_remove"></th>
                        <th className="product-thumbnail">images</th>
                        <th className="cart-product-name">Product</th>
                        <th className="product-price">Price</th>
                        <th className="product-quantity">Quantity</th>
                        <th className="product-subtotal"></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="product_remove">
                          <a href="#">
                            <i
                              className="far fa-times-circle"
                              title="Remove"
                            ></i>
                          </a>
                        </td>
                        <td className="product-thumbnail">
                          <a href="#">
                            <img
                              src="/images/guitar1.jpg"
                              alt="Cart Thumbnail"
                            />
                          </a>
                        </td>
                        <td className="product-name">
                          <a href="#">Products Name Here</a>
                        </td>
                        <td className="product-price">
                          <span className="amount">Rs. 22.00 /-</span>
                        </td>
                        <td className="">
                          <div className="qty">
                            <button class="qtyminus" aria-hidden="true">
                              -
                            </button>
                            <input
                              type="number"
                              name="qty"
                              id="qty"
                              min="1"
                              max="10"
                              step="1"
                              value="1"
                            />
                            <button class="qtyplus" aria-hidden="true">
                              +
                            </button>
                          </div>
                        </td>
                        <td className="product-subtotal">
                          <button className="btn btn-cart">Add To Cart</button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
