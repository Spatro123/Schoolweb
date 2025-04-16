import React from "react";
import { Link } from "react-router-dom";
import classes from "./Header.module.css";
import logo from "./etclogo.png";
import facebook from "./facebook (4).png";
import twitter from "./twitter (2).png";
import youtube from "./video.png";
import linkedin from "./linkedin2.png";
import instagram from "./instagram (6).png";
import contact from "./phone.png";
import mail from "./mail (2).png";
import account from "./login.png";

const Header1 = () => {
  return (
    <header className={classes.header}>
      <div className={classes.topBar}>
        <div className={classes.contactInfo}>
          <img src={contact} alt="Phone" />
          <span>+91-1234567890</span>
          <img src={mail} alt="Email" />
          <span>info@institute.edu</span>
        </div>
        <div className={classes.socialIcons}>
          <a href="https://www.facebook.com/profile.php?id=61575073175798" target="_blank" rel="noopener noreferrer">
            <img src={facebook} alt="Facebook" />
          </a>
          <img src={twitter} alt="Twitter" />
          <img src={linkedin} alt="LinkedIn" />
          <a href="https://www.instagram.com/et_classes?utm_source=qr&igsh=aWlmbWtwbms1bTQ3" target="_blank" rel="noopener noreferrer">
            <img src={instagram} alt="Instagram" />
          </a>
          <a href="https://youtube.com/@etcmedia?si=QUWoIlAOn9frtEtm" target="_blank" rel="noopener noreferrer">
            <img src={youtube} alt="YouTube" />
          </a>
        </div>
        <button className={classes.loginButton}>
          <img src={account} alt="Login" />
          Login to Dasho
        </button>
      </div>
      <div className={classes.mainHeader}>
        <img src={logo} alt="Essential Classes Logo" className={classes.logo} />
        <div className={classes.instituteInfo}>
          <h1>ESSENTIAL CLASSES</h1>
          <p>INNOVATION . INSPIRE . EDUCATE</p>
        </div>
        <button className={classes.admissionButton}>TAKE ADMISSION</button>
      </div>
      <nav className={classes.navBar}>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About ▾</Link></li>
          <li><Link to="/academics">Academics ▾</Link></li>
          <li><Link to="/admission">Admission</Link></li>
          <li><Link to="/notices">Notices</Link></li>
          <li><Link to="/resources">Resources ▾</Link></li>
          <li><Link to="/gallery">Gallery</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
        </ul>
      </nav>
      <div className={classes.newsUpdates}>
        <span>News Updates:</span>
        <p>Important Notice: Admission at ESSENTIAL Tutorials is managed by the Institute.</p>
        <button className={classes.viewAllButton}>View All</button>
      </div>
    </header>
  );
};

export default Header1;
