import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import { Link } from 'react-router-dom';
import classes from './Contactus.module.css';
import img from './cn.png';

function ContactForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
  
    emailjs.sendForm(
      'service_7v9x9b9', // Replace with your actual Service ID
      'template_bci4y9a', // Your Template ID
      form.current,
      {
        publicKey: 'TZ8fObVP56AJd44Dr', // Your Public Key
      }
    )
    .then(() => {
      alert('Message sent successfully!');
      form.current.reset();
    }, (error) => {
      alert('Failed to send the message, please try again.');
      console.error('EmailJS Error:', error);
    });
  };
  

  return (
    <div className={classes.contactcontainer}>
      <form ref={form} onSubmit={sendEmail} className={classes.contactform}>
        <h2>Get in touch</h2>
        <p>Our friendly team would love to hear from you</p>

        <div className={classes.formgroup}>
          <div className={classes.formfield}>
            <label>First name</label>
            <input type="text" name="first_name" placeholder="First name" required />
          </div>
          <div className={classes.formfield}>
            <label>Last name</label>
            <input type="text" name="last_name" placeholder="Last name" required />
          </div>
        </div>

        <div className={classes.formfield}>
          <label>Email</label>
          <input type="email" name="email" placeholder="you@company.com" required />
        </div>

        <div className={classes.formfield}>
          <label>Phone number</label>
          <select name="country_code">
            <option value="+91">IND</option>
            {/* Add other country codes as needed */}
          </select>
          <input type="tel" name="phone" placeholder="Your phone number" required />
        </div>

        <div className={classes.formfield}>
          <label>Message</label>
          <textarea name="message" placeholder="Your message" required></textarea>
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
