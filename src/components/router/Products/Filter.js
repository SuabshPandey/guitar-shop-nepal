import React from "react";
import Select from "react-select";
import baseUrl from "../../home/Constant";
import { useLocation, useNavigate } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";
import "./Products.css";


// const data = {
//   provinces: [
//     { id: 1, name: 'P1' },
//     { id: 2, name: 'P2' },
//     { id: 3, name: 'P3' },
//     { id: 4, name: 'P4' },
//   ],
//   districts: [
//     {id: 1, name:
//   ]
// }


// const category = [
//   { id: "1", value: "all", label: "all" , isSelected: true},
//   { id: "1", value: "acoustic", label: "acoustic", isSelected: false  },
//   { id: "1", value: "electric", label: "electric", isSelected: false  },
//   { id: "1", value: "drums", label: "drums", isSelected: false  },
// ];
const price = [
  { id: "2", pvalue: "Default", label: "Default" },
  { id: "2", pvalue: "Low to High", label: "Low to High" },
  { id: "2", pvalue: "High to Low", label: "High to Low" },
];
const option = [
  { id: "3", svalue: "Default", label: "Default" },
  { id: "3", svalue: "Newest", label: "Newest" },
  { id: "3", svalue: "Oldest", label: "Oldest" },
  { id: "3", svalue: "Popularity", label: "Popularity" },
];

const Filter = (props) => {
  const [data, setData] = useState([]);
  // const [newId, setNewId] = useState();
  const idd = Number(props.idMatch);

  const getDATA = () => {
    axios
      .get(`${baseUrl}/category/get`)
      .then((res) => {
        setData(res.data.data.categories);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getDATA();
  }, []);

  const navigate = useNavigate();
  const location = useLocation();
  const handleCategory = (event) => {
    const cname = event.value;
    const id = event.target.value;
    // setNewId(id);
    const pname = event.pvalue;
    const sname = event.svalue;

    var queryParams = new URLSearchParams(location.search);
    if (cname !== undefined) {
      if (cname === "all") {
        queryParams.delete("category");
      } else {
        queryParams.set("category", cname);
      }
    } else if (pname !== undefined) {
      if (pname === "Default") {
        queryParams.delete("price");
      } else {
        queryParams.set("price", pname);
      }
    } else if (sname !== undefined) {
      if (sname === "Default") {
        queryParams.delete("sort");
      } else {
        queryParams.set("sort", sname);
      }
    }

    navigate({
      pathname: `/products/${id}`,
      search: `?${queryParams.toString()}`,
    });
  };
  return (
    <div className="container">
      <div className="filter_border ma_tb">
        <div className="row m-0">
          <div className="col-md-4">
            <div className="row m-0">
              <div className="col-md-4 col-4 filter_by d-flex justify-content-center align-items-center m-0">
                <p className="wc mb-0">Categories</p>
              </div>
              <div className="col-md-8 filter_input p-1">
                <select onChange={handleCategory} className="option_input  m-0">
                  {data.map((item) => {
                    return (
                      <>
                        {idd === item.id ? (
                          <>
                            <option selected>{item.name}</option>
                          </>
                        ) : (
                          <>
                            {" "}
                            <option value={item.id}>{item.name}</option>
                          </>
                        )}
                      </>
                    );
                  })}
                </select>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="row m-0">
              <div className="col-md-4 col-4 filter_by d-flex justify-content-center align-items-center m-0">
                <p className="wc mb-0">Price</p>
              </div>
              <div className="col-md-8 col-8 filter_input p-1">
                <Select
                  id="2"
                  className="filter_input  m-0"
                  options={price}
                  placeholder="Low to High"
                  onChange={handleCategory}
                />
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="row m-0">
              <div className="col-md-4 col-4 filter_by d-flex justify-content-center align-items-center m-0">
                <p className="wc mb-0">Sort By</p>
              </div>
              <div className="col-md-8 col-8  filter_input p-1">
                <Select
                  id="3"
                  className="filter_input  m-0"
                  options={option}
                  placeholder="Newest"
                  onChange={handleCategory}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
