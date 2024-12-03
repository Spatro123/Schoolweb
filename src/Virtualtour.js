import React from "react";
import classes from "./Virtualtour.module.css"; 
import Youtube from './youtube.png';
import img from './school.jpg'; 

const App = () => {
  return (
    <div className={classes.container}>
      {/* Left Section */}
      <div className={classes.leftsection}>
        <div className={classes.quote}>Education is the key to unlocking the world, a passport to freedom.

</div>
<div className={classes.subhead}>Dr. APJ Abdul Kalam</div>
      </div>

      {/* Right Section */}
      <div className={classes.rightsection}>
        <div className={classes.imagecontainer}>
          <img
            src={img} 
            alt="Virtual Tour"
            className={classes.tourimage}
          />
          <div className={classes.youtubeicon}>
            <img src={Youtube} alt="YouTube Icon" className={classes.youtubeimage} />
            <p>Click here for a Virtual Tour</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
