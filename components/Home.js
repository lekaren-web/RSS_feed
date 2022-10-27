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
const Home = () => {
  const [email, setEmail] = useState(null);
  return (
    <div className="home_container">
      <div className="heading">
        {/* view for recently visited items */}
        <h1>You're invited to Premium</h1>
        <p>To join this plan enter your email to access more RSS feeds!</p>
      </div>
      <div>
        <input
          style={{
            padding: "15px",
            width: "300px",
            border: "0.5px solid gray",
            marginBottom: '20px',
            marginTop: '20px'
          }}
          type="text"
          onChange={(val) => setEmail(val.target.value)}
          placeholder="Enter your email"
        />
        
      </div>
      <div className="heading" >
        <h5>Only you can access your account</h5>
        <p>
          No one else can view your logins and info. Each plan member can only
          access their own account
        </p>
      </div>
      {/* view for all bookmarked items */}
    </div>
  );
};
export default Home;
