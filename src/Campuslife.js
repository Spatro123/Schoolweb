import React from 'react';
import classes from './Campuslife.module.css';  
import img1 from './clg.jpg';  
import img2 from './clg.jpg'; 
import img3 from './clg.jpg';  

const studentLifeActivities = [
  {
    title: 'Campus Events & Festivals',
    description:
      'Join in the excitement of annual festivals and events, where students come together to celebrate, learn, and grow.',
    img: img1,
  },
  {
    title: 'Sports & Fitness',
    description:
      'Whether you’re a sports enthusiast or just love staying fit, our campus offers a variety of sports and fitness activities.',
    img: img2,
  },
  {
    title: 'Cultural Clubs & Societies',
    description:
      'Get involved in cultural activities and join one of our many student-run clubs and societies to enhance your college experience.',
    img: img3,
  },
];

function CampusLifePage() {
  return (
    <div className={classes.campusLifePage}>
      <h1>Campus and Community</h1>
      <p>
        Experience the vibrant and diverse student life at Essential. From exciting events and festivals to sports, fitness, and cultural activities, there’s something for everyone.
      </p>
      <div className={classes.activitiesGrid}>
        {studentLifeActivities.map((activity, index) => (
          <div className={classes.activityCard} key={index}>
            <img src={activity.img} alt={activity.title} className={classes.activityImg} />
            <div className={classes.activityContent}>
              <h3>{activity.title}</h3>
              <p>{activity.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CampusLifePage;
