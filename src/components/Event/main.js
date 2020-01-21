import React from 'react';
import View from './view';
import NavHome from '../../components/NavHome';
import Slide from './slide';
import Footer from '../homepage/Footer';

function main(){
    return(
    <div className="main">
        
        <hr/>
        <Slide/>
        <View />
        <hr/>
        <Footer/>
    </div>
    );
}
export default main;