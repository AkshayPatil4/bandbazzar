import React from 'react';
import {
    Container,
    Col,
    Row,
    Accordion ,
    Card,
    InputGroup,
    FormControl,
    Button,
} from 'react-bootstrap';
import style from './rightup.css';
export default function Bod(){
        return(
            <Container>
            {/* Stack the columns on mobile by making one full-width and the other half-width */}
            <Row className="justify-content-md-center">
              <Col xs={6} md={8} className="">
                
                <h2>Gigs and Events</h2>
              </Col>
              <Col xs={6} md={4}>
              <Accordion defaultActiveKey="0">
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="0">
                Location
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                    <Row>
                        <Col><InputGroup className="mb-3">
              <FormControl
                placeholder="Location"
                aria-label="Location"
                aria-describedby="basic-addon2"
              />
              <InputGroup.Append>
              <btnstyle>
    <button className="btn change mr-auto"  type="submit">Change </button>
    </btnstyle>
              </InputGroup.Append>
            </InputGroup></Col>
                    </Row>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            </Accordion>
              </Col >
             
            </Row>
            </Container>
    );
}
