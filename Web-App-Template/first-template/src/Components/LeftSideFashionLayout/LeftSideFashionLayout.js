import React from "react";
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './LeftSideFashionLayout.css';

const LeftSideFashionLayout = () =>{

    const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.1, // Adjust this threshold as needed
  });

  React.useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

    return(
        <div className="leftsidebox">
            <motion.div 
             ref={ref}
             initial="hidden"
             animate={controls}
             variants={{
               hidden: { opacity: 0, x: -50 },
               visible: { opacity: 1, x: 0, transition: { duration: 1 } },
             }}
            className="sidetextbox"></motion.div>
            <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0, transition: { duration: 1.25 } },
            }}
             className="sidetextbox2"></motion.div>
            <motion.div
             ref={ref}
             initial="hidden"
             animate={controls}
             variants={{
               hidden: { opacity: 0, y: -50 },
               visible: { opacity: 1, y: 0, transition: { duration: 1 } },
             }}
             className="sidetextbox3"></motion.div>
            <motion.div
             ref={ref}
             initial="hidden"
             animate={controls}
             variants={{
               hidden: { opacity: 0, x:0 },
               visible: { opacity: 1, x: 0, transition: { duration: 1 } },
             }}
             className="sidetextbox3"></motion.div>
            <motion.div
             ref={ref}
             initial="hidden"
             animate={controls}
             variants={{
               hidden: { opacity: 0, y: 50 },
               visible: { opacity: 1, y: 0, transition: { duration: 1 } },
             }} 
            className="sidetextbox3"></motion.div>        
        </div>

    );
}
export default LeftSideFashionLayout