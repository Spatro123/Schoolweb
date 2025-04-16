import React from "react";
import classes from "./start.module.css";
import img1 from "./Etc1.JPG";
import img2 from "./Etpic2.JPG";
import img3 from "./Etpic1.JPG";
import img4 from "./Banner7.JPG";
import eventImg1 from "./Etpic4.JPG";
import eventImg2 from "./Stu.JPG";
import eventImg3 from "./Etpic5.JPG";
import eventImg4 from "./Stu3.JPG";


const newsItems = [
  {
    title: "Essential Tutorials Launches New AI-Powered Learning Platform",
    date: "March 20, 2025",
    image: img1,
  },
  {
    title: "Students from ET Win Gold in National Science Olympiad",
    date: "March 15, 2025",
    image: img2,
  },
  {
    title: "Essential Tutorials Celebrates Annual Day with Cultural Fest",
    date: "February 28, 2025",
    image: img3,
  },
  {
    title: "Essential Students Secure Top Ranks in Board Exams 2024",
    date: "February 10, 2025",
    image: img4,
  },
];

const events = [
  {
    title: "Live Webinar: Cracking NTSE & Olympiads with Strategy",
    date: "April 20 @ 6:00 PM IST",
    image: eventImg1,
  },
  {
    title: "Parent-Teacher Meet (Academic Year Review)",
    date: "April 25, 2025",
    image: eventImg2,
  },
  {
    title: "Essential Coding Carnival: Code & Win",
    date: "May 5 @ 10:00 AM - 5:00 PM IST",
    image: eventImg3,
  },
  {
    title: "ET Entrance Exam 2025 for New Admissions",
    date: "May 15 - May 20, 2025",
    image: eventImg4,
  },
];

const App = () => {
  return (
    <div className={classes.app}>
      <header className={classes.mainheader}>
        <h1>Essential Tutorials - News & Events</h1>
      </header>

      <section className={classes.eventssection}>
        <div className={classes.sectionheader}>
          <h2>Upcoming Events</h2>
          <a href="/event" className={classes.viewall}>View All Events</a>
        </div>
        <div className={classes.eventsgrid}>
          {events.map((event, index) => (
            <div key={index} className={classes.eventcard}>
              <img src={event.image} alt={event.title} />
              <h3>{event.title}</h3>
              <p>{event.date}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={classes.newssection}>
        <div className={classes.sectionheader}>
          <h2>Latest News</h2>
          <a href="/news-page" className={classes.viewall}>View All News</a>
        </div>
        <div className={classes.newscards}>
          {newsItems.map((news, index) => (
            <div key={index} className={classes.newscard}>
              <img src={news.image} alt={news.title} />
              <h3>{news.title}</h3>
              <p>{news.date}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default App;
