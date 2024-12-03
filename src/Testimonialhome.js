import React from "react";
import classes from "./Testimonialhome.module.css";
import profileImage from "./boy.png"; 

const Testimonial = () => {
  return (
    <div className={classes.testimonialcontainer}>
      <div className={classes.testimonialheader}>
        <div className={classes.testimonialquoteicon}>&#8220;</div>
        <h2>
          <span className={classes.highlight}>WHAT</span> PARENTS SAY...
        </h2>
        <div className={classes.testimonialdivider}>
          <div className={classes.line}></div>
          <div className={classes.highlightbar}></div>
          <div className={classes.line}></div>
        </div>
      </div>
      <div className={classes.testimonialcontent}>
        <img className={classes.testimonialavatar} src={profileImage} alt="Parent" />
        <h3>Pravati Acharya</h3>
        <p className={classes.testimonialrole}>Parent</p>
        <div className={classes.testimonialstars}>
          <span>⭐</span>
          <span>⭐</span>
          <span>⭐</span>
          <span>⭐</span>
          <span>⭐</span>
        </div>
        <p className={classes.testimonialtext}>
          I am Pravati Acharya, parent of Ashlesa Acharya of class IX. After the
          birth of my daughter, Ashlesa, the biggest hurdle for me was to find a
          suitable school for my little one. My association, as a parent, with
          Ruchika since the last 12 years has been wholesome. Ruchika provides
          an holistic environment for the overall growth of my child. The
          student-teacher ratio is well maintained according to the
          recommendations of Right to Education Act, 2009. Teachers are
          cordial, encouraging and engage the pupils in various activities.
          Sports, debate, and dance classes are an add on. Ruchika even
          provides a ray of hope for the differently abled students. As a
          parent, I feel relieved that Ruchika takes care of post-pandemic
          sanitation needs. Thank you.
        </p>
      </div>
    </div>
  );
};

export default Testimonial;

