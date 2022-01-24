import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import ImageFilter from "./ImageFilter";
import Tour from "./Tours";
import Offers from "./Offers";
import Gallery from "./Gallery";
import Contact from "./Contact";


function Home() {
  AOS.init({
    duration: 1500,
  });
  return (
    <div>
      <div
        id="carouselExampleCaptions"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="./images/img2.jpg" class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <Container>
                <Row>
                  <Col md="4">
                    <div data-aos="fade-right" className=" banner1">
                      <img
                        src="./images/banner_new1.jpg"
                        alt="banner1"
                        height="250px"
                        width="100%"
                      />
                      <h5>Hotel Mogadish</h5>
                      <p>All Inclusive</p>
                      <p>$899 / 7 Night</p>
                      <Link to ="/details">
                      
                        <button className="btn btn-primary">
                         
                          More Details
                        </button>
                      </Link>
                    </div>
                  </Col>
                  <Col md="4">
                    <div data-aos="fade-up" className=" banner">
                      <img
                        src="./images/banner_new2.jpg"
                        alt="banner2"
                        height="250px"
                        width="100%"
                      />
                      <h5>Hotel Mogadish</h5>
                      <p>All Inclusive</p>
                      <p>$899 / 7 Night</p>
                      <Link to ="/details">
                      
                      <button className="btn btn-primary">
                       
                        More Details
                      </button>
                    </Link>
                    </div>
                  </Col>
                  <Col md="4">
                    <div data-aos="fade-left" className=" banner1">
                      <img
                        src="./images/banner_new3.jpg"
                        alt="banner3"
                        height="250px"
                        width="100%"
                      />
                      <h5>Hotel Mogadish</h5>
                      <p>All Inclusive</p>
                      <p>$899 / 7 Night</p>
                      <Link to ="/details">
                      
                      <button className="btn btn-primary">
                       
                        More Details
                      </button>
                    </Link>
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
          </div>
          <div class="carousel-item">
            <img src="./images/img3.jpg" class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <Container>
                <Row>
                  <Col md="4">
                    <div data-aos="fade-right" className=" banner1">
                      <img
                        src="./images/banner_new1.jpg"
                        alt="banner1"
                        height="250px"
                        width="100%"
                      />
                      <h5>Hotel Mogadish</h5>
                      <p>All Inclusive</p>
                      <p>$899 / 7 Night</p>
                      <Link to ="/details">
                      
                        <button className="btn btn-primary">
                         
                          More Details
                        </button>
                      </Link>
                    </div>
                  </Col>
                  <Col md="4">
                    <div data-aos="fade-up" className=" banner">
                      <img
                        src="./images/banner_new2.jpg"
                        alt="banner2"
                        height="250px"
                        width="100%"
                      />
                      <h5>Hotel Mogadish</h5>
                      <p>All Inclusive</p>
                      <p>$899 / 7 Night</p>
                      <Link to ="/details">
                      
                      <button className="btn btn-primary">
                       
                        More Details
                      </button>
                    </Link>
                    </div>
                  </Col>
                  <Col md="4">
                    <div data-aos="fade-left" className=" banner1">
                      <img
                        src="./images/banner_new3.jpg"
                        alt="banner3"
                        height="250px"
                        width="100%"
                      />
                      <h5>Hotel Mogadish</h5>
                      <p>All Inclusive</p>
                      <p>$899 / 7 Night</p>
                      <Link to ="/details">
                      
                      <button className="btn btn-primary">
                       
                        More Details
                      </button>
                    </Link>
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>

    <ImageFilter/>
    <Offers/>
    <Tour/>
   
    <Gallery/>
    <Contact/>
    
    </div>
  );
}

export default Home;
