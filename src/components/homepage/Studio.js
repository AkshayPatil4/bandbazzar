import React from 'react';

function Studio() {
    return(
        <div className="Studio">
        <div style={{paddingLeft:'25%'}}>
        <h1 style={{textAlign:"center",letterSpacing:'4px',fontSize:'50px',fontWeight:'bolder'}}>Studio Facility</h1>
        <h3 style={{textAlign:"center"}}>"Practice your Talent hidden from the World and present it to the World".</h3>
        <p style={{float:'right',fontSize:'22px',color:'#00edf0',fontWeight:'bolder',paddingRight:'5%'}}><b>Show All  </b><img src={require('../../assets/more.png')} alt="share icon" 
                          style={{width: '20px',height: '18px'}}/></p>
        </div>
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
                        <img className="card-img-top" src={require('../../assets/homepage/Advent Studios-Recording Studio-Delhi 5.jpg')} 
                        alt="Card image cap" style={{width: '100%',height: '17rem',borderRadius:'5%'}} />
                        <div className="card-body" style={{paddingTop:'1%',paddingLeft:'5%',paddingRight:'5%',paddingBottom:'1%'}}>
                          <h4 className="card-title" style={{marginBottom:'0px',fontSize:'18px',fontWeight:'bold'}}>RecordMe Studio</h4>
                          <div className="card-text" style={{fontSize:'11px'}}>
                            <div>
                            <button type='button' style={{backgroundColor:'#A9A9A9',float:'left',padding:'2%',boxShadow:'none'}}>Jam Pad</button>
                            <button type='button' style={{backgroundColor:'#A9A9A9',float:'center',padding:'2%',boxShadow:'none'}}>Vocal Recording</button>
                            <button type='button' style={{backgroundColor:'#A9A9A9',padding:'2%',boxShadow:'none'}}>Audio/Video Production</button>
                            </div>
                          <p style={{color:'black',fontWeight:'bolder',marginBottom:'1%',fontSize:'13px'}}>New Delhi,IN<br/>
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
                        <img className="card-img-top" src={require('../../assets/homepage/Advent Studios-Recording Studio-Delhi 5.jpg')} 
                        alt="Card image cap" style={{width: '100%',height: '17rem',borderRadius:'5%'}} />
                        <div className="card-body" style={{paddingTop:'1%',paddingLeft:'5%',paddingRight:'5%',paddingBottom:'1%'}}>
                          <h4 className="card-title" style={{marginBottom:'0px',fontSize:'18px',fontWeight:'bold'}}>RecordMe Studio</h4>
                          <div className="card-text" style={{fontSize:'11px'}}>
                            <div>
                            <button type='button' style={{backgroundColor:'#A9A9A9',float:'left',padding:'2%',boxShadow:'none'}}>Jam Pad</button>
                            <button type='button' style={{backgroundColor:'#A9A9A9',float:'center',padding:'2%',boxShadow:'none'}}>Vocal Recording</button>
                            <button type='button' style={{backgroundColor:'#A9A9A9',padding:'2%',boxShadow:'none'}}>Audio/Video Production</button>
                            </div>
                          <p style={{color:'black',fontWeight:'bolder',marginBottom:'1%',fontSize:'13px'}}>New Delhi,IN<br/>
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
                        <img className="card-img-top" src={require('../../assets/homepage/Advent Studios-Recording Studio-Delhi 5.jpg')} 
                        alt="Card image cap" style={{width: '100%',height: '17rem',borderRadius:'5%'}} />
                        <div className="card-body" style={{paddingTop:'1%',paddingLeft:'5%',paddingRight:'5%',paddingBottom:'1%'}}>
                          <h4 className="card-title" style={{marginBottom:'0px',fontSize:'18px',fontWeight:'bold'}}>RecordMe Studio</h4>
                          <div className="card-text" style={{fontSize:'11px'}}>
                            <div>
                            <button type='button' style={{backgroundColor:'#A9A9A9',float:'left',padding:'2%',boxShadow:'none'}}>Jam Pad</button>
                            <button type='button' style={{backgroundColor:'#A9A9A9',float:'center',padding:'2%',boxShadow:'none'}}>Vocal Recording</button>
                            <button type='button' style={{backgroundColor:'#A9A9A9',padding:'2%',boxShadow:'none'}}>Audio/Video Production</button>
                            </div>
                          <p style={{color:'black',fontWeight:'bolder',marginBottom:'1%',fontSize:'13px'}}>New Delhi,IN<br/>
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
                        <img className="card-img-top" src={require('../../assets/homepage/Advent Studios-Recording Studio-Delhi 5.jpg')} 
                        alt="Card image cap" style={{width: '100%',height: '17rem',borderRadius:'5%'}} />
                        <div className="card-body" style={{paddingTop:'1%',paddingLeft:'5%',paddingRight:'5%',paddingBottom:'1%'}}>
                          <h4 className="card-title" style={{marginBottom:'0px',fontSize:'18px',fontWeight:'bold'}}>RecordMe Studio</h4>
                          <div className="card-text" style={{fontSize:'11px'}}>
                            <div>
                            <button type='button' style={{backgroundColor:'#A9A9A9',float:'left',padding:'2%',boxShadow:'none'}}>Jam Pad</button>
                            <button type='button' style={{backgroundColor:'#A9A9A9',float:'center',padding:'2%',boxShadow:'none'}}>Vocal Recording</button>
                            <button type='button' style={{backgroundColor:'#A9A9A9',padding:'2%',boxShadow:'none'}}>Audio/Video Production</button>
                            </div>
                          <p style={{color:'black',fontWeight:'bolder',marginBottom:'1%',fontSize:'13px'}}>New Delhi,IN<br/>
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
                        <img className="card-img-top" src={require('../../assets/homepage/Advent Studios-Recording Studio-Delhi 5.jpg')} 
                        alt="Card image cap" style={{width: '100%',height: '17rem',borderRadius:'5%'}} />
                        <div className="card-body" style={{paddingTop:'1%',paddingLeft:'5%',paddingRight:'5%',paddingBottom:'1%'}}>
                          <h4 className="card-title" style={{marginBottom:'0px',fontSize:'18px',fontWeight:'bold'}}>RecordMe Studio</h4>
                          <div className="card-text" style={{fontSize:'11px'}}>
                            <div>
                            <button type='button' style={{backgroundColor:'#A9A9A9',float:'left',padding:'2%',boxShadow:'none'}}>Jam Pad</button>
                            <button type='button' style={{backgroundColor:'#A9A9A9',float:'center',padding:'2%',boxShadow:'none'}}>Vocal Recording</button>
                            <button type='button' style={{backgroundColor:'#A9A9A9',padding:'2%',boxShadow:'none'}}>Audio/Video Production</button>
                            </div>
                          <p style={{color:'black',fontWeight:'bolder',marginBottom:'1%',fontSize:'13px'}}>New Delhi,IN<br/>
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
                        <img className="card-img-top" src={require('../../assets/homepage/Advent Studios-Recording Studio-Delhi 5.jpg')} 
                        alt="Card image cap" style={{width: '100%',height: '17rem',borderRadius:'5%'}} />
                        <div className="card-body" style={{paddingTop:'1%',paddingLeft:'5%',paddingRight:'5%',paddingBottom:'1%'}}>
                          <h4 className="card-title" style={{marginBottom:'0px',fontSize:'18px',fontWeight:'bold'}}>RecordMe Studio</h4>
                          <div className="card-text" style={{fontSize:'11px'}}>
                            <div>
                            <button type='button' style={{backgroundColor:'#A9A9A9',float:'left',padding:'2%',boxShadow:'none'}}>Jam Pad</button>
                            <button type='button' style={{backgroundColor:'#A9A9A9',float:'center',padding:'2%',boxShadow:'none'}}>Vocal Recording</button>
                            <button type='button' style={{backgroundColor:'#A9A9A9',padding:'2%',boxShadow:'none'}}>Audio/Video Production</button>
                            </div>
                          <p style={{color:'black',fontWeight:'bolder',marginBottom:'1%',fontSize:'13px'}}>New Delhi,IN<br/>
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
                        <img className="card-img-top" src={require('../../assets/homepage/Advent Studios-Recording Studio-Delhi 5.jpg')} 
                        alt="Card image cap" style={{width: '100%',height: '17rem',borderRadius:'5%'}} />
                        <div className="card-body" style={{paddingTop:'1%',paddingLeft:'5%',paddingRight:'5%',paddingBottom:'1%'}}>
                          <h4 className="card-title" style={{marginBottom:'0px',fontSize:'18px',fontWeight:'bold'}}>RecordMe Studio</h4>
                          <div className="card-text" style={{fontSize:'11px'}}>
                            <div>
                            <button type='button' style={{backgroundColor:'#A9A9A9',float:'left',padding:'2%',boxShadow:'none'}}>Jam Pad</button>
                            <button type='button' style={{backgroundColor:'#A9A9A9',float:'center',padding:'2%',boxShadow:'none'}}>Vocal Recording</button>
                            <button type='button' style={{backgroundColor:'#A9A9A9',padding:'2%',boxShadow:'none'}}>Audio/Video Production</button>
                            </div>
                          <p style={{color:'black',fontWeight:'bolder',marginBottom:'1%',fontSize:'13px'}}>New Delhi,IN<br/>
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
                        <img className="card-img-top" src={require('../../assets/homepage/Advent Studios-Recording Studio-Delhi 5.jpg')} 
                        alt="Card image cap" style={{width: '100%',height: '17rem',borderRadius:'5%'}} />
                        <div className="card-body" style={{paddingTop:'1%',paddingLeft:'5%',paddingRight:'5%',paddingBottom:'1%'}}>
                          <h4 className="card-title" style={{marginBottom:'0px',fontSize:'18px',fontWeight:'bold'}}>RecordMe Studio</h4>
                          <div className="card-text" style={{fontSize:'11px'}}>
                            <div>
                            <button type='button' style={{backgroundColor:'#A9A9A9',float:'left',padding:'2%',boxShadow:'none'}}>Jam Pad</button>
                            <button type='button' style={{backgroundColor:'#A9A9A9',float:'center',padding:'2%',boxShadow:'none'}}>Vocal Recording</button>
                            <button type='button' style={{backgroundColor:'#A9A9A9',padding:'2%',boxShadow:'none'}}>Audio/Video Production</button>
                            </div>
                          <p style={{color:'black',fontWeight:'bolder',marginBottom:'1%',fontSize:'13px'}}>New Delhi,IN<br/>
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
                        <img className="card-img-top" src={require('../../assets/homepage/Advent Studios-Recording Studio-Delhi 5.jpg')} 
                        alt="Card image cap" style={{width: '100%',height: '17rem',borderRadius:'5%'}} />
                        <div className="card-body" style={{paddingTop:'1%',paddingLeft:'5%',paddingRight:'5%',paddingBottom:'1%'}}>
                          <h4 className="card-title" style={{marginBottom:'0px',fontSize:'18px',fontWeight:'bold'}}>RecordMe Studio</h4>
                          <div className="card-text" style={{fontSize:'11px'}}>
                            <div>
                            <button type='button' style={{backgroundColor:'#A9A9A9',float:'left',padding:'2%',boxShadow:'none'}}>Jam Pad</button>
                            <button type='button' style={{backgroundColor:'#A9A9A9',float:'center',padding:'2%',boxShadow:'none'}}>Vocal Recording</button>
                            <button type='button' style={{backgroundColor:'#A9A9A9',padding:'2%',boxShadow:'none'}}>Audio/Video Production</button>
                            </div>
                          <p style={{color:'black',fontWeight:'bolder',marginBottom:'1%',fontSize:'13px'}}>New Delhi,IN<br/>
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
                        <img className="card-img-top" src={require('../../assets/homepage/Advent Studios-Recording Studio-Delhi 5.jpg')} 
                        alt="Card image cap" style={{width: '100%',height: '17rem',borderRadius:'5%'}} />
                        <div className="card-body" style={{paddingTop:'1%',paddingLeft:'5%',paddingRight:'5%',paddingBottom:'1%'}}>
                          <h4 className="card-title" style={{marginBottom:'0px',fontSize:'18px',fontWeight:'bold'}}>RecordMe Studio</h4>
                          <div className="card-text" style={{fontSize:'11px'}}>
                            <div>
                            <button type='button' style={{backgroundColor:'#A9A9A9',float:'left',padding:'2%',boxShadow:'none'}}>Jam Pad</button>
                            <button type='button' style={{backgroundColor:'#A9A9A9',float:'center',padding:'2%',boxShadow:'none'}}>Vocal Recording</button>
                            <button type='button' style={{backgroundColor:'#A9A9A9',padding:'2%',boxShadow:'none'}}>Audio/Video Production</button>
                            </div>
                          <p style={{color:'black',fontWeight:'bolder',marginBottom:'1%',fontSize:'13px'}}>New Delhi,IN<br/>
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
                        <img className="card-img-top" src={require('../../assets/homepage/Advent Studios-Recording Studio-Delhi 5.jpg')} 
                        alt="Card image cap" style={{width: '100%',height: '17rem',borderRadius:'5%'}} />
                        <div className="card-body" style={{paddingTop:'1%',paddingLeft:'5%',paddingRight:'5%',paddingBottom:'1%'}}>
                          <h4 className="card-title" style={{marginBottom:'0px',fontSize:'18px',fontWeight:'bold'}}>RecordMe Studio</h4>
                          <div className="card-text" style={{fontSize:'11px'}}>
                            <div>
                            <button type='button' style={{backgroundColor:'#A9A9A9',float:'left',padding:'2%',boxShadow:'none'}}>Jam Pad</button>
                            <button type='button' style={{backgroundColor:'#A9A9A9',float:'center',padding:'2%',boxShadow:'none'}}>Vocal Recording</button>
                            <button type='button' style={{backgroundColor:'#A9A9A9',padding:'2%',boxShadow:'none'}}>Audio/Video Production</button>
                            </div>
                          <p style={{color:'black',fontWeight:'bolder',marginBottom:'1%',fontSize:'13px'}}>New Delhi,IN<br/>
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
                        <img className="card-img-top" src={require('../../assets/homepage/Advent Studios-Recording Studio-Delhi 5.jpg')} 
                        alt="Card image cap" style={{width: '100%',height: '17rem',borderRadius:'5%'}} />
                        <div className="card-body" style={{paddingTop:'1%',paddingLeft:'5%',paddingRight:'5%',paddingBottom:'1%'}}>
                          <h4 className="card-title" style={{marginBottom:'0px',fontSize:'18px',fontWeight:'bold'}}>RecordMe Studio</h4>
                          <div className="card-text" style={{fontSize:'11px'}}>
                            <div>
                            <button type='button' style={{backgroundColor:'#A9A9A9',float:'left',padding:'2%',boxShadow:'none'}}>Jam Pad</button>
                            <button type='button' style={{backgroundColor:'#A9A9A9',float:'center',padding:'2%',boxShadow:'none'}}>Vocal Recording</button>
                            <button type='button' style={{backgroundColor:'#A9A9A9',padding:'2%',boxShadow:'none'}}>Audio/Video Production</button>
                            </div>
                          <p style={{color:'black',fontWeight:'bolder',marginBottom:'1%',fontSize:'13px'}}>New Delhi,IN<br/>
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

export default Studio;