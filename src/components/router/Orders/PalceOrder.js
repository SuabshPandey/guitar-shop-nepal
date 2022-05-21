import React from "react";
import baseUrl from "../../home/Constant";
import { useState } from "react";
import { useSelector } from "react-redux";
import "./Order.css";

const token = localStorage.getItem("key");
const PalceOrder = () => {
  const cartItems = useSelector((state) => state.productReducer.productItems);


  const newCartItem = cartItems.map((items) => {
    return {
      id : items.id,
      discount : items.discount,
      total_price : items.totalPrice,
      quantity : items.quantity
    }
  })

  console.log("New Redux Cart Items is ", newCartItem);

  console.log("Cart Redux Items are ", cartItems);
  const [isToken , setIsToken] = useState(token)
  const [order, setOrder] = useState({
    total_discount: 100,
    total_tax: 200,
    total_amount: 10000,
    delivery_charge: 500,
    payment_type: "cash",
    customer_name: "",
    customer_email: "",
    customer_number: "",
    customer_address: "",
    items: newCartItem,
  });

  const handleInputs = (event) => {
  
    const name = event.target.name;
    const value = event.target.value;

    setOrder({ ...order, [name]: value });
  };
  const submitProduct = async (event) => {
    event.preventDefault();

    const {
      total_discount,
      total_tax,
      total_amount,
      delivery_charge,
      payment_type,
      customer_name,
      customer_email,
      customer_number,
      customer_address,
      items,
    } = order;

    

    const response = await fetch(`${baseUrl}/placeOrder`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        customer_name,
        customer_email,
        customer_number,
        customer_address,
        items,
        total_discount,
        total_tax,
        total_amount,
        delivery_charge,
        payment_type,
      }),
    });

    const responseData = await response.json();

    console.log("Response data of place order", responseData);
  };

  return (
    <div className="order">
      <div className="main_banner"></div>
      <div className="page-gap"></div>

      <div className="container">
          <div className="row">
            <div className="form-group col-lg-6 col-md-12 col-sm-12">
              <input
                className="form-control custom_form_input_style"
                type="text"
                name="customer_name"
                onChange={handleInputs}
                value={order.customer_name}
                placeholder="Name"
              />
            </div>
            <div className="form-group col-lg-6 col-md-12 col-sm-12">
              <input
                className="form-control custom_form_input_style"
                type="email"
                name="customer_email"
                onChange={handleInputs}
                value={order.customer_email}
                placeholder="Email"
              />
            </div>
            <div className="form-group col-lg-6 col-md-12 col-sm-12">
              <input
                className="form-control custom_form_input_style "
                type="number"
                name="customer_number"
                onChange={handleInputs}
                value={order.customer_number}
                placeholder="Mobile Number"
              />
            </div>
            <div className="form-group col-lg-6 col-md-12 col-sm-12">
              <input
                className="form-control custom_form_input_style"
                type="text"
                name="customer_address"
                onChange={handleInputs}
                value={order.customer_address}
                placeholder="Address"
              />
            </div>
            <div className="custom_form_btn_div tc">

              

              <button
                onClick={submitProduct}
                type="submit"
                className="tc custom_form_btn_div  btn btn-outline-dark"
              >
                 Checkout
              </button>
            </div>
          </div>
      </div>
    </div>
  );
};

export default PalceOrder;
