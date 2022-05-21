import React from "react";
import './Copyright.css';

const Copyright = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div>
      <div className="container-fluid copyright">
        <div className="row">
          <div className="col-md-12 tc footer-copyright footer_copyright_text">
            <p className="wc tc m-0"  onClick={()=> window.open("https://creatudevelopers.com/", "_blank")}>
              © {currentYear} ALL RIGHT RESERVED , GUITAR SHOP NEPAL, CREATU
              DEVELOPERS
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Copyright;
