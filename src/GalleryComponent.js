import React, { useState } from "react";
import classes from "./Gallery.module.css";
import schoolImage1 from './old-masters-picture-gallery-dresden-night.jpg';
import schoolImage2 from './Graduatio.jpg';
import image1 from './img3.jpg';
import image2 from './img4.jpg';
import image3 from './img3.jpg';
import img from './school.jpg';
import img2 from './uni.jpg';
import img3 from './uni2.jpg';
import img4 from './uni.jpg';
import img5 from './school.jpg';

const eventsData = [
  {
    id: 1,
    name: "Cultural Fest",
    image: schoolImage1,
    category: "Festivals",
  },
  {
    id: 2,
    name: "Spring Festival",
    image: image1,
    category: "Festivals",
  },
  {
    id: 3,
    name: "Science Exhibition",
    image: schoolImage2,
    category: "Academics",
  },
  {
    id: 4,
    name: "Tech Symposium",
    image: img3,
    category: "Academics",
  },
  {
    id: 5,
    name: "Research Conference",
    image: img4,
    category: "Academics",
  },
  {
    id: 6,
    name: "Sports Meet",
    image: img,
    category: "Sports",
  },
  {
    id: 7,
    name: "Inter-University Tournament",
    image: img5,
    category: "Sports",
  },
  {
    id: 8,
    name: "Alumni Meet",
    image: img2,
    category: "Meetups",
  },
  {
    id: 9,
    name: "Networking Night",
    image: image2,
    category: "Meetups",
  },
];

const Gallery = () => {
  const [filter, setFilter] = useState("All");

  const filteredEvents =
    filter === "All"
      ? eventsData
      : eventsData.filter((event) => event.category === filter);

  return (
    <div className={classes.galleryPage}>
      <h1 className={classes.title}>Gallery</h1>

      <div className={classes.filterSection}>
        <button
          className={filter === "All" ? classes.activeFilter : ""}
          onClick={() => setFilter("All")}
        >
          All
        </button>
        <button
          className={filter === "Festivals" ? classes.activeFilter : ""}
          onClick={() => setFilter("Festivals")}
        >
          Festivals
        </button>
        <button
          className={filter === "Academics" ? classes.activeFilter : ""}
          onClick={() => setFilter("Academics")}
        >
          Academics
        </button>
        <button
          className={filter === "Sports" ? classes.activeFilter : ""}
          onClick={() => setFilter("Sports")}
        >
          Sports
        </button>
        <button
          className={filter === "Meetups" ? classes.activeFilter : ""}
          onClick={() => setFilter("Meetups")}
        >
          Meetups
        </button>
      </div>

      <div className={classes.eventsGrid}>
        {filteredEvents.map((event) => (
          <div key={event.id} className={classes.eventCard}>
            <img src={event.image} alt={event.name} className={classes.image} />
            <div className={classes.eventInfo}>
              <h2>{event.name}</h2>
              <p>{event.category}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
