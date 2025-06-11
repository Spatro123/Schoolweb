import React from 'react';
import classes from './Event.module.css';
import img from './old-masters-picture-gallery-dresden-night.jpg';
import img2 from './photo.png';
import icon from './Etpic5.JPG';
import icon1 from './Etpic2.JPG';
import icon2 from './Etpic1.JPG';

const CardSection = () => {
  const cards = [
    { image: icon2,
      icon: icon,
      title: " Expert Teachers",
     
      description: "Learn from seasoned educators and subject matter experts",
    },
    {
      image: icon,
      icon: icon1,
      title: "Holistic Education",
      
      description: " Fostering growth beyond academics for well-rounded success.",
    },
    {
      image: icon1,
      icon: icon2,
      title: "Scholarship Programs",
      description: "Empowering bright minds with financial support.",
    },
  ];

  return (
    <div className={classes.cardsection}>
      <div className={classes.head}>
        <h2> Welcome to Essential Tutorial
        </h2>
        <p>We’re thrilled to have you here! At Essential Tutorial, we believe learning should be simple, engaging, and transformative. Whether you’re just starting or looking to level up your skills, our step-by-step tutorials, expert insights, and practical tips are designed to guide you every step of the way.

Let’s embark on this journey together and unlock your true potential.</p> 
<div className={classes.button}>
<button> Know More about us</button>
</div>
</div>
      <div className={classes.cards}>
      {cards.map((card, index) => (
        <div className={classes.card} key={index}>
          <div className={classes.cardimage}>
            <img src={card.image} alt={card.title} />
          </div>
          <div className={classes.cardheader}>
            <div className={classes.icon}>
              {/* <img src={card.icon} alt={`${card.title} icon`} /> */}
            </div>
            <h2>{card.title}</h2>
            
          </div>
          
          <div className={classes.cardcontent}>
            <p>{card.description}</p>
            {/* <a href="#" className={classes.learnmore}>Learn More ➔</a> */}
          </div>
        </div>
      ))}

</div>
    </div>
  );
};

export default CardSection;
