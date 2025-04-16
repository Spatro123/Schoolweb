import React from 'react';
import classes from './abouttopage.module.css';
import headerImage from './Banner7.JPG';
import schoolImage1 from './Etpic7.JPG';
import schoolImage2 from './Etoic6.JPG';

const AboutPage = () => {
  return (
    <div className={classes.aboutpage}>
      {/* <header className={classes.aboutheader}>
        <img src={headerImage} alt="About Us Header" className={classes.headerimage} />
        <h1 className={classes.headertitle}>
        </h1>
      </header> */}

      <section className={classes.aboutsection}>
        <h2 className={classes.sectiontitle}>
          OUR <span className={classes.highlight}>STORY</span>
        </h2>

        
        <div className={classes.contentRow}>
          <div className={classes.imageContainer}>
            <img src={schoolImage1} alt="School Image 1" className={classes.curvedImage} />
          </div>
          <div className={classes.textContainer}>
          <strong>"Education Beyond Learning"</strong>
            <p>
           

In an era where educational institutions are rapidly emerging across every corner, a valid question arises—“Why another institute?” The answer lies in our unique approach to education, built on the belief that true learning goes far beyond textbooks and exams. At Essential Tutorial Classes (ETC), we don't just aim to teach—we aim to transform.

            </p>
            <p>
            We recognize that the journey to academic excellence is not just about syllabus completion. In today’s highly competitive and technology-driven world, the pillars of success are:
Concept clarity, Creative thinking, Personal care, Self-confidence, and Smart use of Technology.
And at ETC, we are committed to nurturing all of these in every learner.</p>        
  </div>
        </div>

        <div className={`${classes.contentRow} ${classes.reverseRow}`}>
        <div className={classes.imageContainer}>
            <img src={schoolImage2} alt="School Image 2" className={classes.curvedImage} />
          </div>
          <div className={classes.textContainer}>
            <p>
            We believe that every competitor is a student, but not every student is a competitor. A student studies with the intention of scoring marks, while a competitor learns with a deeper purpose—to grow intellectually, to challenge limits, and to pursue knowledge beyond examinations. Our mission is to instill this competitive mindset in each and every student.            </p>

            <p> <strong>At ETC, our team of experienced and passionate educators focus on: </strong>

Strong Conceptual Foundation: Ensuring students grasp the 'why' behind every topic.

Skill-Based Learning: Encouraging problem-solving, critical thinking, and logical reasoning.

Mentorship & Motivation: Creating a nurturing environment where every student feels guided, valued, and confident.

Technology Integration: Leveraging smart tools and digital platforms for an enhanced learning experience.

Beyond Classroom Support: Providing regular assessments, doubt-clearing sessions, and performance tracking to keep every student on the path to improvement.</p>
            <p> We share a common vision—to develop not just high scorers, but lifelong learners and achievers. The transformation from a regular student to a true competitor begins with the right mindset, guidance, and support—and that’s exactly what we offer at Essential Tutorial Classes.

</p>
          </div>
         
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
