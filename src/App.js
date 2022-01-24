import { Routes, Route, BrowserRouter } from "react-router-dom";
import React from "react";
import "./App.css";
import Nav from "./Components/Nav";
import Home from "./Components/Home";
import Offers from "./Components/Offers";
import Footer from "./Components/Footer";
import Gallery from "./Components/Gallery";
import ImageFilter from "./Components/ImageFilter";

import Tour from "./Components/Tours";
import Contact from "./Components/Contact";
import Details from "./Components/Details";

function App() {
  return (
    <>
        
        
      <BrowserRouter>
<Nav/>
<Routes>
      <Route path="/" element={<Nav />}/>
        <Route index element={<Home />} />
        <Route path = "/about" element={<Offers />} />
        <Route path = "/tour" element={<Tour />} />
        <Route path = "/gallery" element={<Gallery />} />
        <Route path = "/contact" element={<Contact />} />
        <Route path = "/details" element={<Details />} />
        </Routes>
        
      
      <Footer/>
      </BrowserRouter>
 
     
    
 
    <div>

    </div>
    </>
  );
}

export default App;
