import React, { useState, useEffect } from "react";
import classes from "./Banner.module.css";
import img from "./Banner1.JPG";
import img2 from "./Banner2.JPG";
import img3 from "./Banner3.JPG";
import img4 from "./Etc.JPG";

function Banner() {
  const images = [img, img2, img3, img4];
  const slideText = [
    {
      heading: "Empowering Young Minds for a Brighter Tomorrow",
      subheading: "Discover a world of learning, growth, and excellence at [School Name]. Join our journey to nurture leaders of the future.",
      buttonText: "Explore Our Programs",
      buttonLink: "/programs",
    },
    {
      heading: "Your Child’s Future Starts Here",
      subheading: "Fostering curiosity, creativity, and character with innovative education tailored to every child.",
      buttonText: "Schedule a Campus Tour",
      buttonLink: "/campus-tour",
    },
    {
      heading: "Where Education Meets Inspiration",
      subheading: "From academics to extracurriculars, we help students thrive in every aspect of life. Join our vibrant community today.",
      buttonText: "Enroll Now",
      buttonLink: "/enroll",
    },
    {
      heading: "Experience Excellence",
      subheading: "Join the legacy of world-class education.",
      buttonText: "Explore",
      buttonLink: "/explore",
    },
  ];

  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Synchronize both the image and text timing here
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={classes.banner}>
      <div className={classes.imageSlider}>
        <img src={images[currentSlideIndex]} alt="Campus" />
      </div>
      <div className={classes.overlayText}>
        <h1 className={classes.heading}>{slideText[currentSlideIndex].heading}</h1>
        <p className={classes.subheading}>{slideText[currentSlideIndex].subheading}</p>
        <a
          href={slideText[currentSlideIndex].buttonLink}
          className={classes.ctaButton}
        >
          {slideText[currentSlideIndex].buttonText}
        </a>
      </div>
    </div>
  );
}

export default Banner;

