import React from 'react';

const merchandiseStyle = {
    borderTop: '1px solid #eee',
    float:'left'
}
const bttnstyle = {
    backgroundColor:'white',
    color:'#000',
    paddingLeft:'1%',
    paddingRight:'1%',
    border: '1.1px solid #000000',
    width:'30%'
}
const cirStyle = {
    backgroundColor:'#cdcdcd',
    color:'#000',
    padding:'1%',
    fontSize:'8px',
    width:'70%'
}

const sizeStyle = {
    backgroundColor:'white',
    color:'#000',
    margin:'1%',
    paddingLeft:'1%',
    paddingRight:'1%',
    width:'10%',
    border: '1.1px solid #000000',

}

export default function Merchendise() {
    return (
        <div className="Merchandise" style={merchandiseStyle}>
            <h3>Merchandise</h3>
            <div className="row" style={{fontSize:'12px',marginLeft:'1%'}}>
                <div className='col-md-3' style={{backgroundColor:'#f5f5f5',margin:'2%',padding:'2%'}}>
                <img src={require('../../../assets/icons/cap.jpg')} alt="Chainsmoker Cap"
                style ={{height: '150px', width: '150px',margin:'0.4em'}}/>
                <div>
                    <h6>Chainsmoker cap</h6>
                    $14
                    <br/>
                    Size : <button type="button" style={bttnstyle}>One Size</button>
                    <div style={cirStyle}>Circmference: 36.6 inches</div>
                    Color
                    <br/>
                    <img src={require('../../../assets/icons/yell.png')} alt="send"
                    style={{height: '10px', width: '10px',margin:'0.4em'}}/>
                    <img src={require('../../../assets/icons/red.png')} alt="send"
                    style={{height: '10px', width: '10px',margin:'0.4em'}}/>
                    <img src={require('../../../assets/icons/ble.jpg')} alt="send"
                    style={{height: '10px', width: '10px',margin:'0.4em'}}/>
                    <img src={require('../../../assets/icons/green.jpg')} alt="send"
                    style={{height: '10px', width: '10px',margin:'0.4em'}}/>
                    <img src={require('../../../assets/icons/grey.png')} alt="send"
                    style={{height: '10px', width: '10px',margin:'0.4em'}}/>
                    <img src={require('../../../assets/icons/black.jpg')} alt="send"
                    style={{height: '10px', width: '10px',margin:'0.4em'}}/>
                </div>
                </div>
                <div className='col-md-3' style={{backgroundColor:'#f5f5f5',margin:'2%',padding:'2%'}}>
                <img src={require('../../../assets/icons/metallica.jpg')} alt="Chainsmoker Cap"
                style={{height: '150px', width: '150px',margin:'0.4em'}}/>
                <div>
                    <h6>Metallica Printed T-shirt</h6>
                    $14
                    <br/>
                    Size : <button type="button" style={sizeStyle}>S</button>
                    <button type="button" style={sizeStyle}>M</button>
                    <button type="button" style={sizeStyle}>L</button>
                    <button type="button" style={sizeStyle}>XL</button>
                    <br/>
                    Color
                    <br/>
                    <img src={require('../../../assets/icons/dgrey.png')} alt="send"
                    style={{height: '10px', width: '10px',margin:'0.4em'}}/>
                    <img src={require('../../../assets/icons/ble.jpg')} alt="send"
                    style={{height: '10px', width: '10px',margin:'0.4em'}}/>
                    <img src={require('../../../assets/icons/grey.png')} alt="send"
                    style={{height: '10px', width: '10px',margin:'0.4em'}}/>
                    <img src={require('../../../assets/icons/black.jpg')} alt="send"
                    style={{height: '10px', width: '10px',margin:'0.4em'}}/>
                </div>
                </div>
                <div className='col-md-3' style={{backgroundColor:'#f5f5f5',margin:'2%',padding:'2%'}}>
                <img src={require('../../../assets/icons/metallica.jpg')} alt="Chainsmoker Cap"
                style={{height: '150px', width: '150px',margin:'0.4em'}}/>
                <div>
                    <h6>Metallica Printed T-shirt</h6>
                    $14
                    <br/>
                    Size : <button type="button" style={sizeStyle}>S</button>
                    <button type="button" style={sizeStyle}>M</button>
                    <button type="button" style={sizeStyle}>L</button>
                    <button type="button" style={sizeStyle}>XL</button>
                    <br/>
                    Color
                    <br/>
                    <img src={require('../../../assets/icons/dgrey.png')} alt="send"
                    style={{height: '10px', width: '10px',margin:'0.4em'}}/>
                    <img src={require('../../../assets/icons/ble.jpg')} alt="send"
                    style={{height: '10px', width: '10px',margin:'0.4em'}}/>
                    <img src={require('../../../assets/icons/grey.png')} alt="send"
                    style={{height: '10px', width: '10px',margin:'0.4em'}}/>
                    <img src={require('../../../assets/icons/black.jpg')} alt="send"
                    style={{height: '10px', width: '10px',margin:'0.4em'}}/>
                </div>
                </div>
                <div className='col-md-3' style={{backgroundColor:'#f5f5f5',margin:'2%',padding:'2%'}}>
                <img src={require('../../../assets/icons/metallica.jpg')} alt="Chainsmoker Cap"
                style={{height: '150px', width: '150px',margin:'0.4em'}}/>
                <div>
                    <h6>Metallica Printed T-shirt</h6>
                    $14
                    <br/>
                    Size : <button type="button" style={sizeStyle}>S</button>
                    <button type="button" style={sizeStyle}>M</button>
                    <button type="button" style={sizeStyle}>L</button>
                    <button type="button" style={sizeStyle}>XL</button>
                    <br/>
                    Color
                    <br/>
                    <img src={require('../../../assets/icons/dgrey.png')} alt="send"
                    style={{height: '10px', width: '10px',margin:'0.4em'}}/>
                    <img src={require('../../../assets/icons/ble.jpg')} alt="send"
                    style={{height: '10px', width: '10px',margin:'0.4em'}}/>
                    <img src={require('../../../assets/icons/grey.png')} alt="send"
                    style={{height: '10px', width: '10px',margin:'0.4em'}}/>
                    <img src={require('../../../assets/icons/black.jpg')} alt="send"
                    style={{height: '10px', width: '10px',margin:'0.4em'}}/>
                </div>
                </div>
                <div className='col-md-3' style={{backgroundColor:'#f5f5f5',margin:'2%',padding:'2%'}}>
                <img src={require('../../../assets/icons/cap.jpg')} alt="Chainsmoker Cap"
                style={{height: '150px', width: '150px',margin:'0.4em'}}/>
                <div>
                    <h6>Chainsmoker cap</h6>
                    $14
                    <br/>
                    Size : <button type="button" style={bttnstyle}>One Size</button>
                    <div style={cirStyle}>Circmference: 36.6 inches</div>
                    Color
                    <br/>
                    <img src={require('../../../assets/icons/yell.png')} alt="send"
                    style={{height: '10px', width: '10px',margin:'0.4em'}}/>
                    <img src={require('../../../assets/icons/red.png')} alt="send"
                    style={{height: '10px', width: '10px',margin:'0.4em'}}/>
                    <img src={require('../../../assets/icons/ble.jpg')} alt="send"
                    style={{height: '10px', width: '10px',margin:'0.4em'}}/>
                    <img src={require('../../../assets/icons/green.jpg')} alt="send"
                    style={{height: '10px', width: '10px',margin:'0.4em'}}/>
                    <img src={require('../../../assets/icons/grey.png')} alt="send"
                    style={{height: '10px', width: '10px',margin:'0.4em'}}/>
                    <img src={require('../../../assets/icons/black.jpg')} alt="send"
                    style={{height: '10px', width: '10px',margin:'0.4em'}}/>
                </div>
                </div>
                <div className='col-md-3' style={{backgroundColor:'#f5f5f5',margin:'2%',padding:'2%'}}>
                <img src={require('../../../assets/icons/metallica.jpg')} alt="Chainsmoker Cap"
                style={{height: '150px', width: '150px',margin:'0.4em'}}/>
                <div>
                    <h6>Metallica Printed T-shirt</h6>
                    $14
                    <br/>
                    Size : <button type="button" style={sizeStyle}>S</button>
                    <button type="button" style={sizeStyle}>M</button>
                    <button type="button" style={sizeStyle}>L</button>
                    <button type="button" style={sizeStyle}>XL</button>
                    <br/>
                    Color
                    <br/>
                    <img src={require('../../../assets/icons/dgrey.png')} alt="send"
                    style={{height: '10px', width: '10px',margin:'0.4em'}}/>
                    <img src={require('../../../assets/icons/ble.jpg')} alt="send"
                    style={{height: '10px', width: '10px',margin:'0.4em'}}/>
                    <img src={require('../../../assets/icons/grey.png')} alt="send"
                    style={{height: '10px', width: '10px',margin:'0.4em'}}/>
                    <img src={require('../../../assets/icons/black.jpg')} alt="send"
                    style={{height: '10px', width: '10px',margin:'0.4em'}}/>
                </div>
                </div>
                <div className='col-md-3' style={{backgroundColor:'#f5f5f5',margin:'2%',padding:'2%'}}>
                <img src={require('../../../assets/icons/metallica.jpg')} alt="Chainsmoker Cap"
                style={{height: '150px', width: '150px',margin:'0.4em'}}/>
                <div>
                    <h6>Metallica Printed T-shirt</h6>
                    $14
                    <br/>
                    Size : <button type="button" style={sizeStyle}>S</button>
                    <button type="button" style={sizeStyle}>M</button>
                    <button type="button" style={sizeStyle}>L</button>
                    <button type="button" style={sizeStyle}>XL</button>
                    <br/>
                    Color
                    <br/>
                    <img src={require('../../../assets/icons/dgrey.png')} alt="send"
                    style={{height: '10px', width: '10px',margin:'0.4em'}}/>
                    <img src={require('../../../assets/icons/ble.jpg')} alt="send"
                    style={{height: '10px', width: '10px',margin:'0.4em'}}/>
                    <img src={require('../../../assets/icons/grey.png')} alt="send"
                    style={{height: '10px', width: '10px',margin:'0.4em'}}/>
                    <img src={require('../../../assets/icons/black.jpg')} alt="send"
                    style={{height: '10px', width: '10px',margin:'0.4em'}}/>
                </div>
                </div>
                <div className='col-md-3' style={{backgroundColor:'#f5f5f5',margin:'2%',padding:'2%'}}>
                <img src={require('../../../assets/icons/metallica.jpg')} alt="Chainsmoker Cap"
                style={{height: '150px', width: '150px',margin:'0.4em'}}/>
                <div>
                    <h6>Metallica Printed T-shirt</h6>
                    $14
                    <br/>
                    Size : <button type="button" style={sizeStyle}>S</button>
                    <button type="button" style={sizeStyle}>M</button>
                    <button type="button" style={sizeStyle}>L</button>
                    <button type="button" style={sizeStyle}>XL</button>
                    <br/>
                    Color
                    <br/>
                    <img src={require('../../../assets/icons/dgrey.png')} alt="send"
                    style={{height: '10px', width: '10px',margin:'0.4em'}}/>
                    <img src={require('../../../assets/icons/ble.jpg')} alt="send"
                    style={{height: '10px', width: '10px',margin:'0.4em'}}/>
                    <img src={require('../../../assets/icons/grey.png')} alt="send"
                    style={{height: '10px', width: '10px',margin:'0.4em'}}/>
                    <img src={require('../../../assets/icons/black.jpg')} alt="send"
                    style={{height: '10px', width: '10px',margin:'0.4em'}}/>
                </div>
                </div>
                </div>
            </div>
    )
}
