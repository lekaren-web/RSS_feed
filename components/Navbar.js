import React, { Component, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faNewspaper,
  faGear
} from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
const Navbar = (props) => {
  function openNav() {
    document.getElementById("mySidenav").style.width = "60vw";
    document.getElementById("main").style.marginLeft = "60vw";
  }
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  }
 
  const location = useLocation();

  return (
    // Lef navbar container
    <div className="left-nav">
      {/* user profile icon */}

      <div className="userIcon">
        <img src="" />
      </div>

      {/* hoomepage Navicon */}
      <div className="nav_links">
        <span style={{margin:'0 auto'}}>
          <Link to="/" style={{textDecoration: 'none'}}>
            <FontAwesomeIcon className={ location.pathname === '/home' ? "home_icon_active" : 'home_icon_inactive'} icon={faHouse} />
          </Link>
        </span>
        <span style={{margin:'0 auto'}}>
          <Link to="/feeds" style={{textDecoration: 'none'}}>
            <FontAwesomeIcon className={ location.pathname === '/feeds' || location.pathname.includes('/feed/') ? "feed_icon_active" : 'feed_icon_inactive'} icon={faNewspaper} />
            <p className="nav_label_inactive">Feeds</p>
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Navbar;
