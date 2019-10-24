import React from 'react';
import './intro.css';

function Intro() {
    return(
        <div className="Intro">
            <div className="row">
            <div className="col-md-6">
                <div class="row"> 
                    <div class="column1">
                        <img src={require('../../assets/homepage/15-og.png')} alt="" 
                        style={{}}/>
                        <img src={require('../../assets/homepage/lc2.png')} alt="" 
                        style={{}}/>
                        <img src={require('../../assets/homepage/parth.png')} alt="" 
                        style={{}}/>
                        <img src={require('../../assets/homepage/roaring.png')} alt="" 
                        style={{}}/>
                        <img src={require('../../assets/homepage/maroon5.png')} alt="" />
                    </div>
                    <div class="column2">
                        <img src={require('../../assets/homepage/lc1.png')} alt="" />   
                        <img src={require('../../assets/homepage/pic3.png')} alt="" />
                        <img src={require('../../assets/homepage/gustakh.png')} alt="" />
                        <img src={require('../../assets/homepage/lc3.png')} alt="" />
                    </div> 
                    <div class="column3">
                        <img src={require('../../assets/pic1.jpg')} alt="" />
                        <img src={require('../../assets/homepage/raman.png')} alt="" />
                        <img src={require('../../assets/homepage/ramit.png')} alt="" />
                        <img src={require('../../assets/homepage/pic.png')} alt="" />
                    </div>
                    <div class="column4">
                        <img src={require('../../assets/homepage/selena.png')} alt="" />
                        <img src={require('../../assets/homepage/sahil.png')} alt="" />
                        <img src={require('../../assets/homepage/pic2.png')} alt="" />
                    </div>
                </div>
            </div>
            <div className="col-md-6">
                <h1 style={{textAlign: 'center',marginTop: '10%'}}>BandBazaar.com</h1> 
                <p>Are you an aspiring artist, musician or a band, looking for the right 
                place to make people aware about your talent ?! Then be happy because 
                you are at the right place...</p>
                <p>BandBazaar is the best place to showcase your talent that was hidden 
                for a long time now and let people know what you are capable of.</p>          
            </div>
            </div>
        </div>
    );
}

export default Intro;