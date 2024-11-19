import React from "react";
import './MenubarBasket.css';
import img1 from './../../photos/coat.jpg';


const MenubarBasket =()=>{
    return (
        <div className="basket">
                <div className="box-title">Basket</div>
                <div className="basket-item">
                    <img src={img1} alt=""/>
                    <div className="item-info">
                    <span className="item-information">Price : <span>520$</span></span>
                    <span className="item-information">Product Name : <span>jin coat</span></span>
                    <span className="item-information">Availability : <span>10</span></span>
                    </div>
                    <button>remove from basket</button>
                </div>
                
               
                
                 
                
        </div>
    )
}
export default MenubarBasket