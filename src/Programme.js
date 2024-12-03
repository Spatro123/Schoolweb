import React, { useState } from 'react';
import classes from './Programme.module.css';

const programCategories = {
  UG: [
    "B. Tech in Computer Science & Engineering",
    "B. Tech in Computer Science and Engineering (Artificial Intelligence and Machine Learning)",
    "B. Tech in Computer Science and Engineering (IoT)",
    "B. Tech in Computer Science and Engineering (Data Science)",
    "B. Tech in Computer Science and Technology",
    "B. Tech in Agricultural Engineering",
    "B. Tech in Mechanical Engineering",
    "B. Tech in Biotechnology",
    "B. Tech in Chemical Engineering",
    "B. Tech in Civil Engineering",
    "B. Tech in Electrical Engineering",
    "B. Tech in Electrical and Electronics Engineering",
    "B. Tech in Electronics and Communication Engineering",
    "B. Tech. in Electronics Engineering (VLSI Design and Technology)",
    "B. Tech. in Electronics & Communication (Advanced Communication Technology)",
    "B.Sc. (Hons.) Agriculture",
    "Bachelor of Business Administration (BBA)",
    "Bachelor of Computer Applications (BCA)",
    "B.Sc in Nursing",
  ],
  PG: [
    "Master of Business Administration (MBA)",
    "M. Tech in Computer Science & Engineering",
    "M. Tech in Manufacturing Technology",
    "M. Tech in Heat Power and Thermal Engineering",
    "M. Tech in Machine Design",
    "M. Tech in Biotechnology",
    "M. Tech in Chemical Engineering",
    "M. Tech in Structural Engineering",
    "M. Tech in Construction Technology & Management",
    "M. Tech in Power Electronics",
    "M. Tech in Electronics & Communication Engineering",
    "M. Tech. in Electronics & Communication (Advanced Communication Technology)",
    "M. Tech. in Electronics & Communication (VLSI Design)",
    "Master of Computer Applications (MCA)",
    "M.Sc in Physics",
    "M.Sc in Chemistry",
    "M.Sc in Mathematics",
    "M.Sc in Life Science",
    "M.Sc in Biotechnology",
    "M.A. in English",
    "M.A. in Economics",
  ],
  Doctoral: [
    "Ph.D. in Physics",
    "Ph.D. in Chemistry",
    "Ph.D. in Mathematics",
    "Ph.D. in Biotechnology",
    "Ph.D. in Computer Science and Engineering",
    "Ph.D. in Computer Science and Application",
    "Ph.D. in Mechanical Engineering",
    "Ph.D. in Chemical Engineering",
    "Ph.D. in Electronics & Communication Engineering",
    "Ph.D. in Civil Engineering",
    "Ph.D. in Electrical and Electronics Engineering",
    "Ph.D. in Management",
    "Ph.D. (Agriculture)",
    "Ph.D. in Biotechnology",
    "Ph.D. in Zoology",
    "Ph.D. in Botany",
  ],
};

const AcademicPrograms = () => {
  const [selectedCategory, setSelectedCategory] = useState("UG");

  return (
    <div className={classes.academicPrograms}>
      <h2 className={classes.title}>
        Academic <span>Programs</span>
      </h2>
      <div className={classes.categoryTabs}>
        {Object.keys(programCategories).map((category) => (
          <button
            key={category}
            className={`${classes.tabButton} ${selectedCategory === category ? classes.activeTab : ''}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category} Programs
          </button>
        ))}
      </div>
      <div className={classes.programList}>
        {programCategories[selectedCategory].map((program, index) => (
          <div key={index} className={classes.programCard}>
            <h3 className={classes.programTitle}>{program}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AcademicPrograms;
