import React from 'react';
import './intro.css';

function Intro() {
    return(<div>
        <div id="carouselExampleControls" class="carousel slide  col-md-9 container" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100 img"src={require('../../assets/homepage/3.jpg')}alt="First slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100 img"src={require('../../assets/homepage/3.jpg')} alt="Second slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100 img" src={require('../../assets/homepage/3.jpg')} alt="Third slide"/>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
<div class="container-fluid row">
  <div className="col">
    
  </div>
<div className="col-md-6">
                <h1 style={{textAlign: 'center',marginTop: '10%'}}>BandBazaar.com</h1> 
                <p>Are you an aspiring artist, musician or a band, looking for the right 
                place to make people aware about your talent ?! Then be happy because 
                you are at the right place...</p>
                <p>BandBazaar is the best place to showcase your talent that was hidden 
                for a long time now and let people know what you are capable of.</p>    

                <nav>
  <ul>
    <li>
     Join Free
      <span></span><span></span><span></span><span></span>
    </li>
    </ul>
    </nav>     
            </div>
            <div className="col">
           
            </div>
            </div>
            </div>
    );
}

export default Intro;