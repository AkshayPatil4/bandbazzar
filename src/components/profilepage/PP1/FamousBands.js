import React from 'react';

const bandsStyle = {
    float: 'right',
    textAlign: 'center',
    padding: '2%',
    borderBottom: '1px solid #eee'
}

function FamousBands() {
    return(
        <div className="FamousBands">
            <div className="famousbands col-md-3" style={bandsStyle}>
                <h4><b>Famous Bands</b></h4>
                <div className="row" style={{marginTop: '15%'}}>
                    <div className="col-md-3">
                        <img src={require('../../../assets/Coldplay.jpeg')} alt="" 
                        style={{height: '70px',width: '70px',borderRadius: '50%'}} />
                    </div>
                    <div className="col-md-9">
                        <h1 style={{fontSize: '24px'}}>COLDPLAY</h1>
                        <h4 style={{fontSize: '16px'}}>Rock / London</h4>
                    </div>
                </div>
                <div className="row" style={{marginTop: '10%'}}>
                    <div className="col-md-3">
                        <img src={require('../../../assets/Maroon5.jpg')} alt="" 
                        style={{height: '70px',width: '70px',borderRadius: '50%'}} />
                    </div>
                    <div className="col-md-9">
                        <h1 style={{fontSize: '24px'}}>MAROON 5</h1>
                        <h4 style={{fontSize: '16px'}}>Pop / Los Angeles</h4>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FamousBands;