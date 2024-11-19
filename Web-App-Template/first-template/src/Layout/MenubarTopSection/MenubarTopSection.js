import React from "react";
import './MenubarTopSection.css';

const MenubarTopSection = ()=>{
    return(
        <div className="topsection">
                <span className="store-name"> Online Shop Name </span>
                <button className="signin-up">sign in</button>
                <button className="signin-up">sign up</button>
        </div>
    );
}
export default MenubarTopSection