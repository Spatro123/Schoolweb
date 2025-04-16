import React from 'react';
import classes from './AcademicPrograms.module.css';
import schoolImage1 from './Etpic1.JPG';
import schoolImage2 from './Etpic8.JPG';
import AcademicProgram from './Programme';
import schoolimage3 from "./Etpic7.JPG"

const programs = [
  
    {
      title: "10th Grade Foundation Program",
      description: "A comprehensive program covering all major subjects to build a strong foundation for board exams and future competitive tests.",
      category: "School Education",
      image: schoolImage1,
    },
    {
      title: "12th Grade Science Preparation",
      description: "Targeted learning for Physics, Chemistry, and Biology/Maths to excel in board exams and get ready for competitive entrances.",
      category: "School Education",
      image: schoolImage2,
    },
    {
      title: "JEE (Main & Advanced) Coaching",
      description: "Rigorous training in Physics, Chemistry, and Mathematics to crack JEE with expert mentors, mock tests, and performance tracking.",
      category: "Engineering Entrance",
      image: schoolImage1,
    },
    // {
    //   title: "NEET Preparation Course",
    //   description: "Focused coaching for NEET aspirants with deep conceptual learning, regular practice, and doubt-clearing sessions.",
    //   category: "Medical Entrance",
    //   image: schoolImage1,
    // }
  ];
  

const AcademicPrograms = () => {
  return (
    <div className={classes.academicPrograms}>
      <h2 className={classes.title}>
        Academic <span>Programs</span>
      </h2>
      <p className={classes.subtitle}>Focusing on high education with the best quality.</p>
      <div className={classes.programList}>
        {programs.map((program, index) => (
          <div key={index} className={classes.programCard}>
            <img src={program.image} alt={program.title} className={classes.programImage} />
            <h3 className={classes.programTitle}>{program.title}</h3>
            <p className={classes.programDescription}>{program.description}</p>
            <p className={classes.programCategory}>
              <span role="img" aria-label="icon">🎓</span> {program.category}
            </p>
            <button className={classes.applyButton}>Apply Now</button>
          </div>
        ))}
      </div>
      <p className={classes.footerText}>
        Explore the most appropriate program. <a href="/programs" className={classes.viewAllLink}>View all Programs →</a>
      </p>
      <AcademicProgram />
    </div>
  
  );
};

export default AcademicPrograms;
