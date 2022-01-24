import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "aos/dist/aos.css";
import AOS from "aos";
import Zoom from "react-reveal/Zoom";
import { Link } from "react-router-dom";

function Offers() {
  AOS.init({
    duration: 1500,
  });
  return (
    <>
      <div className="team">
        <Zoom>
          <div className="about-slide my-5" id="about">
            <h2>ABOUT</h2>
            <p className="container">
              Travell The World is a destination that offers novel, authentic
              experiences. Read some tips that will help better navigate the
              local culture and fully enjoy your time in Travell The World .
            </p>

            <div
              className="d-flex justify-content-center"
              style={{ marginTop: "170px" }}
            >
              <Link to ="/details">
                      
                      <button className="btn btn-primary">
                       
                        More Details
                      </button>
                    </Link>
            </div>
          </div>
        </Zoom>
        <div className="container">
          <div className="row">
            <div className="col-md-4 " data-aos="fade-right">
              <div class="container1">
                <img
                  src="./images/offer-1.jpg"
                  alt="Avatar"
                  className="image"
                />
                <h5 style={{ padding: "1rem 0 0 0", textAlign: "center" }}>
                  OFFERS - 60%
                </h5>
                <p>
                  There are several offers happening here, actually. You have
                  the big one: 50 to 60 percent off the entire tour and travells
                  for everyone.
                </p>
                <Link to ="/details">
                      
                      <button className="btn btn-dark">
                       
                        More Details
                      </button>
                    </Link>
                <div class="overlay  ">
                  <img
                    src="./images/offer-2.jpg"
                    alt="Avatar"
                    className="image"
                  />
                  <h5 style={{ padding: "1rem 0 0 0", textAlign: "center" }}>
                    OFFERS - 60%
                  </h5>
                  <p>
                    There are several offers happening here, actually. You have
                    the big one: 50 to 60 percent off the entire tour and
                    travells for everyone.
                  </p>
                  <Link to ="/details">
                      
                      <button className="btn btn-dark">
                       
                        More Details
                      </button>
                    </Link>
                </div>
              </div>
            </div>

            <Zoom>
              <div className="col-md-4 " data-aos="fade-up">
                <div class="container1">
                  <img
                    src="./images/offer-3.jpg"
                    alt="Avatar"
                    className="image"
                  />
                  <h5 style={{ padding: "1rem 0 0 0", textAlign: "center" }}>
                    LAST MINUTE
                  </h5>
                  <p>
                    If you don't want to make your date feel too guilty for
                    canceling then keep things light with one of these friendly
                    texts, calls and contact us
                  </p>
                  <Link to ="/details">
                      
                      <button className="btn btn-dark">
                       
                        More Details
                      </button>
                    </Link>

                  <div class="overlay  ">
                    <img
                      src="./images/offer-4.jpg"
                      alt="Avatar"
                      className="image"
                    />
                    <h5 style={{ padding: "1rem 0 0 0", textAlign: "center" }}>
                      LAST MINUTE
                    </h5>
                    <p>
                      If you don't want to make your date feel too guilty for
                      canceling then keep things light with one of these
                      friendly texts,calls and contact us
                    </p>
                    <Link to ="/details">
                      
                      <button className="btn btn-dark">
                       
                        More Details
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </Zoom>
            <div className="col-md-4 " data-aos="fade-left">
              <div class="container1">
                <img
                  src="./images/offer-5.jpg"
                  alt="Avatar"
                  className="image"
                />
                <h5 style={{ padding: "1rem 0 0 0", textAlign: "center" }}>
                  FLIGHTS + HOTELS
                </h5>
                <p>
                  Flights, International Flights, Charter Flights, Hotels,
                  International Hotels, Homestays and Villas, Activities,
                  Holidays In the world,
                </p>
                <Link to ="/details">
                      
                      <button className="btn btn-dark">
                       
                        More Details
                      </button>
                    </Link> 

                <div class="overlay   ">
                  <img
                    src="./images/offer-6.jpg"
                    alt="Avatar"
                    className="image"
                  />
                  <h5 style={{ padding: "1rem 0 0 0", textAlign: "center" }}>
                    FLIGHTS + HOTELS
                  </h5>
                  <p>
                    Flights, International Flights, Charter Flights, Hotels,
                    International Hotels, Homestays and Villas, Activities,
                    Holidays In the world,
                  </p>
                  <Link to ="/details">
                      
                      <button className="btn btn-dark">
                       
                        More Details
                      </button>
                    </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Offers;
