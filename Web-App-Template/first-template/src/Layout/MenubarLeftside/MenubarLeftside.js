import React from "react";
import './MenubarLeftside.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBasketShopping} from "@fortawesome/free-solid-svg-icons/faBasketShopping";
import { faBell } from "@fortawesome/free-solid-svg-icons/faBell";
import { faListCheck,faWrench, faPhone, faCircleQuestion,faCampground } from "@fortawesome/free-solid-svg-icons";

const MenubarLeftside = ()=>{
    return (
        <ul className="boxitems">
            <div className="profile-section">
                <div className="profile-photo">
                    <div className="head"></div>
                    <div className="body"></div>
                </div>
                <span className="username">#Farrokh03</span>
            </div>
            <li><span><FontAwesomeIcon icon={faBell}/></span> Notification</li>
            <li><span><FontAwesomeIcon icon={faListCheck}/></span> WishList</li>
            <li><span><FontAwesomeIcon icon={faBasketShopping}/></span> Basket</li>
            <li><span><FontAwesomeIcon icon={faWrench}/></span> Setinge</li>
            <li><span><FontAwesomeIcon icon={faPhone}/></span> Contact US</li>
            <li><span><FontAwesomeIcon icon={faCampground}/></span> About US</li>
            <li><span><FontAwesomeIcon icon={faCircleQuestion}/></span> Help</li>
        </ul>
    );
};
export default MenubarLeftside