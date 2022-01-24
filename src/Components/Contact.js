import React from "react";
import { useForm } from "react-hook-form";
import { Container, Row, Col } from "react-bootstrap";

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    trigger,
  } = useForm();

  const onSubmit = (data) => {
    reset();
    console.log(data);
  };

  return (
    <>
      <Container className=" my-5 " id="contact">
        <h1
          style={{
            textAlign: "center",
            fontSize: "50px",
            fontWeight: "700",
            marginBottom: "15px",
          }}
        >
          CONTACT
        </h1>
        <Row>
          <Col md="4">
            <div className=" card" style={{ padding: "10px" }}>
              <h4 style={{ marginBottom: "15px", marginTop: "15px" }}>
              
                <img src="./images/icon5.jpg" alt="" />{" "}
                <span> Contact Form </span>
              </h4>
              <form onSubmit={handleSubmit(onSubmit)}>
                <input
                  placeholder="Name"
                  className={`form-control ${errors.name}`}
                  {...register("name", {
                    required: "name is required",

                    maxLength: {
                      value: 20,
                      message: "max length is 20",
                    },
                  })}
                  onKeyUp={() => {
                    trigger("name");
                  }}
                />
                {errors.name && (
                  <small className="text-danger my-2">
                    {errors.name.message}
                  </small>
                )}

                <br />
                <input
                  placeholder="Email"
                  className={`form-control ${errors.email}`}
                  {...register("email", {
                    required: "email is Required",
                    pattern: {
                      value:
                        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                      message: "invalid email",
                    },
                  })}
                  onKeyUp={() => {
                    trigger("email");
                  }}
                />

                {errors.email && (
                  <small className="text-danger">{errors.email.message}</small>
                )}
                <br></br>

                <input
                  type="text"
                  placeholder="phone"
                  className={`form-control ${errors.phone}`}
                  {...register("phone", {
                    required: "phone number is required",
                    pattern: {
                      value: "^[0-9]{10}$",
                      message: "invaild phone number",
                    },
                    maxLength: {
                      value: 10,
                      message: "max length is 10 digit",
                    },
                  })}
                  onKeyUp={() => {
                    trigger("phone");
                  }}
                />
                {errors.phone && (
                  <small className="text-danger">{errors.phone.message}</small>
                )}
                <br />
                <input className="submit" type="submit" />
              </form>
            </div>
          </Col>
          <Col md="4">
            <div className="card details" style={{ padding: "10px" }}>
              <h4 style={{ marginBottom: "15px", marginTop: "15px" }}>
              
                <img src="./images/icon4.jpg" alt="" /> <span> DETAILS </span>
              </h4>
              <li>
              
                <i class="fa fa-phone">
                
                  <span>(+1) 245 5462 252</span>
                </i>
              </li>
              <li>
                <i class="fa fa-clock">
                
                  <span>Mon - Sat 9:00am - 6:00 pm </span>
                </i>
              </li>
              <li>
                <i class="fa fa-map-pin">
                  <span>3301 Lorem, Dolor Sit Amet St</span>
                </i>
              </li>
              <li>
                <i class="fa fa-envelope">
                  <span>support@lorem.com </span>
                </i>
              </li>
              <li>
                <i class="fa fa-globe">
                  <span>www.lorem.com </span>
                </i>
              </li>

              <li>
              
                <i class="fab fa-facebook-f">
                  <span> http://facebook.com/travellworld </span>
                </i>
              </li>
              <li style={{ paddingBottom: "13px" }}>
              
                <i class="fab fa-twitter">
                  <span>http://twitter.com/travellworld </span>
                </i>
              </li>
            </div>
          </Col>

          <Col md="4">
            <div className="card details" style={{ padding: "10px" }}>
              <h4 style={{ marginBottom: "15px", marginTop: "15px" }}>
              
                <img src="./images/icon6.jpg" alt="" />{" "}
                <span> INFORMATION </span>
              </h4>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet
                aut quos fugit reprehenderit sequi perferendis architecto id,
                numquam nam optio? Est dolorem perspiciatis quisquam eaque. Unde
                deleniti facere porro{" "}
              </p>
              <p style={{ paddingBottom: "24px" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatem fugit modi nisi{" "}
              </p>
            </div>
          </Col>
        </Row>
      </Container>

      <div>
        <iframe
          width="100%"
          height="600"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Malet%20St,%20London%20WC1E%207HU,%20United%20Kingdom+(Your%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        >
          <a href="https://www.gps.ie/sport-gps/">hiking gps</a>
        </iframe>
      </div>
    </>
  );
}

export default Contact;
