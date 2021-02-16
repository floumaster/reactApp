import React,{useState, useContext} from 'react';
import Context from '../../context'

function UniqueBox(){
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
        </div>
    );
}

export default UniqueBox;