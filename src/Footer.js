import React from 'react';
import classes from './Footer.module.css';
import facebook from './facebook (2).png';
import twitter from './social-media (3).png';
import youtube from './youtube.png';
import linkedin from './linkedin.png';
import instagram from './instagram (1).png';
import location from './location.png';
import call from './phone.png';
import mail from './mail (2).png';
import feedback from './review.png';
import logo from './etclogo.png';

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.container}>
        {/* Logo and description */}
        <div className={classes.section1}>
          <img src={logo}className={classes.logoImage} />
          <p className={classes.description}>
            Founded in 2017, Bhubaneswar. We celebrate every child’s voice, nurture every idea, and fuel every child’s dream.
          </p>
        </div>

        {/* Useful Links */}
        <div className={classes.section}>
          <h3 className={classes.heading}>Useful Links</h3>
          <ul>
            <li><a href="/about">About</a></li>
            <li><a href="/admissions">Admission 2025-26</a></li>
            <li><a href="/events">Event Library</a></li>
            <li><a href="/pay-fee">Pay Fee</a></li>
            <li><a href="/career">Career</a></li>
            <li><a href="/contact">Reach Us</a></li>
          </ul>
        </div>

        {/* Important Links */}
        <div className={classes.section}>
          <h3 className={classes.heading}>Important Links</h3>
          <ul>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/newsletter">Newsletter</a></li>
            <li><a href="/alumni">Alumni</a></li>
            <li><a href="/privacy-policy">Privacy Policy</a></li>
            <li><a href="/terms">Terms of Use</a></li>
          </ul>
        </div>

        {/* Subscribe and social icons */}
        <div className={classes.section}>
          <h3 className={classes.heading}>Subscribe Now</h3>
          <p>Don’t miss our future updates! Get Subscribed Today!</p>
          <div className={classes.subscribe}>
            <input type="email" placeholder="Your mail here" />
            <button>
              <img src={mail} alt="Subscribe" className={classes.icon} />
            </button>
          </div>
          <div className={classes.socialIcons}>
            <a href="https://facebook.com"><img src={facebook} alt="Facebook" className={classes.icon} /></a>
            <a href="https://instagram.com"><img src={instagram} alt="Instagram" className={classes.icon} /></a>
            <a href="https://twitter.com"><img src={twitter} alt="Twitter" className={classes.icon} /></a>
            <a href="https://youtube.com"><img src={youtube} alt="YouTube" className={classes.icon} /></a>
            <a href="https://linkedin.com"><img src={linkedin} alt="LinkedIn" className={classes.icon} /></a>
          </div>
        </div>
      </div>

      <div className={classes.contactInfo}>
        <div className={classes.contact}>
          <img src={location} alt="Location" className={classes.contactIcon} />
          <p>K6, Kalinga Vihar, Odisha, India</p>
        </div>
        <div className={classes.contact}>
          <img src={call} alt="Phone" className={classes.contactIcon} />
          <p>+91-7848026406</p>
          <p>+91-9078103676</p>
        </div>
        <div className={classes.contact}>
          <img src={feedback} alt="Feedback" className={classes.contactIcon} />
          <p>info@etclasses.com</p>
        </div>
      </div>

      <div className={classes.bottomBar}>
        <p>©2022 - Essential classes. All Rights Reserved.</p>
        <p>Powered by DiracAI</p>
      </div>
    </footer>
  );
};

export default Footer;
