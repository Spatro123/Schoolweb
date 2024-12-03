import React from "react";
import classes from "./Eventprice.module.css";

const EventCard = ({ title, price, date, location, image }) => {
  return (
    <div className={classes.eventCard}>
      <img src={image} alt={title} className={classes.cardImage} />
      <div className={classes.cardDetails}>
        <div className={classes.cardHeaders}>
          <p className={classes.cardDate}>{date}</p>
          <p className={classes.cardPrice}>{price}</p>
        </div>
        <h3 className={classes.cardTitle}>{title}</h3>
        <p className={classes.cardLocation}>{location}</p>
      </div>
    </div>
  );
};

export default EventCard;
