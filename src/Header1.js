// import React, { useState } from "react";
// import { Link, useLocation } from "react-router-dom";
// import classes from "./Header1.module.css";
// import logo from "./etclogo.png";
// import facebook from "./facebook (4).png";
// import twitter from "./twitter (2).png";
// import youtube from "./video.png";
// import linkedin from "./linkedin2.png";
// import instagram from "./instagram (6).png";
// import contact from "./phone.png";
// import mail from "./mail (2).png";
// import account from "./login.png";

// const Header1 = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [activeDropdown, setActiveDropdown] = useState(null);
//   const location = useLocation();

//   const toggleMenu = () => setIsMenuOpen((prev) => !prev);
//   const closeMenu = () => {
//     setIsMenuOpen(false);
//     setActiveDropdown(null);
//   };

//   const handleMouseEnter = (dropdownName) => {
//     setActiveDropdown(dropdownName);
//   };

//   const handleMouseLeave = () => {
//     setActiveDropdown(null);
//   };

//   const isActive = (path) => location.pathname === path;
//   const isDropdownActive = (basePath) =>
//     location.pathname.startsWith(basePath);

//   return (
//     <header className={classes.navbar}>
//       {/* Topbar */}
//       <div className={classes.topbar}>
//         <div className={classes.contactInfo}>
//           <div className={classes.info}>
//             <img src={contact} alt="Contact" className={classes.icon} />
//             <span>+91-9078103676</span>
//           </div>
//           <div className={classes.info}>
//             <img src={mail} alt="Mail" className={classes.icon} />
//             <span>info@etclasses.com</span>
//           </div>
//         </div>
//         <div className={classes.topheadright}>
//           <div className={classes.socialIcons}>
//             <a
//               href="https://www.facebook.com/profile.php?id=61575073175798"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <img src={facebook} alt="Facebook" className={classes.icon} />
//             </a>
//             <img src={twitter} alt="Twitter" className={classes.icon} />
//             <img src={linkedin} alt="LinkedIn" className={classes.icon} />
//             <a
//               href="https://www.instagram.com/et_classes?utm_source=qr&igsh=aWlmbWtwbms1bTQ3"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <img src={instagram} alt="Instagram" className={classes.icon} />
//             </a>
//             <a
//               href="https://youtube.com/@etcmedia?si=QUWoIlAOn9frtEtm"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <img src={youtube} alt="YouTube" className={classes.icon} />
//             </a>
//           </div>
//         </div>
//       </div>

//       {/* Navbar Container */}
//       <div className={classes.navbarcontainer}>
//         <div className={classes.navbarLeft}>
//           <div className={classes.hamburger} onClick={toggleMenu}>
//             <div className={classes.hamburgerLine}></div>
//             <div className={classes.hamburgerLine}></div>
//             <div className={classes.hamburgerLine}></div>
//           </div>

//           <Link to="/" className={classes.navbarlogo} onClick={closeMenu}>
//             <img
//               src={logo}
//               alt="Institute Logo"
//               className={classes.navbarlogoimage}
//             />
//             <div className={classes.navbartitle}>
//               <h1>ESSENTIAL CLASSES</h1>
//               <p>INNOVATE . INSPIRE . EDUCATE</p>
//             </div>
//           </Link>
//         </div>

//         <div className={classes.navbarbuttons}>
//           <button className={classes.btnadmissionbtn}>TAKE ADMISSION</button>
//         </div>
//       </div>

//       {/* Navigation */}
//       <nav className={classes.navList}>
//         {/* <div className={classes.hamburger} onClick={toggleMenu}>
//           <div className={classes.hamburgerLine}></div>
//           <div className={classes.hamburgerLine}></div>
//           <div className={classes.hamburgerLine}></div>
//         </div> */}

//         <div
//           className={`${classes.navListContent} ${
//             isMenuOpen ? classes.active : ""
//           }`}
//         >
        

//           <Link
//             to="/"
//             className={`${classes.navLink} ${
//               isActive("/") ? classes.activeLink : ""
//             }`}
//             onClick={closeMenu}
//           >
//             HOME
//           </Link>

//           <div
//             className={classes.dropdown}
//             onMouseEnter={() => handleMouseEnter("about")}
//             onMouseLeave={handleMouseLeave}
//           >
//             <Link
//               to="/page2"
//               className={`${classes.dropdownToggle} ${
//                 isDropdownActive("/page2") ? classes.activeLink : ""
//               }`}
//             >
//               ABOUT <span className={classes.dropdownIndicator}>▼</span>
//             </Link>
//             {activeDropdown === "about" && (
//               <div className={classes.dropdownMenu}>
//                 <Link to="/missionvission" onClick={closeMenu}>
//                   Mission & Vision
//                 </Link>
//                 <Link to="/welcomecard" onClick={closeMenu}>
//                   About Founder
//                 </Link>
//                 <Link to="/faculty" onClick={closeMenu}>
//                   Our Faculties
//                 </Link>
//               </div>
//             )}
//           </div>

//           <div
//             className={classes.dropdown}
//             onMouseEnter={() => handleMouseEnter("academics")}
//             onMouseLeave={handleMouseLeave}
//           >
//             <Link
//               to="/academicpage"
//               className={`${classes.dropdownToggle} ${
//                 isDropdownActive("/academicpage") ? classes.activeLink : ""
//               }`}
//             >
//               ACADEMICS <span className={classes.dropdownIndicator}>▼</span>
//             </Link>
//             {activeDropdown === "academics" && (
//               <div className={classes.dropdownMenu}>
//                 <Link to="/academicprograms" onClick={closeMenu}>
//                   Academic Programs
//                 </Link>
//                 <Link to="/rulesandregulations" onClick={closeMenu}>
//                   Rules & Regulations
//                 </Link>
//                 <Link to="/event" onClick={closeMenu}>
//                   Event
//                 </Link>
//               </div>
//             )}
//           </div>

//           <Link
//             to="/addmission"
//             className={isActive("/addmission") ? classes.activeLink : ""}
//             onClick={closeMenu}
//           >
//             ADMISSION
//           </Link>

//           <Link
//             to="/notices"
//             className={isActive("/notices") ? classes.activeLink : ""}
//             onClick={closeMenu}
//           >
//             NOTICES
//           </Link>

//           <div className={classes.dropdown}>
//             <Link
//               to="/resources"
//               className={`${classes.dropdownToggle} ${
//                 isDropdownActive("/resources") ? classes.activeLink : ""
//               }`}
//               onClick={closeMenu}
//             >
//               RESOURCES <span className={classes.dropdownIndicator}>▼</span>
//             </Link>
//             <div className={classes.dropdownMenu}>
//               <Link to="/news-page" onClick={closeMenu}>
//                 News
//               </Link>
//               <Link to="/event" onClick={closeMenu}>
//                 Event
//               </Link>
//               <Link to="/article" onClick={closeMenu}>
//                 Article
//               </Link>
//             </div>
//           </div>

//           <Link
//             to="/gallery"
//             className={isActive("/gallery") ? classes.activeLink : ""}
//             onClick={closeMenu}
//           >
//             GALLARY
//           </Link>

//           <Link
//             to="/contactus"
//             className={isActive("/contactus") ? classes.activeLink : ""}
//             onClick={closeMenu}
//           >
//             CONTACT US
//           </Link>
//         </div>
//       </nav>

//       {/* News Update Ticker */}
//       <div className={classes.newsUpdates}>
//         <span>News Updates: </span>
//         <div className={classes.scrollText}>
//           <p>
//             Important Notice: Admission at Essential Tutorials is managed by the
//             admissions office. | Upcoming events: Faculty Development Program,
//             ICSD Biennial Conference.
//           </p>
//         </div>
//         <Link to="/notices">
//           <button className={classes.viewallbtn}>View All</button>
//         </Link>
//       </div>
//     </header>
//   );
// };

// export default Header1;




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
import account from "./login.png";


const Header1 = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
  };

  const handleMouseEnter = (dropdownName) => {
    setActiveDropdown(dropdownName);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  const isActive = (path) => location.pathname === path;
  const isDropdownActive = (basePath) =>
    location.pathname.startsWith(basePath);

  return (
    <header className={classes.navbar}>
      {/* Topbar */}
      <div className={classes.topbar}>
        <div className={classes.contactInfo}>
          <div className={classes.info}>
            <img src={contact || "/placeholder.svg"} alt="Contact" className={classes.icon} />
            <span>+91-9078103676</span>
          </div>
          <div className={classes.info}>
            <img src={mail || "/placeholder.svg"} alt="Mail" className={classes.icon} />
            <span>info@etclasses.com</span>
          </div>
        </div>
        <div className={classes.topheadright}>
          <div className={classes.socialIcons}>
            <a
              href="https://www.facebook.com/profile.php?id=61575073175798"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={facebook || "/placeholder.svg"} alt="Facebook" className={classes.icon} />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={twitter || "/placeholder.svg"} alt="Twitter" className={classes.icon} />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkedin || "/placeholder.svg"} alt="LinkedIn" className={classes.icon} />
            </a>
            <a
              href="https://www.instagram.com/et_classes?utm_source=qr&igsh=aWlmbWtwbms1bTQ3"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={instagram || "/placeholder.svg"} alt="Instagram" className={classes.icon} />
            </a>
            <a
              href="https://youtube.com/@etcmedia?si=QUWoIlAOn9frtEtm"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={youtube || "/placeholder.svg"} alt="YouTube" className={classes.icon} />
            </a>
          </div>
        </div>
      </div>

      {/* Navbar Container */}
      {/* <div className={classes.navbarcontainer}>
        <div className={classes.navbarLeft}>
        

          <Link to="/" className={classes.navbarlogo} onClick={closeMenu}>
            <img
              src={logo || "/placeholder.svg"}
              alt="Institute Logo"
              className={classes.navbarlogoimage}
            />
            <div className={classes.navbartitle}>
              <h1>ESSENTIAL CLASSES</h1>
              <p>INNOVATE . INSPIRE . EDUCATE</p>
            </div>
          </Link>

          <div className={classes.hamburger} onClick={toggleMenu}>
            <div className={classes.hamburgerLine}></div>
            <div className={classes.hamburgerLine}></div>
            <div className={classes.hamburgerLine}></div>
          </div>
        </div>

        <div className={classes.navbarbuttons}>
          <button className={classes.btnadmissionbtn}>TAKE ADMISSION</button>
        </div>
      </div> */}






<div className={classes.navbarcontainer}>
  <div className={classes.navbarLeft}>
    <Link to="/" className={classes.navbarlogo} onClick={closeMenu}>
      <img
        src={logo || "/placeholder.svg"}
        alt="Institute Logo"
        className={classes.navbarlogoimage}
      />
      <div className={classes.navbartitle}>
        <h1>ESSENTIAL TUTORIAL CLASSES</h1>
        <p>CONCEPT CREATIVITY & CONFIDENCE </p>
      </div>
    </Link>
  </div>

  <div className={classes.navbarRight}>
    <div className={classes.navbarbuttons}>
      <Link to="/contactus" className={classes.admissionLink}>
        <button className={classes.btnadmissionbtn}>TAKE ADMISSION</button>
      </Link>
    </div>

    <div className={classes.hamburger} onClick={toggleMenu}>
      <div className={classes.hamburgerLine}></div>
      <div className={classes.hamburgerLine}></div>
      <div className={classes.hamburgerLine}></div>
    </div>
  </div>
</div>




      {/* Navigation */}
      <nav className={classes.navList}>
        <div
          className={`${classes.navListContent} ${
            isMenuOpen ? classes.active : ""
          }`}
        >
          <Link
            to="/"
            className={`${classes.navLink} ${
              isActive("/") ? classes.activeLink : ""
            }`}
            onClick={closeMenu}
          >
            HOME
          </Link>

          <div
            className={classes.dropdown}
            onMouseEnter={() => handleMouseEnter("about")}
            onMouseLeave={handleMouseLeave}
          >
            <Link
              to="/page2"
              className={`${classes.dropdownToggle} ${
                isDropdownActive("/page2") ? classes.activeLink : ""
              }`}
            >
              ABOUT <span className={classes.dropdownIndicator}>▼</span>
            </Link>
            {activeDropdown === "about" && (
              <div className={classes.dropdownMenu}>
                <Link to="/missionvission" onClick={closeMenu}>
                  Mission & Vision
                </Link>
                <Link to="/welcomecard" onClick={closeMenu}>
                  About Founder
                </Link>
                <Link to="/faculty" onClick={closeMenu}>
                  Our Faculties
                </Link>
              </div>
            )}
          </div>

          <div
            className={classes.dropdown}
            onMouseEnter={() => handleMouseEnter("academics")}
            onMouseLeave={handleMouseLeave}
          >
            <Link
              to="/academicpage"
              className={`${classes.dropdownToggle} ${
                isDropdownActive("/academicpage") ? classes.activeLink : ""
              }`}
            >
              ACADEMICS <span className={classes.dropdownIndicator}>▼</span>
            </Link>
            {activeDropdown === "academics" && (
              <div className={classes.dropdownMenu}>
                <Link to="/academicprograms" onClick={closeMenu}>
                  Academic Programs
                </Link>
                <Link to="/rulesandregulations" onClick={closeMenu}>
                  Rules & Regulations
                </Link>
                <Link to="/event" onClick={closeMenu}>
                  Event
                </Link>
              </div>
            )}
          </div>

          <Link
            to="/addmission"
            className={`${classes.navLink} ${
              isActive("/addmission") ? classes.activeLink : ""
            }`}
            onClick={closeMenu}
          >
            ADMISSION
          </Link>

          <Link
            to="/notices"
            className={`${classes.navLink} ${
              isActive("/notices") ? classes.activeLink : ""
            }`}
            onClick={closeMenu}
          >
            NOTICES
          </Link>

          <div
            className={classes.dropdown}
            onMouseEnter={() => handleMouseEnter("resources")}
            onMouseLeave={handleMouseLeave}
          >
            <Link
              to="/resources"
              className={`${classes.dropdownToggle} ${
                isDropdownActive("/resources") ? classes.activeLink : ""
              }`}
            >
              RESOURCES <span className={classes.dropdownIndicator}>▼</span>
            </Link>
            {activeDropdown === "resources" && (
              <div className={classes.dropdownMenu}>
                <Link to="/news-page" onClick={closeMenu}>
                  News
                </Link>
                <Link to="/event" onClick={closeMenu}>
                  Event
                </Link>
                <Link to="/article" onClick={closeMenu}>
                  Article
                </Link>
              </div>
            )}
          </div>

          <Link
            to="/gallery"
            className={`${classes.navLink} ${
              isActive("/gallery") ? classes.activeLink : ""
            }`}
            onClick={closeMenu}
          >
            GALLERY
          </Link>

          <Link
            to="/contactus"
            className={`${classes.navLink} ${
              isActive("/contactus") ? classes.activeLink : ""
            }`}
            onClick={closeMenu}
          >
            CONTACT US
          </Link>
        </div>
      </nav>

      {/* News Update Ticker */}
      <div className={classes.newsUpdates}>
        <span>News Updates: </span>
        <div className={classes.scrollText}>
          <p>
            Important Notice: Admission at Essential Tutorials is managed by the
            admissions office. | Upcoming events: Faculty Development Program,
            ICSD Biennial Conference.
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