import React, { useContext } from 'react';
import Header from '../header-footer/header/header'
import Context from '../context'
import Ways from '../box-ways/ways'
import Footer from '../header-footer/footer'
import ShopContent from "../display-boxes/shopContent";

function MostPopular(){
    const {allBoxes} = useContext(Context)
    return(
        <div >
            <h1 style={{textAlign:'center', fontFamily: `'Brygada 1918', serif`, fontSize:'20px', marginTop:'40px'}}>SHOP OUR</h1>
            <div style={{textAlign:'center'}}>
                <a style={{fontFamily: `'Brygada 1918', serif`, fontSize:'40px', marginTop:'20px'}}>Most Popular Gifts</a>
            </div>
            <ShopContent allBoxes={allBoxes}/>
            <Ways/>
        </div>
    );
}

export default MostPopular;