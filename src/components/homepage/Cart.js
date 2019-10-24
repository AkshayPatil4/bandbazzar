import React from 'react';

function Cart() {
    return(
        <div className="Cart">
        <h1 style={{textAlign:"center",letterSpacing:'4px',fontSize:'50px',fontWeight:'bolder'}}>Fill up your Cart,Buddies</h1>
        <h3 style={{textAlign:"center"}}>"Get the best accessories and the suited musical instruments and kill in front of the crowd.".</h3>
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
                        <img className="card-img-top" src={require('../../assets/homepage/51INShoKdNL-removebg-preview.png')} 
                        alt="Card image cap" style={{width: '100%',height: '17rem',borderRadius:'5%'}} />
                        <div className="card-body" style={{paddingTop:'1%',paddingLeft:'5%',paddingRight:'5%',paddingBottom:'1%'}}>
                          <p className="card-title" style={{marginBottom:'0px',fontSize:'13px',color:'black',fontWeight:'bold'}}>Yamaha F310, 6-strings Acoustic Guitar,Natural</p>
                          <div className="card-text" style={{fontSize:'11px'}}>Price: ₹7,900.00
                          <p style={{color:'black',fontWeight:'bolder'}}>
                          <div style={{fontSize:'15px',letterSpacing:'5px'}}>
                          <span className="fa fa-star"></span>
                          <span className="fa fa-star"></span>
                          <span className="fa fa-star"></span>
                          <span className="fa fa-star"></span>
                          <span className="fa fa-star checked"></span>
                          </div>
                          <div style={{padding:'2%'}}>
                               <button type='button' style={{backgroundColor:'#A9A9A9',float:'left',padding:'2%'}}>Buy Now  <i class="fa fa-shopping-cart"></i></button>
                               <button type='button' style={{backgroundColor:'#A9A9A9',float:'right',padding:'2%'}}>Add to Wishlist</button>
                          </div>
                          </p>
                          <br/><br/>
                          <div style={{display:'inline'}}>
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
                        <img className="card-img-top" src={require('../../assets/homepage/51INShoKdNL-removebg-preview.png')} 
                        alt="Card image cap" style={{width: '100%',height: '17rem',borderRadius:'5%'}} />
                        <div className="card-body" style={{paddingTop:'1%',paddingLeft:'5%',paddingRight:'5%',paddingBottom:'1%'}}>
                          <p className="card-title" style={{marginBottom:'0px',fontSize:'13px',color:'black',fontWeight:'bold'}}>Yamaha F310, 6-strings Acoustic Guitar,Natural</p>
                          <div className="card-text" style={{fontSize:'11px'}}>Price: ₹7,900.00
                          <p style={{color:'black',fontWeight:'bolder'}}>
                          <div style={{fontSize:'15px',letterSpacing:'5px'}}>
                          <span className="fa fa-star"></span>
                          <span className="fa fa-star"></span>
                          <span className="fa fa-star"></span>
                          <span className="fa fa-star"></span>
                          <span className="fa fa-star checked"></span>
                          </div>
                          <div style={{padding:'2%'}}>
                               <button type='button' style={{backgroundColor:'#A9A9A9',float:'left',padding:'2%'}}>Buy Now  <i class="fa fa-shopping-cart"></i></button>
                               <button type='button' style={{backgroundColor:'#A9A9A9',float:'right',padding:'2%'}}>Add to Wishlist</button>
                          </div>
                          </p>
                          <br/><br/>
                          <div style={{display:'inline'}}>
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
                        <img className="card-img-top" src={require('../../assets/homepage/51INShoKdNL-removebg-preview.png')} 
                        alt="Card image cap" style={{width: '100%',height: '17rem',borderRadius:'5%'}} />
                        <div className="card-body" style={{paddingTop:'1%',paddingLeft:'5%',paddingRight:'5%',paddingBottom:'1%'}}>
                          <p className="card-title" style={{marginBottom:'0px',fontSize:'13px',color:'black',fontWeight:'bold'}}>Yamaha F310, 6-strings Acoustic Guitar,Natural</p>
                          <div className="card-text" style={{fontSize:'11px'}}>Price: ₹7,900.00
                          <p style={{color:'black',fontWeight:'bolder'}}>
                          <div style={{fontSize:'15px',letterSpacing:'5px'}}>
                          <span className="fa fa-star"></span>
                          <span className="fa fa-star"></span>
                          <span className="fa fa-star"></span>
                          <span className="fa fa-star"></span>
                          <span className="fa fa-star checked"></span>
                          </div>
                          <div style={{padding:'2%'}}>
                               <button type='button' style={{backgroundColor:'#A9A9A9',float:'left',padding:'2%'}}>Buy Now  <i class="fa fa-shopping-cart"></i></button>
                               <button type='button' style={{backgroundColor:'#A9A9A9',float:'right',padding:'2%'}}>Add to Wishlist</button>
                          </div>
                          </p>
                          <br/><br/>
                          <div style={{display:'inline'}}>
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
                        <img className="card-img-top" src={require('../../assets/homepage/51INShoKdNL-removebg-preview.png')} 
                        alt="Card image cap" style={{width: '100%',height: '17rem',borderRadius:'5%'}} />
                        <div className="card-body" style={{paddingTop:'1%',paddingLeft:'5%',paddingRight:'5%',paddingBottom:'1%'}}>
                          <p className="card-title" style={{marginBottom:'0px',fontSize:'13px',color:'black',fontWeight:'bold'}}>Yamaha F310, 6-strings Acoustic Guitar,Natural</p>
                          <div className="card-text" style={{fontSize:'11px'}}>Price: ₹7,900.00
                          <p style={{color:'black',fontWeight:'bolder'}}>
                          <div style={{fontSize:'15px',letterSpacing:'5px'}}>
                          <span className="fa fa-star"></span>
                          <span className="fa fa-star"></span>
                          <span className="fa fa-star"></span>
                          <span className="fa fa-star"></span>
                          <span className="fa fa-star checked"></span>
                          </div>
                          <div style={{padding:'2%'}}>
                               <button type='button' style={{backgroundColor:'#A9A9A9',float:'left',padding:'2%'}}>Buy Now  <i class="fa fa-shopping-cart"></i></button>
                               <button type='button' style={{backgroundColor:'#A9A9A9',float:'right',padding:'2%'}}>Add to Wishlist</button>
                          </div>
                          </p>
                          <br/><br/>
                          <div style={{display:'inline'}}>
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
                        <img className="card-img-top" src={require('../../assets/homepage/51INShoKdNL-removebg-preview.png')} 
                        alt="Card image cap" style={{width: '100%',height: '17rem',borderRadius:'5%'}} />
                        <div className="card-body" style={{paddingTop:'1%',paddingLeft:'5%',paddingRight:'5%',paddingBottom:'1%'}}>
                          <p className="card-title" style={{marginBottom:'0px',fontSize:'13px',color:'black',fontWeight:'bold'}}>Yamaha F310, 6-strings Acoustic Guitar,Natural</p>
                          <div className="card-text" style={{fontSize:'11px'}}>Price: ₹7,900.00
                          <p style={{color:'black',fontWeight:'bolder'}}>
                          <div style={{fontSize:'15px',letterSpacing:'5px'}}>
                          <span className="fa fa-star"></span>
                          <span className="fa fa-star"></span>
                          <span className="fa fa-star"></span>
                          <span className="fa fa-star"></span>
                          <span className="fa fa-star checked"></span>
                          </div>
                          <div style={{padding:'2%'}}>
                               <button type='button' style={{backgroundColor:'#A9A9A9',float:'left',padding:'2%'}}>Buy Now  <i class="fa fa-shopping-cart"></i></button>
                               <button type='button' style={{backgroundColor:'#A9A9A9',float:'right',padding:'2%'}}>Add to Wishlist</button>
                          </div>
                          </p>
                          <br/>
                          <br/>
                          <div style={{display:'inline'}}>
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
                        <img className="card-img-top" src={require('../../assets/homepage/51INShoKdNL-removebg-preview.png')} 
                        alt="Card image cap" style={{width: '100%',height: '17rem',borderRadius:'5%'}} />
                        <div className="card-body" style={{paddingTop:'1%',paddingLeft:'5%',paddingRight:'5%',paddingBottom:'1%'}}>
                          <p className="card-title" style={{marginBottom:'0px',fontSize:'13px',color:'black',fontWeight:'bold'}}>Yamaha F310, 6-strings Acoustic Guitar,Natural</p>
                          <div className="card-text" style={{fontSize:'11px'}}>Price: ₹7,900.00
                          <p style={{color:'black',fontWeight:'bolder'}}>
                          <div style={{fontSize:'15px',letterSpacing:'5px'}}>
                          <span className="fa fa-star"></span>
                          <span className="fa fa-star"></span>
                          <span className="fa fa-star"></span>
                          <span className="fa fa-star"></span>
                          <span className="fa fa-star checked"></span>
                          </div>
                          <div style={{padding:'2%'}}>
                               <button type='button' style={{backgroundColor:'#A9A9A9',float:'left',padding:'2%'}}>Buy Now  <i class="fa fa-shopping-cart"></i></button>
                               <button type='button' style={{backgroundColor:'#A9A9A9',float:'right',padding:'2%'}}>Add to Wishlist</button>
                          </div>
                          </p>
                          <br/><br/>
                          <div style={{display:'inline'}}>
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
                        <img className="card-img-top" src={require('../../assets/homepage/51INShoKdNL-removebg-preview.png')} 
                        alt="Card image cap" style={{width: '100%',height: '17rem',borderRadius:'5%'}} />
                        <div className="card-body" style={{paddingTop:'1%',paddingLeft:'5%',paddingRight:'5%',paddingBottom:'1%'}}>
                          <p className="card-title" style={{marginBottom:'0px',fontSize:'13px',color:'black',fontWeight:'bold'}}>Yamaha F310, 6-strings Acoustic Guitar,Natural</p>
                          <div className="card-text" style={{fontSize:'11px'}}>Price: ₹7,900.00
                          <p style={{color:'black',fontWeight:'bolder'}}>
                          <div style={{fontSize:'15px',letterSpacing:'5px'}}>
                          <span className="fa fa-star"></span>
                          <span className="fa fa-star"></span>
                          <span className="fa fa-star"></span>
                          <span className="fa fa-star"></span>
                          <span className="fa fa-star checked"></span>
                          </div>
                          <div style={{padding:'2%'}}>
                               <button type='button' style={{backgroundColor:'#A9A9A9',float:'left',padding:'2%'}}>Buy Now  <i class="fa fa-shopping-cart"></i></button>
                               <button type='button' style={{backgroundColor:'#A9A9A9',float:'right',padding:'2%'}}>Add to Wishlist</button>
                          </div>
                          </p>
                          <br/><br/>
                          <div style={{display:'inline'}}>
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
                        <img className="card-img-top" src={require('../../assets/homepage/51INShoKdNL-removebg-preview.png')} 
                        alt="Card image cap" style={{width: '100%',height: '17rem',borderRadius:'5%'}} />
                        <div className="card-body" style={{paddingTop:'1%',paddingLeft:'5%',paddingRight:'5%',paddingBottom:'1%'}}>
                          <p className="card-title" style={{marginBottom:'0px',fontSize:'13px',color:'black',fontWeight:'bold'}}>Yamaha F310, 6-strings Acoustic Guitar,Natural</p>
                          <div className="card-text" style={{fontSize:'11px'}}>Price: ₹7,900.00
                          <p style={{color:'black',fontWeight:'bolder'}}>
                          <div style={{fontSize:'15px',letterSpacing:'5px'}}>
                          <span className="fa fa-star"></span>
                          <span className="fa fa-star"></span>
                          <span className="fa fa-star"></span>
                          <span className="fa fa-star"></span>
                          <span className="fa fa-star checked"></span>
                          </div>
                          <div style={{padding:'2%'}}>
                               <button type='button' style={{backgroundColor:'#A9A9A9',float:'left',padding:'2%'}}>Buy Now  <i class="fa fa-shopping-cart"></i></button>
                               <button type='button' style={{backgroundColor:'#A9A9A9',float:'right',padding:'2%'}}>Add to Wishlist</button>
                          </div>
                          </p>
                          <br/><br/>
                          <div style={{display:'inline'}}>
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
                        <img className="card-img-top" src={require('../../assets/homepage/51INShoKdNL-removebg-preview.png')} 
                        alt="Card image cap" style={{width: '100%',height: '17rem',borderRadius:'5%'}} />
                        <div className="card-body" style={{paddingTop:'1%',paddingLeft:'5%',paddingRight:'5%',paddingBottom:'1%'}}>
                          <p className="card-title" style={{marginBottom:'0px',fontSize:'13px',color:'black',fontWeight:'bold'}}>Yamaha F310, 6-strings Acoustic Guitar,Natural</p>
                          <div className="card-text" style={{fontSize:'11px'}}>Price: ₹7,900.00
                          <p style={{color:'black',fontWeight:'bolder'}}>
                          <div style={{fontSize:'15px',letterSpacing:'5px'}}>
                          <span className="fa fa-star"></span>
                          <span className="fa fa-star"></span>
                          <span className="fa fa-star"></span>
                          <span className="fa fa-star"></span>
                          <span className="fa fa-star checked"></span>
                          </div>
                          <div style={{padding:'2%'}}>
                               <button type='button' style={{backgroundColor:'#A9A9A9',float:'left',padding:'2%'}}>Buy Now  <i class="fa fa-shopping-cart"></i></button>
                               <button type='button' style={{backgroundColor:'#A9A9A9',float:'right',padding:'2%'}}>Add to Wishlist</button>
                          </div>
                          </p>
                          <br/><br/>
                          <div style={{display:'inline'}}>
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
                        <img className="card-img-top" src={require('../../assets/homepage/51INShoKdNL-removebg-preview.png')} 
                        alt="Card image cap" style={{width: '100%',height: '17rem',borderRadius:'5%'}} />
                        <div className="card-body" style={{paddingTop:'1%',paddingLeft:'5%',paddingRight:'5%',paddingBottom:'1%'}}>
                          <p className="card-title" style={{marginBottom:'0px',fontSize:'13px',color:'black',fontWeight:'bold'}}>Yamaha F310, 6-strings Acoustic Guitar,Natural</p>
                          <div className="card-text" style={{fontSize:'11px'}}>Price: ₹7,900.00
                          <p style={{color:'black',fontWeight:'bolder'}}>
                          <div style={{fontSize:'15px',letterSpacing:'5px'}}>
                          <span className="fa fa-star"></span>
                          <span className="fa fa-star"></span>
                          <span className="fa fa-star"></span>
                          <span className="fa fa-star"></span>
                          <span className="fa fa-star checked"></span>
                          </div>
                          <div style={{padding:'2%'}}>
                               <button type='button' style={{backgroundColor:'#A9A9A9',float:'left',padding:'2%'}}>Buy Now  <i class="fa fa-shopping-cart"></i></button>
                               <button type='button' style={{backgroundColor:'#A9A9A9',float:'right',padding:'2%'}}>Add to Wishlist</button>
                          </div>
                          </p>
                          <br/><br/>
                          <div style={{display:'inline'}}>
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
                        <img className="card-img-top" src={require('../../assets/homepage/51INShoKdNL-removebg-preview.png')} 
                        alt="Card image cap" style={{width: '100%',height: '17rem',borderRadius:'5%'}} />
                        <div className="card-body" style={{paddingTop:'1%',paddingLeft:'5%',paddingRight:'5%',paddingBottom:'1%'}}>
                          <p className="card-title" style={{marginBottom:'0px',fontSize:'13px',color:'black',fontWeight:'bold'}}>Yamaha F310, 6-strings Acoustic Guitar,Natural</p>
                          <div className="card-text" style={{fontSize:'11px'}}>Price: ₹7,900.00
                          <p style={{color:'black',fontWeight:'bolder'}}>
                          <div style={{fontSize:'15px',letterSpacing:'5px'}}>
                          <span className="fa fa-star"></span>
                          <span className="fa fa-star"></span>
                          <span className="fa fa-star"></span>
                          <span className="fa fa-star"></span>
                          <span className="fa fa-star checked"></span>
                          </div>
                          <div style={{padding:'2%'}}>
                               <button type='button' style={{backgroundColor:'#A9A9A9',float:'left',padding:'2%'}}>Buy Now  <i class="fa fa-shopping-cart"></i></button>
                               <button type='button' style={{backgroundColor:'#A9A9A9',float:'right',padding:'2%'}}>Add to Wishlist</button>
                          </div>
                          </p>
                          <br/><br/>
                          <div style={{display:'inline'}}>
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
                        <img className="card-img-top" src={require('../../assets/homepage/51INShoKdNL-removebg-preview.png')} 
                        alt="Card image cap" style={{width: '100%',height: '17rem',borderRadius:'5%'}} />
                        <div className="card-body" style={{paddingTop:'1%',paddingLeft:'5%',paddingRight:'5%',paddingBottom:'1%'}}>
                          <p className="card-title" style={{marginBottom:'0px',fontSize:'13px',color:'black',fontWeight:'bold'}}>Yamaha F310, 6-strings Acoustic Guitar,Natural</p>
                          <div className="card-text" style={{fontSize:'11px'}}>Price: ₹7,900.00
                          <p style={{color:'black',fontWeight:'bolder'}}>
                          <div style={{fontSize:'15px',letterSpacing:'5px'}}>
                          <span className="fa fa-star"></span>
                          <span className="fa fa-star"></span>
                          <span className="fa fa-star"></span>
                          <span className="fa fa-star"></span>
                          <span className="fa fa-star checked"></span>
                          </div>
                          <div style={{padding:'2%'}}>
                               <button type='button' style={{backgroundColor:'#A9A9A9',float:'left',padding:'2%'}}>Buy Now  <i class="fa fa-shopping-cart"></i></button>
                               <button type='button' style={{backgroundColor:'#A9A9A9',float:'right',padding:'2%'}}>Add to Wishlist</button>
                          </div>
                          </p>
                          <br/><br/>
                          <div style={{display:'inline'}}>
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

export default Cart;