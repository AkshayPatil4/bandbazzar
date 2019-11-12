import React from 'react';
import Rightupbody from './rightupbody';
import Rightdnbody from './rightdnbody';


import '../homepage/Home.css';
import Filter from '../filterpage/FP1/Filter';
import NavHome from '../homepage/NavHome';


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
                <Rightupbody />
                <Rightdnbody />
            </div>
            </div>
        </div>
    );
}

export default gigs;