import React from 'react'

const likeStyle={
    display:'flex',
    flexDirection: 'column',
    justifyContent:'flex-end',
    color:'#696969',
    borderRight:'1px solid #808080',
    paddingTop:'0%',
    paddingBottom:'0%'
}
const followStyle={
    display:'flex',
    flexDirection: 'column',
    justifyContent:'flex-start',
    color:'#696969'
}
export default function like(){            
    return (
        <div className='row' style={{marginTop:'-8%'}}>
            <div className='col-md-6 col-xs-6' style={likeStyle}>
                <p style={{fontSize:'1.5em'}}>140k</p>
                <p style={{fontSize:'0.8em'}}>LIKES</p>
            </div>
            <div className='col-md-6 col-xs-6' style={followStyle}>
                <p style={{fontSize:'1.5em'}}>24k</p>
                <p style={{fontSize:'0.8em'}}>FOLLOWERS</p>
            </div>
        </div>
    )
}