import React, { useContext } from 'react';
import Header from '../header-footer/header/header'
import Context from '../context'
import Ways from '../box-ways/ways'
import Footer from '../header-footer/footer'
import ShopContent from "../display-boxes/shopContent";

function Shop(){
    const {allBoxes} = useContext(Context)
    return(
        <div>
            <h1 style={{textAlign:'center', fontFamily: `'Brygada 1918', serif`, fontSize:'20px', marginTop:'40px'}}>ALL PRODUCTS</h1>
            <ShopContent allBoxes={allBoxes}/>
            <Ways/>
        </div>
    );
}

export default Shop;