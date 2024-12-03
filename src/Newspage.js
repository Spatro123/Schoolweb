import React from "react";
import classes from "./Newspage.module.css";
import img from './school.jpg';
import img2 from './uni.jpg';
import img3 from './uni2.jpg';

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

// SubscriptionForm Component
const SubscriptionForm = () => {
  return (
    <div className={classes.subscription}>
      <h3>Join us backstage</h3>
      <p>Subscribe to Canny Backstage to get an email when we post new content</p>
      <form>
        <input type="email" placeholder="Your email" className={classes.input} />
        <button type="submit" className={classes.button}>
          Get Started
        </button>
      </form>
    </div>
  );
};

// Main NewsPage Component
const NewsPage = () => {
  return (
    <div className={classes.page}>
      {/* Header */}
      <header className={classes.header}>
        <h1>Our Fresh News</h1>
        <p>Stay informed and inspired with our bite-sized articles</p>
      </header>

      <main className={classes.main}>
        {/* News Articles */}
        <section className={classes.articles}>
          <NewsCard
            date="Jan 20, 2024"
            author="Michael de Santa"
            title="Crafting Seamless Experiences: The Art of Intuitive UI Design"
            description="Explore the principles and techniques that drive user-centric UI design, ensuring a seamless and intuitive digital journey."
            imageUrl={img} // Using imported image
          />
          <NewsCard
            date="Jan 23, 2024"
            author="Michael de Santa"
            title="Mastering UI Elements: A Practical Guide"
            description="Learn to master UI components and their practical applications in real-world scenarios."
            imageUrl={img2} // Using imported image
          />
          <NewsCard
            date="Jan 23, 2024"
            author="Michael de Santa"
            title="Advanced techniques for innovative UI"
            description="Enhance your skills with advanced techniques for creating user interfaces that stand out."
            imageUrl={img3} // Using imported image
          />
        </section>

        {/* Sidebar */}
        <aside className={classes.sidebar}>
          <AuthorInfo
            name="Jennifer Taylor"
            bio="Hello! My name is Jennifer Taylor, working from Chile. I create some UI Kits and Design Systems for Figma and also, I offer live support to designers."
            link="https://figma.com"
          />
          <SubscriptionForm />
        </aside>
      </main>
    </div>
  );
};

export default NewsPage;
