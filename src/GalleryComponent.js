import React, { useState } from "react";
import classes from "./Gallery.module.css";
import schoolImage1 from "./Stu.JPG";
import schoolImage2 from "./Stu3.JPG";
import img from "./Etpic.JPG";
import img2 from "./Etpic2.JPG";
import img3 from "./Etpic4.JPG";
import img4 from "./Etpic2.JPG";
import img5 from "./Etpic8.JPG";
import image1 from "./Banner5.JPG";
import image2 from "./Banner3.JPG";
import image3 from "./Banner4.JPG";
import pic from "./pic1.jpeg";
import pic1 from "./Pic2.jpeg";
import pic2 from "./Pic3.jpeg";
import pic3 from "./Pic4.jpeg";
import pic4 from "./Pic5.jpeg";
import pic5 from "./Pic6.jpeg";
import pic6 from "./Pic7.jpeg";
import pic7 from "./Pic8.jpeg";

const eventsData = [
  { id: 1, name: "Cultural Fest", image: schoolImage1 },
  {
    id: 2,
    name: "Quiz Mania & Art Fest",
    images: [pic, pic1, pic2, pic3, pic4, pic5, pic6, pic7],
  },
  {
    id: 3,
    name: "Science Exhibition",
    image: schoolImage2,
  },
  { id: 4, name: "Tech Symposium", image: img3 },
  { id: 5, name: "Research Conference", image: img4 },
  { id: 6, name: "Sports Meet", image: img },
  {
    id: 7,
    name: "Inter-University Tournament",
    image: img5,
  },
  { id: 8, name: "Alumni Meet", image: img2 },
  { id: 9, name: "Networking Night", image: image2 },
];

const Gallery = () => {
  const [selectedImages, setSelectedImages] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const handleNameClick = (event) => {
    if (event.images) {
      setSelectedImages(event.images);
    } else if (event.image) {
      setSelectedImages([event.image]);
    } else {
      setSelectedImages([]);
    }
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedImages([]);
  };

  return (
    <div className={classes.galleryPage}>
      <h1 className={classes.title}>Gallery</h1>

      <div className={classes.eventsGrid}>
        {eventsData.map((event) => (
          <div key={event.id} className={classes.eventCard}>
            <img
              src={event.images ? event.images[0] : event.image}
              alt={event.name}
              className={classes.image}
            />
            <div className={classes.eventInfo}>
              <h2
                className={classes.eventName}
                onClick={() => handleNameClick(event)}
              >
                {event.name}
              </h2>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {showModal && (
        <div className={classes.modalOverlay} onClick={closeModal}>
          <div className={classes.modalContent} onClick={(e) => e.stopPropagation()}>
            <button className={classes.closeBtn} onClick={closeModal}>
              ✖
            </button>
            <div className={classes.modalImages}>
              {selectedImages.map((imgSrc, index) => (
                <img key={index} src={imgSrc} alt={`Event ${index + 1}`} className={classes.modalImage} />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
