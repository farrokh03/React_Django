import React from "react";
import './RightSideFashionLayout.css';
import ImageAlbum from "../ImageAlbum/ImageAlbum";
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import img1 from './../../photos/coat.jpg';
import img2 from './../../photos/portrait-young-adult-wearing-hoodie-mockup_23-2149296253.jpg';
import img3 from './../../photos/soft-blurred-blue-painting-abstract-background_120819-132.jpg';
import img4 from './../../photos/white_hoodie_mockup.jpg';
const imageSet1 = [img1, img2, img3, img4];

const RightSideFashionLayout = () =>{
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
    
    return(
        <div className="rightsidebox">
         <motion.div className="b"
         ref={ref}
         initial="hidden"
         animate={controls}
         variants={{
           hidden: { opacity: 0, y: -50 },
           visible: { opacity: 1, y: 0, transition: { duration: 1 } },
         }}>
        </motion.div>      
        <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={{
          hidden:{opacity: 0 , y : -50 },
          visible:{opacity: 1 , y: 0 , transition: { duration: 1 }},
        }}
        className="rightsidetbox">
          <ImageAlbum images={imageSet1} />
        </motion.div>

            <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={{
              hidden:{opacity: 0 , y : 50 },
              visible:{opacity: 1 , y: 0 , transition: { duration: 1 }},
            }}
             className="textbox1">

            </motion.div>
            <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={{
              hidden:{opacity: 0 , y : 50 },
              visible:{opacity: 1 , y: 0 , transition: { duration: 1 }},
            }}
             className="textbox2">

            </motion.div>
            <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={{
              hidden:{opacity: 0 , y : -50 },
              visible:{opacity: 1 , y: 0 , transition: { duration: 1 }},
            }}
             className="textbox3">

            </motion.div>
    </div>
    );
}
export default RightSideFashionLayout