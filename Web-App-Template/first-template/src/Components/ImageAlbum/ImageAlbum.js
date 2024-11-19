import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './ImageAlbum.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

import img1 from './../../photos/coat.jpg';
import img2 from './../../photos/portrait-young-adult-wearing-hoodie-mockup_23-2149296253.jpg';
import img3 from './../../photos/soft-blurred-blue-painting-abstract-background_120819-132.jpg';
import img4 from './../../photos/white_hoodie_mockup.jpg';

const images = [img1, img2, img3, img4];

const ImageAlbum = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="album-container">
      <AnimatePresence mode="wait">
        <motion.img
          key={currentIndex} // Use index as key instead of the image path
          src={images[currentIndex]}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.25 }}
          className="album-image"
        />
      </AnimatePresence>
      <button onClick={handlePrev} className="prev-button">
        <FontAwesomeIcon icon={faArrowLeft} />
      </button>
      <button onClick={handleNext} className="next-button">
        <FontAwesomeIcon icon={faArrowRight} />
      </button>
    </div>
  );
};

export default ImageAlbum;
