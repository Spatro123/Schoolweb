// File: src/App.js
import React from "react";
import classes from "./Result.module.css";
import StudentCard from "./Studentcard";

const App = () => {
  // Data for students
  const classXStudents = [
    { name: "AYUSH", percentage: "99%" },
    { name: "ANKIT", percentage: "99%" },
    { name: "ASHIS", percentage: "98.8%" },
    { name: "SAIRUP", percentage: "98%" },
    { name: "TANNISHTHA", percentage: "98%" },
    { name: "ANSUMAN", percentage: "97.8%" },
    { name: "JIGYANSHA", percentage: "97.8%" },
    { name: "SASWAT", percentage: "97.4%" },
    { name: "SASWATI", percentage: "97.4%" },
    { name: "JIGYANSU", percentage: "97.4%" },
  ];

  const classXIIStudents = [
    { name: "RONIT", percentage: "99.2%" },
    { name: "SWAYAMSHREE", percentage: "98.6%" },
    { name: "DIVYAANSHU", percentage: "97.4%" },
    { name: "SATYENDU", percentage: "97.4%" },
    { name: "ANUPRASH", percentage: "97%" },
    { name: "SUNISTA", percentage: "97%" },
    { name: "DEVANSHI", percentage: "96.8%" },
    { name: "ANIRBAN", percentage: "96.2%" },
    { name: "SAI KRISHNA", percentage: "96.2%" },
  ];

  return (
    <div className={classes.app}>
      <header className={classes.header}>
        <h1>Numbers That Inspire, Excellence That Endures</h1>
        <h2>100% Result in Class X & Class XII 2024</h2>
      </header>

      <section className={classes.section}>
        <h2>Class X</h2>
        <div className={classes.studentgrid}>
          {classXStudents.map((student, index) => (
            <StudentCard key={index} student={student} />
          ))}
        </div>
      </section>

      <section className={classes.section}>
        <h2>Class XII</h2>
        <div className={classes.studentgrid}>
          {classXIIStudents.map((student, index) => (
            <StudentCard key={index} student={student} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default App;
