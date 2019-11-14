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
              <form>
            <input type="date" name="bday"></input>
              </form>
            </Nav.Item>
            <Nav.Item>
             <form>
               <select>
                 <option>Alternatives</option>
                 <option>Alternatives</option>
                 <option>Alternatives</option>
                 <option>Alternatives</option>
                 <option>Alternatives</option>
                 <option>Alternatives</option>
                 </select>
             </form>
            </Nav.Item>
           
          </Nav>
        </Card.Header>
        <Nav.Link>
    
       
       <Card className="cards">
       <div className="row">
       <div className="col">
    <Card.Img variant="top" src={require('../../assets/Coldplay.jpeg')} style={{width: '150px',height: '130px'}} />
    <Card.Body>
      <Card.Title>Address</Card.Title>
      <Card.Text>
      Novotel and HICC Complex
Near Hi-tech City, PO Bag 1101, Hyderabad, India
      </Card.Text>
    </Card.Body>
    </div>
    <div className="col">
<btnstyle>
    <button className="btn btn-md apply ml-auto "  type="submit">Tickets </button>
    </btnstyle>
  </div>
  </div>
  </Card>

  
  <Card  className="cards">
       <div className="row">
       <div className="col">
    <Card.Img variant="top" src={require('../../assets/Coldplay.jpeg')} style={{width: '150px',height: '130px'}} />
    <Card.Body>
      <Card.Title>Address</Card.Title>
      <Card.Text>
      Novotel and HICC Complex
Near Hi-tech City, PO Bag 1101, Hyderabad, India
      </Card.Text>
    </Card.Body>
    </div>
    <div className="col">
<btnstyle>
    <button className="btn btn-md apply mr-auto"  type="submit">Tickets </button>
    </btnstyle>
  </div>
  </div>
  </Card>



  <Card className="cards">
       <div className="row">
       <div className="col">
    <Card.Img variant="top" src={require('../../assets/Coldplay.jpeg')} style={{width: '150px',height: '130px'}} />
    <Card.Body>
      <Card.Title>Address</Card.Title>
      <Card.Text>
      Novotel and HICC Complex
Near Hi-tech City, PO Bag 1101, Hyderabad, India
      </Card.Text>
    </Card.Body>
    </div>
    <div className="col">
<btnstyle>
    <button className="btn btn-md apply mr-auto"  type="submit">Tickets </button>
    </btnstyle>
  </div>
  </div>
  </Card>




  <Card className="cards">
       <div className="row">
       <div className="col">
    <Card.Img variant="top" src={require('../../assets/Coldplay.jpeg')} style={{width: '150px',height: '130px'}} />
    <Card.Body>
      <Card.Title>Address</Card.Title>
      <Card.Text>
      Novotel and HICC Complex
Near Hi-tech City, PO Bag 1101, Hyderabad, India
      </Card.Text>
    </Card.Body>
    </div>
    <div className="col">
<btnstyle>
    <button className="btn btn-md apply mr-auto"  type="submit">Tickets </button>
    </btnstyle>
  </div>
  </div>
  </Card>
      
       </Nav.Link>
      </Card>
      </div>
    );
}
export default downbody;