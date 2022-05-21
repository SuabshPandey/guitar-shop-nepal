import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../../redux/actions/action";

const TopSellingUI = (props) => {
  const [addCartItems, setAddCartItems] = useState({
    id: props.pId,
    // name: props.pname,
    total_price: props.pprice,
    // image:props.pimage,
    discount: 5000,
    quantity:1,
  });
  const cartProductItems = useSelector((state) => state.productReducer.productItems);
  const dispatch = useDispatch();

  return (
    <div>


      <div className="card text-center custom_card_image">
        <div className="overflow">
          <div className="top_selling_img">
            <NavLink to="/products">
              <img className="custom_card_img" src={props.pimage} alt="img1" />
            </NavLink>
          </div>
          <div className="card_hover_items">
            <NavLink
              to=""
              className="cart_btn"
              onClick={() => {
                
                // setAddCartItems();
                // dispatch(addToCart(cartProductItems,addCartItems));
                dispatch(addToCart(addCartItems,true,1));
                // localStorage.setItem("productItem", JSON.stringify(cartProductItems));
              }}
            >
              <span className="custom_cart_icon">
                <i className="fas fa-cart-plus"></i>
              </span>
              Add to cart
            </NavLink>
          </div>
          <div className="wishlist_div">
            <span className="wishlist_icon heart_icon">
              <i className="fas fa-heart"></i>
            </span>
            <span className="wishlist_icon">
              <i className="fas fa-eye"></i>
            </span>
          </div>
        </div>
        <div className="card-body text-dark tc ">
          <h2 className="selling_header">{props.pname}</h2>
          <p className=" selling_price">
            <small>
              Price &nbsp;&nbsp;
              <span>{props.pprice}</span>
            </small>
            <span className="strike">{props.discount}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default TopSellingUI;
