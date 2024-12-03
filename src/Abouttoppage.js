import React from 'react';
import classes from './abouttopage.module.css';
import headerImage from './Banner.png';
import schoolImage1 from './old-masters-picture-gallery-dresden-night.jpg';
import schoolImage2 from './Graduatio.jpg';

const AboutPage = () => {
  return (
    <div className={classes.aboutpage}>
      {/* <header className={classes.aboutheader}>
        <img src={headerImage} alt="About Us Header" className={classes.headerimage} />
        <h1 className={classes.headertitle}>
        </h1>
      </header> */}

      <section className={classes.aboutsection}>
        <h2 className={classes.sectiontitle}>
          OUR <span className={classes.highlight}>STORY</span>
        </h2>

        
        <div className={classes.contentRow}>
          <div className={classes.imageContainer}>
            <img src={schoolImage1} alt="School Image 1" className={classes.curvedImage} />
          </div>
          <div className={classes.textContainer}>
            <p>
              This inspiring journey began with the illustrious <strong>Lt. Col. S. S. Khurana</strong>, whose dedicated service in the Army spanned 28 years before his retirement in 1977. Following his premature retirement, he relocated to Bhubaneswar in June 1977, where he and Mrs. Inderjit Khurana’s passion for revolutionizing preschool education in Odisha came together. In January of 1978, they laid the foundation for what would become the first preschool in Bhubaneswar.

            </p>
            <p>
            With just two children, the school opened its doors in February of 1978, marking the dawn of a new era in early education. Mrs. Khurana, a torchbearer in her own right, championed a philosophy where practicality trumped formality – her teachers were encouraged to wear attire conducive to movement and engagement, embodying a commitment to action over appearances. She believed in getting the work done rather than dressing up for it.</p>
          </div>
        </div>

        <div className={`${classes.contentRow} ${classes.reverseRow}`}>
        <div className={classes.imageContainer}>
            <img src={schoolImage2} alt="School Image 2" className={classes.curvedImage} />
          </div>
          <div className={classes.textContainer}>
            <p>
            Word quickly spread of the school’s innovative approach, attracting eager parents with two-year-old children seeking admission. Within the initial three years, the school burgeoned to accommodate 100 children, prompting a pressing need to expand into higher grades. Gradually evolving to encompass classes up to VII, the school acquired multiple buildings in the Forest Park Area, symbolising its growing influence and impact.
            </p>

            <p>In 1984, the government recognized Mrs. Khurana’s relentless dedication to education by granting her a 1-acre plot on a 99-year lease, a testament to her enduring legacy. Construction commenced in 1996, coinciding with the school’s provisional ICSE affiliation, culminating in its inaugural class IX admissions in 1997 and the first batch graduating in March of 1999.</p>
            <p> In 1995, the Khurana family’s commitment to educational excellence was further solidified with the return of Mr. Gurpreet Singh Khurana, Mrs. Khurana’s younger son, who assumed an integral role in the school’s administration. His marriage to Mrs. Leena Khurana in 1996 heralded a new chapter, setting the stage for their eventual succession in 2011. </p>
          </div>
         
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
