import React from 'react';

const connectStyle = {
    float: 'right',
    textAlign: 'center',
    padding: '1%',
    borderBottom: '1px solid #eee',
    borderLeft: '1px solid #eee'
}

function Connect() {
    return(
        <div className="Connect">
            <div className="connect col-md-3" style={connectStyle}>
                <h4 style={{marginBottom: '8%',marginTop: '3%'}}><b>To Connect With Them:</b></h4>
                <p style={{fontSize: '15px', textAlign: 'left'}}>Enquiries: Mr. Himanshu Sharma</p>
                <p style={{fontSize: '15px', textAlign: 'left'}}>Bookings: BandBazar@gmail.com</p>
                <p style={{fontSize: '15px', textAlign: 'left'}}>Manager: Mr. Ajay Singhania</p>
                <img src={require('../../../assets/share.png')} alt="" 
                style={{height: '40px',width: '40px'}} /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <img src={require('../../../assets/down.png')} alt="" 
                style={{height: '40px',width: '40px'}} />
            </div>
        </div>
    );
}

export default Connect;