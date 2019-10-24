import React from 'react';
import './wave.css';

const rect = {
    height: '90%',
    width: '65%',
    padding: '8%',
    border: '0.5px solid #adafb3',
    borderRadius: '10%',
    backgroundColor: '#adafb3',
    textAlign: 'center',
    color: 'black'
}

const registerButton = {
    backgroundColor: 'white',
    width: '40%',
    border: '2px solid #244ced',
    float: 'right',
    marginTop: '5%'
}

const ticketButton = {
    backgroundColor: 'white',
    width: '40%',
    border: '2px solid black',
    float: 'left',
    marginTop: '5%'
}

const headStyle = {
    color: '#1799fc',
    fontSize: '22px',
    marginBottom: '20%',
    marginRight: '15%',
    float: 'right'
}

function Upcoming() {
    return(
        <div className="Upcoming" style={{textAlign: 'center',marginTop: '-5%'}}>
            <section>
                <div className="wave">
                    <h2 style={{zIndex: '2',paddingTop: '7%',
                    fontSize: '50px'}}>Upcoming Gigs</h2>
                </div>
            </section>
            <div className="row" style={{marginTop: '5%'}}>
                <div className="col-md-2">
                    <div style={rect}>
                        <p>28-31 Aug 2019</p>
                    </div>
                </div>
                <div className="col-md-4" style={{textAlign: 'left',color: '#474746'}}>
                    <h4>NEW DELHI, IN</h4>
                    <h4>Tech Fest, Delhi University</h4>
                </div>
                <div className="col-md-3">
                    <button style={registerButton}>
                        <i className="fa fa-edit"></i>  Register
                    </button>
                </div>
                <div className="col-md-3">
                    <button style={ticketButton}>
                        <i className="fa fa-ticket"></i>  Ticket
                    </button>
                </div>
            </div>
            <div className="row" style={{marginTop: '2%'}}>
                <div className="col-md-2">
                    <div style={rect}>
                        <p>28-31 Aug 2019</p>
                    </div>
                </div>
                <div className="col-md-4" style={{textAlign: 'left',color: '#474746'}}>
                    <h4>NEW DELHI, IN</h4>
                    <h4>Tech Fest, Delhi University</h4>
                </div>
                <div className="col-md-3">
                    <button style={registerButton}>
                        <i className="fa fa-edit"></i>  Register
                    </button>
                </div>
                <div className="col-md-3">
                    <button style={ticketButton}>
                        <i className="fa fa-ticket"></i>  Ticket
                    </button>
                </div>
            </div>
            <div className="row" style={{marginTop: '2%'}}>
                <div className="col-md-2">
                    <div style={rect}>
                        <p>28-31 Aug 2019</p>
                    </div>
                </div>
                <div className="col-md-4" style={{textAlign: 'left',color: '#474746'}}>
                    <h4>NEW DELHI, IN</h4>
                    <h4>Tech Fest, Delhi University</h4>
                </div>
                <div className="col-md-3">
                    <button style={registerButton}>
                        <i className="fa fa-edit"></i>  Register
                    </button>
                </div>
                <div className="col-md-3">
                    <button style={ticketButton}>
                        <i className="fa fa-ticket"></i>  Ticket
                    </button>
                </div>
            </div>
            <div className="row" style={{marginTop: '2%'}}>
                <div className="col-md-2">
                    <div style={rect}>
                        <p>28-31 Aug 2019</p>
                    </div>
                </div>
                <div className="col-md-4" style={{textAlign: 'left',color: '#474746'}}>
                    <h4>NEW DELHI, IN</h4>
                    <h4>Tech Fest, Delhi University</h4>
                </div>
                <div className="col-md-3">
                    <button style={registerButton}>
                        <i className="fa fa-edit"></i>  Register
                    </button>
                </div>
                <div className="col-md-3">
                    <button style={ticketButton}>
                        <i className="fa fa-ticket"></i>  Ticket
                    </button>
                </div>
            </div>
            <h5 style={headStyle}><b>Show All</b> <img src={require('../../assets/more.png')}
            alt="" style={{width: '16px', height: '16px'}} /></h5> 
            <hr style={{marginTop: '5%'}}/>
        </div>
    );
}

export default Upcoming;