import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import store, { persistor } from "./components/store";
// import { PersistGate } from "redux-persist/integration/react";
import ScrollToTop from "./ScrollToTop";
// import productsReducer from "./features/productsSlice";
import "./responsive.css";

ReactDOM.render(
  <Router>
    <ScrollToTop />
    <Provider store={store}>
      {/* <PersistGate persistor={persistor}> */}
        <App />
      {/* </PersistGate> */}
    </Provider>
  </Router>,
  document.getElementById("root")
);
