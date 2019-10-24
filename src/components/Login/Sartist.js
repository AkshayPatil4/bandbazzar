import React from 'react';
import style from './fann.css';
import { Link } from "react-router-dom";

export default function Sartist() {
    return (
        <div>
        <div className="w3ls-headding">
          <h1><span>s</span>ign <span>U</span>p as <span>A</span>rtist/Band</h1>
        </div>
        <div className="agile-main">
          <div className="agile-left">		
          </div>
          <div className="agile-right">
            {/*728x90*/}
            <form action="#" method="post">
              <div className="agile-right-h2">
                <h2> register here</h2>
              </div>
              <div className="w3l-name">
                <span><i className="fa fa-music" aria-hidden="true" /></span>
                <input type="text" name="name" placeholder="Artist/Band Name" required />
              </div>
              <div className="clear" />  
              <div className="w3l-name">
                <span><i className="fa fa-user" aria-hidden="true" /></span>
                <input type="text" name="Username" placeholder="Username" required />
              </div>
              <div className="clear" />
              <div className="w3l-email">
                {/*728x90*/}
                <span><i className="fa fa-envelope" aria-hidden="true" /></span>
                <input type="email" name="email" placeholder="Email" required />
              </div>
              <div className="clear" />
              <div className="w3l-psw">
                <span><i className="fa fa-lock" aria-hidden="true" /></span>
                <input type="password" name="Password" placeholder="password" required />
              </div>
              <div className="clear" />
              <div className="w3l-cpsw">
                <span><i className="fa fa-lock" aria-hidden="true" /></span>
                <input type="password" name="Password" placeholder="confirm-Password" required />
              </div>
              <div className="w3l-agree">
                <input type="checkbox" className="checkbox" />
                <p>i agree terms and conditions</p> 
              </div>
              <div className="clear" />
              <div className="w3l-submit">
                <input type="submit" defaultValue="register now" />
              </div>
            </form>
            <p className="wthree-p">  or connect with</p>
            <div className="wthree-social">
              {/*728x90*/}
              <a href="#"><i className="fa fa-facebook" aria-hidden="true" /> sign in with facebook </a>	
            </div>
            <div style={{textAlign:'center',fontSize:'10px',color:'white',padding:'5px'}}>
            <p>Already have an account? <Link to="/login">Login.</Link>
            <br/>
            Or Not an Artist/Band? Sign up as <Link to="/Fan">Fan</Link>
            </p> 
            </div>
          </div>
          <div className="clear" />
        </div>
        </div>
    );
}
