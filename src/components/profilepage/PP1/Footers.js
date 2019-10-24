import React from 'react';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';
import style from "./footer.css";

const HoverText = styled.a`
	color: #808080;
	:hover {
        color: white;
        cursor: pointer;
        text-decoration: none;
    }
    margin-bottom:-1px;
`

const divStyle = {
    fontSize:"14px",
    marginBottom:"40px",
    fontWeight:"medium",
    paddingLeft:'1%'
}

const headStyle = {
    color: '#808080',
    fontSize:"18px",
    fontWeight:"bolder",
    marginBottom:"12px"
}

function Footers(){
    return(
            <footer className="footer" style={{float:'left',width:'100%'}}>
                <div className="container" style={{paddingTop:"55px"}}>
                    <div className="row" style={divStyle}>
                        <div className="col-md-3 col-xs-12">
                            <h3 style={headStyle}>Bandbazaar</h3>
                            <ul style={{listStyleType: "none" }}>
                                <li><HoverText href="#">About</HoverText></li>
                                <li><HoverText href="#">Gigs/Events</HoverText></li>
                                <li><HoverText href="#">Shop</HoverText></li>
                                <li><HoverText href="#">Blogs</HoverText></li>
                                <li><HoverText href="#">Need Help?</HoverText></li>
                                <li><HoverText href="#">Contact Us</HoverText></li>
                            </ul>
                        </div>
                        <div className="col-md-3 col-xs-12">
                            <h3 style={headStyle}>Bandbazaar Membership</h3>
                            <ul>
                                <li><HoverText href="#">Artist</HoverText></li>
                                <li><HoverText href="#">Band</HoverText></li>
                                <li><HoverText href="#">Musician</HoverText></li>
                                <li><HoverText href="#">Forgot Password?</HoverText></li>
                                <li><HoverText href="#">Pricing</HoverText></li>
                                <li><HoverText href="#">Music Labels</HoverText></li>
                            </ul>
                        </div>
                        <div className="col-md-3 col-xs-12">
                            <h3 style={headStyle}>Connect with us</h3>
                            <ul>
                                <li><HoverText href="#">Facebook</HoverText></li>
                                <li><HoverText href="#">Instagram</HoverText></li>
                                <li><HoverText href="#">Twitter</HoverText></li>
                                <li><HoverText href="#">LinkedIn</HoverText></li>
                            </ul>
                        </div>
                        <div className="col-md-3 col-xs-12">
                            <h3 style={headStyle}>Policies</h3>
                            <ul>
                                <li><HoverText href="#">Terms & Conditions</HoverText></li>
                                <li><HoverText href="#">Privacy</HoverText></li>
                                <li><HoverText href="#">Copyright</HoverText></li>
                                <li><HoverText href="#">TradeMark</HoverText></li>
                                <li><HoverText href="#">Refund</HoverText></li>
                                <li><HoverText href="#">Abuse</HoverText></li>
                                <li><HoverText href="#">Legal Notices</HoverText></li>
                            </ul>
                        </div>
                    </div>
                    <hr
        style={{
            marginTop:"-15px",
            color: "#646464",
            backgroundColor: "#646464",
        }}
    />
                   <div className="row" style={{color:"#696969",textAlign:"center",fontSize:"12px"}}>
                        <div className="col-md-12" style={{textAlign:'left',paddingLeft:'10%'}}>
                            <a href='#'>Poplar Searches</a> <b> - </b> <a href="#">Directory</a> <b> - </b> <a href="#">About</a> <b> - </b> <a href="#">Blogs</a> <b> - </b>
                            <a href ='#'>Jobs</a> <b> - </b> <a href="#">Developers</a> <b> - </b> <a href="#">Help</a> <b> - </b> <a href="#">Legal</a> <b> - </b> <a href="#">Privacy</a> <b> - </b> 
                            <a href ="#">Cookies</a> <b> - </b> <a href="#">Imprint</a> <b> - </b> <a href="#">Charts</a>
                            <br />
                            <p style={{textAlign:'left'}}>Language: English(US)</p>
                        </div>
                    </div>
                </div>
            </footer>
    );
}
export default Footers;