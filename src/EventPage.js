import React from "react";
import classes from "./Eventcard.module.css";
import EventCard from "./Eventcard";
import mapImage from "./map.png";
import sampleImage from "./clg1.jpg";
import img from "./school.jpg";
import img2 from "./uni.jpg";
import img3 from "./uni2.jpg";

const EventPage = () => {
  const otherEvents = [
    { id: 1, title: "Bhubaneswar ",  date: "Sep 18", location: "Bhubaneswar", image: img },
    { id: 2, title: "Dream World Wide ",  date: "Sep 17", location: "Bhubaneswar", image: img2 },
    { id: 3, title: "Annual celbration", date: "Sep 16", location: "Bhubaneswar", image: img3 },
    { id: 4, title: "Inter College competetion",  date: "Sep 12", location: "Bhubaneswar", image: img },
    { id: 5, title: "Annual sports day",  date: "Sep 11", location: "Bhubaneswar", image: img2 },
    { id: 6, title: "Odisha Day", date: "Sep 10", location: "Bhubaneswar", image: img3 },
    { id: 7, title: "Teacher's Day", date: "Sep 05", location: "Bhubaneswar", image: img3 },
    { id: 8, title: "children's day", date: "Nov 14", location: "Bhubaneswar", image: img3 },
  ];

  return (
    <div className={classes.eventPage}>
      {/* Header with Banner */}
      <div className={classes.banner}>
        <img src={sampleImage} alt="Event Banner" className={classes.bannerImage} />
        <div className={classes.bannerOverlay}>
          <h1 className={classes.eventTitle}>All Our Events </h1>
          <p className={classes.eventBy}>Essential classes</p>
        </div>
      </div>

      <div className={classes.detailsSection}>
        <div className={classes.description}>
          <h2>Description</h2>
          <p>
            It is the grandiose vision of the Dream World Wide program to allow learning of the
            original Arabic language of the Quran easy to learn and accessible regardless of a
            person's language of origin.
          </p>
          <h3>Hours</h3>
          <p>Weekday Hours: 7 PM - 10 PM</p>
          <p>Sunday Hours: 10 AM - 3 PM</p>
          <h3>How can I contact the organizer with any question?</h3>
          <p>
            Please visit <a href="https://www.dreamworldwide.net">www.essentialclasses.com</a> and
            refer to the FAQ section for all questions and contact information.
          </p>
        </div>

        <div className={classes.mapSection}>
          <img src={mapImage} alt="Event Location Map" className={classes.mapImage} />
          <h2>Kalinga Vihar, K6, Bhubaneswar, Odisha</h2>
        </div>
      </div>

      {/* Tags Section */}
      <div className={classes.tagsSection}>
        <h2>Tags</h2>
        <div className={classes.tags}>
          <button>Bhubaneswar</button>
          <button>campus 1</button>
          <button>Campus 2</button>
          {/* <button>Jakarta Seminar</button> */}
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
