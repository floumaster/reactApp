import React, { useContext } from 'react';
import Context from '../../context'
import DropMenu from './dropMenu'

function Header(){
    const {menu_flag, show_menu, hide_menu, curr_links, changeLinks} = useContext(Context);
    return(
        <div className="wrapper">
            <header className="header">
            <nav className="navbar">
                <ul className="left-ul">
                    <li onMouseOver={()=>{changeLinks('Shop'); show_menu()}} onMouseLeave={()=>{hide_menu()}}>Shop</li>
                    <li onMouseOver={()=>{changeLinks('Corporate'); show_menu()}} onMouseLeave={()=>{hide_menu()}}>Corporate</li>
                    <li onMouseOver={()=>{changeLinks('Custom'); show_menu()}} onMouseLeave={()=>{hide_menu()}}>Custom</li>
                </ul>
                <a className="logo" href="/">
                    <div style={{backgroundImage: `url("./teak-twine-logo-desktop.svg")`}}></div>
                </a>
                <ul className="right-ul">
                    <li onMouseOver={()=>{changeLinks('About'); show_menu()}} onMouseLeave={()=>{hide_menu()}}>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </nav>
            <DropMenu/>
        </header>
        </div>
    );
}

export default Header;