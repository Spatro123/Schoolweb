import React from "react";
import classes from "./Parenttestimonial.module.css";
import profileImage from "./boy.png"; 

const testimonials = [
  {
    id: 1,
    name: "Pravati Acharya",
    role: "Parent",
    image: profileImage,
    rating: 5,
    text: `I am Pravati Acharya, parent of Ashlesa Acharya of class IX. After the birth of my 
    daughter, Ashlesa, the biggest hurdle for me was to find a suitable school for my 
    little one.  Teachers are cordial, encouraging and engage the 
    pupils in various activities. Sports, debate, and dance classes are an add-on. Essential 
    even provides a ray of hope for differently-abled students. As a parent, I feel 
    relieved that Essential takes care of post-pandemic sanitation needs. Thank you.`,
  },
  {
    id: 2,
    name: "Amit Sharma",
    role: "Parent",
    image: profileImage,
    rating: 4,
    text: `Essential has been a beacon of hope for my child’s education. The emphasis on both 
    academics and extracurricular activities is remarkable. The school nurtures creativity 
    and ensures a safe environment. I especially appreciate the regular updates from 
    teachers, which help us stay involved in our child's progress.`,
  },
  {
    id: 3,
    name: "Sushmita Das",
    role: "Parent",
    image: profileImage,
    rating: 5,
    text: `Choosing Essential for my daughter was the best decision we've made. The teachers 
    genuinely care about the children and go above and beyond to provide a well-rounded 
    education. I am also impressed by their focus on mental health and wellness. Thank 
    you for being amazing!`,
  },
,
];

const TestimonialPage = () => {
  return (
    <div className={classes.testimonialPage}>
      <h1>What Parents Say About Us</h1>
      <div className={classes.testimonialsGrid}>
        {testimonials.map((testimonial, index) => (
          <div className={classes.testimonialCard} key={testimonial.id}>
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className={classes.testimonialImage}
            />
            <div className={classes.testimonialContent}>
              <h3>{testimonial.name}</h3>
              <p className={classes.testimonialRole}>{testimonial.role}</p>
              <div className={classes.testimonialRating}>
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <span key={i}>⭐</span>
                ))}
              </div>
              <p className={classes.testimonialText}>{testimonial.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialPage;