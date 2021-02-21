import Reac, {useState, useContext } from 'react'
import Context from '../../context'


function PhoneDivList(){
    const {shop, corporate, custom, about, setSearch, btn_class} = useContext(Context);
    return (
        <div>
            <div className="search">
            <input type="text" className="search-inpt" onClick={()=>{setSearch()}}/>
                <button className={btn_class}>
                    <span>
                        Search
                    </span>
                    <img src="/search.png" alt="search"/>
                </button>
            </div>
            <h2 className="headers">Shop</h2>
            {shop.map((current, index, array)=>{
                return(
                    <a className="phone-links" key={index}>{current[0]}<br/></a>
                )
            })}
            <h2 className="headers">Corporate</h2>
            {corporate.map((current, index, array)=>{
                return(
                    <a className="phone-links" key={index}>{current[0]}<br/></a>
                )
            })}
            <h2 className="headers">Custom</h2>
            {custom.map((current, index, array)=>{
                return(
                    <a className="phone-links" key={index}>{current[0]}<br/></a>
                )
            })}
            <h2 className="headers">About</h2>
            {about.map((current, index, array)=>{
                return(
                    <a className="phone-links" key={index}>{current[0]}<br/></a>
                )
            })}
        </div>
    );
}

export default PhoneDivList;