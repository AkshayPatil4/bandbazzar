import React from "react";
import style from './drop.css';
function MultiCarouselPageT(){
    return (
        <div className="container-fluid banner_fluid">
        <div id="multi-item-example" className="carousel slide carousel-multi-item" data-ride="carousel" style={{float:'left'}}>
  
          <div className="carousel-inner">
            
            <div className="carousel-item active row">
            <div className='container'>
            <div className='row'>
            <div className="col-xs-12 col-md-3">
                <div className="card" style={{width:'15rem',height:'21rem',borderRadius:'5%',alignItems:'center',backgroundColor:'#E5E4E2'}}>
                <img className="card-img-top" src={require('../../assets/icons/lc.jpg')} alt="Card image cap" style={{width: '15rem',height: '10rem',borderRadius:'5%'}}/>
                <div className="card-body" style={{width:'100%',fontSize:'12px',padding:'0px',textAlign:'center',margin:'0px'}}>
                                <div className="row" style={{width:'100%',marginTop:'2%'}}>
                                    <h5 className="col-md-8 card-title" style={{fontSize:'15px',fontWeight:'bolder',marginBottom:'0px'}}>The Local Train</h5>
                                    <p className="col-md-4" style={{alignItems:'left',fontSize:'15px',marginBottom:'0px'}}><img src={require('../../assets/bluetick.png')} alt="ble tick" style={{width:'20px',height:'20px'}} />
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
                                        <img className="im" src={require('../../assets/icons/png.png')} alt="logo" style={{width:'35px',height:'35px'}}/>
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
              <div className="col-xs-12 col-md-3" >
                <div className="card" style={{width:'15rem',height:'21rem',borderRadius:'5%',alignItems:'center',backgroundColor:'#E5E4E2'}}>
                <img className="card-img-top" src={require('../../assets/icons/lc.jpg')} alt="Card image cap" style={{width: '15rem',height: '10rem',borderRadius:'5%'}}/>
                <div className="card-body" style={{width:'100%',fontSize:'12px',padding:'0px',textAlign:'center',margin:'0px'}}>
                                <div className="row" style={{width:'100%',marginTop:'2%'}}>
                                    <h5 className="col-md-8 card-title" style={{fontSize:'15px',fontWeight:'bolder',marginBottom:'0px'}}>The Local Train</h5>
                                    <p className="col-md-4" style={{alignItems:'left',fontSize:'15px',marginBottom:'0px'}}><img src={require('../../assets/bluetick.png')} alt="ble tick" style={{width:'20px',height:'20px'}} />
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
                                        <img className="im" src={require('../../assets/icons/png.png')} alt="logo" style={{width:'35px',height:'35px'}}/>
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
              <div className="col-xs-12 col-md-3" >
                <div className="card" style={{width:'15rem',height:'21rem',borderRadius:'5%',alignItems:'center',backgroundColor:'#E5E4E2'}}>
                <img className="card-img-top" src={require('../../assets/icons/lc.jpg')} alt="Card image cap" style={{width: '15rem',height: '10rem',borderRadius:'5%'}}/>
                <div className="card-body" style={{width:'100%',fontSize:'12px',padding:'0px',textAlign:'center',margin:'0px'}}>
                                <div className="row" style={{width:'100%',marginTop:'2%'}}>
                                    <h5 className="col-md-8 card-title" style={{fontSize:'15px',fontWeight:'bolder',marginBottom:'0px'}}>The Local Train</h5>
                                    <p className="col-md-4" style={{alignItems:'left',fontSize:'15px',marginBottom:'0px'}}><img src={require('../../assets/bluetick.png')} alt="ble tick" style={{width:'20px',height:'20px'}} />
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
                                        <img className="im" src={require('../../assets/icons/png.png')} alt="logo" style={{width:'35px',height:'35px'}}/>
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
              <div className="col-xs-12 col-md-3" >
                <div className="card" style={{width:'15rem',height:'21rem',borderRadius:'5%',alignItems:'center',backgroundColor:'#E5E4E2'}}>
                <img className="card-img-top" src={require('../../assets/icons/lc.jpg')} alt="Card image cap" style={{width: '15rem',height: '10rem',borderRadius:'5%'}}/>
                <div className="card-body" style={{width:'100%',fontSize:'12px',padding:'0px',textAlign:'center',margin:'0px'}}>
                                <div className="row" style={{width:'100%',marginTop:'2%'}}>
                                    <h5 className="col-md-8 card-title" style={{fontSize:'15px',fontWeight:'bolder',marginBottom:'0px'}}>The Local Train</h5>
                                    <p className="col-md-4" style={{alignItems:'left',fontSize:'15px',marginBottom:'0px'}}><img src={require('../../assets/bluetick.png')} alt="ble tick" style={{width:'20px',height:'20px'}} />
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
                                        <img className="im" src={require('../../assets/icons/png.png')} alt="logo" style={{width:'35px',height:'35px'}}/>
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
           </div>
           <div className="carousel-item row">
           <div className='container'>
            <div className='row'>
            <div className="col-xs-12 col-md-3">
                <div className="card" style={{width:'15rem',height:'21rem',borderRadius:'5%',alignItems:'center',backgroundColor:'#E5E4E2'}}>
                <img className="card-img-top" src={require('../../assets/icons/lc.jpg')} alt="Card image cap" style={{width: '15rem',height: '10rem',borderRadius:'5%'}}/>
                <div className="card-body" style={{width:'100%',fontSize:'12px',padding:'0px',textAlign:'center',margin:'0px'}}>
                                <div className="row" style={{width:'100%',marginTop:'2%'}}>
                                    <h5 className="col-md-8 card-title" style={{fontSize:'15px',fontWeight:'bolder',marginBottom:'0px'}}>The Local Train</h5>
                                    <p className="col-md-4" style={{alignItems:'left',fontSize:'15px',marginBottom:'0px'}}><img src={require('../../assets/bluetick.png')} alt="ble tick" style={{width:'20px',height:'20px'}} />
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
                                        <img className="im" src={require('../../assets/icons/png.png')} alt="logo" style={{width:'35px',height:'35px'}}/>
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
              <div className="col-xs-12 col-md-3" >
                <div className="card" style={{width:'15rem',height:'21rem',borderRadius:'5%',alignItems:'center',backgroundColor:'#E5E4E2'}}>
                <img className="card-img-top" src={require('../../assets/icons/lc.jpg')} alt="Card image cap" style={{width: '15rem',height: '10rem',borderRadius:'5%'}}/>
                <div className="card-body" style={{width:'100%',fontSize:'12px',padding:'0px',textAlign:'center',margin:'0px'}}>
                                <div className="row" style={{width:'100%',marginTop:'2%'}}>
                                    <h5 className="col-md-8 card-title" style={{fontSize:'15px',fontWeight:'bolder',marginBottom:'0px'}}>The Local Train</h5>
                                    <p className="col-md-4" style={{alignItems:'left',fontSize:'15px',marginBottom:'0px'}}><img src={require('../../assets/bluetick.png')} alt="ble tick" style={{width:'20px',height:'20px'}} />
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
                                        <img className="im" src={require('../../assets/icons/png.png')} alt="logo" style={{width:'35px',height:'35px'}}/>
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
              <div className="col-xs-12 col-md-3" >
                <div className="card" style={{width:'15rem',height:'21rem',borderRadius:'5%',alignItems:'center',backgroundColor:'#E5E4E2'}}>
                <img className="card-img-top" src={require('../../assets/icons/lc.jpg')} alt="Card image cap" style={{width: '15rem',height: '10rem',borderRadius:'5%'}}/>
                <div className="card-body" style={{width:'100%',fontSize:'12px',padding:'0px',textAlign:'center',margin:'0px'}}>
                                <div className="row" style={{width:'100%',marginTop:'2%'}}>
                                    <h5 className="col-md-8 card-title" style={{fontSize:'15px',fontWeight:'bolder',marginBottom:'0px'}}>The Local Train</h5>
                                    <p className="col-md-4" style={{alignItems:'left',fontSize:'15px',marginBottom:'0px'}}><img src={require('../../assets/bluetick.png')} alt="ble tick" style={{width:'20px',height:'20px'}} />
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
                                        <img className="im" src={require('../../assets/icons/png.png')} alt="logo" style={{width:'35px',height:'35px'}}/>
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
              <div className="col-xs-12 col-md-3" >
                <div className="card" style={{width:'15rem',height:'21rem',borderRadius:'5%',alignItems:'center',backgroundColor:'#E5E4E2'}}>
                <img className="card-img-top" src={require('../../assets/icons/lc.jpg')} alt="Card image cap" style={{width: '15rem',height: '10rem',borderRadius:'5%'}}/>
                <div className="card-body" style={{width:'100%',fontSize:'12px',padding:'0px',textAlign:'center',margin:'0px'}}>
                                <div className="row" style={{width:'100%',marginTop:'2%'}}>
                                    <h5 className="col-md-8 card-title" style={{fontSize:'15px',fontWeight:'bolder',marginBottom:'0px'}}>The Local Train</h5>
                                    <p className="col-md-4" style={{alignItems:'left',fontSize:'15px',marginBottom:'0px'}}><img src={require('../../assets/bluetick.png')} alt="ble tick" style={{width:'20px',height:'20px'}} />
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
                                        <img className="im" src={require('../../assets/icons/png.png')} alt="logo" style={{width:'35px',height:'35px'}}/>
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
           </div>
           <div className="carousel-item row">
           <div className='container'>
            <div className='row'>
            <div className="col-xs-12 col-md-3">
                <div className="card" style={{width:'15rem',height:'21rem',borderRadius:'5%',alignItems:'center',backgroundColor:'#E5E4E2'}}>
                <img className="card-img-top" src={require('../../assets/icons/lc.jpg')} alt="Card image cap" style={{width: '15rem',height: '10rem',borderRadius:'5%'}}/>
                <div className="card-body" style={{width:'100%',fontSize:'12px',padding:'0px',textAlign:'center',margin:'0px'}}>
                                <div className="row" style={{width:'100%',marginTop:'2%'}}>
                                    <h5 className="col-md-8 card-title" style={{fontSize:'15px',fontWeight:'bolder',marginBottom:'0px'}}>The Local Train</h5>
                                    <p className="col-md-4" style={{alignItems:'left',fontSize:'15px',marginBottom:'0px'}}><img src={require('../../assets/bluetick.png')} alt="ble tick" style={{width:'20px',height:'20px'}} />
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
                                        <img className="im" src={require('../../assets/icons/png.png')} alt="logo" style={{width:'35px',height:'35px'}}/>
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
              <div className="col-xs-12 col-md-3" >
                <div className="card" style={{width:'15rem',height:'21rem',borderRadius:'5%',alignItems:'center',backgroundColor:'#E5E4E2'}}>
                <img className="card-img-top" src={require('../../assets/icons/lc.jpg')} alt="Card image cap" style={{width: '15rem',height: '10rem',borderRadius:'5%'}}/>
                <div className="card-body" style={{width:'100%',fontSize:'12px',padding:'0px',textAlign:'center',margin:'0px'}}>
                                <div className="row" style={{width:'100%',marginTop:'2%'}}>
                                    <h5 className="col-md-8 card-title" style={{fontSize:'15px',fontWeight:'bolder',marginBottom:'0px'}}>The Local Train</h5>
                                    <p className="col-md-4" style={{alignItems:'left',fontSize:'15px',marginBottom:'0px'}}><img src={require('../../assets/bluetick.png')} alt="ble tick" style={{width:'20px',height:'20px'}} />
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
                                        <img className="im" src={require('../../assets/icons/png.png')} alt="logo" style={{width:'35px',height:'35px'}}/>
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
              <div className="col-xs-12 col-md-3" >
                <div className="card" style={{width:'15rem',height:'21rem',borderRadius:'5%',alignItems:'center',backgroundColor:'#E5E4E2'}}>
                <img className="card-img-top" src={require('../../assets/icons/lc.jpg')} alt="Card image cap" style={{width: '15rem',height: '10rem',borderRadius:'5%'}}/>
                <div className="card-body" style={{width:'100%',fontSize:'12px',padding:'0px',textAlign:'center',margin:'0px'}}>
                                <div className="row" style={{width:'100%',marginTop:'2%'}}>
                                    <h5 className="col-md-8 card-title" style={{fontSize:'15px',fontWeight:'bolder',marginBottom:'0px'}}>The Local Train</h5>
                                    <p className="col-md-4" style={{alignItems:'left',fontSize:'15px',marginBottom:'0px'}}><img src={require('../../assets/bluetick.png')} alt="ble tick" style={{width:'20px',height:'20px'}} />
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
                                        <img className="im" src={require('../../assets/icons/png.png')} alt="logo" style={{width:'35px',height:'35px'}}/>
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
              <div className="col-xs-12 col-md-3" >
                <div className="card" style={{width:'15rem',height:'21rem',borderRadius:'5%',alignItems:'center',backgroundColor:'#E5E4E2'}}>
                <img className="card-img-top" src={require('../../assets/icons/lc.jpg')} alt="Card image cap" style={{width: '15rem',height: '10rem',borderRadius:'5%'}}/>
                <div className="card-body" style={{width:'100%',fontSize:'12px',padding:'0px',textAlign:'center',margin:'0px'}}>
                                <div className="row" style={{width:'100%',marginTop:'2%'}}>
                                    <h5 className="col-md-8 card-title" style={{fontSize:'15px',fontWeight:'bolder',marginBottom:'0px'}}>The Local Train</h5>
                                    <p className="col-md-4" style={{alignItems:'left',fontSize:'15px',marginBottom:'0px'}}><img src={require('../../assets/bluetick.png')} alt="ble tick" style={{width:'20px',height:'20px'}} />
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
                                        <img className="im" src={require('../../assets/icons/png.png')} alt="logo" style={{width:'35px',height:'35px'}}/>
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
           </div>
     
        </div>
        </div>
        <div className='controls'>
            <div className="left carousel-control" href="#multi-item-example" data-slide="prev"><i className="fas fa-chevron-left" /></div>
            <div className="right carousel-control" href="#multi-item-example" data-slide="next"><i className="fas fa-chevron-right" /></div>
        </div>
        </div>
       
      );
}

export default MultiCarouselPageT;