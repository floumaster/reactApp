import React from 'react';
import Header from '../header-footer/header/header'
import DescriptionCard from './descriptionCard'
import Slogans from './slogans'
import Ways from '../box-ways/ways'
import Download from './download'
import Popular from '../popular-boxes/popular'
import Footer from '../header-footer/footer'

function HomePage(){
    return(
        <div>
            <DescriptionCard/>
            <Slogans/>
            <Ways/>
            <Download/>
            <Popular/>
        </div>
    );
}

export default HomePage;