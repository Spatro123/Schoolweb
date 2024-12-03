import React from 'react';
import classes from './Team.module.css';
import Staff1 from './prof.png';
import Staff2 from './Radha.jpeg';
import Staff3 from './vibhav.jpeg';
import Staff4 from './Tapas.jpeg';

const Team = () => {
  const teamMembers = [
    { name: 'Michael Doe', role: 'Property Specialist', image: Staff1 },
    { name: 'Radha Sharma', role: 'Marketing Specialist', image: Staff2 },
    { name: 'Vibhav Raj', role: 'Technical Lead', image: Staff3 },
    { name: 'Tapas Das', role: 'Design Specialist', image: Staff4 },
  ];

  return (
    <div className={classes.teamPage}>
      <header className={classes.header}>
        <h1>Experienced & Professional Team</h1>
        <p>
          You can rely on our amazing features list and also our customer services will be a great experience for you without a doubt and in no time.
        </p>
      </header>
      <div className={classes.teamGrid}>
        {teamMembers.map((member, index) => (
          <div className={classes.card} key={index}>
            <img src={member.image} alt={member.name} className={classes.image} />
            <h3 className={classes.name}>{member.name}</h3>
            <p className={classes.role}>{member.role}</p>
            <p className={classes.description}>
              You can rely on our amazing features list and also our customer services will be a great experience.
            </p>
            <div className={classes.socials}>
              <i className="fab fa-facebook"></i>
              <i className="fab fa-twitter"></i>
              <i className="fab fa-instagram"></i>
              <i className="fab fa-behance"></i>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
