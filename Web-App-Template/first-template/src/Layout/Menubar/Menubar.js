import React from "react";
import './Menubar.css';

import MenubarTopSection from "../MenubarTopSection/MenubarTopSection";
import MenubarLeftside from "../MenubarLeftside/MenubarLeftside";
import MenubarNotification from "../MenubarNotification/MenubarNotification";
import MenubarWishlist from "../Menubarwishlist/MenubarWishlist";
import MenubarBasket from "../MenubarBasket.js/MenubarBasket";

const Menubar = ()=>{

    return(
        <div id="verticalmenu" className="verticalmenu">
            <MenubarTopSection/>
            <MenubarLeftside/>

            <div className="Content">
                <MenubarNotification/>
                <MenubarWishlist/>
                <MenubarBasket/>    
            </div>
    </div>
    );
}
export default Menubar;