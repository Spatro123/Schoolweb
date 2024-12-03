import React from "react";
import classes from "./Research.module.css";
import schoolImage1 from "./old-masters-picture-gallery-dresden-night.jpg";
import schoolImage2 from "./Graduatio.jpg";
import image1 from "./img3.jpg";
import image2 from "./img4.jpg";
import people from "./prof.png";

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
            <img src={people} alt="Prof. Mrutyunjay Suar" className={classes.profImage} />
            <h3>Prof. Mrutyunjay Suar</h3>
            <p>Director General R&D and Innovation</p>
            <p>Email: msuar@kiitbiotech.ac.in</p>
          </div>
          <div className={classes.card}>
            <img src={people} alt="Prof. Ashok K. Sahoo" className={classes.profImage} />
            <h3>Prof. Ashok K. Sahoo</h3>
            <p>Director, R&D Technology</p>
            <p>Email: asahoofme@kiit.ac.in</p>
          </div>
          <div className={classes.card}>
            <img src={people} alt="Dr. Gopal Chandra Kundu" className={classes.profImage} />
            <h3>Dr. Gopal Chandra Kundu</h3>
            <p>Director, R&D</p>
            <p>Email: gopalc.kundu@kiit.ac.in</p>
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
