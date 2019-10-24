import React from 'react';
import style from './slider.css'
function Slider() {
  return(
    <div className="Slider" style={{display: 'block',marginRight: 'auto', marginLeft: 'auto',width: '75%',marginBottom:'0%'}}>
      <div id="carousel-example-1z" class="carousel slide carousel-fade" data-ride="carousel">
  {/*Indicators*/}
  <ol class="carousel-indicators">
    <li data-target="#carousel-example-1z" data-slide-to="0" class="active"></li>
    <li data-target="#carousel-example-1z" data-slide-to="1"></li>
    <li data-target="#carousel-example-1z" data-slide-to="2"></li>
  </ol>
  {/*/.Indicators*/}
  {/*Slides*/}
  <div class="carousel-inner" role="listbox" style={{height:'300px'}}>
    {/*First slide*/}
    <div class="carousel-item active">
      <img class="d-block w-100 thumbnail" src={require("../../../assets/icons/s2.jpg")
      }
        alt="First slide" />
    </div>
    {/*/First slide*/}
    {/*Second slide*/}
    <div class="carousel-item">
      <img class="d-block w-100" src={require("../../../assets/icons/ss1.jpg")}
        alt="Second slide" style={{width:'100%',height:'100%'}} />
    </div>
    {/*/Second slide*/}
    {/*Third slide*/}
    <div class="carousel-item">
      <img class="d-block w-100" src={require("../../../assets/icons/s3.jpg")}
        alt="Third slide" style={{width:'100%',height:'100%'}} />
    </div>
    {/*/Third slide*/}
  </div>
  {/*/.Slides*/}
  {/*Controls*/}
  <a class="carousel-control-prev" href="#carousel-example-1z" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carousel-example-1z" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
  {/*/.Controls*/}
</div>
{/*/.Carousel Wrapper*/}</div>
    
  );
}

export default Slider;