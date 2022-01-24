import React from 'react'

import { Routes, Route, BrowserRouter ,Outlet} from "react-router-dom";

function Details() {
    
    return (
        <div className='container my-5'>
            <div className="row">
                <div className="col-md-6">
                <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
  
      <img src="./images/detail-image1.jpg" class="d-block w-100" alt="..." />
      <div class="carousel-caption d-none d-md-block">
        <h5>1/3</h5>
       
      </div>
    </div>
    <div class="carousel-item">
      <img src="./images/detail-image2.jpg" class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>2/3</h5>
       
      </div>
    </div>
    <div class="carousel-item">
      <img src="./images/detail-image3.jpg"class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>3/3</h5>
       
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
                </div>

                <div className="col-md-6 destination">
                    <h5> <i class="fa fa-map-marker"></i> <span><strong>Destination:</strong> Thailand </span></h5>
                    <h5> <i class="fa fa-clock"></i> <span><strong>Duration:</strong> 7 days</span></h5>
                    <h5>   <i class="fa fa-money-check-alt"></i> <span><strong>prize:</strong> $589</span></h5>
                   <p> Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas vehicula porttitor condimentum. Curabitur id lobortis lectus. Praesent tincidunt blandit feugiat. Donec sollicitudin vulputate orci eget commodo justo pulvinar rumus.
                   </p>
              
              <p>Nullam tempor, magna ac tempus rutrum, quam metus pharetra enim, at luctus tortor sapien eget eros. Morbi mattis, arcu nec semper aliquet, tortor augue eleifend tellus, at consequat magna sapien id metus. Nulla commodo vulputate feugiat. Nam vel ante massa, eget semper enim. Mauris fermentum ipsum eu lacus fringilla dignissim. Curabitur eget ante tellus.</p>
                </div>

<div className='card  destination mx-2' style={{width:"100%",marginTop:"30px"}}>
<h4> <img style={{marginTop:"15px" ,marginRight:"20px"}} src="./images/icon4.jpg" alt="" /><strong>Details Structure:</strong> </h4>
<p><strong>Description of the structure:</strong></p>
<p>Small apartment complex located in the Ca Mari, 9 km from the lively resort of Es Pujols, 2 km from San Ferran and only 300 meters from the beach of Mitjorn.</p>

<p> <strong>Facilities and services:</strong></p>
<p style={{paddingBottom:"20px"}}>Cleaning every other day and towels changed daily. Swimming pool, TV room, children's play area, restaurant, bar and nearby shops and supermarkets. Bus stop 50 meters away. Pets not allowed.

</p>

</div>

           
            </div>
        
        <div className="row detail-images my-4">
            <div className="col-md-4">
            <div class="card" style={{width:"100%"}}>
  <img src="./images/detail-image4.jpg" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h6 class="card-title">Bangkok City Tour</h6>
    <p class="card-text">Integer congue pulvinar euismod. Aenean eget risus massa. Nunc urna metus, tincidunt et pellentesque ac, ultrices in eros. Nullam lacus neque, luctus eget posuere quis, luctus ame</p>
 
  </div>
</div>
            </div>
            <div className="col-md-4">
            <div class="card" style={{width:"100%"}}>
  <img src="./images/detail-image4.jpg" class="card-img-top" alt="..."/>
  <div class="card-body">
  <h6 class="card-title">Bangkok City Tour</h6>
    <p class="card-text">Integer congue pulvinar euismod. Aenean eget risus massa. Nunc urna metus, tincidunt et pellentesque ac, ultrices in eros. Nullam lacus neque, luctus eget posuere quis, luctus ame</p>
 
  </div>
</div>
            </div>
            <div className="col-md-4">
            <div class="card" style={{width:"100%"}}>
  <img src="./images/detail-image4.jpg" class="card-img-top" alt="..." width="100%" height="170px"/>
  <div class="card-body">
  <h6 class="card-title">Bangkok City Tour</h6>
    <p class="card-text">Integer congue pulvinar euismod. Aenean eget risus massa. Nunc urna metus, tincidunt et pellentesque ac, ultrices in eros. Nullam lacus neque, luctus eget posuere quis, luctus ame</p>
 
  </div>
</div>
            </div>
        </div>
        </div>
    )
}

export default Details
