import React from 'react';
import './Crawler.js';

const marqueetext = {
    width: '100%',
    fontSize: '60px',
    color: 'black',
    textAlign: 'center'
}

const marquee1 = {
    width: '100%',
    fontSize: '60px',
    color: 'rgba(245,166,154,1)',
}

const marquee2 = {
    width: '100%',
    fontSize: '60px',
    color: 'rgba(245,166,154,0.6)',
}

const marquee3 = {
    width: '100%',
    fontSize: '58px',
    color: 'rgba(245,166,154,0.3)',
    zIndex: '-1',
    position: 'absolute'
}

function Marquee() {
    return(
        <div className="Marquee" style={{width: '100%'}}>
            <div className="marquee" id="mycrawler" style={marquee1}>
                Boulevard Of Broken Dreams &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;Closer
            </div>
            <div className="marquee" id="mycrawler2" style={marquee2}>
                Justin Bieber &nbsp;&nbsp;&nbsp; Alan Walker &nbsp;&nbsp;&nbsp; Ed Sheeran
            </div>
            <div className="marquee" id="mycrawler3" style={marquee3}>
                Chainsmokers &nbsp;&nbsp;&nbsp; Coldplay &nbsp;&nbsp;&nbsp; The Local Train
            </div>
            
            <div className="marquee" id="mycrawlertext" style={marqueetext}>
                We Connect Passion to Career
            </div>
            <div className="marquee" id="mycrawler4" style={marquee2}>
                Ariana Grande &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp; Selena Gomez
            </div>  
            <div className="marquee" id="mycrawler5" style={marquee1}>
                BOONDH &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Mind of Mine&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                Aalas Ka Ped 
            </div>
        </div>
    );
}

export default Marquee;