import React from "react";
import { useParams } from "react-router";
import dynamicPageList from "../../footer/DynamicPageList";
import "./DynamicPage.css";
import Footer from "../../footer/Footer";
import { NavLink } from "react-router-dom";

const DynamicPage = () => {
  const params = useParams();
  console.log("Dynamic Page", params);
  const matchedName = params.name;

  return (
    <div className="dynamic_page">
      <div className="main_banner"></div>
            <div className="page-gap"></div>
            <p>Dynamic Pages</p>
    </div>
  );
};

export default DynamicPage;
