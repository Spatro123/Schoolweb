// /src/components/Infrastructure.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import classes from './Infrastructure.module.css';
import libraryImg from './img3.jpg';
import laboratoryImg from './img4.jpg';
import campusImg from './fun.jpeg';
import sportsImg from './img4.jpg';
import relaxZoneImg from './img4.jpg';

const Infrastructure = () => {
  const [selectedArea, setSelectedArea] = useState(null);

  const areas = [
    {
      title: 'Library',
      image: libraryImg,
      description: 'A hub of knowledge with a wide collection of books, journals, and e-resources for students.',
      details:
        'The library is equipped with over 10,000 books, journals, and digital resources. It is a perfect place for academic research and quiet study.',
    },
    {
      title: 'Laboratory',
      image: laboratoryImg,
      description: 'Well-equipped labs for hands-on experiments in physics, chemistry, and biology.',
      details:
        'The laboratories are designed to meet the highest safety standards. Students can perform experiments and participate in research projects under supervision.',
    },
    {
      title: 'Campus',
      image: campusImg,
      description: 'A beautiful and serene campus providing the perfect environment for learning.',
      details:
        'Our campus spans 20 acres with lush greenery, modern facilities, and recreational zones, creating an inspiring environment for students.',
    },
    {
      title: 'Sports Area',
      image: sportsImg,
      description: 'Spacious sports facilities for various games like football, basketball, and more.',
      details:
        'The sports area includes courts, fields, and indoor facilities for physical activities, competitions, and fitness programs.',
    },
    {
      title: 'Relax Zone',
      image: relaxZoneImg,
      description: 'Dedicated spaces for students to unwind and recharge between classes.',
      details:
        'Our relax zones include lounges, gardens, and cafes where students can socialize, relax, and rejuvenate.',
    },
  ];

  // Animation Variants for Cards
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const detailVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className={classes.container}>
      <motion.h1
        className={classes.heading}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Our School Infrastructure
      </motion.h1>

      <motion.div
        className={classes.grid}
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
        }}
      >
        {areas.map((area, index) => (
          <motion.div
            key={index}
            className={classes.card}
            variants={cardVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedArea(area)}
          >
            <img src={area.image} alt={area.title} className={classes.image} />
            <h2 className={classes.title}>{area.title}</h2>
            <p className={classes.description}>{area.description}</p>
          </motion.div>
        ))}
      </motion.div>

      {selectedArea && (
        <motion.div
          className={classes.details}
          initial="hidden"
          animate="visible"
          variants={detailVariants}
        >
          <button
            className={classes.closeButton}
            onClick={() => setSelectedArea(null)}
          >
            &times;
          </button>
          <h2>{selectedArea.title}</h2>
          <p>{selectedArea.details}</p>
        </motion.div>
      )}
    </div>
  );
};

export default Infrastructure;
