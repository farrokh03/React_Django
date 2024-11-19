import React, { useState, useEffect } from 'react';
import { Link, scroller } from 'react-scroll';
import './NextviewportMenu.css';

const sections = ['section1', 'section2', 'section3', 'section4'];

const NextviewportMenu = () => {
    const [activeSection, setActiveSection] = useState('section1');

    const handleScrollToSection = (sectionId) => {
        setActiveSection(sectionId);
    };

    const handleKeyDown = (event) => {
        const currentIndex = sections.indexOf(activeSection);
        if (event.key === 'ArrowRight' && currentIndex < sections.length - 1) {
            const nextSection = sections[currentIndex + 1];
            setActiveSection(nextSection);
            scroller.scrollTo(nextSection, { smooth: true, duration: 100 });
        } else if (event.key === 'ArrowLeft' && currentIndex > 0) {
            const previousSection = sections[currentIndex - 1];
            setActiveSection(previousSection);
            scroller.scrollTo(previousSection, { smooth: true, duration: 100 });
        }
    };

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [activeSection]);

    return (
        <ul className="next-viewport-menu">
            <Link to="section1" smooth={true} duration={100}>
                <li onClick={() => handleScrollToSection('section1')}
                    className={activeSection === 'section1' ? 'active' : ''}>
                </li>
            </Link>
            <Link to="section2" smooth={true} duration={100}>
                <li onClick={() => handleScrollToSection('section2')}
                    className={activeSection === 'section2' ? 'active' : ''}>
                </li>
            </Link>
            <Link to="section3" smooth={true} duration={100}>
                <li onClick={() => handleScrollToSection('section3')}
                    className={activeSection === 'section3' ? 'active' : ''}>
                </li>
            </Link>
            <Link to="section4" smooth={true} duration={100}>
                <li onClick={() => handleScrollToSection('section4')}
                    className={activeSection === 'section4' ? 'active' : ''}>
                </li>
            </Link>
        </ul>
    );
};

export default NextviewportMenu;
