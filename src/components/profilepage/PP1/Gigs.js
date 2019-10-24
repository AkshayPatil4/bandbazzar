import React from 'react';

const gigsStyle = {
    float: 'left',
    padding: '2%',
    borderRight: '1px solid #eee'
}

const rect = {
    height: '70px',
    width: '100px',
    border: '0.5px solid black',
    textAlign: 'center',
    color: '#363433'
}

function Gigs() {
    return(
        <div className="Gigs">
            <div className="gigs col-md-5" style={gigsStyle}>
                <h1 style={{fontSize: '24px'}}><b>Upcoming Gigs</b></h1>
                <div className="row" style={{padding: '5%'}}>
                    <div className="col-md-3" style={rect}>
                        <p>24th August 2019</p>
                    </div>
                    <div className="col-md-8">
                        <p style={{margin: '0',padding: '0'}}>The Smoke Factory</p>
                        <p style={{margin: '0',padding: '0'}}>New Delhi, IN - 24/09/19</p>
                        <p style={{margin: '0',padding: '0'}}>View on maps </p>
                    </div>
                    <div className="col-md-1">
                        <i className="fa fa-ellipsis-v" style={{fontSize: '30px', color: '#363433'}}></i>
                    </div>
                </div>
                <div className="row" style={{padding: '5%'}}>
                    <div className="col-md-3" style={rect}>
                        <p>24th August 2019</p>
                    </div>
                    <div className="col-md-8">
                        <p style={{margin: '0',padding: '0'}}>The Smoke Factory</p>
                        <p style={{margin: '0',padding: '0'}}>New Delhi, IN - 24/09/19</p>
                        <p style={{margin: '0',padding: '0'}}>View on maps </p>
                    </div>
                    <div className="col-md-1">
                        <i className="fa fa-ellipsis-v" style={{fontSize: '30px', color: '#363433'}}></i>
                    </div>
                </div>
                <div className="row" style={{padding: '5%',marginBottom: '3%'}}>
                    <div className="col-md-3" style={rect}>
                        <p>24th August 2019</p>
                    </div>
                    <div className="col-md-8">
                        <p style={{margin: '0',padding: '0'}}>The Smoke Factory</p>
                        <p style={{margin: '0',padding: '0'}}>New Delhi, IN - 24/09/19</p>
                        <p style={{margin: '0',padding: '0'}}>View on maps </p>
                    </div>
                    <div className="col-md-1">
                        <i className="fa fa-ellipsis-v" style={{fontSize: '30px', color: '#363433'}}></i>
                    </div>
                </div> 
                <h4><b>All Upcoming Shows      </b><img src={require('../../../assets/more.png')} alt=""
                style={{height: '22px', width: '22px'}} /> </h4> 
            </div>
        </div>
    );
}

export default Gigs;