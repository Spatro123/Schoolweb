import React from 'react';
import classes from './Academic.module.css';

import pic1 from './teach.png';
import pic2 from './teach.png';
import calendarImg from './Annual.jpg';
import curriculumImg from './Etpic.JPG';
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
          Essential Tutorial Classes is unique among its peer institutions.
        </div>
      </section>

      <section className={classes.missionSection}>
        <img src={curriculumImg} alt="Academic Mission" className={classes.missionImage} />
        <div className={classes.missionText}>
          <p>
          At Essential Tutorial Classes (ETC), we believe education is not just about grades—it's about growth. We understand that while a student may study to pass an exam, a true competitor learns to master the subject. The journey from student to competitor is one of transformation—where curiosity replaces cramming, understanding replaces memorization, and consistency replaces last-minute effort. We nurture this transformation by focusing on core ethics: Concept clarity, Creativity, Care, Confidence, and Technology. These aren't just values on a wall—they are deeply integrated into our teaching methodology and daily classroom practices. Our classrooms are more than spaces—they are vibrant ecosystems where young minds observe, question, explore, and evolve.  

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
    At Essential Tutorial Classes (ETC), we don’t just teach—we shape thinkers and future achievers. Our goal is to turn students into competitors by focusing on deep understanding, consistent effort, and strong time management. We encourage learners to go beyond exam preparation and build a solid foundation that lasts a lifetime.    </p>

  
  <p>With the right mix of concept clarity, creativity, care, confidence, and technology, we create an environment where learning becomes natural and engaging. At ETC, we believe that every child has potential—our job is to guide them, inspire them, and help them unlock it.</p>
  </div>
</section>

     
      <section className={classes.calendarSection}>
      {/* <h1 className={classes.pageTitle}> Academic Calendar </h1> */}
       
        {/* <table className={classes.academicTable}>
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
        </table> */}
      </section>

      <section className={classes.downloadSection}>
      <h1 className={classes.pageTitle}> Syllabus & Courses </h1>
        {/* <div className={classes.list}>
          <div className={classes.syllabus}><a href="/path/to/syllabus1.pdf" download>1st Semester BCA Syllabus</a></div>
          <div className={classes.syllabus}><a href="/path/to/syllabus2.pdf" download>2nd Semester MCA Syllabus</a></div>
          <div className={classes.syllabus}><a href="/path/to/course-list.pdf" download>Complete Course List</a></div>
        </div> */}
        Will Be Updated Soon ....
      </section>
    </div>
  );
};

export default AcademicsPage;
