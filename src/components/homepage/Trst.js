import React from 'react';

function Trst() {
    return(
        <div className="Trst">
        <h1 style={{textAlign:"center",letterSpacing:'4px',fontSize:'50px',fontWeight:'bolder'}}>Bands Trust Us</h1>
        <h3 style={{textAlign:"center"}}>"They say, The More The Merrier and I think they were right".</h3>
        <p style={{float:'right',fontSize:'22px',color:'#00edf0',fontWeight:'bolder',paddingRight:'5%'}}><b>Show All  </b><img src={require('../../assets/more.png')} alt="share icon" 
                          style={{width: '20px',height: '18px'}}/></p>
        <div style={{marginLeft:'5%',marginRight:'5%'}}>
            {/*Carousel Wrapper*/}
            <div id="multi-item-example" className="carousel slide carousel-multi-item" data-ride="carousel">
              {/*Controls*/}
              {/*/.Controls*/}
              {/*Indicators*/}
              <ol className="carousel-indicators">
                <li data-target="#multi-item-example" data-slide-to={0} className="active" />
                <li data-target="#multi-item-example" data-slide-to={1} />
                <li data-target="#multi-item-example" data-slide-to={2} />
              </ol>
              {/*/.Indicators*/}
              {/*Slides*/}
              <div className="carousel-inner" role="listbox" style={{textAlign:'center'}}>
                {/*First slide*/}
                <div className="carousel-item active">
                  <div className="row">
                    <div className="col-md-3">
                      <div className="card mb-2" style={{backgroundColor:'#F0F0F0',borderRadius:'2%',boxShadow:'none',marginRight:'10%'}}>
                        <img className="card-img-top" src={require('../../assets/homepage/unnamed.png')} 
                        alt="Card image cap" style={{width: '100%',height: '17rem',borderRadius:'5%'}} />
                        <div className="card-body" style={{paddingTop:'1%',paddingLeft:'5%',paddingRight:'5%',paddingBottom:'1%'}}>
                          <h4 className="card-title" style={{marginBottom:'0px',fontSize:'20px',fontWeight:'bold'}}>The Local Train 
                          <img src={require('../../assets/bluetick.png')} alt="ble tick" style={{width:'20px',height:'20px'}} /></h4>
                          <div className="card-text" style={{fontSize:'11px'}}>INDIAN ROCK • INDIE ROCK
                          <p style={{color:'black',fontWeight:'bolder',marginBottom:'1%'}}>New Delhi,IN<br/>
                          <div style={{fontSize:'15px',letterSpacing:'5px'}}>
                          <span className="fa fa-star"></span>
                          <span className="fa fa-star"></span>
                          <span className="fa fa-star"></span>
                          <span className="fa fa-star"></span>
                          <span className="fa fa-star checked"></span>
                          </div>
                          </p>
                          <div>
                          <p style={{fontSize:'21px',fontWeight:'bolder',float:'left',color:'black'}}>&hearts; 609&nbsp;&nbsp;
                          <img src={require('../../assets/share.png')} alt="share icon" style={{width: '20px',height: '20px'}}/></p>
                          <p style={{float:'right'}}><img src={require('../../assets/icons/assured.png')} alt="share icon" 
                          style={{width: '6rem',height: '35px'}}/></p>
                          </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3 clearfix d-none d-md-block">
                    <div className="card mb-2" style={{backgroundColor:'#F0F0F0',borderRadius:'2%',boxShadow:'none',marginRight:'10%'}}>
                        <img className="card-img-top" src={require('../../assets/homepage/1.jpg')} 
                        alt="Card image cap" style={{width: '100%',height: '17rem',borderRadius:'5%'}} />
                        <div className="card-body" style={{paddingTop:'1%',paddingLeft:'5%',paddingRight:'5%',paddingBottom:'1%'}}>
                          <h4 className="card-title" style={{marginBottom:'0px',fontSize:'20px',fontWeight:'bold'}}>The Dark Helm 
                          <img src={require('../../assets/bluetick.png')} alt="ble tick" style={{width:'20px',height:'20px'}} /></h4>
                          <div className="card-text" style={{fontSize:'11px'}}>Death Metal • Progressive Metal
                          <p style={{color:'black',fontWeight:'bolder',marginBottom:'1%'}}>Pune,IN<br/>
                          <div style={{fontSize:'15px',letterSpacing:'5px'}}>
                          <span className="fa fa-star"></span>
                          <span className="fa fa-star"></span>
                          <span className="fa fa-star"></span>
                          <span className="fa fa-star"></span>
                          <span className="fa fa-star checked"></span>
                          </div>
                          </p>
                          <div>
                          <p style={{fontSize:'21px',fontWeight:'bolder',float:'left',color:'black'}}>&hearts; 609&nbsp;&nbsp;
                          <img src={require('../../assets/share.png')} alt="share icon" style={{width: '20px',height: '20px'}}/></p>
                          <p style={{float:'right'}}><img src={require('../../assets/icons/assured.png')} alt="share icon" 
                          style={{width: '6rem',height: '35px'}}/></p>
                          </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="card mb-2" style={{backgroundColor:'#F0F0F0',borderRadius:'2%',boxShadow:'none',marginRight:'10%'}}>
                        <img className="card-img-top" src={require('../../assets/homepage/LPark210912.jpeg')} 
                        alt="Card image cap" style={{width: '100%',height: '17rem',borderRadius:'5%'}} />
                        <div className="card-body" style={{paddingTop:'1%',paddingLeft:'5%',paddingRight:'5%',paddingBottom:'1%'}}>
                          <h4 className="card-title" style={{marginBottom:'0px',fontSize:'20px',fontWeight:'bold'}}>Linkin Park 
                          <img src={require('../../assets/bluetick.png')} alt="ble tick" style={{width:'20px',height:'20px'}} /></h4>
                          <div className="card-text" style={{fontSize:'11px'}}>Rock
                          <p style={{color:'black',fontWeight:'bolder',marginBottom:'1%'}}>California,US<br/>
                          <div style={{fontSize:'15px',letterSpacing:'5px'}}>
                          <span className="fa fa-star"></span>
                          <span className="fa fa-star"></span>
                          <span className="fa fa-star"></span>
                          <span className="fa fa-star"></span>
                          <span className="fa fa-star checked"></span>
                          </div>
                          </p>
                          <div>
                          <p style={{fontSize:'21px',fontWeight:'bolder',float:'left',color:'black'}}>&hearts; 609&nbsp;&nbsp;
                          <img src={require('../../assets/share.png')} alt="share icon" style={{width: '20px',height: '20px'}}/></p>
                          <p style={{float:'right'}}><img src={require('../../assets/icons/assured.png')} alt="share icon" 
                          style={{width: '6rem',height: '35px'}}/></p>
                          </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3 clearfix d-none d-md-block">
                    <div className="card mb-2" style={{backgroundColor:'#F0F0F0',borderRadius:'2%',boxShadow:'none',marginRight:'10%'}}>
                        <img className="card-img-top" src={require('../../assets/homepage/pic3.png')} 
                        alt="Card image cap" style={{width: '100%',height: '17rem',borderRadius:'5%'}} />
                        <div className="card-body" style={{paddingTop:'1%',paddingLeft:'5%',paddingRight:'5%',paddingBottom:'1%'}}>
                          <h4 className="card-title" style={{marginBottom:'0px',fontSize:'20px',fontWeight:'bold'}}>Chainsmokers 
                          <img src={require('../../assets/bluetick.png')} alt="ble tick" style={{width:'20px',height:'20px'}} /></h4>
                          <div className="card-text" style={{fontSize:'11px'}}>EDM • POP MUSIC • ELECTROPOP
                          <p style={{color:'black',fontWeight:'bolder',marginBottom:'1%'}}>New York,US<br/>
                          <div style={{fontSize:'15px',letterSpacing:'5px'}}>
                          <span className="fa fa-star"></span>
                          <span className="fa fa-star"></span>
                          <span className="fa fa-star"></span>
                          <span className="fa fa-star"></span>
                          <span className="fa fa-star checked"></span>
                          </div>
                          </p>
                          <div>
                          <p style={{fontSize:'21px',fontWeight:'bolder',float:'left',color:'black'}}>&hearts; 609&nbsp;&nbsp;
                          <img src={require('../../assets/share.png')} alt="share icon" style={{width: '20px',height: '20px'}}/></p>
                          <p style={{float:'right'}}><img src={require('../../assets/icons/assured.png')} alt="share icon" 
                          style={{width: '6rem',height: '35px'}}/></p>
                          </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/*/.First slide*/}
                {/*Second slide*/}
                <div className="carousel-item">
                  <div className="row">
                    <div className="col-md-3">
                      <div className="card mb-2" style={{backgroundColor:'#F0F0F0',borderRadius:'2%',boxShadow:'none',marginRight:'10%'}}>
                        <img className="card-img-top" src={require('../../assets/homepage/unnamed.png')} 
                        alt="Card image cap" style={{width: '100%',height: '17rem',borderRadius:'5%'}} />
                        <div className="card-body" style={{paddingTop:'1%',paddingLeft:'5%',paddingRight:'5%',paddingBottom:'1%'}}>
                          <h4 className="card-title" style={{marginBottom:'0px',fontSize:'20px',fontWeight:'bold'}}>The Local Train 
                          <img src={require('../../assets/bluetick.png')} alt="ble tick" style={{width:'20px',height:'20px'}} /></h4>
                          <div className="card-text" style={{fontSize:'11px'}}>INDIAN ROCK • INDIE ROCK
                          <p style={{color:'black',fontWeight:'bolder',marginBottom:'1%'}}>New Delhi,IN<br/>
                          <div style={{fontSize:'15px',letterSpacing:'5px'}}>
                          <span className="fa fa-star"></span>
                          <span className="fa fa-star"></span>
                          <span className="fa fa-star"></span>
                          <span className="fa fa-star"></span>
                          <span className="fa fa-star checked"></span>
                          </div>
                          </p>
                          <div>
                          <p style={{fontSize:'21px',fontWeight:'bolder',float:'left',color:'black'}}>&hearts; 609&nbsp;&nbsp;
                          <img src={require('../../assets/share.png')} alt="share icon" style={{width: '20px',height: '20px'}}/></p>
                          <p style={{float:'right'}}><img src={require('../../assets/icons/assured.png')} alt="share icon" 
                          style={{width: '6rem',height: '35px'}}/></p>
                          </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3 clearfix d-none d-md-block">
                    <div className="card mb-2" style={{backgroundColor:'#F0F0F0',borderRadius:'2%',boxShadow:'none',marginRight:'10%'}}>
                        <img className="card-img-top" src={require('../../assets/homepage/1.jpg')} 
                        alt="Card image cap" style={{width: '100%',height: '17rem',borderRadius:'5%'}} />
                        <div className="card-body" style={{paddingTop:'1%',paddingLeft:'5%',paddingRight:'5%',paddingBottom:'1%'}}>
                          <h4 className="card-title" style={{marginBottom:'0px',fontSize:'20px',fontWeight:'bold'}}>The Dark Helm 
                          <img src={require('../../assets/bluetick.png')} alt="ble tick" style={{width:'20px',height:'20px'}} /></h4>
                          <div className="card-text" style={{fontSize:'11px'}}>Death Metal • Progressive Metal
                          <p style={{color:'black',fontWeight:'bolder',marginBottom:'1%'}}>Pune,IN<br/>
                          <div style={{fontSize:'15px',letterSpacing:'5px'}}>
                          <span className="fa fa-star"></span>
                          <span className="fa fa-star"></span>
                          <span className="fa fa-star"></span>
                          <span className="fa fa-star"></span>
                          <span className="fa fa-star checked"></span>
                          </div>
                          </p>
                          <div>
                          <p style={{fontSize:'21px',fontWeight:'bolder',float:'left',color:'black'}}>&hearts; 609&nbsp;&nbsp;
                          <img src={require('../../assets/share.png')} alt="share icon" style={{width: '20px',height: '20px'}}/></p>
                          <p style={{float:'right'}}><img src={require('../../assets/icons/assured.png')} alt="share icon" 
                          style={{width: '6rem',height: '35px'}}/></p>
                          </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="card mb-2" style={{backgroundColor:'#F0F0F0',borderRadius:'2%',boxShadow:'none',marginRight:'10%'}}>
                        <img className="card-img-top" src={require('../../assets/homepage/LPark210912.jpeg')} 
                        alt="Card image cap" style={{width: '100%',height: '17rem',borderRadius:'5%'}} />
                        <div className="card-body" style={{paddingTop:'1%',paddingLeft:'5%',paddingRight:'5%',paddingBottom:'1%'}}>
                          <h4 className="card-title" style={{marginBottom:'0px',fontSize:'20px',fontWeight:'bold'}}>Linkin Park 
                          <img src={require('../../assets/bluetick.png')} alt="ble tick" style={{width:'20px',height:'20px'}} /></h4>
                          <div className="card-text" style={{fontSize:'11px'}}>Rock
                          <p style={{color:'black',fontWeight:'bolder',marginBottom:'1%'}}>California,US<br/>
                          <div style={{fontSize:'15px',letterSpacing:'5px'}}>
                          <span className="fa fa-star"></span>
                          <span className="fa fa-star"></span>
                          <span className="fa fa-star"></span>
                          <span className="fa fa-star"></span>
                          <span className="fa fa-star checked"></span>
                          </div>
                          </p>
                          <div>
                          <p style={{fontSize:'21px',fontWeight:'bolder',float:'left',color:'black'}}>&hearts; 609&nbsp;&nbsp;
                          <img src={require('../../assets/share.png')} alt="share icon" style={{width: '20px',height: '20px'}}/></p>
                          <p style={{float:'right'}}><img src={require('../../assets/icons/assured.png')} alt="share icon" 
                          style={{width: '6rem',height: '35px'}}/></p>
                          </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3 clearfix d-none d-md-block">
                    <div className="card mb-2" style={{backgroundColor:'#F0F0F0',borderRadius:'2%',boxShadow:'none',marginRight:'10%'}}>
                        <img className="card-img-top" src={require('../../assets/homepage/pic3.png')} 
                        alt="Card image cap" style={{width: '100%',height: '17rem',borderRadius:'5%'}} />
                        <div className="card-body" style={{paddingTop:'1%',paddingLeft:'5%',paddingRight:'5%',paddingBottom:'1%'}}>
                          <h4 className="card-title" style={{marginBottom:'0px',fontSize:'20px',fontWeight:'bold'}}>Chainsmokers 
                          <img src={require('../../assets/bluetick.png')} alt="ble tick" style={{width:'20px',height:'20px'}} /></h4>
                          <div className="card-text" style={{fontSize:'11px'}}>EDM • POP MUSIC • ELECTROPOP
                          <p style={{color:'black',fontWeight:'bolder',marginBottom:'1%'}}>New York,US<br/>
                          <div style={{fontSize:'15px',letterSpacing:'5px'}}>
                          <span className="fa fa-star"></span>
                          <span className="fa fa-star"></span>
                          <span className="fa fa-star"></span>
                          <span className="fa fa-star"></span>
                          <span className="fa fa-star checked"></span>
                          </div>
                          </p>
                          <div>
                          <p style={{fontSize:'21px',fontWeight:'bolder',float:'left',color:'black'}}>&hearts; 609&nbsp;&nbsp;
                          <img src={require('../../assets/share.png')} alt="share icon" style={{width: '20px',height: '20px'}}/></p>
                          <p style={{float:'right'}}><img src={require('../../assets/icons/assured.png')} alt="share icon" 
                          style={{width: '6rem',height: '35px'}}/></p>
                          </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/*/.Second slide*/}
                {/*Third slide*/}
                <div className="carousel-item">
                  <div className="row">
                    <div className="col-md-3">
                      <div className="card mb-2" style={{backgroundColor:'#F0F0F0',borderRadius:'2%',boxShadow:'none',marginRight:'10%'}}>
                        <img className="card-img-top" src={require('../../assets/homepage/unnamed.png')} 
                        alt="Card image cap" style={{width: '100%',height: '17rem',borderRadius:'5%'}} />
                        <div className="card-body" style={{paddingTop:'1%',paddingLeft:'5%',paddingRight:'5%',paddingBottom:'1%'}}>
                          <h4 className="card-title" style={{marginBottom:'0px',fontSize:'20px',fontWeight:'bold'}}>The Local Train 
                          <img src={require('../../assets/bluetick.png')} alt="ble tick" style={{width:'20px',height:'20px'}} /></h4>
                          <div className="card-text" style={{fontSize:'11px'}}>INDIAN ROCK • INDIE ROCK
                          <p style={{color:'black',fontWeight:'bolder',marginBottom:'1%'}}>New Delhi,IN<br/>
                          <div style={{fontSize:'15px',letterSpacing:'5px'}}>
                          <span className="fa fa-star"></span>
                          <span className="fa fa-star"></span>
                          <span className="fa fa-star"></span>
                          <span className="fa fa-star"></span>
                          <span className="fa fa-star checked"></span>
                          </div>
                          </p>
                          <div>
                          <p style={{fontSize:'21px',fontWeight:'bolder',float:'left',color:'black'}}>&hearts; 609&nbsp;&nbsp;
                          <img src={require('../../assets/share.png')} alt="share icon" style={{width: '20px',height: '20px'}}/></p>
                          <p style={{float:'right'}}><img src={require('../../assets/icons/assured.png')} alt="share icon" 
                          style={{width: '6rem',height: '35px'}}/></p>
                          </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3 clearfix d-none d-md-block">
                    <div className="card mb-2" style={{backgroundColor:'#F0F0F0',borderRadius:'2%',boxShadow:'none',marginRight:'10%'}}>
                        <img className="card-img-top" src={require('../../assets/homepage/1.jpg')} 
                        alt="Card image cap" style={{width: '100%',height: '17rem',borderRadius:'5%'}} />
                        <div className="card-body" style={{paddingTop:'1%',paddingLeft:'5%',paddingRight:'5%',paddingBottom:'1%'}}>
                          <h4 className="card-title" style={{marginBottom:'0px',fontSize:'20px',fontWeight:'bold'}}>The Dark Helm 
                          <img src={require('../../assets/bluetick.png')} alt="ble tick" style={{width:'20px',height:'20px'}} /></h4>
                          <div className="card-text" style={{fontSize:'11px'}}>Death Metal • Progressive Metal
                          <p style={{color:'black',fontWeight:'bolder',marginBottom:'1%'}}>Pune,IN<br/>
                          <div style={{fontSize:'15px',letterSpacing:'5px'}}>
                          <span className="fa fa-star"></span>
                          <span className="fa fa-star"></span>
                          <span className="fa fa-star"></span>
                          <span className="fa fa-star"></span>
                          <span className="fa fa-star checked"></span>
                          </div>
                          </p>
                          <div>
                          <p style={{fontSize:'21px',fontWeight:'bolder',float:'left',color:'black'}}>&hearts; 609&nbsp;&nbsp;
                          <img src={require('../../assets/share.png')} alt="share icon" style={{width: '20px',height: '20px'}}/></p>
                          <p style={{float:'right'}}><img src={require('../../assets/icons/assured.png')} alt="share icon" 
                          style={{width: '6rem',height: '35px'}}/></p>
                          </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="card mb-2" style={{backgroundColor:'#F0F0F0',borderRadius:'2%',boxShadow:'none',marginRight:'10%'}}>
                        <img className="card-img-top" src={require('../../assets/homepage/LPark210912.jpeg')} 
                        alt="Card image cap" style={{width: '100%',height: '17rem',borderRadius:'5%'}} />
                        <div className="card-body" style={{paddingTop:'1%',paddingLeft:'5%',paddingRight:'5%',paddingBottom:'1%'}}>
                          <h4 className="card-title" style={{marginBottom:'0px',fontSize:'20px',fontWeight:'bold'}}>Linkin Park 
                          <img src={require('../../assets/bluetick.png')} alt="ble tick" style={{width:'20px',height:'20px'}} /></h4>
                          <div className="card-text" style={{fontSize:'11px'}}>Rock
                          <p style={{color:'black',fontWeight:'bolder',marginBottom:'1%'}}>California,US<br/>
                          <div style={{fontSize:'15px',letterSpacing:'5px'}}>
                          <span className="fa fa-star"></span>
                          <span className="fa fa-star"></span>
                          <span className="fa fa-star"></span>
                          <span className="fa fa-star"></span>
                          <span className="fa fa-star checked"></span>
                          </div>
                          </p>
                          <div>
                          <p style={{fontSize:'21px',fontWeight:'bolder',float:'left',color:'black'}}>&hearts; 609&nbsp;&nbsp;
                          <img src={require('../../assets/share.png')} alt="share icon" style={{width: '20px',height: '20px'}}/></p>
                          <p style={{float:'right'}}><img src={require('../../assets/icons/assured.png')} alt="share icon" 
                          style={{width: '6rem',height: '35px'}}/></p>
                          </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3 clearfix d-none d-md-block">
                    <div className="card mb-2" style={{backgroundColor:'#F0F0F0',borderRadius:'2%',boxShadow:'none',marginRight:'10%'}}>
                        <img className="card-img-top" src={require('../../assets/homepage/pic3.png')} 
                        alt="Card image cap" style={{width: '100%',height: '17rem',borderRadius:'5%'}} />
                        <div className="card-body" style={{paddingTop:'1%',paddingLeft:'5%',paddingRight:'5%',paddingBottom:'1%'}}>
                          <h4 className="card-title" style={{marginBottom:'0px',fontSize:'20px',fontWeight:'bold'}}>Chainsmokers 
                          <img src={require('../../assets/bluetick.png')} alt="ble tick" style={{width:'20px',height:'20px'}} /></h4>
                          <div className="card-text" style={{fontSize:'11px'}}>EDM • POP MUSIC • ELECTROPOP
                          <p style={{color:'black',fontWeight:'bolder',marginBottom:'1%'}}>New York,US<br/>
                          <div style={{fontSize:'15px',letterSpacing:'5px'}}>
                          <span className="fa fa-star"></span>
                          <span className="fa fa-star"></span>
                          <span className="fa fa-star"></span>
                          <span className="fa fa-star"></span>
                          <span className="fa fa-star checked"></span>
                          </div>
                          </p>
                          <div>
                          <p style={{fontSize:'21px',fontWeight:'bolder',float:'left',color:'black'}}>&hearts; 609&nbsp;&nbsp;
                          <img src={require('../../assets/share.png')} alt="share icon" style={{width: '20px',height: '20px'}}/></p>
                          <p style={{float:'right'}}><img src={require('../../assets/icons/assured.png')} alt="share icon" 
                          style={{width: '6rem',height: '35px'}}/></p>
                          </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/*/.Third slide*/}
              </div>
              {/*/.Slides*/}
              <div className="controls">
                <a className="btn-floating" href="#multi-item-example" data-slide="prev"><i className="fa fa-chevron-left" /></a>
                <a className="btn-floating" href="#multi-item-example" data-slide="next"><i className="fa fa-chevron-right" /></a>
              </div>
            </div>
            {/*/.Carousel Wrapper*/}
          <strong>
        </strong></div>
        </div>
    );
}

export default Trst;