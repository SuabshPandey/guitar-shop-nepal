import axios from "axios";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import baseUrl from "../../home/Constant";
import "./Order.css";

const GetOrder = () => {
  const token = localStorage.getItem("key");
  const [data, setData] = useState([]);
  const [productData, setProductData] = useState([]);




  useEffect(() => {
    axios
      .get(`${baseUrl}/order/get`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log("Response orderrrrr data are", res.data.data.orders);
        setData(res.data.data.orders);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="order">
      <div className="main_banner"></div>
      <div className="page-gap"></div>
      <div className="container">
        <div className="order_list_div">
          <h1 className="tc order_list_title">Your Order List </h1>
        </div>
        <table className="table">
          <thead className="table-dark">
            <tr>
              <th className="tc table_headings" scope="col">
                Customer Name
              </th>
              <th className="tc table_headings" scope="col">
                Customer Location
              </th>
              <th className="tc table_headings" scope="col">
                Customer Number
              </th>
              <th className="tc table_headings" scope="col">
                Cusotmer Email
              </th>
              <th className="tc table_headings" scope="col">
                Delivered Date
              </th>
              <th className="tc table_headings" scope="col">
                Product ID
              </th>
              <th className="tc table_headings" scope="col">
                Quantity
              </th>
              <th className="tc table_headings" scope="col">
                Item
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => {
              {
                /* setProductData(item.items); */
              }
              return (
                <tr key={item.id}>
                  <td className="tc custom_table_items">
                    {item.customer_name}
                  </td>
                  <td className="tc custom_table_items">
                    {item.customer_address}
                  </td>
                  <td className="tc custom_table_items">
                    {item.customer_number}
                  </td>
                  <td className="tc custom_table_items">
                    {item.customer_email}
                  </td>
                  <td className="tc custom_table_items">{item.created_at}</td>
                  {item.items.map((pItem) => {
                    return (
                      <>
                        <td className="tc custom_table_items">
                          <p>{pItem.id}</p>
                        </td>
                        {/* <td className="tc custom_table_items">
                          {pItem.quantity}
                        </td> */}
                      </>
                    );
                  })}
                  {/* <td className="tc custom_table_items">{item.status}</td> */}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GetOrder;
