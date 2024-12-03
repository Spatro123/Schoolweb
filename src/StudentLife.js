import React from 'react';
import { motion } from 'framer-motion';
import classes from './StudentLife.module.css';
import Banner from './slide.jpg';
import image1 from './img (1).png';
import image2 from './img4.jpg';
import image3 from './img3.jpg';
import schoolImage1 from './old-masters-picture-gallery-dresden-night.jpg';
import schoolImage2 from './Graduatio.jpg';
import people from './prof.png';

const activities = [
  {
    title: 'Sports Day',
    description: 'An annual event where students participate in various sports activities including football, basketball, and track events.',
    image: image1,
  },
  {
    title: 'Cultural Fest',
    description: 'Showcasing talent in drama, dance, and music, this event brings vibrancy to the campus.',
    image: image2,
  },
  {
    title: 'Quiz Competition',
    description: 'A knowledge-based event where students compete to showcase their academic excellence.',
    image: image3,
  },
  {
    title: 'Graduation Day',
    description: 'A proud day for students and parents as we celebrate academic achievements and success.',
    image: schoolImage2,
  },
  {
    title: 'Art Exhibition',
    description: 'Students showcase their artistic talents with stunning paintings, sketches, and photography.',
    image: schoolImage1,
  },
  {
    title: 'Guest Lectures',
    description: 'Renowned professors and industry leaders inspire students with their knowledge and experience.',
    image: people,
  },
];

const animationVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const cardVariants = {
  hover: { scale: 1.05, transition: { duration: 0.3 } },
};

const StudentLife = () => {
  return (
    <div className={classes.container}>
      <motion.header
        className={classes.banner}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <img src={Banner} alt="University Programs Banner" />
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Student Life at Our University
        </motion.h1>
      </motion.header>

      <section className={classes.activities}>
        <motion.h2
          initial="hidden"
          animate="visible"
          variants={animationVariants}
        >
          Student Activities and Participation
        </motion.h2>

        <motion.div
          className={classes.grid}
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.2 },
            },
          }}
        >
          {activities.map((activity, index) => (
            <motion.div
              key={index}
              className={classes.card}
              variants={animationVariants}
              whileHover="hover"
            >
              <motion.div
                className={classes.imageWrapper}
                variants={cardVariants}
              >
                <img
                  src={activity.image}
                  alt={activity.title}
                  className={classes.image}
                />
              </motion.div>
              <div className={classes.content}>
                <h3>{activity.title}</h3>
                <p>{activity.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
};

export default StudentLife;
