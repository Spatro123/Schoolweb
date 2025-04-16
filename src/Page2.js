import React from 'react';
import classes from './Page2.module.css';
import AboutHeader from "./Aboutheader";
import Mission from "./mission.png";
import Vision from "./target.png";
import pic from "./pic2.jpg"
import Abouttoppage from "./Abouttoppage";
import FacilitiesPage from './FacilitiesPage';



const AboutUs = () => {
    return (
        <div className={classes.aboutus}>
           
            <AboutHeader />
            <Abouttoppage />

            {/* About Us Section
            <div className={classes.section}>
                <h2>About Us</h2>
                <p>
                    Essential Classes is one of the popular institutions in Bhubaneswar, India. Recognized by the Council for Indian School Certificate Examinations, it has an excellent track record.
                    Inspired by our founders, we strive for excellence in educational and social values for holistic development.
                </p>
                <div className={classes.aboutPoints}>
                    <div className={classes.point}>Provide academic opportunities to excel at national and international levels.</div>
                    <div className={classes.point}>Develop leadership qualities through activities like the school cabinet, scouts, and guides.</div>
                    <div className={classes.point}>Promote national integration, patriotism, and communal harmony.</div>
                    <div className={classes.point}>Create environmental awareness and protection of natural resources.</div>
                    <div className={classes.point}>Encourage sports and personality development activities.</div>
                </div>
            </div> */}

            <h2 className={classes.centerAlign}>Leadership Team</h2>
            <div className={classes.sectionLeadershipTeam}>
                <div className={classes.leaderProfile}>
                    {/* <img src="https://Essential Tutorial Classesschool.ac.in/wp-content/uploads/2022/10/principal.jpg" alt="LEENA KHURANA" /> */}
                    <h3>Jogendra Das</h3>
                    <h4>Principal</h4>
                    <p>At Essential Tutorial Classes, we believe in nurturing well-rounded personalities steeped in honesty, respect, and empathy...</p>
                </div>
                
                <div className={classes.leaderProfile}>
                    {/* <img src="https://Essential Tutorial Classesschool.ac.in/wp-content/uploads/2022/10/director1.jpg" alt="GURPREET KHURANA" /> */}
                    <h3>Dr. Sushanta Kumar Sahoo</h3>
                    <h4>Director</h4>
                    <p>Delighted to introduce Essential Tutorial Classes’s own website, marking 44 years of excellence in Bhubaneswar’s educational landscape...</p>
                </div>
            </div>

            {/* <h2 className={classes.centerAlign}>Founders</h2> */}
            <div className={classes.sectionFounders}>
                {/* <div className={classes.leaderProfile}>
                    <img src="https://Essential Tutorial Classesschool.ac.in/wp-content/uploads/2022/10/founder1.jpg" alt="Mrs. Inderjit Khurana" />
                    <h3>Mrs. Inderjit Khurana</h3>
                    <h4>Founder</h4>
                    <p>Founder of the Train Platform School Movement in India.</p>
                </div> */}
                {/* <div className={classes.leaderProfile}>
                    <img src="https://Essential Tutorial Classesschool.ac.in/wp-content/uploads/2022/10/founder3.jpg" alt="Lt. Col. Surindar Singh Khurana" alt="Mrs. Inderjit Khurana" />
                    <h3>Lt. Col. Surindar Singh Khurana</h3>
                    <h4>Co-Founder</h4>
                    <p>Founder of the Train Platform School Movement in India.</p>
                </div> */}
                {/* <div className={classes.leaderProfile}>
                    <img src="https://Essential Tutorial Classesschool.ac.in/wp-content/uploads/2022/10/founder3.jpg" alt="Lt. Col. Surindar Singh Khurana" />
                    <h3>Lt. Col. Surindar Singh Khurana</h3>
                    <h4>Co-Founder</h4>
                    <p>A sportsman and educational visionary.</p>
                </div> */}
            </div>

            <div className={`${classes.section} ${classes.centerAlign}`}>
                <h2>What Parents Say</h2>
                <blockquote>“Essential Tutorial Classes high school is one of the popular schools in India with an excellent academic record and supportive teachers.”</blockquote>
                <p>- Mitali Mohanty, Parent</p>
            </div>

            <div className={`${classes.section} ${classes.zigzagLayout}`}>
                <h2>Mission and Vision</h2>
                <div className={classes.missionVision}>
                    <div className={`${classes.frame} ${classes.missionFrame}`}>
                        <img src={Mission} alt="Mission Icon" />
                        <h3>Our Mission</h3>
                        <p>To achieve academic excellence at par with the compettitive scenario of education in this fast chnaging textContainer savvy world by creating an environment where learning takes place naturally.</p>
                    </div>
                    <div className={`${classes.frame} ${classes.visionFrame}`}>
                        <img src={Vision} alt="Vision Icon" />
                        <h3>Our Vision</h3>
                        <p>To  impact the value based education in an environment that transform lives through an understanding of the needs of society for sustainable growth & harmony with nature.</p>
                    </div>
                </div>
            </div>

            <div className={`${classes.section} ${classes.historySection}`}>
                {/* <h2>History of the School</h2> */}
                <div className={classes.historyContent}>
                    {/* <div className={classes.historyText}>
                        <p>
                            Established in 1979, Essential Classes has a rich history of academic excellence and community involvement. Founded by dedicated educators, our school has grown to become a respected institution with a commitment to empowering students and fostering holistic development.
                        </p>
                    </div> */}
                    <div className={classes.historyImages}>
                        {/* <img src={pic} alt="School History Image 1" /> */}
                        {/* <img src="/path-to-school-history2.jpg" alt="School History Image 2" />
                        <img src="/path-to-school-history3.jpg" alt="School History Image 3" /> */}
                    </div>
                </div>
            </div>
{/* <FacilitiesPage /> */}
        </div>
    );
};

export default AboutUs;
