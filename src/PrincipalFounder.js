import React from "react";
import classes from "./PrincipalFounder.module.css";
import principalImage from "./Trushan.png";
import founderImage from "./Trushan.png";

const PrincipalFounder = () => {
  const people = [
    {
      name: "Dr. Tribhuban Swami",
      designation: "Principal",
      message:
        "Welcome to our school! Our mission is to inspire and empower our students to achieve their full potential and become leaders of tomorrow.",
      image: principalImage,
    },
    {
      name: "Ms. Alka Puraohit",
      designation: "Founder",
      message:
        "As the founder, I am proud to see our vision of excellence in education come to life. We believe in nurturing talent and fostering a love for learning.",
      image: founderImage,
    },
  ];

  return (
    <div className={classes.container}>
      {people.map((person, index) => (
        <div key={index} className={classes.card}>
          <div className={classes.imageContainer}>
            <img src={person.image} alt={person.name} className={classes.image} />
            <h2 className={classes.name}>{person.name}</h2>
            <h3 className={classes.designation}>{person.designation}</h3>
          </div>
          <div className={classes.textContainer}>
            <p className={classes.message}>{person.message}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PrincipalFounder;
