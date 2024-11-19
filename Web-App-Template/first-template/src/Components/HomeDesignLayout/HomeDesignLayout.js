import React from "react";
import RightSideFashionLayout from "../RightSideFashionLayout/RightSideFashionLayout";
import LeftSideFashionLayout from "../LeftSideFashionLayout/LeftSideFashionLayout";
import './HomeDesignLayout.css';



const HomeDesignLayout = () =>{

    return(
     <div className="partitionhomedesign">
        <RightSideFashionLayout/>
        <LeftSideFashionLayout/>
     </div>  

);};
export default HomeDesignLayout;