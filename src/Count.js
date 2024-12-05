import React from "react";
import CountUp from "react-countup"; 
import { useInView } from "react-intersection-observer";
import classes from "./Count.module.css";
import studentIcon from "./reading-book (1).png";
import coursesIcon from "./graduated.png";
import eventsIcon from "./event.png";
import skillIcon from "./skill.png";

const data = [
  { icon: studentIcon, value: 20000, label: "Students" },
  { icon: coursesIcon, value: 80, label: "Courses" },
  { icon: eventsIcon, value: 850, label: "Events" },
  { icon: skillIcon, value: 12000, label: "Skill Courses" },
];

const StatsSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Animation should only trigger once
    threshold: 0.2, // Start animation when 20% of the section is visible
  });

  return (
    <div className={classes.statscontainer} ref={ref}>
      <h2>Why Choose Us</h2>
      <div className={classes.statsrow}>
        {data.map((item, index) => (
          <div key={index} className={classes.statcard}>
            <img src={item.icon} alt={item.label} className={classes.staticon} />
            <h3>
              {inView && (
                <CountUp
                  start={0}
                  end={item.value}
                  duration={2} // Animation duration in seconds
                  separator=","
                  suffix={item.label.includes("Students") || item.label.includes("Courses") ? "+" : ""}
                />
              )}
            </h3>
            <p>{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsSection;
