import React from "react";
import {Link, Outlet} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome , faStore , faSearch } from '@fortawesome/free-solid-svg-icons';
import MenuButton from "./../../Components/MenuButton/MenuButton"

import './Navbar.css'

const  Navbar = () =>{
    return(
        <div>
            <ui className="navbar">
                <div className="leftside">
                    <li><Link className="LINK" to="/"> <FontAwesomeIcon icon={faHome} size="6px"/> Home page </Link></li>
                    <li><Link className="LINK" to="shop"><FontAwesomeIcon icon={faStore} size="6px"/> Shop </Link></li>
                </div>
                
                <div className="rightside">
                               <div>
                                    <label><FontAwesomeIcon icon={faSearch} /></label>
                                    <input type="search" id="searchbox" placeholder="Search..." ></input>
                               </div>

                                <MenuButton className="menu"/>                                
                </div>
            </ui>
            <Outlet/>
        </div>
    );
}

export default Navbar