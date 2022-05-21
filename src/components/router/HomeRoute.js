import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../home/Home";
import BlogDetails from "./Blogs/BlogDetails";
import Blogs from "./Blogs/Blogs";
import Brands from "./Brands/Brands";
import Cart from "./Cart/Cart";
import Contactus from "./Contact/Contactus";
import DynamicPage from "./dynamicPages/DynamicPage";
import CreateEvent from "./Events/CreateEvent";
import EventDetail from "./Events/EventDetail";
import Events from "./Events/Events";
import ChangePassword from "./Login/ChangePassword";
import Forget from "./Login/Forget";
import Login from "./Login/Login";
import Verification from "./Login/Verification";
import GetOrder from "./Orders/GetOrder";
import PalceOrder from "./Orders/PalceOrder";
import OurStore from "./OurStore/OurStore";
import Policy from "./Policy/Policy";
import Refund from "./Policy/Refund";
import Terms from "./Policy/Terms";
import ProductDetail from "./ProductDetail/ProductDetail";
import Products from "./Products/Products";
import RegisterUI from "./Register/RegisterUI";
import Servicing from "./servicing/Servicing";
import UserSuccess from "./User/UserSuccess";
import Wishlist from "./Wishlist/Wishlist";

const token = localStorage.getItem("key");

const HomeRoute = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Products />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/events" element={<Events />} />
        <Route path="/brands" element={<Brands />} />
        <Route path="/contactus" element={<Contactus />} />
        <Route path="/ourstore" element={<OurStore />} />
        <Route path="/login" element={token ? <UserSuccess /> : <Login />} />
        <Route path="/productdetails/:id" element={<ProductDetail />} />
        <Route path="/blogdetail/:id" element={<BlogDetails />} />
        <Route path="/register" element={<RegisterUI />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="/servicing" element={<Servicing />} />
        <Route path="/refund" element={<Refund />} />
        <Route path="/forget" element={<Forget />} />
        <Route path="/verification" element={<Verification />} />
        <Route path="/changePassword" element={<ChangePassword />} />
        <Route path="/create" element={<CreateEvent />} />
        <Route path="/eventdetail/:id" element={<EventDetail />} />
        <Route path="/user" element={token ? <UserSuccess /> : <Login />} />
        <Route path="/placeOrder" element={<PalceOrder />} />
        <Route path="/getOrder" element={<GetOrder />} />
        <Route path="dynamic/:name" element={<DynamicPage />} />
      </Routes>
    </div>
  );
};

export default HomeRoute;
