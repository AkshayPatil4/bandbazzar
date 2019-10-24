import React from 'react';
import styled from "styled-components";
import Slider from './Slider';
import style from './info.css';
import Like from './Like';

const Btnstyle = styled.div`
.hire{
    background-color:#000;
    color:white;
    border-radius:1.5625em;
    width:30%;
    padding:1.5%;
    font-size:0.86em;
    letter-spacing:1px;
    font-weight:bolder;
    margin-right:1%;
    border: 1.1px solid #000000;
    &:hover {
      text-decoration:none;  
      color: #000;
      background-color:white;
}
}
.fan{
    background-color:white;
    color:#000;
    border-radius:1.5625em;
    width:30%;
    padding:1.5%;
    font-size:0.86em;
    letter-spacing:1px;
    font-weight:bolder;
    margin-right:1%;
    border: 1.1px solid #000000;
    &:hover {
      text-decoration:none;  
      color: white;
      background-color:#000;
}
}
`
export default function Info() {
    return (
        <div>
        <div className="One">
            <Slider />
        </div>
        <div className="row justify-content-center" style={{fontSize:'0.8375em',fontWeight:"bolder"}}>
            <div className="col-md-4 col-xs-12 two">
            <img src={require('../../../assets/icons/local train.jpeg')} alt="Indian flag"
                style={{height: '170px', width: '170px',border:'2px solid white'}}/>
            </div>
            <div className='col-md-8 col-xs-12'>
            <div className='row'>
            <div className='col-md-4 col-xs-12'>
                <h1 style={{fontSize:"1.3em",fontWeight:"bolder",letterSpacing:'4px'}}><b>THE LOCAL TRAIN</b></h1>
                <p>Indie Rock, Indian Rock.
                <br/>
                NEW DELHI,INDIA
                <img src={require('../../../assets/icons/1350px-Flag_of_India.svg.png')} alt="Indian flag"
                style={{height: '20px', width: '30px',marginLeft:'4%'}}/></p>
            </div>
            <div className='col-md-4 col-xs-12'>
            <Btnstyle>
                <button type="button" className="hire">HIRE US</button>
                <button type="button" className="fan">BE A FAN</button>
                <img src={require('../../../assets/icons/Group 15.png')} alt="send"
                style={{height: '25px', width: '25px',margin:'0.4em'}}/>
            </Btnstyle>
            </div>
            </div>
            </div>
            <div>
                <Like />
            </div>
        </div>
        </div>
    )
}

