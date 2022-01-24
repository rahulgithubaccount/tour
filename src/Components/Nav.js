import React from "react";
import Details from "./Details";
import { Routes, Route, Link, BrowserRouter ,Outlet} from "react-router-dom";
function Nav() {
  return (
    <div>
      
      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img src="./images/logo.png" alt="" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span
              style={{ backgroundColor: "#1BBC9B" }}
              className="navbar-toggler-icon"
            ></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="about">
                  About
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="tour">
                  Tour
                </Link>
              </li>
             
              <li className="nav-item">
                <Link className="nav-link" to="contact">
                  Contact
                </Link>
              </li>

           
             
            </ul>
          </div>
        </div>
      </nav>

    
     

      <Outlet />
    </div>
  );
}
export default Nav;
