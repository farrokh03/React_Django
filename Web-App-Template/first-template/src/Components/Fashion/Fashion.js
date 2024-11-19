import React from "react";
import { Element } from "react-scroll";
import './Fashion.css';

const Fashion = ({children}) =>{
    return(
        <Element name="section2" className="fashioninformationbox">
                {children}
        </Element>
    );
}
export default Fashion