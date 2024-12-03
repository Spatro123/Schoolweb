import React from "react";
import classes from "./Wordfromfounder.module.css";
import image from "./Trushan.png"; 

const WelcomeCard = () => {
  return (
    <div className={classes.container}>
      <div className={classes.imageContainer}>
        <img src={image} alt="Founder" className={classes.image} />
      </div>
      <div className={classes.textContainer}>
        <h1 className={classes.title}>Founder</h1>
        {/* Founder Info Block */}
        <div className={classes.founderInfo}>
          <h2 className={classes.founderName}>TrushanK Lohar</h2>
          <p className={classes.founderQualification}>B.Tech in Computer Science</p>
          <p className={classes.founderAwards}>
            <strong>Awards & Recognition:</strong> Best Innovator 2023, Top 10 Tech Leaders
          </p>
          <div className={classes.socialLinks}>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={classes.socialIcon}>LinkedIn</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className={classes.socialIcon}>Twitter</a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className={classes.socialIcon}>Facebook</a>
          </div>
        </div>
        {/* Message from the Founder */}
        <div className={classes.messageContainer}>
          <h3>Message from the Founder</h3>
          <p className={classes.description}>
            EProf Trushank Lohar life story reads like a powerful saga of grit, determination, and social responsibility. Born and brought up in poverty in a remote village in Odisha,  
             a struggle for food and education for 15 long years. However, he persevered, and at the age of 22, joined teaching. At 25, he embarked on a journey that would change his own life, and the lives of thousands of people.
             With just Rs 5000 in his pocket, he started this Institute  in two rented houses.
          </p>
        </div>
        <p className={classes.credit}>
          Images from <a href="https://freepik.com" target="_blank" rel="noopener noreferrer">Freepik</a>
        </p>
        <button className={classes.button}>Learn More</button>
      </div>
    </div>
  );
};

export default WelcomeCard;
