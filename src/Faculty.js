import React from "react";
import classes from "./Faculty.module.css";
import schoolImage1 from "./old-masters-picture-gallery-dresden-night.jpg";
import schoolImage2 from "./Graduatio.jpg";
import image1 from "./img3.jpg";
import image2 from "./img4.jpg";
import people from "./prof.png";
import ppl from "./Baishali.jpeg";
import ppl1 from "./Sritikirti.jpeg";
import ppl2 from "./Himansu.jpeg";
import ppl3 from "./Anjan.jpeg";
import ppl4 from "./Prabhu.jpeg";

const academicHead = {
  image: ppl3,
  name: "Mr. Anjan Kumar",
  designation: "Academic Head & Faculty - Biology",
  qualification: "M.Sc, B.Ed",
  message: `Welcome to Essential Tutorial Classes! At etc, we are passionate about empowering students to achieve their full potential. Our dedicated faculty and staff work together to create a supportive and inclusive learning environment.

As the Academic Head, I am proud to lead a team of educators who are committed to academic excellence and student success. Our institution is a place where students can grow, learn, and thrive. We look forward to welcoming you to our community!

From the Desk of the Academic Head`,
};

const facultyData = [
  {
    image: ppl,
    name: "Ms. Baishali Das",
    designation: "Senior Faculty - Chemistry",
    qualification: "M.Sc, B.Ed",
  },
  {
    image: ppl1,
    name: "Mr. Sritikirti Panda",
    designation: "Senior Faculty - Physics",
    qualification: "M.Sc, B.Ed",
  },
  {
    image: ppl2,
    name: "Mr. Himansu Shekhar",
    designation: " Exam Coordinator ",
    qualification: "B.Sc. & B.Ed",
  },
  {
    image: ppl4,
    name: "Mr. Prabhu Narayan",
    designation: "Faculty - English",
    qualification: "M.A, B.Ed",
  },
];

const Faculty = () => {
  return (
    <div className={classes.facultyContainer}>
      <div className={classes.header}>
        <h1>Meet Our Faculty</h1>
       
      </div>

      <div className={classes.academicHeadCard}>
        <img src={academicHead.image} alt={academicHead.name} className={classes.headImage} />
        <div className={classes.details}>
          <h2>{academicHead.name}</h2>
          <h4>{academicHead.designation}</h4>
          <p>{academicHead.qualification}</p>
        </div>
        <div className={classes.headMessage}>
          <h3>From the Desk of the Academic Head</h3>
          <p>{academicHead.message}</p>
        </div>
      </div>
      <div className={classes.info}>
      <p>Qualified & Experienced Educators at Essential Classes</p> </div>
      <div className={classes.facultyGrid}>
        {facultyData.map((faculty, index) => (
          <div key={index} className={classes.card}>
            <img src={faculty.image} alt={faculty.name} className={classes.image} />
            <div className={classes.details}>
              <h2>{faculty.name}</h2>
              <h4>{faculty.designation}</h4>
              <p>{faculty.qualification}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faculty;
