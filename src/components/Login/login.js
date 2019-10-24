import React from 'react';
import style from './log.css';
import { Link } from "react-router-dom";

function login() {
    return(
            <div className="layer">
            <div className="bottom-grid">
                    <div className="logo" style={{color:'white',fontSize:'20px'}}>
                        <h1>Bandbazaar</h1>
                    </div>
                    <div className="links">
                        <ul className="links-unordered-list">
                        <li className="active">
                            <a href="#" className>Login</a>
                        </li>
                        <li className>
                            <a href="#" className>About Us</a>
                        </li>
                        <li className>
                            <a href="#" className>Register</a>
                        </li>
                        <li className>
                            <a href="#" className>Contact</a>
                        </li>
                        </ul>
                    </div>
                    </div>
                    <div className="content-w3ls">
                    <div className="text-center icon">
                    
                    </div>
                    {/*-728x90-*/}
                    <div className="content-bottom">
                        <form action="#" method="post">
                        <div className="field-group">
                            <span className="fa fa-user" aria-hidden="true" />
                            <div className="wthree-field">
                            <input name="text1" id="text1" type="text" placeholder="Username" required />
                            </div>
                        </div>
                        <div className="field-group">
                            <span className="fa fa-lock" aria-hidden="true" />
                            <div className="wthree-field">
                            <input name="password" id="myInput" type="Password" placeholder="Password" />
                            </div>
                        </div>
                        <div className="wthree-field">
                            <button type="submit" className="btn">Get Started</button>
                        </div>
                        <ul className="list-login">
                            <li className="switch-agileits">
                            <label className="switch">
                                <input type="checkbox" />
                                <span className="slider round" />
                                keep Logged in
                            </label>
                            </li>
                            <li>
                            <a href="#" className="text-right">forgot password?</a>
                            </li>
                            <li className="clearfix" />
                        </ul>
                        <ul className="list-login-bottom">
                            <li className>
                            Create Account as <Link to="/Fan">Fan</Link>, <Link to="/Sartist">Artist</Link> or a <Link to="/Sartist">Band</Link> 
                            </li>
                            <li className="clearfix" />
                        </ul>
                        </form>
                    </div>
                    </div>
                    {/*-728x90-*/}
                    <div className="bottom-grid1">
                    <div className="links">
                        <ul className="links-unordered-list">
                        <li className>
                            <a href="#" className>About Us</a>
                        </li>
                        <li className>
                            <a href="#" className>Privacy Policy</a>
                        </li>
                        <li className>
                            <a href="#" className>Terms of Use</a>
                        </li>
                        </ul>
                    </div>
                    
                    </div>
                </div>
    );
}

export default login;