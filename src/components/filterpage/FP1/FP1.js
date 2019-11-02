import React from 'react';
import Card from './Card';
import Filter from './Filter';
import NavHome from '../../homepage/NavHome';
import '../../homepage/Home.css';

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

function FP1() {
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
        </div>
    );
}

export default FP1;