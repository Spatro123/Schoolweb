import React from "react";
import classes from "./Research.module.css";
import schoolImage1 from "./old-masters-picture-gallery-dresden-night.jpg";
import schoolImage2 from "./Graduatio.jpg";
import image1 from "./img3.jpg";
import image2 from "./img4.jpg";
import people from "./prof.png";
import ppl from "./Baishali.jpeg";
import ppl1 from "./Sritikirti.jpeg"
import ppl2 from "./Himansu.jpeg"
import ppl3 from "./Anjan.jpeg"
import ppl4 from "./Prabhu.jpeg"

const ResearchPage = () => {
  return (
    <div className={classes.researchContainer}>
      <div className={classes.background}>
        <div className={classes.circle}></div>
        <div className={classes.circle}></div>
        <div className={classes.triangle}></div>
        <div className={classes.square}></div>
      </div>

      <header className={classes.header}>
        <h1>Research and Development</h1>
        <p>Exploring innovation and excellence at Essential </p>
      </header>

      <section className={classes.researchOverview}>
        <h2>Overview</h2>
        <div className={classes.cardContainer}>
          <div className={classes.card}>
            <h3>Infrastructure</h3>
            <p>1 lakh sqm advanced research center with state-of-the-art labs.</p>
          </div>
          <div className={classes.card}>
            <h3>Collaboration</h3>
            <p>Centers of excellence established with industry partnerships.</p>
          </div>
          <div className={classes.card}>
            <h3>Support</h3>
            <p>Grants from national and international funding agencies.</p>
          </div>
        </div>
      </section>
      <section className={classes.peopleSection}>
        <h2>People</h2>
        <div className={classes.cardContainer}>
          <div className={classes.card}>
            <img src={ppl} alt="Prof. Mrutyunjay Suar" className={classes.profImage} />
            <h3>Baishali Pattnaik</h3>
            <p>Chemistry</p>
            {/* <p>Email: msuar@kiitbiotech.ac.in</p> */}
          </div>
          <div className={classes.card}>
            <img src={ppl1} alt="Prof. Ashok K. Sahoo" className={classes.profImage} />
            <h3>Sritikirti Mishra</h3>
            <p>Biology</p>
            {/* <p>Email: asahoofme@kiit.ac.in</p> */}
          </div>
          <div className={classes.card}>
            <img src={ppl2} alt="Dr. Gopal Chandra Kundu" className={classes.profImage} />
            <h3>Himansu Sekhar Pradhan</h3>
            <p>Mathematics & Physics</p>
            {/* <p>Email: gopalc.kundu@kiit.ac.in</p> */}
          </div>
          <div className={classes.card}>
            <img src={ppl3} alt="Dr. Gopal Chandra Kundu" className={classes.profImage} />
            <h3>Anjan Satapathy</h3>
            <p>Mathematics</p>
            {/* <p>Email: gopalc.kundu@kiit.ac.in</p> */}
          </div>
          <div className={classes.card}>
            <img src={ppl4} alt="Dr. Gopal Chandra Kundu" className={classes.profImage} />
            <h3>Prabhu Prasad Natak</h3>
            <p>Mathematics</p>
            {/* <p>Email: gopalc.kundu@kiit.ac.in</p> */}
          </div>
        </div>
      </section>

      <section className={classes.researchMetrics}>
        <h2>Research Metrics</h2>
        <div className={classes.metrics}>
          <div className={classes.metricCard}>
            <h3>13,636+</h3>
            <p>Research Publications (Scopus)</p>
          </div>
          <div className={classes.metricCard}>
            <h3>8404+</h3>
            <p>Research Publications (Web of Science)</p>
          </div>
          <div className={classes.metricCard}>
            <h3>810+</h3>
            <p>Filed Patents</p>
          </div>
        </div>
      </section>

      <section className={classes.gallery}>
        <h2>Labrotory</h2>
        <div className={classes.imageGrid}>
          <img src={schoolImage1} alt="School 1" />
          <img src={schoolImage2} alt="School 2" />
          <img src={image1} alt="Research 1" />
          <img src={image2} alt="Research 2" />
          <img src={image2} alt="Professors" />
        </div>
      </section>
    </div>
  );
};

export default ResearchPage;
