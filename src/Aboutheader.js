import React from 'react';
import classes from'./Aboutheader.module.css';

const App = () => {
    return (
        <div className={classes.App}>
            <div className={classes.herosection}>
                <div className={classes.overlay}>
                    <h1>WE CARE ABOUT YOUR <span className={classes.highlight}>CHILDREN</span></h1>
                </div>
            </div>

            <div className={classes.featuressection}>
                <div className={classes.featurecard}>
                    <div className={classes.icon}>👩‍🏫</div>
                    <h3>Expert Teachers</h3>
                    <p>Our expert teachers inculcate values which speak Physical, Moral, Aesthetic, Social & Cultural development.</p>
                </div>
                
                <div className={classes.featurecard}>
                    <div className={classes.icon}>📘</div>
                    <h3>Quality Education</h3>
                    <p>We provide quality education which helps our students in Examination of the Council for the ICSE.</p>
                </div>

                <div className={classes.featurecard}>
                    <div className={classes.icon}>🎓</div>
                    <h3>Scholarship Program</h3>
                    <p>Our scholarship programs give students a golden opportunity to study stress-free.</p>
                </div>
            </div>

            {/* <div className={classes.infolinks}>
                <a href="#">Click here for the ICSE Result 2023</a> | <a href="#">Click Here for the Admission 2024-25</a>
            </div> */}
        </div>
    );
};

export default App;
