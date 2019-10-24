import React from 'react';

const videoStyle = {
    float: 'left',
    padding: '2%',
    borderBottom: '1px solid #eee',
    borderRight: '1px solid #eee'
}

function Videos() {
    return(
        <div className="Videos">
            <div className="video col-md-9" style={videoStyle}>
                <h4 style={{fontSize: '26px', marginBottom: '3%'}}><b>VIDEOS</b></h4>
                <div className="row" style={{marginBottom: '4%',textAlign: 'center'}}>
                    <div className="col-md-3">
                        <img src={require('../../../assets/pic1.jpg')} alt=""
                        style={{height: '125px', width: '190px', borderRadius: '5px'}} />
                    </div>
                    <div className="col-md-3">
                        <img src={require('../../../assets/pic2.jpg')} alt=""
                        style={{height: '125px', width: '190px', borderRadius: '5px'}} />
                    </div>
                    <div className="col-md-3">
                        <img src={require('../../../assets/pic3.jpg')} alt=""
                        style={{height: '125px', width: '190px', borderRadius: '5px'}} />
                    </div>
                    <div className="col-md-3">
                        <img src={require('../../../assets/pic4.jpg')} alt=""
                        style={{height: '125px', width: '190px', borderRadius: '5px'}} />
                    </div>
                </div>
            </div> 
        </div>
    );
}

export default Videos;