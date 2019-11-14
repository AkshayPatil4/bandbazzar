import React from 'react';
import Rightupbody from './rightupbody';
import Rightdnbody from './rightdnbody';

import Footer from '../homepage/Footer';
import '../homepage/Home.css';
import Filter from './Filter';
import NavHome from '../homepage/NavHome';
import {
    Breadcrumb
} from 'react-bootstrap';


const filterStyle = {
    margin: '0',
    padding: '2%',
    paddingTop: '1%',
    backgroundColor: '#fafafa'
}

const searchStyle = {
    float: 'right',
    margin: '0',
    padding: '2%'
}

function gigs() {
    return(
        
        <div className="FilterPage1">
           <div className="navigation"><NavHome /></div>
           
            <div className="row" style={{margin: '0',padding: '0'}}>
            <div className="col-md-3" style={filterStyle}>
                <Filter />
            </div>
            <div className="col-md-9" style={searchStyle}>
            <Breadcrumb>
  <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
  <Breadcrumb.Item href="/main">
    Event
  </Breadcrumb.Item>
  <Breadcrumb.Item active>PostEvent</Breadcrumb.Item>
</Breadcrumb>
                <Rightupbody />
                <Rightdnbody />
            </div>
            </div>
            <Footer />
        </div>
    );
}

export default gigs;