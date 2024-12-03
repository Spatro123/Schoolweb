import React from 'react';
import classes from './Recognitions.module.css';
import timesLogo from './award2024.png';
import forbesLogo from './award2.png';
import indiaTodayLogo from './award3.png';
import fortuneLogo from './award4.png';

const Recognitions = () => {
  return (
    <div className={classes.recognitionscontainer}>
      <h2>RECOGNITIONS AND RANKINGS</h2>
      <div className={classes.awards}>
        <div className={classes.award}>
        
          <img src={timesLogo} alt="Times Logo" className={classes.awardlogo} />
        
        </div>
        <div className={classes.award}>
     
          <img src={forbesLogo} alt="Forbes Logo" className={classes.awardlogo} />
       
        </div>
        <div className={classes.award}>
          {/* <p>Titled as the</p>
          <h3>"Reformers of Indian Education"</h3> */}
          <img
            src={indiaTodayLogo}
            alt="India Today Logo"
            className={classes.awardlogo}
          />
          {/* <p>BY India Today Conclave</p> */}
        </div>
        <div className={classes.award}>
          {/* <p>Featured In</p>
          <h3>"Future 50 Schools Shaping Success"</h3> */}
          <img src={fortuneLogo} alt="Fortune Logo" className={classes.awardlogo} />
          {/* <p>BY Fortune</p> */}
        </div>
      </div>
      <button className={classes.viewmorebutton}>VIEW MORE</button>
    </div>
  );
};

export default Recognitions;
