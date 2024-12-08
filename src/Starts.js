import React from "react";
import classes from "./start.module.css";
import img1 from "./school.jpg";
import img2 from "./school1.jpg";
import img3 from "./school1.jpg";
import img4 from "./school.jpg";
import eventImg1 from "./school.jpg";
import eventImg2 from "./school1.jpg";
import eventImg3 from "./school1.jpg";
import eventImg4 from "./school1.jpg";


const newsItems = [
  {
    title: "Foundation Day Celebration of 16 States Held at Raj Bhavan, Odisha",
    date: "November 14th, 2024",
    image: img1,
  },
  {
    title: "KIMS Installs Odisha's First 3D Digital Mammography Machine",
    date: "November 14th, 2024",
    image: img2,
  },
  {
    title: "MSME and StartUp Trade Fair 2024 Begins at KIIT Campus",
    date: "November 14th, 2024",
    image: img3,
  },
  {
    title: "YRC KIIT Organizes Awareness on AIDS and HIV Awareness",
    date: "November 11th, 2024",
    image: img4,
  },
];

const events = [
  {
    title: "40th International Value Engineering Conference",
    date: "November 15 @ 8:00 AM - November 16 @ 5:00 PM IST",
    image: eventImg1,
  },
  {
    title: "7th KIIT Mock Trial Competition (KMTC) 2024",
    date: "November 22 - November 24",
    image: eventImg2,
  },
  {
    title: "IEEE 4th International Conference on Signal Processing",
    date: "November 29 @ 6:00 AM - December 30 @ 5:00 PM IST",
    image: eventImg3,
  },
  {
    title: "ICAMME 2024 - Advances in Material and Manufacturing",
    date: "December 14th - December 16th, 2024",
    image: eventImg4,
  },
];

const App = () => {
  return (
    <div className={classes.app}>
    <header className={classes.mainheader}>
        <h1>News & Events</h1>
      </header>
      <section className={classes.eventssection}>
        <div className={classes.sectionheader}>
          <h2>Events</h2>
          <a href="/event" className={classes.viewall}>
            View All Events
          </a>
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
          <h2>News</h2>
          <a href="/news-page" className={classes.viewall}>
            View All News
          </a>
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
