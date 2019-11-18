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
import style from './rightdn.css';

 function downbody(){
    return(
      <div className="container-fluid">
    <Card>
        <Card.Header>
          <Nav variant="tabs" defaultActiveKey="#first">
            <Nav.Item>
            <div class="select">
  <select name="slct" id="slct">
  <option value=""
            hidden
    >All Dates</option>
    <option className="optn" value="1">All Dates</option>
    <option value="2">Tonight</option>
    <option value="3">Tomorrow</option>
    <option value="3">This Weekend</option>
    <option value="3">Next Week</option>
    <option value="3">Next Month</option>
  </select>
</div>
            </Nav.Item>
            <Nav.Item>
            <div class="select">
  <select name="slct" id="slct">
  <option value=""
            hidden
    >All Genres</option>
    <option value="3">All Ge</option>
    <option value="1">Alternatives</option>
    <option value="2">Blues</option>
    <option value="3">Christian</option>
    <option value="3">Classical</option>
    <option value="3">Country</option>
    <option value="3">Electronic</option>
    <option value="3">Folk</option>
    <option value="3">Hip Hop</option>
    <option value="3">Jazz</option>
    <option value="3">Latin</option>
    <option value="3">Metal</option>
    <option value="3">Pop</option>
    <option value="3">Reggae</option>
    <option value="3">Rock</option>
  </select>
</div>
            </Nav.Item>
           
          </Nav>
        </Card.Header>
        <Nav.Link>
       <Card className="cards">
       <div className="row">
       <div className="col">
    <Card.Img variant="top" src={require('../../assets/Coldplay.jpeg')} style={{width: '300px',height: '170px'}} /></div>
    <div className="col">
    <Card.Body>
      <Card.Text>Address</Card.Text>
      <Card.Text>
      Novotel and HICC Complex
Near Hi-tech City, PO Bag 1101, Hyderabad, India
      </Card.Text>
    </Card.Body>
    </div>
   
    <div className="col">
    <nav>
  <ul>
    <li>
      Tickets
      <span></span><span></span><span></span><span></span>
    </li>
    </ul>
    </nav>
  </div>
  </div>
  </Card>
  </Nav.Link>

  <Nav.Link>
       <Card className="cards">
       <div className="row">
       <div className="col">
    <Card.Img variant="top" src={require('../../assets/Coldplay.jpeg')} style={{width: '300px',height: '170px'}} /></div>
    <div className="col">
    <Card.Body>
      <Card.Text>Address</Card.Text>
      <Card.Text>
      Novotel and HICC Complex
Near Hi-tech City, PO Bag 1101, Hyderabad, India
      </Card.Text>
    </Card.Body>
    </div>
   
    <div className="col">
    <nav>
  <ul>
    <li>
      Tickets
      <span></span><span></span><span></span><span></span>
    </li>
    </ul>
    </nav>
  </div>
  </div>
  </Card>
  </Nav.Link>

  <Nav.Link>
       <Card className="cards">
       <div className="row">
       <div className="col">
    <Card.Img variant="top" src={require('../../assets/Coldplay.jpeg')} style={{width: '300px',height: '170px'}} /></div>
    <div className="col">
    <Card.Body>
      <Card.Text>Address</Card.Text>
      <Card.Text>
      Novotel and HICC Complex
Near Hi-tech City, PO Bag 1101, Hyderabad, India
      </Card.Text>
    </Card.Body>
    </div>
   
    <div className="col">
    <nav>
  <ul>
    <li>
      Tickets
      <span></span><span></span><span></span><span></span>
    </li>
    </ul>
    </nav>
  </div>
  </div>
  </Card>
  </Nav.Link>


  <Nav.Link>
       <Card className="cards">
       <div className="row">
       <div className="col">
    <Card.Img variant="top" src={require('../../assets/Coldplay.jpeg')} style={{width: '300px',height: '170px'}} /></div>
    <div className="col">
    <Card.Body>
      <Card.Text>Address</Card.Text>
      <Card.Text>
      Novotel and HICC Complex
Near Hi-tech City, PO Bag 1101, Hyderabad, India
      </Card.Text>
    </Card.Body>
    </div>
   
    <div className="col">
    <nav>
  <ul>
    <li>
      Tickets
      <span></span><span></span><span></span><span></span>
    </li>
    </ul>
    </nav>
  </div>
  </div>
  </Card>
  </Nav.Link>

      </Card>
      </div>
    );
}
export default downbody;