import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import axios from "axios";
import Recaptcha from 'react-recaptcha';
import {Redirect} from "react-router-dom"
// for signup
class signupfan extends React.Component {
 
  constructor(props) {
    super(props)

    
    this.verifyCallback = this.verifyCallback.bind(this);
    this.recaptchaLoaded = this.recaptchaLoaded.bind(this);

    this.state = {
      captchaVerified: false,
      firstname: '',
      lastname: '',
      email: '',
      password: '',
     
    }
  }

  

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }
  verifyCallback(response) {
    if (response) {
    
      this.setState({
        captchaVerified: true
        
      })
      console.log(this.state.captchaVerified)
    }
  }
  recaptchaLoaded() {
    console.log('capcha successfully loaded');
  }
  submitFormAdd = e => {
    console.log(this.state.captchaVerified)
    e.preventDefault()

    const userData = {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      email: this.state.email,
      password: this.state.password,
  
    }

    if(this.state.captchaVerified){
    axios.post('/main/register/signup', userData)
    .then( response => {
      if(response.data.status)
      {
        window.alert("you are signup sucessfully ")
        // console.log('The solution is: ', response.data.result);
         window.location.href = "/login"; 
        
      }
      if(response.data.existinfo)
      {
        window.alert("user account already exist");
        window.location.href = "/login"; 
      }
    })
    .catch(err => console.log(err));
  }
  else{
    
    window.alert("verify your captcha")
  }
  }

    render() {
      return (
       <div>
         <p>create your account</p>
        <Form onSubmit={this.submitFormAdd}>
          <FormGroup>
            <Label for="firstname">First Name</Label>
            <Input type="text" name="firstname" id="firstname" onChange={this.onChange} value={this.state.firstname === null ? '' : this.state.firstname}  required/>
          </FormGroup>
          <FormGroup>
            <Label for="lastname">Last Name</Label>
            <Input type="text" name="lastname" id="lastname" onChange={this.onChange} value={this.state.lastname === null ? '' : this.state.lastname} required />
          </FormGroup>
          <FormGroup>
            <Label for="email">Email</Label>
            <Input type="email" name="email" id="email" onChange={this.onChange} value={this.state.email === null ? '' : this.state.email} required />
          </FormGroup>
          <FormGroup>
            <Label for="password">password</Label>
            <Input type="password" name="password" id="password" onChange={this.onChange} value={this.state.password === null ? '' : this.state.password} placeholder="" required />
          </FormGroup>
          <Recaptcha sitekey="6LeXDNcUAAAAAP8bwsYprEUeLhXEmxdAPZEW0rLF" render="explicit" onloadCallback={this.recaptchaLoaded} verifyCallback={this.verifyCallback}/>
          <Button type="submit"  onClick={this.handleSubscribe} >Submit</Button>
        
        </Form>
       </div>
      );
    }
  }

  export default signupfan