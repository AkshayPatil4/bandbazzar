import React from 'react';

const styleAbout = {
    float: 'left',
    padding: '1%',
    paddingBottom: '0',
    paddingRight: '0',
    borderBottom: '1px solid #eee',
}

const styleSong = {
    float: 'right',
    border: '1px solid #eee',
}

function About() {
    return(
        <div className="About">
            <div className="about col-md-9" style={styleAbout}>
                <h1 style={{fontSize: '22px'}}><b>ABOUT</b></h1> 
                <p style={{textAlign: 'justify'}}>The Local Train is an Indian Hindi rock band from Delhi. Since its    
                inception in Chandigarh in 2008, the band has gone on to achieve massive 
                commerical success and has become a staple in cultural and music festivals 
                across the country. The Local Train is widely known for its emphatic lyrics - 
                which are a blend of Urdu and Hindi - and their signature lies in a raw, 
                honest sound which resonates with the youth. 
                <div className="songs col-md-5" style={styleSong}>
                    <h4 style={{fontSize: '22px', marginBottom: '5%'}}><b>Latest Songs</b></h4>
                    <div className="row">
                        <div className="col-md-3">
                            <img src={require('../../../assets/play.jpg')} alt="" 
                            style={{height: '35px', widht: '35px', marginRight: '15%'}} />
                        </div>
                        <div className="col-md-3">
                            <img src={require('../../../assets/previous.png')} alt="" 
                            style={{height: '14px', width: '22px', marginRight: '25%'}} />
                            <figcaption style={{fontSize: '10px'}}>Previous</figcaption>
                        </div>
                        <div className="col-md-3">
                            <img src={require('../../../assets/Pause.png')} alt="" 
                            style={{height: '14px', width: '22px', marginRight: '25%'}} /> 
                            <figcaption style={{fontSize: '10px'}}>Pause</figcaption>
                        </div>
                        <div className="col-md-3">
                            <img src={require('../../../assets/next.png')} alt="" 
                            style={{height: '14px', width: '22px'}} />
                            <figcaption style={{fontSize: '10px'}}>Forward</figcaption> 
                        </div>
                    </div>
                    <hr style={{marginTop: '1%'}} />
                    <div className="row">
                        <img src={require('../../../assets/play.png')} alt="" 
                        style={{height: '22px', width: '22px',marginLeft: '5%'}} /> &nbsp;&nbsp;
                        <img src={require('../../../assets/add.png')} alt="" 
                        style={{height: '22px', width: '22px'}} />
                        <p style={{marginLeft: '5%',marginRight: '5%'}}>Aalas Ka Pedh -  Ch../...</p>
                        <img src={require('../../../assets/shuffle.png')} alt="" 
                        style={{height: '22px', width: '22px'}} /> &nbsp;&nbsp;
                        <img src={require('../../../assets/refresh.png')} alt="" 
                        style={{height: '22px', width: '22px'}} />
                    </div>
                    <hr style={{marginTop: '1%'}} />
                    <div className="row">
                        <img src={require('../../../assets/play.png')} alt="" 
                        style={{height: '22px', width: '22px',marginLeft: '5%'}} /> &nbsp;&nbsp;
                        <img src={require('../../../assets/add.png')} alt="" 
                        style={{height: '22px', width: '22px'}} />
                        <p style={{marginLeft: '5%',marginRight: '5%'}}>Aalas Ka Pedh -  Ch../...</p>
                        <img src={require('../../../assets/shuffle.png')} alt="" 
                        style={{height: '22px', width: '22px'}} /> &nbsp;&nbsp;
                        <img src={require('../../../assets/refresh.png')} alt="" 
                        style={{height: '22px', width: '22px'}} />
                    </div>
                    <hr style={{marginTop: '1%'}} />
                    <div className="row">
                        <img src={require('../../../assets/play.png')} alt="" 
                        style={{height: '22px', width: '22px',marginLeft: '5%'}} /> &nbsp;&nbsp;
                        <img src={require('../../../assets/add.png')} alt="" 
                        style={{height: '22px', width: '22px'}} />
                        <p style={{marginLeft: '5%',marginRight: '5%'}}>Aalas Ka Pedh -  Ch../...</p>
                        <img src={require('../../../assets/shuffle.png')} alt="" 
                        style={{height: '22px', width: '22px'}} /> &nbsp;&nbsp;
                        <img src={require('../../../assets/refresh.png')} alt="" 
                        style={{height: '22px', width: '22px'}} />
                    </div>
                    <hr style={{marginTop: '1%'}} />
                    <div className="row">
                        <img src={require('../../../assets/play.png')} alt="" 
                        style={{height: '22px', width: '22px',marginLeft: '5%'}} /> &nbsp;&nbsp;
                        <img src={require('../../../assets/add.png')} alt="" 
                        style={{height: '22px', width: '22px'}} />
                        <p style={{marginLeft: '5%',marginRight: '5%'}}>Aalas Ka Pedh -  Ch../...</p>
                        <img src={require('../../../assets/shuffle.png')} alt="" 
                        style={{height: '22px', width: '22px'}} /> &nbsp;&nbsp;
                        <img src={require('../../../assets/refresh.png')} alt="" 
                        style={{height: '22px', width: '22px'}} />
                    </div>
                    <hr style={{marginTop: '1%'}} />
                    <div className="row">
                        <img src={require('../../../assets/play.png')} alt="" 
                        style={{height: '22px', width: '22px',marginLeft: '5%'}} /> &nbsp;&nbsp;
                        <img src={require('../../../assets/add.png')} alt="" 
                        style={{height: '22px', width: '22px'}} />
                        <p style={{marginLeft: '5%',marginRight: '5%'}}>Aalas Ka Pedh -  Ch../...</p>
                        <img src={require('../../../assets/shuffle.png')} alt="" 
                        style={{height: '22px', width: '22px'}} /> &nbsp;&nbsp;
                        <img src={require('../../../assets/refresh.png')} alt="" 
                        style={{height: '22px', width: '22px'}} />
                    </div>
                    <hr style={{marginTop: '1%'}} />
                    <h2 style={{fontSize: '24px', marginBottom: '5%'}}><b>All Music</b>      <img 
                    src={require('../../../assets/more.png')} alt="" 
                    style={{width: '16px', height: '16px'}} /></h2>
                </div>
                At a nationwide talent hunt held in 
                2015, Sennheiser (a German music equipment company) ranked The Local Train as the 
                No. 1 emerging band. Following this win, the band released their acclaimed debut 
                album "Aalas Ka Pedh" in September 2015 which consisted of 9 tracks, with Flying
                Carpet Productions. The album went on to become one of the highest selling independent
                albums of the year and also featured on the list of “Most Streamed Albums” on Apple
                Music. The album was engineered by noted recording engineer Ashish Manchanda.
                Soon after its release, Chriss Hesse, drummer for the international rock act 
                ‘Hoobastank’ and owner of the Lighthouse Recording Studio in California, mixed and 
                mastered 'Aalas ka Pedh'. Since then, he has been working with the band on all their 
                releases.
                They were invited to perform at major festivals, venues, and clubs across the 
                country owing to which they now enjoy a strong and faithful fanbase for their live 
                act.</p>
            </div>
        </div>
    );
}

export default About;