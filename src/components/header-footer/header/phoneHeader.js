import React, { useState, useContext } from 'react';
import Context from '../../context'
import PhoneDropMenu from './phone-dropMenu'

function PhoneHeader(){
    const [class_, setclass] = useState('hamburger hamburger--collapse')
    const {phone_menu_flag, setPhoneFlag, content_flag, setContent} = useContext(Context);
    return(
        <div className="phone-wrapper">
            <header className="phone-header">
            <div className={class_} onClick={()=>{setContent(!content_flag);
                setclass(class_==='hamburger hamburger--collapse'?'hamburger hamburger--collapse is-active':'hamburger hamburger--collapse'); setPhoneFlag(!phone_menu_flag)}}>
                <div className="hamburger-box">
                    <div className="hamburger-inner"></div>
                </div>
            </div>
                <a className="phone-logo" href="/">
                    <div style={{backgroundImage: `url("./teak-twine-logo-desktop.svg")`}}></div>
                </a>
                <div className="phone-counter">

                </div>
            </header>
            <PhoneDropMenu/>
        </div>
    );
}

export default PhoneHeader;