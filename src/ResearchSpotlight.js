import React from 'react';
import { useNavigate } from 'react-router-dom';
import CountUp from 'react-countup'; 
import { useInView } from 'react-intersection-observer'; 
import classes from './ResearchSpotlight.module.css';
import researchImage1 from './img (1).png';
import researchImage2 from './uni1.jpg';
import img from './uni2.jpg';

const ResearchSpotlight = () => {
  const navigate = useNavigate();

  
  const { ref, inView } = useInView({
    triggerOnce: true, 
    threshold: 0.3
  });

  const handleLearnMoreClick = () => {
    navigate('/research'); 
  };

  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <h2 className={classes.title}>Research Spotlight</h2>
        <h1 className={classes.mainHeading}>
          The world is evolving, and we are riding the wave with groundbreaking research at Essential.
        </h1>
      </div>

     
      <div className={classes.content}>
      
        <div className={classes.images}>
          <img src={researchImage1} alt="Research Image 1" className={classes.image1} />
          <img src={researchImage2} alt="Research Image 2" className={classes.image2} />
          <img src={img} alt="Research Image 3" className={classes.image2} />
        </div>

        <div className={classes.text}>
          <p>
            Essential is committed to high-quality research and provides outstanding facilities and a
            supportive environment for our academics and students. ESSENTIAL'S research portfolio
            extends across many different areas including, but not limited to, biotechnology,
            medicine, rural management, physical activity and nutrition, education, and social and
            mental health.
          </p>
        </div>

        <div className={classes.stats} ref={ref}>
          <div className={classes.statCard}>
            <h2>
              {inView && <CountUp start={0} end={13636} duration={2.5} separator="," />}+
            </h2>
            <p>121 h-index (Scopus) Publications</p>
          </div>
          <div className={classes.statCard}>
            <h2>
              {inView && <CountUp start={0} end={8404} duration={2.5} separator="," />}+
            </h2>
            <p>101 h-index (Web of Science) Publications</p>
          </div>
          <div className={classes.statCard}>
            <h2>
              {inView && <CountUp start={0} end={810} duration={2.5} separator="," />}+
            </h2>
            <p>National & International Patents</p>
          </div>
        </div>
      </div>

      <div className={classes.footer}>
        <p>
          At Essential, cutting-edge research drives innovation and excellence across diverse fields. Our
          state-of-the-art laboratories and collaborative research centers foster groundbreaking
          discoveries.
        </p>
        <button onClick={handleLearnMoreClick} className={classes.button}>
          Learn More
        </button>
      </div>
    </div>
  );
};

export default ResearchSpotlight;
