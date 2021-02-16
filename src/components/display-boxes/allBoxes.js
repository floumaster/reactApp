import React from 'react';

function AllBoxes(props) {
    const newArrBoxes = props.newArrBoxes;
    return(
        newArrBoxes.map((curr, id, arr)=>{
            return(
                <div style={{width: '100%', height:`100/${arr.length}%`, display:'flex', margin: 'auto', justifyContent:'space-between'}} key={id}>
                    {curr.map((current, index, array)=>{
                        return(
                            <div style={{width: '33.3333%', height:'80%', textAlign:'center'}} key={index}>
                                <a href={current[3]}><div style={{margin: 'auto', marginTop: '40px',width: '320px', height:'320px',backgroundImage:`url(${current[0]})`, backgroundSize:'cover'}}>
                                </div></a>
                                <h4>{current[1]}</h4>
                                <h4>{current[2]}</h4>
                            </div>
                        )
                    })}
                </div>
            )
        })
    );
}

export default AllBoxes;