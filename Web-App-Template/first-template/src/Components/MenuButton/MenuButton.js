import React, { useState } from 'react';
import './MenuButton.css';

const MenuButton = () => {
    const [isOpen, setIsOpen] = useState(false);
    const handleClick = () => {
        const menubar = document.getElementById('verticalmenu');
        if(isOpen === false ){
            setIsOpen(!isOpen)
            menubar.style.animationName = "translate";
            menubar.style.top="90px";
        }else{
            setIsOpen(!isOpen)
            menubar.style.animationName ="reversetranslate";
            menubar.style.top ="100vh";
            menubar.style.right="80px";
        }
    };

    return (
        <div className="menu-button" onClick={handleClick}>
            <div className={`bar ${isOpen ? 'open' : ''}`}></div>
            <div className={`bar ${isOpen ? 'open' : ''}`}></div>
            <div className={`bar ${isOpen ? 'open' : ''}`}></div>
        </div>
    );
};

export default MenuButton;
