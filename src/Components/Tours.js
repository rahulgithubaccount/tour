import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { tour } from "./Data";

import "aos/dist/aos.css";
import Modal from "./Modal";

function Tour() {
  const [tours, setTour] = useState(tour);

  const [filter, setFilter] = useState(6);

  const slice = tours.slice(0, filter);

  const filtrs = (tou) => {
    const data = tour.filter((items) => {
      return items.country === tou;
    });
    setTour(data);
  };

  const [modal, setmodal] = useState(false);
  const [temData, settemData] = useState([]);

  const getdata = (img,) => {
    let temdata = [img,];
    settemData((item) => [1, ...temdata]);
    return setmodal(true);
  };


  

  return (
    <div data-aos="fade-right">
      <div className="tour-slide my-5" id="tour">
        <h2>Tour</h2>
        <p className="container" >
      
          “Don’t tell me how educated you are, tell me how much you have
          travelled.
        </p>
      </div>
      <div className="container">
        <div className="row">
          <div className="filter">
            <button
              className="btn btn-primary active1"
              onClick={() => filtrs("africa")}
            >
              Africa
            </button>
            <button
              className="btn btn-primary "
              onClick={() => filtrs("america")}
            >
              America
            </button>
            <button
              className="btn btn-primary "
              onClick={() => filtrs("europe")}
            >
              Europe
            </button>
          </div>

          {slice.map((item, index) => {
            return (
              <>
                <div className="col-md-4 my-3" data-aos="fade-right">
                  <div class="container2" key={index}>
                    <div className="card box" style={{ width: "100%" }}>
                      <img src={item.img} className="card-img-top" alt="..." />
                      <div class="overlay2">
                        <i
                          onClick={() => getdata(item.img)}
                          className="fa fa-search"
                        ></i>
                      </div>
                      <div className="card-body">
                        <h5
                          className="card-title"
                          style={{
                            color: "#717171",
                            fontFamily: "Oswald',sans-serif",
                            fontWeight: "700",
                          }}
                        >
                          {item.text}
                          <img
                            style={{ marginLeft: "92px" }}
                            src="./images/star.png"
                            alt=""
                          />
                          <img src="./images/star.png" alt="" />
                          <img src="./images/star.png" alt="" />
                          <img src="./images/star.png" alt="" />
                        </h5>
                        <p className="card-text">{item.text1}</p>
                        <hr />
                        <div className="d-flex justify-content-between">
                          <i className="fa fa-comment">
                            <span> 192</span>
                          </i>
                          <i className="fa fa-glass-martini">
                            <span> All inclusive </span>
                          </i>
                        
                        </div>
                        <hr />

                        <div className="d-flex justify-content-center">
                        <button className=" btnsuccess">$1200</button> 
                        <Link to= "/details">
                          <button className=" btnsuccess">More Info</button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>

      {modal === true ? (
        <Modal img={temData[1]}     hide={() => setmodal(false)} />
      ) : (
        ""
      )}



    </div>
  );
}

export default Tour;
