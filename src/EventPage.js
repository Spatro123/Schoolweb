import React from "react";
import classes from "./Eventcard.module.css";
import EventCard from "./Eventcard";
import sampleImage from "./Etc1.JPG";
import img from "./Etpic.JPG"
import img1 from "./Etc1.JPG";
import Img2 from "./Etpic4.JPG"


const EventPage = () => {
  const otherEvents = [
    {
      id: 1,
      title: "School Science Exhibition",
      date: "Sep 18",
      location: "Bhubaneswar",
      image: img,
    },
    {
      id: 2,
      title: "Dream World Wide Program",
      date: "Sep 17",
      location: "Bhubaneswar",
      image: img1,
    },
    {
      id: 3,
      title: "Annual Cultural Celebration",
      date: "Sep 16",
      location: "Bhubaneswar",
      image: Img2,
    },
    {
      id: 4,
      title: "Inter-College Competition",
      date: "Sep 12",
      location: "Bhubaneswar",
      image: sampleImage,
    },
    {
      id: 5,
      title: "Annual Sports Day",
      date: "Sep 11",
      location: "Bhubaneswar",
      image: img,
    },
    {
      id: 6,
      title: "Odisha Day Celebration",
      date: "Sep 10",
      location: "Bhubaneswar",
      image: img1,
    },
    {
      id: 7,
      title: "Teacher's Day Tribute",
      date: "Sep 05",
      location: "Bhubaneswar",
      image: Img2,
    },
    {
      id: 8,
      title: "Children’s Day Special",
      date: "Nov 14",
      location: "Bhubaneswar",
      image: sampleImage,
    },
  ];
  

  return (
    <div className={classes.eventPage}>
      {/* Banner Section */}
      <div className={classes.banner}>
        <img src={sampleImage} alt="Event Banner" className={classes.bannerImage} />
        <div className={classes.bannerOverlay}>
          <h1 className={classes.eventTitle}>Explore Our Events</h1>
          <p className={classes.eventBy}>Powered by Essential Classes</p>
        </div>
      </div>

      {/* Visit Us Map Section */}
      <div className={classes.mapSection}>
        <h2>Visit Us</h2>
        <p>Click the map to open in Google Maps.</p>
        <a
          href="https://maps.app.goo.gl/BX7BGnxykuqYgsUDA"
          target="_blank"
          rel="noreferrer"
          className={classes.mapLink}
        >
          <iframe
            title="Essential Tutorial Classes Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.6401007290256!2d85.77955287492815!3d20.048540120560233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a190914b2d655c7%3A0x9c6e663b41d3d842!2sKalinga%20Vihar%2C%20Bhubaneswar%2C%20Odisha%20751019!5e0!3m2!1sen!2sin!4v1687689828261!5m2!1sen!2sin"
            width="100%"
            height="300"
            style={{ border: 0, borderRadius: "12px" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </a>
      </div>

      {/* Event Tags Section */}
      <div className={classes.tagsSection}>
        <h2>Event Tags</h2>
        <div className={classes.tags}>
          <button>Bhubaneswar</button>
          <button>Campus 1</button>
          <button>Education Events</button>
          <button>Student Engagement</button>
        </div>
      </div>

      {/* Other Events Section */}
      <div className={classes.otherEvents}>
        <h2>Other Events You May Like</h2>
        <div className={classes.eventCards}>
          {otherEvents.map((event) => (
            <EventCard key={event.id} {...event} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventPage;
