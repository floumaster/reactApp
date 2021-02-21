import React,{useState, useContext} from 'react';
import Context from '../../../context'

function SliderItems(props){
    const sliderItems = props.sliderItems;
    return(
        sliderItems.map((curr, id, arr)=>{
            const style = {paddingRight:'20px', paddingLeft: '20px', display:'block', width:'600px', height:'400px', textAlign:'center',  position:'relative'};
            if(id!==0){
                style['borderLeft'] = '1px solid rgb(182, 182, 182)';
            }
            return(
                <div style={style} key={id}>
                    <div style={{backgroundImage:`url(${curr[0]})`, width:'250px', height:'350px', display:'block', margin:'auto', backgroundSize: 'contain',  position:'relative', backgroundRepeat: 'no-repeat'}}>
                    </div>
                    <h1>{id+1}</h1>
                    <hr style={{width:'40px'}}/>
                    <a style={{display: 'block', width:'80%', margin:'auto'}}>{curr[1]}</a>
                </div>
            )
        })
    );
}

export default SliderItems;