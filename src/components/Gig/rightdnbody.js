import React from 'react';
import{  Container,
    Col,
    Row,
    Accordion ,
    Card,
    InputGroup,
    FormControl,
    Button,
    CardDeck,
Nav,} from 'react-bootstrap';

 function downbody(){
    return(
      <div className="container-fluid">
    <Card>
        <Card.Header>
          <Nav variant="tabs" defaultActiveKey="#first">
            <Nav.Item>
              <Nav.Link href="#first">Active</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#link">Link</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#disabled" disabled>
                Disabled
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Card.Header>
        <Nav.Link>
     <div className="row">
       <Card>
    <Card.Img variant="top" src={require('../../assets/Coldplay.jpeg')} style={{width: '150px',height: '130px'}} />
    <Card.Body>
      <Card.Title>Address</Card.Title>
      <Card.Text>
      Novotel and HICC Complex
Near Hi-tech City, PO Bag 1101, Hyderabad, India
      </Card.Text>
    </Card.Body>
    
  </Card>
  <Card>

  </Card>
  </div>
      
       </Nav.Link>
      </Card>
      </div>
    );
}
export default downbody;