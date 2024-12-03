import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import classes from "./Header.module.css";
import logo from "./etclogo.png";
import account from "./account.png";
import facebook from "./facebookicon.png";
import twitter from "./twittericon.png";
import youtube from "./youtubeicon.png";
import linkedin from "./linkedinicon.png";
import instagram from "./instagramicon.png";
import contact from "./phone.png";
import mail from "./mail (2).png";
function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActive = (path) => location.pathname === path;
  const isDropdownActive = (basePath) => location.pathname.startsWith(basePath);

  return (
    <header className={classes.header}>
      <div className={classes.topbar}>
        <div className={classes.headcontent}>
          <div className={classes.contact}>
            <img src={contact} alt="Contact Icon" className={classes.icon} />
            982828220
          </div>
          <div className={classes.mail}>
            <img src={mail} alt="Mail Icon" className={classes.icon} />
            info@etc.com
          </div>
          {/* Uncomment these if needed */}
          {/* 
  <Link
    to="/news-page"
    className={isActive("/news-page") ? classes.activeLink : ""}
  >
    News{" "}
  </Link>
  <Link
    to="/article"
    className={isActive("/article") ? classes.activeLink : ""}
  >
    Article{" "}
  </Link>
  <Link
    to="/notices"
    className={isActive("/notices") ? classes.activeLink : ""}
  >
    Notices{" "}
  </Link> 
  */}
        </div>

        <div className={classes.headerlinks}>
          <div className={classes.icons}>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={facebook}
                alt="Facebook"
                className={classes.socialIcon}
              />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={linkedin}
                alt="LinkedIn"
                className={classes.socialIcon}
              />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={instagram}
                alt="Instagram"
                className={classes.socialIcon}
              />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={twitter} alt="Twitter" className={classes.socialIcon} />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={youtube} alt="YouTube" className={classes.socialIcon} />
            </a>
          </div>
          <div className={classes.dasho}>
            <img src={account} alt="Profile" className={classes.account} />
            <a
              href="https://dashoapp.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Login to Dasho
            </a>
          </div>
        </div>
      </div>

      <nav className={classes.navbar}>
        <div className={classes.logoContainer}>
          <img src={logo} alt="Logo" className={classes.logo} />
          <div className={classes.name}>Essential Classes</div>
        </div>

        <div className={classes.hamburger} onClick={toggleMenu}>
          <div className={classes.hamburgerLine}></div>
          <div className={classes.hamburgerLine}></div>
          <div className={classes.hamburgerLine}></div>
        </div>

        <div
          className={`${classes.navList} ${isMenuOpen ? classes.active : ""}`}
        >
          <Link
            to="/"
            className={isActive("/") ? classes.activeLink : ""}
            onClick={closeMenu}
          >
            Home
          </Link>

          {/* About Dropdown */}
          <div className={classes.dropdown}>
            <Link
              to="/page2"
              className={`${classes.dropdownToggle} ${
                isDropdownActive("/page2") ? classes.activeLink : ""
              }`}
              onClick={closeMenu}
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

          <div className={classes.dropdown}>
            <Link
              to="/academicpage"
              className={`${classes.dropdownToggle} ${
                isDropdownActive("/academicpage") ? classes.activeLink : ""
              }`}
              onClick={closeMenu}
            >
              Academics <span className={classes.dropdownIndicator}>▼</span>
            </Link>
            <div className={classes.dropdownMenu}>
              <Link to="/academicprograms" onClick={closeMenu}>
                AcademicPrograms
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
                Word from parents
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
                isDropdownActive("/academicpage") ? classes.activeLink : ""
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

          <Link
            to="/gallery"
            className={isActive("/gallery") ? classes.activeLink : ""}
            onClick={closeMenu}
          >
            Gallery
          </Link>
          <Link
            to="/addmission"
            className={isActive("/addmission") ? classes.activeLink : ""}
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
      </div>
    </header>
  );
}

export default Header;
