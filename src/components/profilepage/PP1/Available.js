import React from 'react';

const availableStyle = {
    float: 'right',
    padding: '1%',
    textAlign: 'center',
    borderBottom: '1px solid #eee'
}

function Available() {
    return(
        <div className="Available">
            <div className="available col-md-3" style={availableStyle}>
                <h1 style={{fontSize: '24px'}}><b>Available On:</b></h1>
                <div className="row" style={{marginBottom: '5%',marginTop: '13%'}}>
                    <div className="col-md-3">
                        <img src={require('../../../assets/spotify.png')} alt="" 
                        style={{height: '35px', width: '35px'}} />
                    </div>
                    <div className="col-md-3">
                        <img src={require('../../../assets/fb.png')} alt="" 
                        style={{height: '28px', width: '15px'}} />
                    </div>
                    <div className="col-md-3">
                        <img src={require('../../../assets/insta.png')} alt="" 
                        style={{height: '30px', width: '30px'}} />
                    </div>
                    <div className="col-md-3">
                        <img src={require('../../../assets/linkedin.png')} alt="" 
                        style={{height: '35px', width: '35px'}} />
                    </div>
                </div>
                <div className="row" style={{marginBottom: '8%',marginTop: '7%'}}>
                    <div className="col-md-3">
                        <img src={require('../../../assets/itune.png')} alt="" 
                        style={{height: '30px', width: '30px'}} />
                    </div>
                    <div className="col-md-3">
                        <img src={require('../../../assets/twitter.png')} alt="" 
                        style={{height: '25px', width: '30px'}} />
                    </div>
                    <div className="col-md-3">
                        <img src={require('../../../assets/world.png')} alt="" 
                        style={{height: '28px', width: '28px'}} />
                    </div>
                    <div className="col-md-3">
                        <img src={require('../../../assets/apple.png')} alt="" 
                        style={{height: '35px', width: '35px'}} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Available;