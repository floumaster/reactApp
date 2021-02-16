import React, { useContext } from 'react'
import Context from '../context'
import AllBoxes from "./allBoxes";

function ShopContent(props) {
    let allBoxes = props.allBoxes;
    let newArrBoxes = [];
    let helpArr = [];
    allBoxes.forEach((element, id, arr) => {
        helpArr.push(element)
        if((id+1)%3===0){
            newArrBoxes.push(helpArr)
            helpArr = []
        }
    });
    if(helpArr.length!==0){
        newArrBoxes.push(helpArr)
    }
    return(
        <div className="boxes-wrapper" style={{height:`${490*newArrBoxes.length}px`}}>
                    <AllBoxes newArrBoxes={newArrBoxes}/>
        </div>
    );
}

export default ShopContent;