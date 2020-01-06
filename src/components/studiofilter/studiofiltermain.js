import React from 'react';
import Footer from '../homepage/Footer';
import Filter from './SFilter';
import NavHome from '../homepage/NavHome';

import Card from './SCard';

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

function SFP1() {
    return(
        
        <div className="FilterPage1">
           <div className="navigation"><NavHome /></div>
           
            <div className="row" style={{margin: '0',padding: '0'}}>
            <div className="col-md-3" style={filterStyle}>
                <Filter />
            </div>
            <div className="col-md-9" style={searchStyle}>
                <Card />
            </div>
            </div>
            <Footer />
        </div>
    );
}

export default SFP1;