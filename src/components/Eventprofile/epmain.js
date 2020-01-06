import React from 'react';
import Footer from '../homepage/Footer';
import '../homepage/Home.css';
import style from './epmain.css';
import NavHome from '../homepage/NavHome';
import {
    Breadcrumb, CardDeck, Card,Img,Col,Row, Container,p,Accordion,Button,
} from 'react-bootstrap';
import Map from './maps';
import maps from './maps';

const filterStyle = {
    margin: '0',
    padding: '2%',
    paddingTop: '1%',
    backgroundColor: '#fafafa'
}

const searchStyle = {
    float: 'right',
    margin: '0',
    padding: '2%'
}




function epmain() {
    return(
        
        <div className="FilterPage1">
           <div className="navigation"><NavHome /></div>
           <div className="row">
             <Breadcrumb>
                     <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                        <Breadcrumb.Item href="/main">
                            Event
                         </Breadcrumb.Item>
                    <Breadcrumb.Item active>Tickets</Breadcrumb.Item>
            </Breadcrumb>
            </div>
            
            <Container>
            <Row>
    <Col md={{ span:8 }}>
              <Card>
                <Card.Body>
                <Card.Img  src={require('../../assets/Coldplay.jpeg')} />
                </Card.Body>
              </Card>

    </Col>
    <Col md={{ span: 4 }}>
        <Card>
          <Card.Body>
            <Card.Title>
              <h4>
            Supermoon ft. Prateek Kuhad Winter Tour 2019 - Delhi</h4>
            </Card.Title><br></br><br></br>
            <Card.Text><i class="fa fa-calendar-o fa-2x" aria-hidden="true"></i> December 22 | 8PM   </Card.Text><br></br>
            <Card.Text><i class="fa fa-map-marker fa-2x" aria-hidden="true"></i>Kalagram, The Garden of Five Senses   </Card.Text><br></br>
            <Card.Text><i class="fa fa-inr fa-2x" aria-hidden="true"></i> 1,499 Onwards  </Card.Text><br></br><br></br><br></br><br></br>

            <Card.Footer><nav>
  <ul>
    <li>
      Tickets
      <span></span><span></span><span></span><span></span>
    </li>
    </ul>
    </nav></Card.Footer>
          </Card.Body>
        </Card>
    </Col>
  </Row>
            </Container>



            <Container>
              <Row>
                <Col md={{ span:9 }}>
                  <h2>About</h2>
                 <p>
                 After taking over the comedy scene, Zee Live's Supermoon is ready for Music!

Hosting the India leg of Prateek Kuhad's Winter Tour, Supermoon is all saddled up to venture into the world of music. Are you excited yet?

Prateek Kuhad’s Winter Tour is going to be his most ambitious one till date. He will be performing 30 shows across 8 countries, including USA, Canada, UK, France, Germany, Belgium, The Netherlands, Spain and India, where he will be starting and ending the tour across 11 cities.

Watch him Live at his Winter Tour with Zee Live’s Supermoon and see him work his magic.

Book your tickets on PayTM Insider

About Supermoon

Supermoon is an Intellectual Property of ZEE LIVE, a division of ZEE Entertainment Enterprises Limited (ZEEL), that has been curated with an objective of bringing the leading international entertainment acts from comedy, music, theatre, etc. to India. Supermoon is a phenomenon which aims to give Indian audiences an experience which is enriching and fulfilling to the soul.

About Prateek Kuhad

Hailed by Rolling Stone India as “one of the country’s leading singer-songwriters,” Prateek Kuhad has taken the rest of the world by storm in recent years, garnering a slew of accolades and honors around the globe with his mesmerizing, cinematic songwriting.

Since the release of his EP cold/mess in 2018, Prateek has extensively toured in support of the release. From selling out two tours in the US to playing across colleges and festivals in India, Prateek has become a certifiable success, while becoming one of the top streamed artists on Spotify when they launched in India.
                 </p>

               
                </Col>
              </Row>
              <Row>
                <Col md={{ span:9 }}>
               <maps />
                </Col>
              </Row>
              <Row>
                <Col md={{ span:9 }} >
                <Accordion defaultActiveKey="0">
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="0">
      Terms & Conditions
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="0">
      <Card.Body>Entry for individuals above 12+ years of age only
Parking available at The Garden of 5 Senses on first come, first served basis.
A government issued, valid photo ID may be requested at entry.
No refunds on purchased ticket are possible, even in case of any rescheduling.
This is a single entry show. Once you exit the show area, you will not be permitted to enter again.
Please keep your ticket with you at all times.
Rights of admission reserved, even to valid ticket holders.
Beware of counterfeit tickets.
AUDIO OR VIDEO RECORDING OF THE SHOW IS NOT PERMITTED. You must not make, create, store, record or transmit any kind of sound recording, visual footage (recording), or store, record or transmit any information or other data with relation to the event. The organizers reserve the right to eject you from the venue for doing so.
No professional, SLR or DSLR cameras or recording (sound or video) equipment will be permitted in the venue. Do not bring them to the venue as we will NOT be able to take responsibility and hold the same in safekeeping.
Security procedures, including frisking remain the right of the management.
No dangerous or potentially hazardous objects including but not limited to weapons, knives, guns, fireworks, helmets, laser devices, bottles, musical instruments will be allowed in the venue and may be ejected with or without the owner from the venue.
The sponsors/performers/organizers are not responsible for any injury or damage occurring due to the event. Any claims regarding the same would be settled in courts in Mumbai.
No drug use allowed - consumption of narcotics is illegal and those found in possession of or consuming narcotics at the event will be handed over to police authorities.
Ticket holders in an inebriated state may not be allowed entry.
Carrying of liquids, alcohol, cigarettes and banned substances including outside food will not be permitted in the venue.
No liability claims of food, pollution and other consumption poisoning will be entertained.
No tickets for the event shall be used by any person for advertising, promotional or commercial purposes, including but not limited to prizes, competition, contests or sweepstakes without obtaining written consent of the promoter.
</Card.Body>
    </Accordion.Collapse>
  </Card>
 
</Accordion>
                </Col>
              </Row>
            </Container>
            
            <Footer />
        </div>
    );
}

export default epmain;