import React from 'react';
import { Link } from 'react-router-dom';
import classes from './ctabutton.module.css';

function Cta() {
    return (
        <div className={classes.Button}>
            <div className={classes.content}>
                <h1 className={classes.title}>Join Our Learning Community</h1>
                <p className={classes.description}>
                    Explore our admissions process and start your journey.
                </p>
            </div>
            <Link to="/contactus" className={classes.cta}>
                Apply Now
            </Link>
        </div>
    );
}

export default Cta;
