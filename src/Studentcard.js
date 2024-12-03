// File: src/StudentCard.js
import React from "react";
import classes from './Result.module.css';
import img from './boy.png'; // Default image

const StudentCard = ({ student }) => {
  return (
    <div className={classes.studentcard}>
      {/* Use the student's image if provided, otherwise use the default image */}
      <img src={student.img || img} alt={student.name} className={classes.studentimage} />
      <div className={classes.studentinfo}>
        <h3>{student.name}</h3>
        <p>{student.percentage}</p>
      </div>
    </div>
  );
};

export default StudentCard;
