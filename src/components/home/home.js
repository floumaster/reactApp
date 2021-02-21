import React, {useState, useContext} from 'react';
import DescriptionCard from './descriptionCard'
import Slogans from './slogans'
import Ways from '../box-ways/ways'
import Download from './download'
import Popular from '../popular-boxes/popular'
import Context from '../context'

function HomePage(){
    const {content_flag, setContent} = useContext(Context);
    let arr;
    /*arr = (content_flag===true)?[<DescriptionCard key={1}/>, <Slogans key={2}/>, <Download key={3}/>, <Popular key={4}/>, <Ways key={5}/>]:[];*/
    arr = (content_flag===true)?[<DescriptionCard key={1}/>, <Slogans key={2}/>,]:[];
    return(
        <div>
            {arr}
        </div>
    );
}

export default HomePage;