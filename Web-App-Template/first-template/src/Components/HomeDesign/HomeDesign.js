import React from "react";
import { Element } from "react-scroll";
import './HomeDesign.css';

const HomeDesign = ({children}) =>{
    return(
        <Element name="section4" className="HomeDesigninformationbox">
                {children}
        </Element>
    );
}
export default HomeDesign