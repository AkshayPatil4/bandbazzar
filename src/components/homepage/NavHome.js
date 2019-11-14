import React from 'react';
import { Link } from "react-router-dom";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import styled from "styled-components";
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import style from './drop.css';

const Styles = styled.div`
  a,
  .navbar-brand,
  .navbar-nav .nav-link {
    color: #000;
    font-weight:600;
    font-size:14px;
    &:hover {
        text-decoration:none;  
        color: #696969;
    }
  }
`
 
export default function NavHome() {
    return (
        
          
<div className="container-fluid navh ">

            <Navbar collapseOnSelect expand="lg" >
  <Navbar.Brand href="#home">  
                <img src={require('../../assets/icons/png.png')} alt="logo"
                style={{height: '60px', width: '60px'}} />
            </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto" >
    <Nav.Item>
                            <Nav.Link>
                                <Link to="/Home"><b>Home</b></Link>
                            </Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                        <Nav.Link>
                                <Link to="/FP1"><b>Band</b></Link>
                            </Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                        <NavDropdown title="Artist" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
                    
                        </Nav.Item>

                        <Nav.Item>
                            <Nav.Link>
                            <Link to="/gmain"><b>Gigs</b></Link>
                            </Nav.Link>
                        </Nav.Item>

                <Nav.Item>
                <NavDropdown title="Studio" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
                </Nav.Item>
                <Nav.Item>
                <NavDropdown title="Shop" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
                 
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link>
                    <Link to="/main"><b>Post Event</b></Link>
                    </Nav.Link>
                </Nav.Item>
    </Nav>
    <Nav className="ml-auto" >
    <Nav.Item>
                    <Nav.Link>
                    <Link to="/login"><b>Login/Signp</b></Link>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <div className="search">
                   <p><i className="fas fa-search" aria-hidden="true"></i> </p>
                </div>
                </Nav.Item>
    </Nav>
  </Navbar.Collapse>
</Navbar>
</div>    
                        
    );
}
