import React from "react";
import { Container, div } from "react-bootstrap";

function Gallery() {
  return (
    <div className="my-5" id="gallery">
      <div
        id="carouselExampleControls"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active ">
            <img
              src="./images/gallery-image1.jpg"
              class="d-block w-100 "
              style={{ height: "600px", opacity: "0.31" }}
              alt="..."
            />

            <div class="carousel-caption d-none d-md-block">
              <Container>
                <div
                  className="card"
                  style={{ padding: "10px", marginTop: "20px" }}
                >
                  <img
                    src="./images/gallery-image2.jpg"
                    alt=""
                    height="500px"
                  />
                </div>
              </Container>
            </div>
          </div>
          <div class="carousel-item  ">
            <img
              src="./images/gallery-image3.jpg"
              class="d-block w-100 "
              style={{ height: "600px", opacity: "0.31" }}
              alt="..."
            />

            <div class="carousel-caption d-none d-md-block">
              <Container>
                <div
                  className="card"
                  style={{ padding: "10px", marginTop: "20px" }}
                >
                  <img
                    src="./images/gallery-image-4.jpg"
                    alt=""
                    height="500px"
                  />
                </div>
              </Container>
            </div>
          </div>
          <div class="carousel-item ">
            <img
              src="./images/gallery-image-5.jpg"
              class="d-block w-100 "
              style={{ height: "600px", opacity: "0.31" }}
              alt="..."
            />

            <div class="carousel-caption d-none d-md-block">
              <Container>
                <div
                  className="card"
                  style={{ padding: "10px", marginTop: "20px" }}
                >
                  <img
                    src="./images/gallery-image-6.jpg"
                    alt=""
                    height="500px"
                  />
                </div>
              </Container>
            </div>
          </div>

          <div class="carousel-item ">
            <img
              src="./images/gallery-image-7.jpg"
              class="d-block w-100 "
              style={{ height: "600px", opacity: "0.31" }}
              alt="..."
            />

            <div class="carousel-caption d-none d-md-block">
              <Container>
                <div
                  className="card"
                  style={{ padding: "10px", marginTop: "20px" }}
                >
                  <img
                    src="./images/gallery-image-8.jpg"
                    alt=""
                    height="500px"
                  />
                </div>
              </Container>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Gallery;
