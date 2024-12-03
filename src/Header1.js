import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import classes from "./Header1.module.css";
import logo from "./etclogo.png";
import facebook from "./facebook (4).png";
import twitter from "./twitter (2).png";
import youtube from "./video.png";
import linkedin from "./linkedin2.png";
import instagram from "./instagram (6).png";
import contact from "./phone.png";
import mail from "./mail (2).png";
import account from "./login.png" ;

const Header1 = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  const isActive = (path) => location.pathname === path;
  const isDropdownActive = (basePath) => location.pathname.startsWith(basePath);

  return (
    <header className={classes.navbar}>
      {/* Top bar with social media, contact, and login */}
      <div className={classes.topbar}>
        <div className={classes.contactInfo}>
          <img src={contact} alt="Contact" className={classes.icon} />
          <span>+91-1234567890</span>
          <img src={mail} alt="Mail" className={classes.icon} />
          <span>info@institute.edu</span>
        </div>
        <div className={classes.topheadright}>
        <div className={classes.socialIcons}>
          <img src={facebook} alt="Facebook" className={classes.icon} />
          <img src={twitter} alt="Twitter" className={classes.icon} />
        
          <img src={linkedin} alt="LinkedIn" className={classes.icon} />
          <img src={instagram} alt="Instagram" className={classes.icon} />
          <img src={youtube} alt="YouTube" className={classes.icon} />
        </div>
        <div className={classes.dasho}>
          <img src={account} alt="Profile" className={classes.account} />
          <a
            href="https://dashoapp.com"
            target="_blank"
            rel="noopener noreferrer"
            className={classes.dashoLink}
          >
            Login to Dasho
          </a>
        </div>
        </div>
      </div>

      {/* Main navbar */}
      <div className={classes.navbarcontainer}>
        <div className={classes.navbarlogo}>
          <img src={logo} alt="Institute Logo" className={classes.navbarlogoimage} />
          <div className={classes.navbartitle}>
            <h1>ESSENTIAL CLASSES</h1>
            <p>INNOVATION . INSPIRE . EDUCATE</p>
          </div>
        </div>
        <div className={classes.navbarbuttons}>
          {/* <button className={classes.btnapplybtn}>APPLY FOR IMAT 2025</button> */}
          <button className={classes.btnadmissionbtn}>TAKE ADMISSION</button>
        </div>
      </div>

      {/* Navigation Links */}
      <nav className={classes.navList}>
        <div className={classes.hamburger} onClick={toggleMenu}>
          <div className={classes.hamburgerLine}></div>
          <div className={classes.hamburgerLine}></div>
          <div className={classes.hamburgerLine}></div>
        </div>

        <div
          className={`${classes.navListContent} ${
            isMenuOpen ? classes.active : ""
          }`}
        >
          <Link
            to="/"
            className={isActive("/") ? classes.activeLink : ""}
            onClick={closeMenu}
          >
            Home
          </Link>

          {/* About Dropdown */}
          <div
            className={`${classes.dropdown} ${
              isDropdownActive("/page2") ? classes.dropdownActive : ""
            }`}
          >
            <Link
              to="/page2"
              className={`${classes.dropdownToggle} ${
                isDropdownActive("/page2") ? classes.activeLink : ""
              }`}
            >
              About <span className={classes.dropdownIndicator}>▼</span>
            </Link>
            <div className={classes.dropdownMenu}>
              <Link to="/page2" onClick={closeMenu}>
                About Us
              </Link>
              <Link to="/research" onClick={closeMenu}>
                Research
              </Link>
              <Link to="/history" onClick={closeMenu}>
                History
              </Link>
              <Link to="/missionvission" onClick={closeMenu}>
                Mission & Vision
              </Link>
              <Link to="/welcomecard" onClick={closeMenu}>
                About Founder
              </Link>
            </div>
          </div>

          <div
            className={`${classes.dropdown} ${
              isDropdownActive("/academicpage") ? classes.dropdownActive : ""
            }`}
          >
            <Link
              to="/academicpage"
              className={`${classes.dropdownToggle} ${
                isDropdownActive("/academicpage") ? classes.activeLink : ""
              }`}
            >
              Academics <span className={classes.dropdownIndicator}>▼</span>
            </Link>
            <div className={classes.dropdownMenu}>
              <Link to="/academicprograms" onClick={closeMenu}>
                Academic Programs
              </Link>
              <Link to="/rulesandregulations" onClick={closeMenu}>
                Rules & Regulations
              </Link>
              <Link to="/library" onClick={closeMenu}>
                Library
              </Link>
              <Link to="/studentlife" onClick={closeMenu}>
                Special Activities
              </Link>
              <Link to="/event" onClick={closeMenu}>
                Event
              </Link>
              <Link to="/parenttestimonial" onClick={closeMenu}>
                Word from Parents
              </Link>
              <Link to="/ourteam" onClick={closeMenu}>
                Faculties
              </Link>
            </div>
          </div>


          <div className={classes.dropdown}>
            <Link
              to="/Resources"
              className={`${classes.dropdownToggle} ${
                isDropdownActive("/resources") ? classes.activeLink : ""
              }`}
              onClick={closeMenu}
            >
              Resources <span className={classes.dropdownIndicator}>▼</span>
            </Link>
            <div className={classes.dropdownMenu}>
              <Link to="/news-page" onClick={closeMenu}>
                News
              </Link>
              <Link to="/event" onClick={closeMenu}>
                Event
              </Link>
              <Link to="/notices" onClick={closeMenu}>
                Notices{" "}
              </Link>
              <Link to="/article" onClick={closeMenu}>
                Article{" "}
              </Link>
            </div>
          </div>
          {/* Additional Links */}
          <Link
            to="/gallery"
            className={isActive("/gallery") ? classes.activeLink : ""}
            onClick={closeMenu}
          >
            Gallery
          </Link>
          <Link
            to="/addmission"
            className={isActive("/admission") ? classes.activeLink : ""}
            onClick={closeMenu}
          >
            Admission
          </Link>
          <Link
            to="/contactus"
            className={isActive("/contactus") ? classes.activeLink : ""}
            onClick={closeMenu}
          >
            Contact Us
          </Link>
        </div>


        
      </nav>
      <div className={classes.newsUpdates}>
        <span>News Updates: </span>
        <div className={classes.scrollText}>
          <p>
            Important Notice: Admission at Rajagiri is managed by the admissions
            office. | Upcoming events: Faculty Development Program, ICSD
            Biennial Conference.
          </p>
        </div>
        <Link to="/notices">
      <button className={classes.viewallbtn}>View All</button>
    </Link>
      </div>
    </header>
  );
};

export default Header1;
