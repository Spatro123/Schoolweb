import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Contactus.module.css';
import img from './cn.png';

function ContactForm() {
  return (
    <div className={classes.contactcontainer}>
      <form className={classes.contactform}>
        <h2>Get in touch</h2>
        <p>Our friendly team would love to hear from you</p>

        <div className={classes.formgroup}>
          <div className={classes.formfield}>
            <label>First name</label>
            <input type="text" placeholder="First name" required />
          </div>
          <div className={classes.formfield}>
            <label>Last name</label>
            <input type="text" placeholder="Last name" required />
          </div>
        </div>

        <div className={classes.formfield}>
          <label>Email</label>
          <input type="email" placeholder="you@company.com" required />
        </div>

        <div className={classes.formfield}>
          <label>Phone number</label>
          <select>
            <option>IND</option>
            {/* <option>US</option>
            <option>ENG</option> */}
          </select>
          <input type="tel" placeholder="+91 " required />
        </div>

        <div className={classes.formfield}>
          <label>Message</label>
          <textarea placeholder="Your message" required></textarea>
        </div>

        <div className={classes.formcheckbox}>
          <input type="checkbox" required />
          <label>
            You agree to our friendly <Link to="/privacypolicy">privacy policy</Link>.
          </label>
        </div>

        <button type="submit">Send message</button>
      </form>

      <div className={classes.contactimage}>
        <img src={img} alt="Curology products" />
      </div>
    </div>
  );
}

export default ContactForm;
