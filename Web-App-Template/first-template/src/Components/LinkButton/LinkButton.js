import React from "react"; 
import './LinkButton.css'; 


const LinkButton = ({children}) =>{
    return(
        <button className="link">{children}</button>
    );
};
export default LinkButton