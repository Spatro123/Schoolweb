// src/App.js
import React from 'react';
import classes from './whyus.module.css';

function App() {
  return (
    <div className={classes.container}>
      <header className={classes.header}>
        {/* <h3>Genius Advantages</h3> */}
        <h1>Reason Why Choose Us</h1>
      </header>

      <section className={classes.features}>
        <div className={classes.feature}>
          <div className={classes.icon}>✏️</div>
          <h3>The Power Of Education.</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipiscing elit set diam nonnumnynibh euismod tincidunt laoreet.</p>
        </div>
        <div className={classes.feature}>
          <div className={classes.icon}>📋</div>
          <h3>Best Online Education.</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipiscing elit set diam nonnumnynibh euismod tincidunt laoreet.</p>
        </div>
        <div className={classes.feature}>
          <div className={classes.icon}>📝</div>
          <h3>Education For All Student.</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipiscing elit set diam nonnumnynibh euismod tincidunt laoreet.</p>
        </div>
      </section>

      {/* <section className={classes.testimonials}>
        <h2>Students <span>Testimonial.</span></h2>
        <div className={classes.testimonialcarousel}>
          <div className={classes.testimonial}>
            <p>“This was our first time lorem ipsum and we <strong>were very pleased with the whole experience</strong>. Your price was lower than other companies. Our experience was good from start to finish, so we’ll be back in the future lorem ipsum diamet.”</p>
            <h4>Robertho Garcia | Graphic Designer</h4>
          </div>
          <div className={classes.testimonial}>
            <p>“This was our first time lorem ipsum and we <strong>were very pleased with the whole experience</strong>. Your price was lower than other companies. Our experience was good from start to finish, so we’ll be back in the future lorem ipsum diamet.”</p>
            <h4>Robertho Garcia | Graphic Designer</h4>
          </div>
        </div>
        <div className={classes.carouselnavigation}>
          <button className={classes.prev}>{"<"}</button>
          <button className={classes.next}>{">"}</button>
        </div>
      </section> */}
    </div>
  );
}

export default App;
