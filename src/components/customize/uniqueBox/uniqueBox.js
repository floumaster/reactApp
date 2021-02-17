import React,{useState, useContext} from 'react';
import Context from '../../context'
import SliderItems from './slider/slider-items'

function UniqueBox(){
    const [shadow, setShadow] = useState({background: 'none'});
    const [shadow2, setShadow2] = useState({background: 'none'});
    const [darkLeft, setDarkLeft] = useState({filter: 'brightness(100%)'})
    const [darkRight, setDarkRight] = useState({filter: 'brightness(100%)'})
    const [darkLeft2, setDarkLeft2] = useState({filter: 'brightness(100%)'})
    const [darkRight2, setDarkRight2] = useState({filter: 'brightness(100%)'})
    const {sliderItems} = useContext(Context);
    const {allTemplates} = useContext(Context);
    const [grade, setgrade] = useState(180);
    const [style, setStyle] = useState({
        'WebkitTransform': `rotate(0deg)`,
        'transform': `rotate(0deg)`});
    return(
        <div className="unique-box-wrapper">
            <div className="unique-top-text">
                <a className="unique-top-text-a">Customize: Alex</a>
                <div className="unique-top-text-h2-button"><h2>CUSTOMIZE</h2></div>
                <div className="unique-top-text-h2-share"><h2>SHARE</h2></div>
            </div>
            <div className="unique-customize">
                <div className="unique-customize-left">
                    <div className="unique-customize-left-menu">
                        <div className="unique-customize-left-menu-prise">
                            $140.00
                        </div>
                        <div className="unique-customize-left-menu-btn">
                            <a className="a-btn">CUSTOMIZE</a>  
                        </div>
                        <div className="unique-customize-left-menu-qty">
                            <div>
                            QTY: 
                            &nbsp;
                                <div>1</div>
                                &nbsp;
                                <a onClick={()=>{setStyle({
        'WebkitTransform': `rotate(${grade}deg)`,
        'transform': `rotate(${grade}deg)`});
        setgrade(grade===0?180:0);}}><img style={style} src="/arrow.png" alt="arrow"/></a>
                            </div>
                        </div>
                    </div>
                    <div className="unique-customize-left-menu-img">
                        <img className="unique-customize-left-menu-img-main" src="https://manage.teakandtwine.com/storage/images/13161/cca02edfed4fef220442b86b8246a5d2.jpg" alt="logo"/>
                    </div>
                    <hr></hr>
                    <div className="unique-customize-left-menu-img-list">
                    <a onClick={()=>{
                        document.getElementsByClassName("unique-customize-left-menu-img-main")[0].src = document.getElementsByClassName("unique-customize-left-menu-img-img1")[0].src;
                    }}><img className="unique-customize-left-menu-img-img1" src="https://manage.teakandtwine.com/storage/images/1037/934237552924f09c32cef031054cbf9f.jpg" alt="logo"/></a>
                    <a onClick={()=>{
                        document.getElementsByClassName("unique-customize-left-menu-img-main")[0].src = document.getElementsByClassName("unique-customize-left-menu-img-img2")[0].src;
                    }}><img className="unique-customize-left-menu-img-img2" src="https://manage.teakandtwine.com/storage/images/13159/be774f5124296da97d9eee6f1c59a717.jpg" alt="logo"/></a>
                    <a onClick={()=>{
                        document.getElementsByClassName("unique-customize-left-menu-img-main")[0].src = document.getElementsByClassName("unique-customize-left-menu-img-img3")[0].src;
                    }}><img className="unique-customize-left-menu-img-img3" src="https://manage.teakandtwine.com/storage/images/13160/929ec26d30fbdf19f77840533d25de73.jpg" alt="logo"/></a>
                    <a onClick={()=>{
                        document.getElementsByClassName("unique-customize-left-menu-img-main")[0].src = document.getElementsByClassName("unique-customize-left-menu-img-img4")[0].src;
                    }}><img className="unique-customize-left-menu-img-img4" src="https://manage.teakandtwine.com/storage/images/13161/cca02edfed4fef220442b86b8246a5d2.jpg" alt="logo"/></a>
                    </div>
                </div>
                <div className="unique-customize-right">
                    <div>
                        <h2>DETAILS</h2>
                        <a>To get started on your custom design, click "customize" above! Custom gifts are shipped within 2-4 business days. Creating an account will allow you to save your designs so that you can come back to them later. If you have any questions about your design, don't hesitate to reach out to us at: hello@teakandtwine.com and we'll help you out right away!</a>
                        <a className="a-btn">CUSTOMIZE</a> 
                    </div>
                </div>
            </div>
            <div className="first-slider-wrapper">
                <div className="first-slider-wrapper-left">
                    <div className="pagination">
                        <div className="circle-left" onClick={()=>{document.getElementsByClassName("slider")[0].scrollLeft-=250}} onMouseOver={()=>{setDarkLeft({filter: 'brightness(50%)'})}} onMouseLeave={()=>{setDarkLeft({filter: 'brightness(100%)'})}}>
                            <img src="/circle_left.png" alt="btn-left" style={darkLeft}/>
                        </div>
                        <div className="circle-right" onClick={()=>{document.getElementsByClassName("slider")[0].scrollLeft+=250}} onMouseOver={()=>{setDarkRight({filter: 'brightness(50%)'})}} onMouseLeave={()=>{setDarkRight({filter: 'brightness(100%)'})}}>
                            <img src="/circle_right.png" alt="btn-left" style={darkRight}/>
                        </div>
                    </div>
                    <div className="text-bottom">
                        <a>In the Box</a>
                        <hr align="left"></hr>
                    </div>
                </div>
                <div className="first-slider-wrapper-right">
                    <div className="shadow" style={shadow}></div>
                    <div className="slider" onScroll={()=>{if(document.getElementsByClassName("slider")[0].scrollLeft!==0){
                        setShadow({
                            boxShadow: `background: rgb(0,0,0)`,
                        background: `linear-gradient(90deg, rgba(128,128,128,1) 0%, rgba(160,160,160,0.8214636196275386) 39%, rgba(187,187,187,0.47692580450148814) 73%, rgba(235,235,235,0.28084737312893904) 100%, rgba(153,153,153,0.2976540958180147) 100%)`})
                        }
                        else{
                            setShadow({'box-shadow': `none`})
                        }}}>
                            <SliderItems sliderItems={sliderItems}/>
                            <div style = {{paddingRight:'20px', paddingLeft: '20px', display:'block', marginTop: '100px',width:'300px', height:'300px', textAlign:'center', borderLeft: '1px solid rgb(182, 182, 182)'}}>
                                <a style = {{fontSize:'50px'}}>Want to customize this box?</a>
                                <hr style={{width:'80px'}}/>
                                <a className="a-btn">GET STARTED</a>
                            </div>
                    </div>
                </div>
            </div>
            <div className="second-slider-wrapper">
                <div className="first-slider-wrapper-left">
                    <div className="pagination">
                        <div className="circle-left" onClick={()=>{document.getElementsByClassName("slider")[1].scrollLeft-=250}} onMouseOver={()=>{setDarkLeft2({filter: 'brightness(50%)'})}} onMouseLeave={()=>{setDarkLeft2({filter: 'brightness(100%)'})}}>
                            <img src="/circle_left.png" alt="btn-left" style={darkLeft2}/>
                        </div>
                        <div className="circle-right" onClick={()=>{document.getElementsByClassName("slider")[1].scrollLeft+=250}} onMouseOver={()=>{setDarkRight2({filter: 'brightness(50%)'})}} onMouseLeave={()=>{setDarkRight2({filter: 'brightness(100%)'})}}>
                            <img src="/circle_right.png" alt="btn-left" style={darkRight2}/>
                        </div>
                    </div>
                    <div className="text-bottom">
                        <a>In the Box</a>
                        <hr align="left"></hr>
                    </div>
                </div>
                <div className="first-slider-wrapper-right">
                    <div className="shadow" style={shadow2}></div>
                    <div className="slider" onScroll={()=>{if(document.getElementsByClassName("slider")[1].scrollLeft!==0){
                        setShadow2({
                            boxShadow: `background: rgb(0,0,0)`,
                        background: `linear-gradient(90deg, rgba(128,128,128,1) 0%, rgba(160,160,160,0.8214636196275386) 39%, rgba(187,187,187,0.47692580450148814) 73%, rgba(235,235,235,0.28084737312893904) 100%, rgba(153,153,153,0.2976540958180147) 100%)`})
                        }
                        else{
                            setShadow2({'background': `none`})
                        }}}>
                            <SliderItems sliderItems={allTemplates}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UniqueBox;