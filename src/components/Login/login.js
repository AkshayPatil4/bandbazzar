import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import style from './log.css';
import { Link } from "react-router-dom";
import axios from "axios";
class login extends React.Component {
    state = {
        email: '',
        password: '',
      }
      onChange = e => {
        this.setState({ [e.target.name]: e.target.value })
      }
      submitFormAdd = e => {
        e.preventDefault()
    
        const userData = {
          email: this.state.email,
          password: this.state.password
        }
        axios.post('/main/login', userData)
        .then(response=>{
            if(response.data.status)
            {
                //we store emailid just to avoid the match in token error
                localStorage.setItem("usertoken",response.data.token)
                localStorage.setItem("email",response.data.emailid)
                localStorage.setItem("name",response.data.message)
              window.alert( "welcome"+" "+response.data.message +"  you are login successfully")
              window.location.href = "/"; 
              
            }
            if(response.data.status1)
            {
              window.alert("Email and password does not match")
              
            }
            if(response.data.status2)
            {
              window.alert("Email does not exits")
              
            }
        })
         .catch(err=>console.log(err));
    }
    render(){
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
                        <form onSubmit={this.submitFormAdd}>
                        <div className="field-group">
                            <span className="fa fa-user" aria-hidden="true" />
                            <div className="wthree-field">
                            <Input type="email" name="email" id="email" onChange={this.onChange} value={this.state.email === null ? '' : this.state.email} />
                            </div>
                        </div>
                        <div className="field-group">
                            <span className="fa fa-lock" aria-hidden="true" />
                            <div className="wthree-field">
                            <Input type="password" name="password" id="password" onChange={this.onChange} value={this.state.password === null ? '' : this.state.password} placeholder="" />
                            </div>
                        </div>
                        <div className="wthree-field">
                            <button type="submit" className="btn">Get Started</button>
                        </div>
                        <ul className="list-login">
                            <li >
                            <Link to="/Fan"> Create your Account</Link> 
                            </li>
                            <li>
                            <a href="/forgetpassword" className="text-right">forgot password?</a>
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
}
export default login