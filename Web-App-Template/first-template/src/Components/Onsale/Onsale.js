import React from "react";
import './Onsale.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";       
import { faArrowLeft,faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Onsale = () =>{
    return(
        <>
            <div className="onsale">
                <img src="" alt=""/>
            </div>
            <div className="buttons">
                <button><FontAwesomeIcon icon={faArrowLeft} size="6px"/></button>
                <span>1</span>
                <button><FontAwesomeIcon icon={faArrowRight} size="6px"/></button>
            </div>
        </>
    );

};
export default Onsale