import React, { useContext } from 'react'
import Context from '../../context'
import PhoneDivList from './phone-divList'

function PhoneDropMenu(){
    const {phone_menu_flag, setPhoneFlag} = useContext(Context)
    return(
        <div className="PhoneDopMenu" style={{visibility: phone_menu_flag===true?'visible':'hidden'}}>
            <PhoneDivList/>
        </div>
    );
}

export default PhoneDropMenu;