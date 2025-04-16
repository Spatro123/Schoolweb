import React from "react";
import classes from "./Newspage.module.css";
import img from './Cbse.jpeg';
import img2 from './exam.jpg';
import img3 from './clg.jpg';

const NewsCard = ({ date, author, title, description, imageUrl }) => {
  return (
    <div className={classes.card}>
      <img src={imageUrl} alt={title} className={classes.image} />
      <div className={classes.content}>
        <small>
          {date} · {author}
        </small>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

const AuthorInfo = ({ name, bio, link }) => {
  return (
    <div className={classes.authorInfo}>
      <h3>About author</h3>
      <p>{bio}</p>
      <a href={link} target="_blank" rel="noopener noreferrer">
        Find me on Figma Community
      </a>
    </div>
  );
};

const SubscriptionForm = () => {
  return (
    <div className={classes.subscription}>
      <h3>Join us backstage</h3>
      <p>Subscribe to our newsletter to get the latest updates on school and college news</p>
      <form>
        <input type="email" placeholder="Your email" className={classes.input} />
        <button type="submit" className={classes.button}>
          Get Started
        </button>
      </form>
    </div>
  );
};

const NewsPage = () => {
  return (
    <div className={classes.page}>
      {/* Header */}
      <header className={classes.header}>
        <h1>Latest in Education</h1>
        <p>Catch up on school highlights, college updates, and exam alerts</p>
      </header>

      <main className={classes.main}>
        {/* News Articles */}
        <section className={classes.articles}>
          <NewsCard
            date="April 10, 2025"
            author="The Hindu Education"
            title="Class 10 & 12 CBSE Exams Twice a Year from 2025-26"
            description="The CBSE will introduce biannual board exams from the 2025-26 academic session. Students can appear in either or both sessions to improve performance, aligning with NEP 2020 reforms."
            imageUrl={img}
          />
          <NewsCard
            date="April 12, 2025"
            author="India TV News"
            title="CBSE Cuts Syllabus, Brings Digital & Open Book Exams"
            description="CBSE has slashed the syllabus for classes 10 and 12 by up to 15% and will pilot digital assessments and open-book exams to foster conceptual learning and reduce stress."
            imageUrl={img2}
          />
          <NewsCard
            date="April 15, 2025"
            author="Reuters India"
            title="Applications for Plus 3 admission to begin on April 16 under NEP 2020 framework"
            description="The Department of Higher Education, Odisha, has officially announced the commencement of admission applications for +3 (Undergraduate) courses for the academic session 2025-26. As per the notification, the admission process will be conducted in line with the guidelines of the National Education Policy (NEP) 2020."
            imageUrl={img3}
          />
        </section>

        {/* Sidebar */}
        {/* <aside className={classes.sidebar}>
          <AuthorInfo
            name="Jennifer Taylor"
            bio="Hello! I'm Jennifer, an academic content creator focused on making education accessible and engaging for students and institutions worldwide."
            link="https://figma.com"
          />
          <SubscriptionForm />
        </aside> */}
      </main>
    </div>
  );
};

export default NewsPage;
