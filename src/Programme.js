import React, { useState } from 'react';
import classes from './Programme.module.css';

const programCategories = {
  "10th": [
    "CBSE 10th Standard Full Course (Maths, Science, SST, English, Hindi)",
    "ICSE 10th Standard Subject-wise Preparation",
    "Foundation Course for NTSE, Olympiads & Entrance Exams",
    "Doubt Solving & Concept Strengthening Sessions",
    "Mock Tests & Board-Centric Practice Papers"
  ],
  "12th": [
    "CBSE 12th Science Stream (Physics, Chemistry, Maths/Biology)",
    "ICSE/State Board 12th Grade Comprehensive Program",
    "Crash Course for Board Exams with Test Series",
    "Concept Enhancement and Problem-Solving Workshops",
    "Live Doubt Clearing + Assignment Support"
  ],
  "JEE (OJEE)": [
    "2-Year JEE Main & Advanced Program",
    "1-Year JEE Crash Course",
    "JEE Foundation for Class 11 & 12",
    "Regular Mock Tests with Performance Analysis",
    "Topic-wise Conceptual Lectures with Practice Sets"
  ],
  "NEET": [
    "2-Year NEET Long-Term Program",
    "1-Year NEET Crash Course",
    "Physics, Chemistry & Biology Deep Dive Sessions",
    "NEET Mock Tests + Previous Year Solved Papers",
    "Daily Practice Problems (DPP) and Doubt Clarification"
  ]
};

const AcademicPrograms = () => {
  const [selectedCategory, setSelectedCategory] = useState("10th");

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
            {category}
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
