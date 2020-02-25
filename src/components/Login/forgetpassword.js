import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import axios from "axios";
import Recaptcha from 'react-recaptcha';
import {Redirect} from "react-router-dom"
class forgetpassword extends React.Component {
  constructor(props) {
    super(props)

    
    this.verifyCallback = this.verifyCallback.bind(this);
    this.recaptchaLoaded = this.recaptchaLoaded.bind(this);

    this.state = {
      captchaVerified: false,
      email: '',
     
     
    }
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

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  submitFormAdd = e => {
    e.preventDefault()

    const userData = {
     
      email: this.state.email,
     
    }
    if(this.state.captchaVerified){
    axios.post('/main/forget', userData)
    .then( response => {
      if(response.data.existinfo){
        window.alert(response.data.existmessage);

      }
      if(response.data.sendstatus)
      {
        window.alert(response.data.statusmessage)
      }
      if(response.data.redirectstatus)
      {
        localStorage.setItem("recoveryemail",this.state.email)
        window.location.href = "/resetpassword"; 
      }

    })
    .catch(err => console.log(err));
  }
  else{ window.alert("verify your captcha")}
}

    render() {
      return (
        <div>
          <p>Enter your email to recover your password</p>
        <Form onSubmit={this.submitFormAdd}>
          <FormGroup>
        
            <Label for="email">Email</Label>
            <Input type="email" name="email" id="email" onChange={this.onChange} value={this.state.email === null ? '' : this.state.email} />
          </FormGroup>
 
          <Recaptcha sitekey="6LeXDNcUAAAAAP8bwsYprEUeLhXEmxdAPZEW0rLF" render="explicit" onloadCallback={this.recaptchaLoaded} verifyCallback={this.verifyCallback}/>

          <Button type="submit">Submit</Button>
          
        </Form>
        </div>
      );
    }
  }

  export default forgetpassword