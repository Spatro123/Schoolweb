import React from "react";
import classes from "./Card.module.css";

function App() {
  return (
    <div className={classes.wrapper}>
      <div className={classes.circularFrame}></div>
      <div className={classes.cardContainer}>
        <div className={`${classes.card} ${classes.orange}`}>
          <div className={classes.icon}>
            <i className="fas fa-plug"></i>
          </div>
          <p className={classes.text}>
            <strong>1500000 kWh/year</strong> <br /> Renewable Energy Produced
          </p>
        </div>

        <div className={`${classes.card} ${classes.blue}`}>
          <div className={classes.icon}>
            <i className="fas fa-leaf"></i>
          </div>
          <p className={classes.text}>Best Energy Efficient Institution</p>
        </div>

        <div className={`${classes.card} ${classes.teal}`}>
          <div className={classes.icon}>
            <i className="fas fa-car"></i>
          </div>
          <p className={classes.text}>
            <strong>100% zero emission</strong> <br /> vehicles used for transport
          </p>
        </div>

        <div className={`${classes.card} ${classes.grey}`}>
          <div className={classes.icon}>
            <i className="fas fa-recycle"></i>
          </div>
          <p className={classes.text}>
            <strong>2000 kg/day</strong> <br /> of waste converted to bio-gas
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
