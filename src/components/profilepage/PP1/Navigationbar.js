import React from 'react';
import { Link } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
import styled from "styled-components";
import "./Navb.css"

const Styles = styled.div`
  a,
  .navbar-brand,
  .navbar-nav .nav-link {
    color: #000;
    font-weight:600;
    font-size:14px;
    margin-top:18px;
    &:hover {
        text-decoration:none;  
      color: #696969;
    }
  }
`
function Navigationbar() {
    return(
        <div className="Navbar row">

            <div className="imgb col-md-3 col-xs-12">
            <img src={require('../../../assets/icons/png.png')} alt="logo"
            style={{height: '70px', width: '70px'}} />
            </div>
            <Styles className="col-md-3 col-xs-12">
            <Navbar>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Item>
                    <Nav.Link>
                        <Link to="/">HOME</Link>
                    </Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                    <Nav.Link>
                        <Link to="/studio">STUDIO</Link>
                    </Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                    <Nav.Link>
                        <Link to="/gigs">GIGS/EVENTS</Link>
                    </Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                        <Nav.Link>
                        <Link to="/shop">SHOP</Link>
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
                </Navbar.Collapse>
                </Navbar>
            </Styles>
            <div className="formm col-md-3 col-xs-12" style={{marginTop:'1.5%'}}>
            <form className="form-inline md-form form-sm mt-0">
                <i className="fas fa-search" aria-hidden="true"></i>
                <input className="form-control form-control-sm ml-3 w-75" type="text" placeholder="Search"
                aria-label="Search" />
            </form>
            </div>
            <div className="col-md-3 col-xs-6" style={{marginTop:"0.8%"}}>
                <div className="hello">
                    <h3 style={{fontSize:"20px",fontWeight:"bold"}}>Hello Band</h3>
                </div>
                <div className="imgg">
                <img src={require('../../../assets/icons/local train.jpeg')} alt="logo"
                style={{height: '50px', width: '50px',borderRadius:"50%"}} />              
                </div>
                <div className="clearfix"></div>
            </div>
            </div>
    );
}

export default Navigationbar;