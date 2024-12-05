import React from 'react';
import { useNavigate } from 'react-router-dom';
import classes from './Welcomemsg.module.css';
import Banner from './Banner.png'; 
import image1 from './img3.jpg';
import image2 from './img4.jpg';
import image3 from './img3.jpg';
import img from './school.jpg';
import youtube from './youtube.png';

function App() {
  const navigate = useNavigate();

  const handleViewMore = () => {
    navigate('/gallery');
  };

  const handleYoutubeRedirect = () => {
    window.open('https://www.youtube.com/', '_blank');
  };

  return (
    <div className={classes.container}>
      <div className={classes.formsection}>
        <div className={classes.phonemockup}>
        <h2> Addmissions Enquiry</h2>
        <div className={classes.subtext}>Fill up the form to get a quick response back from us</div>
          <div className={classes.formcontent}>
            
            <form className={classes.registrationform}>
              <input type="text" placeholder="Your Name." required />
              <input type="text" placeholder="Your Number" required />
              <input type="email" placeholder="Email Address" required />
              <select required>
                <option value="">Select Course</option>
                <option value="course1">Course 1</option>
                <option value="course2">Course 2</option>
              </select>
              <textarea placeholder="Message" rows="3"></textarea>
              <button type="submit">SUBMIT REQUEST</button>
            </form>
          </div>
        </div>
      </div>

      <div className={classes.infosection}>
        <div className={classes.infoheader}>
          <p>• Gallery •</p>
        </div>

        <div className={classes.youtubeSection}>
            <p>Visit our YouTube Channel</p>
            <button className={classes.youtubeButton} onClick={handleYoutubeRedirect}>
              <img src={youtube} alt="YouTube Icon" className={classes.youtubeIcon} />
              YouTube
            </button>
          </div>
        <div className={classes.gallerySection}>
    
          <img src={image1} alt="Gallery Image 1" className={classes.galleryImage} />
          <img src={image2} alt="Gallery Image 2" className={classes.galleryImage} />
          <img src={image3} alt="Gallery Image 3" className={classes.galleryImage} />
          <img src={img} alt="Gallery Image 4" className={classes.galleryImage} />
        </div>

        <div className={classes.viewMoreSection}>
          <button className={classes.viewMoreButton} onClick={handleViewMore}>
            View More
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
