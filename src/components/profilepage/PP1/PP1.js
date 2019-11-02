import React from 'react';

import Connect from './Connect';
import Slider from './Slider';
import slider from './Slider';
import Info from './Info';
import Like from './Like';
import Videos from './Videos';
import Gigs from './Gigs';
import Comments from './Comments';
import FamousBands from './FamousBands';
import Collections from './Collections';
import Footer from './Footers';
import Merchendise from './Merchendise';
import About from './About';
import Band from './Band';
import Available from './Available';
import Navigationbar from './Navigationbar';
import NavHome from '../../homepage/NavHome';
import '../../homepage/Home.css';

const borderStyle = {
    border: '1px solid #eee'
}

function PP1(){
    return(
      <div className="ProfilePage1">
        <div className="navigation">
        <NavHome /></div>
        <Info />
        <div className="border" style={borderStyle}>
          <About />
          <Band />
          <Available />
          <Connect />
          <Videos />
          <FamousBands />
          <Gigs />
          <Comments />
          <Collections />
          <Merchendise />
          <Footer />
        </div>
      </div>
    );
}

export default PP1;