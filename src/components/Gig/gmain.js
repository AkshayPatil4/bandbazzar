import React from 'react';
import NavHome from '../homepage/NavHome';
import View from './view';
import Footer from '../homepage/Footer';
import {
    Container 
} from 'react-bootstrap';
function main(){
    return(
    <div className="main">
        <NavHome />
        <hr/>
       <View/>
        <hr/>
        <Footer/>
    </div>
    );
}
export default main;