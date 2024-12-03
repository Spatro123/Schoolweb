import React from 'react';
import classes from './aboutblock1.module.css';
import img from './Annual.jpg';
import img2 from './img3.jpg';
import img3 from './photo.png';
import img4 from './old-masters-picture-gallery-dresden-night.jpg';
import img5 from "./fun.jpeg";
import img6 from './grad.jpg';

const FeatureCard = ({ icon, title }) => (
    <div className={classes.featurecard}>
        <img src={icon} alt={title} className={classes.featureicon} />
        <h3 className={classes.featuretitle}>{title}</h3>
    </div>
);

const ImageGallery = () => (
    <div className={classes.imagegallery}>
        <h2>Visit our Campus with image gallery</h2>
        <p>Even slightly believable. If you are going use a passage of Lorem Ipsum need</p>
        <button className={classes.playbutton}>▶ Play now</button>
        <div className={classes.galleryimage}>
            <img src={img4} alt="Campus" />
            <div className={classes.gallerynav}>
                <button>Prev</button>
                <button>Next</button>
            </div>
        </div>
    </div>
);

function App() {
    return (
        <div className={classes.App}>
            <div className={classes.contentwrapper}>
                <div className={classes.imagesection}>
                    <img src={img} alt="Student" className={classes.mainImage} />
                </div>
                <div className={classes.featuressection}>
                    <FeatureCard icon={img} title="250+ Courses" />
                    <FeatureCard icon={img2} title="Expert Teachers" />
                    <FeatureCard icon={img3} title="Skill Based Scholarships" />
                    <FeatureCard icon={img4} title="Online Education" />
                    <FeatureCard icon={img5} title="After Course Certification" />
                    <FeatureCard icon={img6} title="Download Prospectus" />
                </div>
            </div>
            <ImageGallery />
        </div>
    );
}

export default App;
