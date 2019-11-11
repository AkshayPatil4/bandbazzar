import React from 'react';
import View from './view';
import NavHome from '../homepage/NavHome';
import Slide from './slide';
import Footer from '../homepage/Footer';

function main(){
    return(
    <div className="main">
        <NavHome />
        <hr/>
        <Slide/>
        <View />
        <hr/>
        <Footer/>
    </div>
    );
}
export default main;