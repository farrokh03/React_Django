import React from "react";
import './backgroundvideo.css'

const Backgroundvideo = ({children}) =>{
    return(
        <video className="video-background" autoPlay playsInline loop muted controlsList="nodownload">
            <source className="backgroundvideo" src={children} type="video/mp4"/>
          </video>
        );
};

export default Backgroundvideo