import React, {useContext} from 'react';
import Header from '../header-footer/header/header'
import Footer from '../header-footer/footer'
import Context from '../context'
import TextTop from './top-text'
import ShopContent from '../display-boxes/shopContent'
import {useRouteMatch,Route,Switch,Redirect, BrowserRouter as Router} from "react-router-dom";
import UniqueBox from './uniqueBox/uniqueBox';

function CustomizeMain(){
    const {allTemplates} = useContext(Context)
    return(
        <div>
            <TextTop/>
            <ShopContent allBoxes={allTemplates}/>
        </div>
    );
}

export default CustomizeMain;