import React from "react";
import LeftSideFashionLayout from "../LeftSideFashionLayout/LeftSideFashionLayout";
import RightSideFashionLayout from "../RightSideFashionLayout/RightSideFashionLayout";
import './FashionLayout.css';

const FashionLayout = () =>{

    return(
     <div className="partition">
        <LeftSideFashionLayout/>
        <RightSideFashionLayout/>
       
    </div>

);};
export default FashionLayout;