import React from 'react';
import classes from './Page2.module.css';



export const MissionVision = () => (
    <div className={classes.section}>
        <h2 className={classes.centerAlign}>Our Mission & Vision</h2>
        <div className={classes.missionVisionContent}>
            <p><strong>Mission:</strong> To foster a learning environment that inspires students to reach their full potential.</p>
            <p><strong>Vision:</strong> To be a leader in education by developing responsible citizens equipped for the future.</p>
        </div>
    </div>
);

export const SchoolHistory = () => (
    <div className={classes.section}>
        <h2 className={classes.centerAlign}>Our School History</h2>
        <div className={classes.sliderContainer}>
            {/* Placeholder for sliding images */}
            <div className={classes.imageSlider}>
                <img src="https://ruchikaschool.ac.in/wp-content/uploads/2022/10/founder1.jpg" alt="Historical Image 1" />
                <p>Founded with a vision to bring quality education to Bhubaneswar.</p>
            </div>
            <div className={classes.imageSlider}>
                <img src="https://ruchikaschool.ac.in/wp-content/uploads/2022/10/founder3.jpg" alt="Historical Image 2" />
                <p>Expanding horizons and embracing new learning techniques.</p>
            </div>
        </div>
    </div>
);
