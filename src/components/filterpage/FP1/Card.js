import React from 'react';

export default function Card(){
        return(
            <div className="Search">
                <h4><b>Filtered Search</b></h4>
                <div className='row'>
                    <div className='col-md-3 col-xs-12' style={{margin:'4%',marginLeft: '0'}}>
                        <div className="card" style={{width:'15rem',height:'21rem',borderRadius:'5%',alignItems:'center',backgroundColor:'#E5E4E2'}}>
                            <div style={{boxShadow:'0 10px 16px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19)',borderRadius:'5%'}}>
                                <img className="card-img-top" src={require('../../../assets/icons/lc.jpg')} alt="Card image cap" style={{width: '15rem',height: '10rem',borderRadius:'5%'}}/>
                            </div>
                            <div className="card-body" style={{width:'100%',fontSize:'12px',padding:'0px',textAlign:'center',margin:'0px'}}>
                                <div className="row" style={{width:'100%',marginTop:'2%'}}>
                                    <h5 className="col-md-8 card-title" style={{fontSize:'15px',fontWeight:'bolder',marginBottom:'0px'}}>The Local Train</h5>
                                    <p className="col-md-4" style={{alignItems:'left',fontSize:'15px',marginBottom:'0px'}}><img src={require('../../../assets/bluetick.png')} alt="ble tick" style={{width:'20px',height:'20px'}} />
                                    <span className="fa fa-heart-o" style={{paddingLeft:'10px'}}></span></p>
                                </div>
                                <p className="card-text" style={{fontSize:'10px',padding:'0px',margin:'0px'}}>INDIAN ROCK • INDIE ROCK</p>
                                <p style={{fontWeight:'bold'}}><span className="fa fa-map-marker" style={{fontSize:'15px'}}></span> New Delhi , IN</p>
                                <div className="row">
                                    <div className='col-md-5' style={{fontSize:'12px',letterSpacing:'2px',textAlign:'center',paddingRight:'0px'}}>
                                        <span className="fa fa-star"></span>
                                        <span className="fa fa-star"></span>
                                        <span className="fa fa-star"></span>
                                        <span className="fa fa-star"></span>
                                        <span className="fa fa-star checked"></span>
                                    </div>
                                    <div className="col-md-7" style={{textAlign:'left'}}>
                                        <img className="im" src={require('../../../assets/icons/png.png')} alt="logo" style={{width:'35px',height:'35px'}}/>
                                        <button type="button" className="assr">Assured <span>&#10003;</span></button>
                                    </div>
                                </div>
                                <div className='row'style={{textAlign:'center',paddingTop:'8px',fontSize:'10px',fontWeight:'bold'}}>
                                    <p className='col' style={{marginBottom:'0px'}}><i className="fa fa-comment-alt"></i>Chat with Us</p>
                                    <p className='col' style={{marginBottom:'0px'}}><i className="fa fa-envelope"></i>Email Us</p>
                                </div>
                                <div className='row' style={{textAlign:'center',fontWeight:'bolder'}}>
                                    <button type="button" className="col btn"><a href="/pp1">View Profile</a></button>
                                    <button type="button" className='col btn'>Hire</button>
                                </div>
                                <div></div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-3 col-xs-12' style={{margin:'4%'}}>
                        <div className="card" style={{width:'15rem',height:'21rem',borderRadius:'5%',alignItems:'center',backgroundColor:'#E5E4E2'}}>
                            <div style={{boxShadow:'0 10px 16px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19)',borderRadius:'5%'}}>
                                <img className="card-img-top" src={require('../../../assets/icons/lc.jpg')} alt="Card image cap" style={{width: '15rem',height: '10rem',borderRadius:'5%'}}/>
                            </div>
                            <div className="card-body" style={{width:'100%',fontSize:'12px',padding:'0px',textAlign:'center',margin:'0px'}}>
                                <div className="row" style={{width:'100%',marginTop:'2%'}}>
                                    <h5 className="col-md-8 card-title" style={{fontSize:'15px',fontWeight:'bolder',marginBottom:'0px'}}>The Local Train</h5>
                                    <p className="col-md-4" style={{alignItems:'left',fontSize:'15px',marginBottom:'0px'}}><img src={require('../../../assets/bluetick.png')} alt="ble tick" style={{width:'20px',height:'20px'}} />
                                    <span className="fa fa-heart-o" style={{paddingLeft:'10px'}}></span></p>
                                </div>
                                <p className="card-text" style={{fontSize:'10px',padding:'0px',margin:'0px'}}>INDIAN ROCK • INDIE ROCK</p>
                                <p style={{fontWeight:'bold'}}><span className="fa fa-map-marker" style={{fontSize:'15px'}}></span> New Delhi , IN</p>
                                <div className="row">
                                    <div className='col-md-5' style={{fontSize:'12px',letterSpacing:'2px',textAlign:'center',paddingRight:'0px'}}>
                                        <span className="fa fa-star"></span>
                                        <span className="fa fa-star"></span>
                                        <span className="fa fa-star"></span>
                                        <span className="fa fa-star"></span>
                                        <span className="fa fa-star checked"></span>
                                    </div>
                                    <div className="col-md-7" style={{textAlign:'left'}}>
                                        <img className="im" src={require('../../../assets/icons/png.png')} alt="logo" style={{width:'35px',height:'35px'}}/>
                                        <button type="button" className="assr">Assured <span>&#10003;</span></button>
                                    </div>
                                </div>
                                <div className='row'style={{textAlign:'center',paddingTop:'8px',fontSize:'10px',fontWeight:'bold'}}>
                                    <p className='col' style={{marginBottom:'0px'}}><i className="fa fa-comment-alt"></i>Chat with Us</p>
                                    <p className='col' style={{marginBottom:'0px'}}><i className="fa fa-envelope"></i>Email Us</p>
                                </div>
                                <div className='row' style={{textAlign:'center',fontWeight:'bolder'}}>
                                    <button type="button" className="col btn">View Profile</button>
                                    <button type="button" className='col btn'>Hire</button>
                                </div>
                                <div></div>
                            </div>
                        </div>
                    </div>

                    <div className='col-md-3 col-xs-12' style={{margin:'4%'}}>
                        <div className="card" style={{width:'15rem',height:'21rem',borderRadius:'5%',alignItems:'center',backgroundColor:'#E5E4E2'}}>
                            <div style={{boxShadow:'0 10px 16px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19)',borderRadius:'5%'}}>
                                <img className="card-img-top" src={require('../../../assets/icons/lc.jpg')} alt="Card image cap" style={{width: '15rem',height: '10rem',borderRadius:'5%'}}/>
                            </div>
                            <div className="card-body" style={{width:'100%',fontSize:'12px',padding:'0px',textAlign:'center',margin:'0px'}}>
                                <div className="row" style={{width:'100%',marginTop:'2%'}}>
                                    <h5 className="col-md-8 card-title" style={{fontSize:'15px',fontWeight:'bolder',marginBottom:'0px'}}>The Local Train</h5>
                                    <p className="col-md-4" style={{alignItems:'left',fontSize:'15px',marginBottom:'0px'}}><img src={require('../../../assets/bluetick.png')} alt="ble tick" style={{width:'20px',height:'20px'}} />
                                    <span className="fa fa-heart-o" style={{paddingLeft:'10px'}}></span></p>
                                </div>
                                <p className="card-text" style={{fontSize:'10px',padding:'0px',margin:'0px'}}>INDIAN ROCK • INDIE ROCK</p>
                                <p style={{fontWeight:'bold'}}><span className="fa fa-map-marker" style={{fontSize:'15px'}}></span> New Delhi , IN</p>
                                <div className="row">
                                    <div className='col-md-5' style={{fontSize:'12px',letterSpacing:'2px',textAlign:'center',paddingRight:'0px'}}>
                                        <span className="fa fa-star"></span>
                                        <span className="fa fa-star"></span>
                                        <span className="fa fa-star"></span>
                                        <span className="fa fa-star"></span>
                                        <span className="fa fa-star checked"></span>
                                    </div>
                                    <div className="col-md-7" style={{textAlign:'left'}}>
                                        <img className="im" src={require('../../../assets/icons/png.png')} alt="logo" style={{width:'35px',height:'35px'}}/>
                                        <button type="button" className="assr">Assured <span>&#10003;</span></button>
                                    </div>
                                </div>
                                <div className='row'style={{textAlign:'center',paddingTop:'8px',fontSize:'10px',fontWeight:'bold'}}>
                                    <p className='col' style={{marginBottom:'0px'}}><i className="fa fa-comment-alt"></i>Chat with Us</p>
                                    <p className='col' style={{marginBottom:'0px'}}><i className="fa fa-envelope"></i>Email Us</p>
                                </div>
                                <div className='row' style={{textAlign:'center',fontWeight:'bolder'}}>
                                    <button type="button" className="col btn">View Profile</button>
                                    <button type="button" className='col btn'>Hire</button>
                                </div>
                                <div></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-3 col-xs-12' style={{margin:'4%',marginLeft: '0'}}>
                        <div className="card" style={{width:'15rem',height:'21rem',borderRadius:'5%',alignItems:'center',backgroundColor:'#E5E4E2'}}>
                            <div style={{boxShadow:'0 10px 16px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19)',borderRadius:'5%'}}>
                                <img className="card-img-top" src={require('../../../assets/icons/lc.jpg')} alt="Card image cap" style={{width: '15rem',height: '10rem',borderRadius:'5%'}}/>
                            </div>
                            <div className="card-body" style={{width:'100%',fontSize:'12px',padding:'0px',textAlign:'center',margin:'0px'}}>
                                <div className="row" style={{width:'100%',marginTop:'2%'}}>
                                    <h5 className="col-md-8 card-title" style={{fontSize:'15px',fontWeight:'bolder',marginBottom:'0px'}}>The Local Train</h5>
                                    <p className="col-md-4" style={{alignItems:'left',fontSize:'15px',marginBottom:'0px'}}><img src={require('../../../assets/bluetick.png')} alt="ble tick" style={{width:'20px',height:'20px'}} />
                                    <span className="fa fa-heart-o" style={{paddingLeft:'10px'}}></span></p>
                                </div>
                                <p className="card-text" style={{fontSize:'10px',padding:'0px',margin:'0px'}}>INDIAN ROCK • INDIE ROCK</p>
                                <p style={{fontWeight:'bold'}}><span className="fa fa-map-marker" style={{fontSize:'15px'}}></span> New Delhi , IN</p>
                                <div className="row">
                                    <div className='col-md-5' style={{fontSize:'12px',letterSpacing:'2px',textAlign:'center',paddingRight:'0px'}}>
                                        <span className="fa fa-star"></span>
                                        <span className="fa fa-star"></span>
                                        <span className="fa fa-star"></span>
                                        <span className="fa fa-star"></span>
                                        <span className="fa fa-star checked"></span>
                                    </div>
                                    <div className="col-md-7" style={{textAlign:'left'}}>
                                        <img className="im" src={require('../../../assets/icons/png.png')} alt="logo" style={{width:'35px',height:'35px'}}/>
                                        <button type="button" className="assr">Assured <span>&#10003;</span></button>
                                    </div>
                                </div>
                                <div className='row'style={{textAlign:'center',paddingTop:'8px',fontSize:'10px',fontWeight:'bold'}}>
                                    <p className='col' style={{marginBottom:'0px'}}><i className="fa fa-comment-alt"></i>Chat with Us</p>
                                    <p className='col' style={{marginBottom:'0px'}}><i className="fa fa-envelope"></i>Email Us</p>
                                </div>
                                <div className='row' style={{textAlign:'center',fontWeight:'bolder'}}>
                                    <button type="button" className="col btn">View Profile</button>
                                    <button type="button" className='col btn'>Hire</button>
                                </div>
                                <div></div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-3 col-xs-12' style={{margin:'4%'}}>
                        <div className="card" style={{width:'15rem',height:'21rem',borderRadius:'5%',alignItems:'center',backgroundColor:'#E5E4E2'}}>
                            <div style={{boxShadow:'0 10px 16px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19)',borderRadius:'5%'}}>
                                <img className="card-img-top" src={require('../../../assets/icons/lc.jpg')} alt="Card image cap" style={{width: '15rem',height: '10rem',borderRadius:'5%'}}/>
                            </div>
                            <div className="card-body" style={{width:'100%',fontSize:'12px',padding:'0px',textAlign:'center',margin:'0px'}}>
                                <div className="row" style={{width:'100%',marginTop:'2%'}}>
                                    <h5 className="col-md-8 card-title" style={{fontSize:'15px',fontWeight:'bolder',marginBottom:'0px'}}>The Local Train</h5>
                                    <p className="col-md-4" style={{alignItems:'left',fontSize:'15px',marginBottom:'0px'}}><img src={require('../../../assets/bluetick.png')} alt="ble tick" style={{width:'20px',height:'20px'}} />
                                    <span className="fa fa-heart-o" style={{paddingLeft:'10px'}}></span></p>
                                </div>
                                <p className="card-text" style={{fontSize:'10px',padding:'0px',margin:'0px'}}>INDIAN ROCK • INDIE ROCK</p>
                                <p style={{fontWeight:'bold'}}><span className="fa fa-map-marker" style={{fontSize:'15px'}}></span> New Delhi , IN</p>
                                <div className="row">
                                    <div className='col-md-5' style={{fontSize:'12px',letterSpacing:'2px',textAlign:'center',paddingRight:'0px'}}>
                                        <span className="fa fa-star"></span>
                                        <span className="fa fa-star"></span>
                                        <span className="fa fa-star"></span>
                                        <span className="fa fa-star"></span>
                                        <span className="fa fa-star checked"></span>
                                    </div>
                                    <div className="col-md-7" style={{textAlign:'left'}}>
                                        <img className="im" src={require('../../../assets/icons/png.png')} alt="logo" style={{width:'35px',height:'35px'}}/>
                                        <button type="button" className="assr">Assured <span>&#10003;</span></button>
                                    </div>
                                </div>
                                <div className='row'style={{textAlign:'center',paddingTop:'8px',fontSize:'10px',fontWeight:'bold'}}>
                                    <p className='col' style={{marginBottom:'0px'}}><i className="fa fa-comment-alt"></i>Chat with Us</p>
                                    <p className='col' style={{marginBottom:'0px'}}><i className="fa fa-envelope"></i>Email Us</p>
                                </div>
                                <div className='row' style={{textAlign:'center',fontWeight:'bolder'}}>
                                    <button type="button" className="col btn">View Profile</button>
                                    <button type="button" className='col btn'>Hire</button>
                                </div>
                                <div></div>
                            </div>
                        </div>
                    </div>

                    <div className='col-md-3 col-xs-12' style={{margin:'4%'}}>
                        <div className="card" style={{width:'15rem',height:'21rem',borderRadius:'5%',alignItems:'center',backgroundColor:'#E5E4E2'}}>
                            <div style={{boxShadow:'0 10px 16px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19)',borderRadius:'5%'}}>
                                <img className="card-img-top" src={require('../../../assets/icons/lc.jpg')} alt="Card image cap" style={{width: '15rem',height: '10rem',borderRadius:'5%'}}/>
                            </div>
                            <div className="card-body" style={{width:'100%',fontSize:'12px',padding:'0px',textAlign:'center',margin:'0px'}}>
                                <div className="row" style={{width:'100%',marginTop:'2%'}}>
                                    <h5 className="col-md-8 card-title" style={{fontSize:'15px',fontWeight:'bolder',marginBottom:'0px'}}>The Local Train</h5>
                                    <p className="col-md-4" style={{alignItems:'left',fontSize:'15px',marginBottom:'0px'}}><img src={require('../../../assets/bluetick.png')} alt="ble tick" style={{width:'20px',height:'20px'}} />
                                    <span className="fa fa-heart-o" style={{paddingLeft:'10px'}}></span></p>
                                </div>
                                <p className="card-text" style={{fontSize:'10px',padding:'0px',margin:'0px'}}>INDIAN ROCK • INDIE ROCK</p>
                                <p style={{fontWeight:'bold'}}><span className="fa fa-map-marker" style={{fontSize:'15px'}}></span> New Delhi , IN</p>
                                <div className="row">
                                    <div className='col-md-5' style={{fontSize:'12px',letterSpacing:'2px',textAlign:'center',paddingRight:'0px'}}>
                                        <span className="fa fa-star"></span>
                                        <span className="fa fa-star"></span>
                                        <span className="fa fa-star"></span>
                                        <span className="fa fa-star"></span>
                                        <span className="fa fa-star checked"></span>
                                    </div>
                                    <div className="col-md-7" style={{textAlign:'left'}}>
                                        <img className="im" src={require('../../../assets/icons/png.png')} alt="logo" style={{width:'35px',height:'35px'}}/>
                                        <button type="button" className="assr">Assured <span>&#10003;</span></button>
                                    </div>
                                </div>
                                <div className='row'style={{textAlign:'center',paddingTop:'8px',fontSize:'10px',fontWeight:'bold'}}>
                                    <p className='col' style={{marginBottom:'0px'}}><i className="fa fa-comment-alt"></i>Chat with Us</p>
                                    <p className='col' style={{marginBottom:'0px'}}><i className="fa fa-envelope"></i>Email Us</p>
                                </div>
                                <div className='row' style={{textAlign:'center',fontWeight:'bolder'}}>
                                       <button type="button" className="col btn">View Profile</button>
                                    <button type="button" className='col btn'>Hire</button>
                                </div>
                                <div></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
}