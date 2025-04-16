import React from "react";
import classes from "./Wordfromfounder.module.css";
import image from "./jog.png"; 

const WelcomeCard = () => {
  return (
    <div className={classes.container}>
      <div className={classes.imageContainer}>
        <img src={image} alt="Founder" className={classes.image} />
      </div>
      <div className={classes.textContainer}>
        <h1 className={classes.title}>Founder</h1>
        <div className={classes.founderInfo}>
          <h2 className={classes.founderName}>Jogendra Das</h2>
          <p className={classes.founderQualification}>MA in English
          PGDTE  , English Language Teaching Institute (ELTI), Bhubaneswar</p>
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
            I Really feel privileged to share the objective with which Essential Tutorial Classes (ETC) came into being. We, at etc, are constantly striking to foster an environmental where learning flourishes naturally .
            We believe in the prospects of education that enable the young minds to shape and cope with the changing scenario and assert themselves by exploring  the range of their knowledge and competence consistantly . 
            We encourage the young minds to develop anallytical ben of mind , deliver deep into the concepts , become creative and confident by utiliation their potential to the zenith . We do not restrict the young minds by imposing learning but develop the learning aptitute.
            There in we different from other working in this sphere.  
          </p>
        </div>
        {/* <p className={classes.credit}>
          Images from <a href="https://freepik.com" target="_blank" rel="noopener noreferrer">Freepik</a>
        </p> */}
        <button className={classes.button}>Learn More</button>
      </div>
    </div>
  );
};

export default WelcomeCard;
