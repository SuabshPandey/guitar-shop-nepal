import React from 'react'

const HomeGuitarUI = () => {
    return (
        <div className ="category_card">
              <div className="category_card_img">
                  <img src="/images/Instruments/electric-guitar.jpg" className="img-fluid" alt=""></img>
              </div>  
              <div className="category_card_content">
                <div className="category_card_title ">
                    <h3>Gibson 2016</h3>
                </div> 
                <div className="category_card_price">
                    <p>
                        <span>Price</span> &nbsp;&nbsp;
                        <strong>Rs. 5000</strong>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default HomeGuitarUI
