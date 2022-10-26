import React, { useState, useEffect } from "react";
// import XMLParser from 'react-xml-parser';
import { Link } from "react-router-dom";
import axios from "axios";
import Select from "react-select";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDuotone,
  faList,
  faColumn,
  faGrip,
  faBookBookmark,
} from "@fortawesome/free-solid-svg-icons";
// import column from '../client/assets/column.png'
const Home = () => {

  return (
    <div className="home_container">
      <div className="heading">
        {/* view for recently visited items */}
        <h2>Recently Viewed</h2>
      </div>
      {/* view for all bookmarked items */}
      
    </div>
  );
};
export default Home;
