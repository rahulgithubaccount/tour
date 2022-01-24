import React, {  useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import data from "./Data";
import 'aos/dist/aos.css'
import ImageFilterModal from "./ImageFilterModal";

function ImageFilter(){

    const settings = {
     autoPlay:true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
       
      
        swipeToSlide: true,
        slidesToScroll: 4,
      autoplay: true,
      autoplaySpeed: 5000,

      responsive : [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    }
const[state,setState]=useState(data)
    
const filterItem=(filter)=>{
    const updateData= data.filter(items=>{
      return  items.category===filter
    });

setState( updateData)
}


// modal ----

 const [modal,setmodal]=useState(false);
 const [datas,setdatas]= useState([])

 const getdata=(img)=>{
   const temdata =[img]

   setdatas ([1,...temdata])

   return setmodal(true)

 }


    return (
      <div >
        <div className="container " data-aos="fade-right">

    
          <div className="row">
        <h2 className="location"> <i className="fa fa-map-marker-alt"></i> WHERE DO YOU WANT TO TRAVEL? </h2>
      
      <div className="filter">
        <ul>
     <li> <input class="form-check-input" type="radio" name="inlineRadioOptions" id="exampleRadio1" value="option1"  onClick={()=>filterItem("america")}/> North America</li>

     <li> <input class="form-check-input" type="radio" name="inlineRadioOptions" id="exampleRadio1" value="option1" onClick={()=>filterItem("africa")}/> Africa</li>


     <li><input  className="form-check-input" type="radio" name="inlineRadioOptions" id="exampleRadio1" value="option1" onClick={()=>filterItem("asia")}/> Asia</li>



     <li><input   className="form-check-input" type="radio" name="inlineRadioOptions" id="exampleRadio1" value="option1" onClick={()=>filterItem("aus")}/> Australia</li>


     <li><input   className="form-check-input" type="radio" name="inlineRadioOptions" id="exampleRadio1" value="option1" onClick={()=>filterItem("cAmerica")}/> Central America</li>


     <li><input  className="form-check-input" type="radio" name="inlineRadioOptions" id="exampleRadio1" value="option1" onClick={()=>filterItem("europe")}/> Europe</li>
     </ul>


      </div>
     
         
            <Slider {...settings}>
{
    state.map((item,index)=>{
        return(
            <div  data-aos="fade-right" className="col-md-3" key={index} >
               <div className="container2">
               <div className="card " style={{width:"100%"}}>
 <img src={item.img} alt="imagess"   width="100%" height="200px"/>
 <div className="overlay2">
 <i  className="fa fa-search" onClick={()=>getdata(item.img)} ></i>
 </div>
 <div className="card-body">
    <h5 className="card-title" style={{color:"#555555"}}>{item.text}</h5>
    <p className="card-text" style={{color:"#979CA1",fontSize:"13px"}}>{item.desc}</p>
</div>
               </div>
               
              
        </div>

       
        </div>
        )
    })
}
         
            </Slider>
      
            </div>
  
      </div>


{
  modal ===true?<ImageFilterModal  img={datas[1]} hide={()=>setmodal(false)}/> :""
}

      </div>
    );
  
}

export default ImageFilter