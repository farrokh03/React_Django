import React from "react";
import './Home.css';
import Fashion from "../../Components/Fashion/Fashion";
import { Element } from "react-scroll";
import HomeDesign from "../../Components/HomeDesign/HomeDesign";
import LinkButton from "../../Components/LinkButton/LinkButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import FashionLayout from "../../Components/FashionLayout/FashionLayout";
import Backgroundvideo from "../../Components/Backgroundvideo/Backgroundvideo";
import HomeDesignLayout from "../../Components/HomeDesignLayout/HomeDesignLayout";
import NextviewportMenu from "../../Layout/NextviewportMenu/NextviewportMenu";

import { Link } from "react-router-dom";

// const video1 = "/fashionvideo.mp4";
// const video2 = "/HomeDesign.mp4";

const Homepage = () => {
    const controls = useAnimation();
    const { ref, inView } = useInView({
      threshold: 0.1,
    });
  
    React.useEffect(() => {
      if (inView) {
        controls.start('visible');
      } else {
        controls.start('hidden');
      }
    }, [controls, inView]);
    return (
        <div className="HomePage">
            <NextviewportMenu/>
            <div className="background">
                    {/* <Backgroundvideo>{video1}</Backgroundvideo> */}
                    <Element name="section1" className="container">
                        <div className="leftcontainer">
                            <motion.div
                            ref={ref}
                            initial="hidden"
                            animate={controls}
                            variants={{
                              hidden:{opacity: 0 , x : -150 },
                              visible:{opacity: 1 , x: 0 , transition: { duration: 1 }},
                            }}
                             className="text">
                                <main>
                                    <h1>Have The Best With US</h1>
                                    <h2>Create your best style here</h2>
                                </main>
                            </motion.div>
                        </div>
                        <div className="rightcontainer">
                            <Link className="btn" to="shop"> <LinkButton>here is the best styles for you!<FontAwesomeIcon icon={faAngleDoubleRight} size="20px"/></LinkButton> </Link> 
                        </div>  
                    </Element>
                    
            </div>
            <Fashion>
               <FashionLayout/>
            </Fashion>
            <Element name="section3" className="background">
                    <Backgroundvideo>{video2}</Backgroundvideo>
                    <container className="container">
                        <div className="rightcontainer">

                        <Link className="btn" to="shop"><LinkButton>Lets Design Your Place<FontAwesomeIcon icon={faAngleDoubleRight} size="20px"/></LinkButton></Link>

                        </div>

                        <div className="leftcontainer">
                            <div className="text">
                                <main>
                                    <h1>Design Your Place With US</h1>
                                    <h2>All Of Your peace Is Here</h2>     
                                </main>
                            </div>
                        </div>
                    </container>
            </Element>
            <HomeDesign>
                <HomeDesignLayout/>
            </HomeDesign>

                           
                          
        </div>
    )
}
export default Homepage