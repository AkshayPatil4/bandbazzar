import React from 'react';

const collectionsStyle = {
    float: 'right',
    padding: '2%'
}

function Collections() {
    return(
        <div className="Collections">
            <div className="col-md-3" style={collectionsStyle}>
                <h1 style={{fontSize: '22px'}}><b>Suggested Collections</b></h1>   
                <div className="row" style={{marginTop: '15%'}}>
                    <div className="col-md-3">
                        <img src={require('../../../assets/c2.jpeg')} alt="" 
                        style={{height: '60px',width: '60px',borderRadius: '50%'}} />
                    </div>
                    <div className="col-md-9">
                        <p style={{textAlign: 'justify',fontSize: '14px'}}>
                        Best Female Collection of 2018</p>
                    </div>
                </div>
                <div className="row" style={{marginTop: '15%'}}>
                    <div className="col-md-3">
                        <img src={require('../../../assets/c1.jpg')} alt="" 
                        style={{height: '60px',width: '60px',borderRadius: '50%'}} />
                    </div>
                    <div className="col-md-9">
                        <p style={{textAlign: 'justify',fontSize: '14px'}}>
                        Our Top Albums of the Week</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Collections;