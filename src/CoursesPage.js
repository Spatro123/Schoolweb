import React from 'react';
import classes from './Courses.module.css';
import img1 from './grad.jpg';
import img2 from './grad.jpg';
import img3 from './grad.jpg';
import img4 from './grad.jpg';
import img5 from './grad.jpg';

const courses = [
  {
    title: 'Master Programme in Library & Information Science (M.Lib.I.Sc)',
    description:
      'Explore the frontiers of knowledge and pioneer new practices in information science. Your research could redefine how information is perceived.',
    applyLink: 'https://kiitee.ac.in',
    year: 'Year 2024',
    img: img1,
  },
  {
    title: 'Master of Physical Education & Sports',
    description:
      'Shape your future and empower wellness with our Master of Physical Education & Sports.',
    applyLink: 'https://kiitee.ac.in',
    year: 'Year 2024',
    img: img2,
  },
  {
    title: 'B.Tech in Computer Science and Engineering',
    description:
      'Specializations in AI, Cyber Security, Blockchain Technology, and more.',
    applyLink: 'https://kiitee.ac.in',
    year: 'Year 2024',
    img: img3,
  },

];

function CoursesPage() {
  return (
    <div className={classes.coursespage}>
      <h1>Advance Industry Ready Courses</h1>
      <p>
        Join KIIT’s newly launched programs in fields like AI, Cyber Security,
        and Digital Manufacturing. Our courses are tailored to empower students
        with skills needed for today’s evolving job market.
      </p>
      <div className={classes.coursesgrid}>
        {courses.map((course, index) => (
          <div className={classes.coursecard} key={index}>
            <img src={course.img} alt={course.title} className={classes.courseimg} />
            <div className={classes.coursecontent}>
              <h3>{course.title}</h3>
              <p>{course.description}</p>
              <p>
                <strong>{course.year}</strong>
              </p>
              <a href={course.applyLink} target="_blank" rel="noopener noreferrer" className={classes.applybutton}>
                Apply Now
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CoursesPage;
