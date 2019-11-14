import React from 'react';
import styled from 'styled-components';

const Btnstyle = styled.div`
.apply{
    background-color:#000;
    color:white;
    width:40%;
    padding:1.5%;
    font-size:0.86em;
    letter-spacing:1px;
    border: 1.1px solid #000000;
    &:hover {
      text-decoration:none;  
      color: #000;
      background-color:white;
}
}
.reset{
    background-color:white;
    color:#000;
    width:40%;
    margin-left: 4%;
    margin-right: 10%;
    padding:1.5%;
    font-size:0.86em;
    letter-spacing:1px;
    border: 1.1px solid #000000;
    &:hover {
      text-decoration:none;  
      color: white;
      background-color:#000;
}
}
`

const inputStyle = {
  width: '13px',
  height: '13px',
  padding: '0',
  margin: '0',
  verticalAlign: 'bottom',
  position: 'relative',
  top: '-1px',
  backgroundColor: '#fafafa',
  overflow: 'hidden',
  border: '3px solid #cacece',
  boxShadow: '0 1px 2px rgba(0,0,0,0.05), inset 0px -15px 10px -12px rgba(0,0,0,0.05)'
}

const labelStyle = {
    display: 'block',
    paddingLeft: '15px',
    textIndent: '-15px',
    fontSize: '13px',
    width: 'calc(100%/3)'
}

function Filter() {
    return(
        <div className="Filter">
            <div>
                <h4 style={{fontSize: '18px',textAlign: 'center'}}>Search music according to your wish</h4>
                <br />
                <select class="browser-default custom-select">
                    <option disabled selected>Country</option>
                    <option value="1">India</option>
                    <option value="2">USA</option>
                    <option value="3">UK</option>
                </select>
                <br /><br />     
                <p><i className="fa fa-tag"></i> Price Range</p>
                <input type="range" min="100" max="1000"></input>
                <br /><br />
                <h5 style={{fontSize: '18px',marginBottom: '5%'}}>Genre</h5>
                <div className="row">
                    <label style={labelStyle}><input type="checkbox" style={inputStyle}/>  Rock</label>
                    <label style={labelStyle}><input type="checkbox" style={inputStyle}/>  Country</label>
                    <label style={labelStyle}><input type="checkbox" style={inputStyle}/>  Rock</label>
                </div>
                <div className="row">
                    <label style={labelStyle}><input type="checkbox" style={inputStyle}/>  Metal</label>
                    <label style={labelStyle}><input type="checkbox" style={inputStyle}/>  Blues</label>
                    <label style={labelStyle}><input type="checkbox" style={inputStyle}/>  Metal</label>
                </div>
                <div className="row">
                    <label style={labelStyle}><input type="checkbox" style={inputStyle}/>  Sufi</label>
                    <label style={labelStyle}><input type="checkbox" style={inputStyle}/>  EDM</label>
                    <label style={labelStyle}><input type="checkbox" style={inputStyle}/>  Sufi</label>
                </div>
                <div className="row">
                    <label style={labelStyle}><input type="checkbox" style={inputStyle}/>  Jazz</label>
                    <label style={labelStyle}><input type="checkbox" style={inputStyle}/>  Classic</label>
                    <label style={labelStyle}><input type="checkbox" style={inputStyle}/>  Jazz</label>
                </div>
                <h5 style={{color: '#1799fc',fontSize: '15px',marginBottom: '8%'}}><b>Show More</b></h5>
                <h5 style={{fontSize: '18px',marginBottom: '5%'}}>Type</h5>
                <div className="row">
                    <label style={labelStyle}><input type="checkbox" style={inputStyle}/>  Band</label>
                    <label style={labelStyle}><input type="checkbox" style={inputStyle}/>  DJ</label>
                    <label style={labelStyle}><input type="checkbox" style={inputStyle}/>  Artist</label>
                </div>
                <h5 style={{color: '#1799fc',fontSize: '15px',marginBottom: '8%'}}><b>Show More</b></h5>
                <h5 style={{fontSize: '18px',marginBottom: '5%'}}>Customer Ratings</h5>
                <label style={{display: 'block',paddingLeft: '15px',textIndent: '-15px',
                fontSize: '13px'}}><input type="checkbox" style={inputStyle}/>  4 &nbsp;&nbsp;&nbsp;<i className="fa fa-star"></i> & above</label>
                <label style={{display: 'block',paddingLeft: '15px',textIndent: '-15px',
                fontSize: '13px'}}><input type="checkbox" style={inputStyle}/>  3 &nbsp;&nbsp;&nbsp;<i className="fa fa-star"></i> & above</label>
                <label style={{display: 'block',paddingLeft: '15px',textIndent: '-15px',
                fontSize: '13px'}}><input type="checkbox" style={inputStyle}/>  2 &nbsp;&nbsp;&nbsp;<i className="fa fa-star"></i> & above</label>
                <label style={{display: 'block',paddingLeft: '15px',textIndent: '-15px',
                fontSize: '13px'}}><input type="checkbox" style={inputStyle}/>  1 &nbsp;&nbsp;&nbsp;<i className="fa fa-star"></i> & above</label>
                <label style={{display: 'block',paddingLeft: '15px',textIndent: '-15px',
                fontSize: '13px'}}><input type="checkbox" style={inputStyle}/>  <img src={require('../../assets/icons/assured.png')} alt="" 
                style={{height: '35px',width: '85px', marginTop: '2%'}} /> </label>
                <h5 style={{fontSize: '18px',marginBottom: '5%',marginTop: '8%'}}>Availability</h5>
                <label style={{display: 'block',paddingLeft: '15px',textIndent: '-15px',fontSize: '14px'}}><input type="checkbox" style={inputStyle}/>&nbsp;Remotely Available</label>
                <label style={{display: 'block',paddingLeft: '15px',textIndent: '-15px',fontSize: '14px'}}><input type="checkbox" style={inputStyle}/>&nbsp;Internationally Available</label>
                <Btnstyle style={{marginTop: '15%'}}>
                    <button type="button" className="reset">Reset Filters</button>
                    <button type="button" className="apply">Apply Filters</button>
                </Btnstyle>
            </div>
        </div>
    );
}

export default Filter;