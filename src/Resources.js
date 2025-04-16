import React, { useState } from "react";
import img from "./filter.png";
import classes from "./Resources.module.css";

const allResources = [
  {
    id: 1,
    title: "Class 6 Maths Book",
    description: "NCERT Maths Textbook PDF",
    type: "PDF",
    class: "6",
    subject: "Maths",
    link: "https://ncert.nic.in/textbook/pdf/memh1dd.zip",
  },
  {
    id: 2,
    title: "Class 6 Science Book",
    description: "NCERT Science Textbook PDF",
    type: "PDF",
    class: "6",
    subject: "Science",
    link: "https://ncert.nic.in/textbook/pdf/hesc1dd.zip",
  },
  {
    id: 3,
    title: "Class 7 English Honeycomb",
    description: "NCERT English Textbook PDF",
    type: "PDF",
    class: "7",
    subject: "English",
    link: "https://ncert.nic.in/textbook/pdf/hesc1dd.zip",
  },
  {
    id: 4,
    title: "Class 8 Science",
    description: "NCERT Science Textbook PDF",
    type: "PDF",
    class: "8",
    subject: "Science",
    link: "https://ncert.nic.in/textbook/pdf/hesc1dd.zip",
  },
  {
    id: 5,
    title: "Class 9 Maths",
    description: "Chapter-wise NCERT Maths",
    type: "PDF",
    class: "9",
    subject: "Maths",
    link: "/resources/class9-maths.pdf",
  },
  {
    id: 6,
    title: "Class 9 English Grammar",
    description: "Tenses and sentence structures",
    type: "Video",
    class: "9",
    subject: "English",
    link: "https://www.youtube.com/watch?v=abc123xyz",
  },
  {
    id: 7,
    title: "Class 10 Science",
    description: "Download Class 10 NCERT Science",
    type: "PDF",
    class: "10",
    subject: "Science",
    link: "https://ncert.nic.in/textbook/pdf/hesc1dd.zip",
  },
  {
    id: 8,
    title: "Class 11 Chemistry",
    description: "NCERT Chemistry Textbook PDF",
    type: "PDF",
    class: "11",
    subject: "Chemistry",
    link: "https://ncert.nic.in/textbook/pdf/lech1dd.zip",
  },
  {
    id: 9,
    title: "Class 12 Physics",
    description: "NCERT Physics Textbook PDF",
    type: "PDF",
    class: "12",
    subject: "Physics",
    link: "https://ncert.nic.in/textbook/pdf/leph1dd.zip",
  },
];

const ResourcePage = () => {
  const [selectedClass, setSelectedClass] = useState("All");
  const [selectedSubject, setSelectedSubject] = useState("All");
  const [showFilters, setShowFilters] = useState(false);

  const uniqueClasses = ["All", ...new Set(allResources.map((r) => r.class))];
  const uniqueSubjects = ["All", ...new Set(allResources.map((r) => r.subject))];

  const filteredResources = allResources.filter((res) => {
    return (
      (selectedClass === "All" || res.class === selectedClass) &&
      (selectedSubject === "All" || res.subject === selectedSubject)
    );
  });

  return (
    <div className={classes.resourcePage}>
      <h1 className={classes.heading}>Study Resources</h1>
      <p className={classes.subheading}>Filter by class or subject to find the right material</p>

      <div className={classes.filterToggle}>
  <button className={classes.filterIconButton} onClick={() => setShowFilters(!showFilters)}>
    <img src={img} alt="Filter Icon" className={classes.filterIcon} />
    <span>Filters</span>
  </button>
</div>


      {showFilters && (
        <div className={classes.filters}>
          <div className={classes.filterGroup}>
            <label>Class:</label>
            {uniqueClasses.map((cls) => (
              <button
                key={cls}
                className={cls === selectedClass ? classes.active : ""}
                onClick={() => setSelectedClass(cls)}
              >
                {cls === "All" ? "All Classes" : `Class ${cls}`}
              </button>
            ))}
          </div>
          <div className={classes.filterGroup}>
            <label>Subject:</label>
            {uniqueSubjects.map((sub) => (
              <button
                key={sub}
                className={sub === selectedSubject ? classes.active : ""}
                onClick={() => setSelectedSubject(sub)}
              >
                {sub}
              </button>
            ))}
          </div>
        </div>
      )}

      <div className={classes.resourceGrid}>
        {filteredResources.map((res) => (
          <div key={res.id} className={classes.resourceCard}>
            <h3>{res.title}</h3>
            <p>{res.description}</p>
            <span className={classes.typeTag}>{res.type}</span>
            <a href={res.link} target="_blank" rel="noopener noreferrer" className={classes.viewButton}>
              {res.type === "Video" ? "Watch Now" : "Download"}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResourcePage;
