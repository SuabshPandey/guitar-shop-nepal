import React, { useState, useEffect } from "react";
import axios from "axios";
import { addToCart } from "../../redux/actions/action";
import { useSelector, useDispatch } from "react-redux";
import baseUrl from "../../home/Constant";
import { NavLink } from "react-router-dom";
// import { useParams } from "react-router";
import "./HomeBrandItems.css";
import LoadingPlaceHolder from "../../home/Loading/LoadingPlaceHolder";

const HomeBrandItemsUI = (props) => {

  console.log("Home Brand ITems", props.items)

  const [product, setProduct] = useState([]);
  const [addCartItems, setAddCartItems] = useState({
    id: props.pId,
    name: props.name,
    total_price: props.pprice,
    image: props.brandImg,
    discount: 5000,
    quantity: 1,
  });

  const cardProductItems = useSelector(
    (state) => state.productReducer.productItems
  );
  
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(`${baseUrl}/instrument/get`)
      .then((res) => {
        setProduct(res.data.data.instruments);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const [loaded, setLoaded] = useState(false);
  let imageLoadNum = 0;

  const stuffLoaded = () => {
      imageLoadNum++;
      if(imageLoadNum < 2) return;
      setTimeout(() => {
          setLoaded(true);
      }, 2000);
  };


  const [id] = product;
  // console.log("products Id Are", id);

  // const productIdResponse = product.map((items) => {
  //   return items.id;
  // });

  // console.log("New Product Response Id are", productIdResponse);

  return (
    <div>
      <div className="card custom_card_image">
        <div className="overflow">
          <div className="top_selling_img">
         
            {props.brandImg[0] === undefined ? (
             <LoadingPlaceHolder extraStyles={{width: '100%', height: '100%'}} />
            ) : (
              <img
                className="custom_card_img"
                src={props.brandImg[0].image}
                alt="img1"
              />
            )}
          </div>
          <div className="card_hover_items">
            <NavLink
              to=""
              className="cart_btn"
              onClick={() => {
                // setAddCartItems();
                // dispatch(addToCart(cartProductItems,addCartItems));
                dispatch(addToCart(addCartItems, true, 1));
              }}
            >
              <span className="custom_cart_icon">
                <i class="fas fa-cart-plus"></i>
              </span>
              Add to cart
            </NavLink>
          </div>
          <div className="wishlist_div">
            <span className="wishlist_icon heart_icon">
              <i class="fas fa-heart"></i>
            </span>
            <span className="wishlist_icon">
              <i class="fas fa-eye"></i>
            </span>
          </div>
        </div>
        <div className="card-body text-dark px-0">
          <h2 className="selling_header">{props.name}</h2>
          <p className=" selling_price">
            <small>
              Price &nbsp;&nbsp;
              <span>{props.pprice}</span>
            </small>
            <span className="strike">{props.dprice}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeBrandItemsUI;
