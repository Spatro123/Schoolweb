import React from 'react';
import classes from './AcademicPrograms.module.css';
import schoolImage1 from './old-masters-picture-gallery-dresden-night.jpg';
import schoolImage2 from './Graduatio.jpg';
import AcademicProgram from './Programme';

const programs = [
  {
    title: "Major in Economics",
    description: "The Economics Major can be combined with a Major in another subject in order to obtain a Double Major Degree.",
    category: "Economics",
    image: schoolImage1, // Use the imported image variable directly
  },
  {
    title: "Business Media",
    description: "The Economics Major can be combined with a Major in another subject in order to obtain a Double Major Degree.",
    category: "Business & Administration",
    image: schoolImage2, // Use another imported image variable
  },
  {
    title: "Business Media",
    description: "The Economics Major can be combined with a Major in another subject in order to obtain a Double Major Degree.",
    category: "Sciences",
    image: schoolImage1, // Reuse the first image for this example
  },
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
