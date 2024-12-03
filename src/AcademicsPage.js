import React from 'react';
import classes from './Academic.module.css';

import pic1 from './teach.png';
import pic2 from './teach.png';
import calendarImg from './Annual.jpg';
import curriculumImg from './Annual.jpg';
import assessmentImg from './Annual.jpg';
import icon1 from './athelete.png'
import icon2 from './athelete.png';
import icon3 from './athelete.png';

const AcademicsPage = () => {
  return (
    <div className={classes.academicsPage}>
     
    

      <section className={classes.introSection}>
        <h1 className={classes.pageTitle}>Academics</h1>
        <div className={classes.text}>
          Mind Nima is unique among its peer institutions in having Twenty Eight schools co-located on one contiguous campus, and all of them possess exceptional breadth and depth of excellence. This naturally facilitates multidisciplinary collaboration.
        </div>
      </section>

      <section className={classes.missionSection}>
        <img src={curriculumImg} alt="Academic Mission" className={classes.missionImage} />
        <div className={classes.missionText}>
          <p>
            KIIT is a private academic institution dedicated to providing educational opportunities for the intellectual, social, and professional development of a diverse student population. To achieve this purpose, the institution offers focused and balanced curricula at Undergraduate, Master’s, and Doctoral levels. A broad-based core curriculum is offered, promoting critical thinking, effective communication, and skills for life-long learning. KIIT’s approach to higher education equips students with the intellectual acumen and pragmatic approach necessary for personal and professional fulfillment.
          </p>
        </div>
      </section>

      <section className={classes.statsSection}>
        <div className={classes.statItem}>
          <img src={icon1} className={classes.icon} />
          <h3>300+</h3>
          <p>Faculty</p>
        </div>
        <div className={classes.statItem}>
          <img src={icon2}className={classes.icon} />
          <h3>200+</h3>
          <p>Academic Programs</p>
        </div>
        <div className={classes.statItem}>
          <img src={icon3} className={classes.icon} />
          <h3>4,000+</h3>
          <p>Students</p>
        </div>
      </section>

      
      <section className={classes.bannerSection}>
  <div className={classes.bannerContent}>
    <p>
      KIIT attempts to provide a comprehensive education that instills within its students a philosophy that values not only learning and professionalism, but also contribution and commitment to the advancement of community. KIIT provides a learning environment that helps students identify goals and the means to achieve them.
    </p>
    <p>KIIT provides a learning environment that helps students identify goals and the means to achieve them. With this philosophy in mind, students learn by interacting with a community of faculty, staff, and Industry dedicated to KIIT’s academic purpose.</p>
  </div>
</section>

     
      <section className={classes.calendarSection}>
      <h1 className={classes.pageTitle}> Academic Calendar </h1>
       
        <table className={classes.academicTable}>
          <thead>
            <tr>
              <th>School of Computer Applications</th>
              <th>AUTUMN</th>
              <th>SPRING</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1st Semester</td>
              <td>BCA, BSc, MCA, MSc</td>
              <td>2nd Semester MCA</td>
            </tr>
            <tr>
              <td>2nd Semester</td>
              <td>MCA</td>
              <td>BCA</td>
            </tr>
            <tr>
              <td>3rd Semester</td>
              <td>MCA/BCA/BSc</td>
              <td>BCA/BSc/MCA</td>
            </tr>
            <tr>
              <td>4th Semester</td>
              <td>MCA</td>
              <td>BCA/BSc</td>
            </tr>
            <tr>
              <td>5th Semester</td>
              <td>BCA/BSc/MCA/MSc</td>
              <td>6th Semester MCA</td>
            </tr>
            <tr>
              <td>6th Semester</td>
              <td>MCA</td>
              <td>BCA/BSc</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className={classes.downloadSection}>
      <h1 className={classes.pageTitle}> Syllabus & Courses </h1>
        <div className={classes.list}>
          <div className={classes.syllabus}><a href="/path/to/syllabus1.pdf" download>1st Semester BCA Syllabus</a></div>
          <div className={classes.syllabus}><a href="/path/to/syllabus2.pdf" download>2nd Semester MCA Syllabus</a></div>
          <div className={classes.syllabus}><a href="/path/to/course-list.pdf" download>Complete Course List</a></div>
        </div>
      </section>
    </div>
  );
};

export default AcademicsPage;
