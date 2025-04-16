import React from "react";
import { motion } from "framer-motion";
import classes from "./Missionvision.module.css";
import missionImg1 from "./img3.jpg"; 
import missionImg2 from "./img4.jpg";
import missionImg3 from "./pic2.jpg";
import missionImg4 from "./physicslab.jpg";
import visionImg from "./photo.png";

const features = [
  {
    title: "Building up basic concepts",
    description:
      "We primarily focus on building up basic concepts of our students to enable them to achieve excellence in this competitive world.",
  },
  {
    title: "Continuous and Comprehensive Evaluation",
    description:
      "We employ a strategy that ensures consistent evaluation to help students make continuous academic progress while boosting their self-confidence.",
  },
  {
    title: "Focus on individual student",
    description:
      "The purpose of study varies from student to student. We define the academic need and career objective of each student individually.",
  },
  {
    title: "Reciprocal approach",
    description:
      "To create an environment inside the classroom where every student is an active participant and not a mere listener. It's always a two-way communication between students and teachers.",
  },
  {
    title: "Elevated Study Materials",
    description:
      "Our supplementary study materials are thoughtfully created by experts to provide additional learning opportunities, enriching the overall educational experience.",
  },
];

const MissionVision = () => {
  return (
    <div className={classes.missionvision}>
      <motion.section
        className={classes.sectionmission}
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2>
          Our <span className={classes.highlight}>Mission</span>
        </h2>
        <p>
          To achieve academic excellence at par with the competitive scenario of education in this fast-changing, tech-savvy world by creating an environment where learning takes place naturally.
        </p>
      </motion.section>

      <motion.section
        className={classes.sectionvision}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2>
          Our <span className={classes.highlight}>Vision</span>
        </h2>
        <p>
          Being a hassle-free service provider is our consistent goal. Every client is an opportunity for us to create another milestone beyond the previous achievements.
        </p>
      </motion.section>

      <section className={classes.sectionwhyus}>
        <h2>
          Why you <span className={classes.highlight}>should choose us</span>
        </h2>
        <div className={classes.features}>
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className={classes.feature}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <h3>{index + 1}. {feature.title}</h3>
              <p>{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default MissionVision;