import React from 'react';

const styleBand = {
    float: 'right',
    padding: '1%',
    textAlign: 'center',
    borderBottom: '1px solid #eee',
    borderLeft: '1px solid #eee'
}

function Band() {
    return(
        <div className="Band">
            <div className="band col-md-3" style={styleBand}>
                <h1 style={{fontSize: '22px'}}><b>Band Members</b></h1>
                <div className="row" style={{marginTop: '10%',marginBottom: '4%'}}>
                    <div className="col-md-12">
                        <h5 style={{fontSize: '14px',marginBottom: '0'}}>Raman Negi <img src={require('../../../assets/bluetick.png')} alt=""
                        style={{width: '20px',height: '20px'}} /> </h5>
                        <p style={{fontSize: '10px'}}>Lead Vocalist</p>
                    </div>
                </div>
                <div className="row" style={{marginTop: '4%',marginBottom: '4%'}}>
                    <div className="col-md-12">
                        <h5 style={{fontSize: '14px',marginBottom: '0'}}>Ramit Mehra <img src={require('../../../assets/bluetick.png')} alt=""
                        style={{width: '20px',height: '20px'}} /> </h5>
                        <p style={{fontSize: '10px'}}>Bass Guitarist</p>
                    </div>
                </div>
                <div className="row" style={{marginTop: '4%',marginBottom: '4%'}}>
                    <div className="col-md-12">
                        <h5 style={{fontSize: '14px',marginBottom: '0'}}>Paras Thakur <img src={require('../../../assets/bluetick.png')} alt=""
                        style={{width: '20px',height: '20px'}} /> </h5>
                        <p style={{fontSize: '10px'}}>Lead Guitarist</p>
                    </div>
                </div>
                <div className="row" style={{marginTop: '4%',marginBottom: '4%'}}>
                    <div className="col-md-12">
                        <h5 style={{fontSize: '14px',marginBottom: '0'}}>Sahil Sarin <img src={require('../../../assets/bluetick.png')} alt=""
                        style={{width: '20px',height: '20px'}} /> </h5>
                        <p style={{fontSize: '10px'}}>Drummer</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Band;