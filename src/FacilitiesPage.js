import React from 'react';
import classes from './FacilitiesPage.module.css';
import transportImage from './schoolbus.jpg';
import tableTennisImage from './tabletennis.jpg';
import basketballImage from './basketball.jpg';
import badmintonImage from './badminton.jpg';
import computerLabImage from './computerlab.jpg';
import fireSafetyImage from './firesafety.jpg';
import chemistryLabImage from './chemistrylab.jpg';
import physicsLabImage from './physicslab.jpg';
import affiliationLogo from './orissalogo.png';

const FacilitiesPage = () => {
  return (
    <div className={classes.facilitiesPage}>
      <section className={classes.headerSection}>
        <h2>
          OUR <span className={classes.highlight}>FACILITIES</span>
        </h2>
        <hr />
      </section>

      <div className={classes.facilitiesGrid}>
        <div className={classes.facilityCard}>
          <img src={transportImage} alt="Transportation" />
          <h3>Transportation</h3>
          <p>Specially designed buses with GPS tracking facility are provided by Ruchika School.</p>
        </div>

        <div className={classes.facilityCard}>
          <img src={tableTennisImage} alt="Table Tennis" />
          <h3>Table Tennis</h3>
          <p>With sports and games hours allotted every day, the students are encouraged to engage in table tennis.</p>
        </div>

        <div className={classes.facilityCard}>
          <img src={basketballImage} alt="Basketball" />
          <h3>Basketball</h3>
          <p>With sports and games hours allotted every day, the students are encouraged to engage in basketball.</p>
        </div>

        <div className={classes.facilityCard}>
          <img src={badmintonImage} alt="Badminton" />
          <h3>Badminton</h3>
          <p>With sports and games hours allotted every day, the students are encouraged to engage in badminton.</p>
        </div>

        <div className={classes.facilityCard}>
          <img src={computerLabImage} alt="Computer Lab" />
          <h3>Computer Lab</h3>
          <p>We have a well-furnished computer lab for students to facilitate practical learning.</p>
        </div>

        <div className={classes.facilityCard}>
          <img src={fireSafetyImage} alt="Fire Safety" />
          <h3>Fire Safety</h3>
          <p>We maintain equipment for fire safety. Student safety is our first priority.</p>
        </div>

        <div className={classes.facilityCard}>
          <img src={chemistryLabImage} alt="Chemistry Lab" />
          <h3>Chemistry Lab</h3>
          <p>Well-equipped chemistry laboratory of international standards for practical learning.</p>
        </div>

        <div className={classes.facilityCard}>
          <img src={physicsLabImage} alt="Physics Lab" />
          <h3>Physics Lab</h3>
          <p>Well-equipped physics laboratory of international standards for practical learning.</p>
        </div>
      </div>

      <section className={classes.affiliationSection}>
        <h2>
          OUR <span className={classes.highlight}>AFFILIATION</span>
        </h2>
        <img src={affiliationLogo} alt="Affiliation Logo" />
        <p>
          The school has permanent affiliation to the Council for Indian School Certificate Examination (CISCE),
          New Delhi. It is recognized but not aided by the Education Department or the State Government of Orissa.
        </p>
      </section>
    </div>
  );
};

export default FacilitiesPage;
