import React from 'react';

const commentStyle = {
    float: 'left',
    borderRight: '1px solid #eee',
    textAlign: 'center',
    padding: '2%'
}

function Comments() {
    return(
        <div className="Comments">
            <div className="comments col-md-4" style={commentStyle}>
                <h4><b>Comments</b></h4>
                <div className="row" style={{marginTop: '10%'}}>
                    <div className="col-md-3">
                        <img src={require('../../../assets/pp1.jpg')} alt="" 
                        style={{height: '60px',width: '60px',borderRadius: '50px'}} />
                    </div>
                    <div className="col-md-9">
                        <h1 style={{fontSize: '22px',textAlign: 'left'}}><b>Priya Singh</b>
                        <span style={{color: 'gray', float: 'right', fontSize: '16px', padding: '2%'}}>   
                        1h ago</span></h1>
                        <p style={{textAlign: 'justify', fontSize: '13px'}}>Lorem ipsum 
                        dolor sit amet, consectetur adipiscing elit, sed../...</p>
                    </div>
                </div>
                <div className="row" style={{marginTop: '5%'}}>
                    <div className="col-md-3">
                        <img src={require('../../../assets/pp2.jpg')} alt="" 
                        style={{height: '60px',width: '60px',borderRadius: '50px'}} />
                    </div>
                    <div className="col-md-9">
                        <h1 style={{fontSize: '22px',textAlign: 'left'}}><b>Courtney Jonas</b>
                        <span style={{color: 'gray', float: 'right', fontSize: '16px', padding: '2%'}}>
                        3d ago</span></h1>
                        <p style={{textAlign: 'justify', fontSize: '13px'}}>Lorem ipsum 
                        dolor sit amet, consectetur adipiscing elit, sed../...</p>
                    </div>
                </div> 
                <div className="row" style={{marginTop: '5%'}}>
                    <div className="col-md-3">
                        <img src={require('../../../assets/pp3.jpeg')} alt="" 
                        style={{height: '60px',width: '60px',borderRadius: '50px'}} />
                    </div>
                    <div className="col-md-9">
                        <h1 style={{fontSize: '22px',textAlign: 'left'}}><b>James Bay</b>
                        <span style={{color: 'gray', float: 'right', fontSize: '16px', padding: '2%'}}>
                        5w ago</span></h1>
                        <p style={{textAlign: 'justify', fontSize: '13px'}}>Lorem ipsum 
                        dolor sit amet, consectetur adipiscing elit, sed../...</p>
                    </div>
                </div>
                <button style={{backgroundColor: 'black',color: 'white',marginTop: '5%',
                borderRadius: '40px',border: 'none',fontSize: '25px'}}>View More</button>
            </div>
        </div>
    );
}

export default Comments;