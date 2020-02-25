import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import axios from "axios";
import {Redirect} from "react-router-dom"
class resetpassword extends React.Component {
  state = {

    password: '',
     otp:''

  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  submitFormAdd = e => {
    e.preventDefault()

    const userData = {
     email:localStorage.getItem("recoveryemail"),
      password: this.state.password,
      otp:this.state.otp
     
    }

    axios.post('/main/resetpassword', userData)
    .then( response => {
      window.alert(response.data.message)
     if(response.data.passwordupdated){
       localStorage.removeItem("recoveryemail")
      window.location.href = "/login"; 
     }
     

    })
    .catch(err => console.log(err));
  }

    render() {
      return (
        <Form onSubmit={this.submitFormAdd}>
          <FormGroup>
            <Label for="password">new password</Label>
            <Input type="password" name="password" id="password" onChange={this.onChange} value={this.state.password === null ? '' : this.state.password} placeholder="" required />
          </FormGroup>
          <FormGroup>
            <Label for="lastname">enter otp</Label>
            <Input type="text" name="otp" id="otp" onChange={this.onChange} value={this.state.otp === null ? '' : this.state.otp} required />
          </FormGroup>

          <Button type="submit">Submit</Button>
        </Form>
      );
    }
  }

  export default resetpassword