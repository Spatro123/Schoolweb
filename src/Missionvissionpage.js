import React from "react";
import classes from "./Missionvision.module.css";
import missionImg1 from "./img3.jpg"; 
import missionImg2 from "./img4.jpg";
import missionImg3 from "./pic2.jpg";
import missionImg4 from "./physicslab.jpg";
import visionImg from "./photo.png";

const MissionVision = () => {
  return (
    <div className={classes.missionvision}>
      <section className={classes.sectionmission}>
        <h2>
          Our <span className={classes.highlight}>Mission</span>
        </h2>
        <p>
          Receiving inputs & then replying to clients with updates continuously
          are the strong process that each & every team member perceives as a
          top priority task. Symbolsense never hesitates to deal with tons of
          emails for verification.
        </p>
        <div className={classes.imagegrid}>
          <img src={missionImg1} alt="Mission 1" />
          <img src={missionImg2} alt="Mission 2" />
          <img src={missionImg3} alt="Mission 3" />
          <img src={missionImg4} alt="Mission 4" />
        </div>
      </section>

      <section className={classes.sectionvision}>
        <h2>
          Our <span className={classes.highlight}>Vision</span>
        </h2>
        <p>
          Being a hassle-free logo design service provider is our consistent
          goal always. Every client is an opportunity for us to create another
          milestone beyond the previous milestone achieved by us. So Symbolsense
          and the team are well concerned each moment to be a reason for a
          satisfied client's smile.
        </p>
        <div className={classes.visionimage}>
          <img src={visionImg} alt="Vision" />
        </div>
      </section>

      <section className={classes.sectionwhyus}>
        <h2>
          Why you <span className={classes.highlight}>should choose us</span>
        </h2>
        <div className={classes.features}>
          <div className={classes.feature}>
            <h3>Completely customizable pure vector designs</h3>
            <p>
              Adipiscing nisi enim gravida enim eu adipiscing sagittis
              scelerisque augue null massa aliquet finibus nullam erat.
            </p>
          </div>
          <div className={classes.feature}>
            <h3>Our designers stop at nothing less than perfection</h3>
            <p>
              Adipiscing nisi enim gravida enim eu adipiscing sagittis
              scelerisque augue null massa aliquet finibus nullam erat.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MissionVision;
