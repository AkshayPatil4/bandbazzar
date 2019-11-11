import React from 'react';
import NavHome from './NavHome';
import Intro from './Intro';
import Marquee from './Marquee';
import Upcoming from './Upcoming';
import Crew from './Crew';
import Trst from './Trst';
import Artist from './Artist';
import Cart from './Cart';
import Footer from './Footer';
import Studio from './Studio';

import style from './Home.css';

function Home() {
    return(
        <div className="Home">
           <div className="navigation">
                            <NavHome /></div>

            <hr />
            <Intro />
            <hr />
            <Trst />
            <hr />
            <Artist />
            <hr/>
            <Marquee /> 
            <hr />
            <Upcoming />
            <Studio />
            <hr/>
            <Crew />
            <hr />
            <Cart />
            <hr />
            <Footer />
        </div>
    );
}

export default Home;