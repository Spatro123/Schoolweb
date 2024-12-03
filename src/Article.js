import React from "react";
import classes from "./Articel.module.css";
import img from "./school.jpg";
import img2 from "./uni.jpg";
import img3 from "./uni2.jpg";

const articles = [
  {
    title: "How Do We Choose Our Political Leaders?",
    author: "Unknown Author",
    date: "N/A",
    description:
      "Wherever you might live in the world, you know what it's like when it's election time...",
    imgUrl: img, 
  },
  {
    title: "Is Social Media the Bad Guy?",
    author: "Seline Shenoy",
    date: "20.07.2018",
    description:
      "We’re living in an age of hyper-connectivity where social media is being widely used...",
    imgUrl: img2, 
  },
  {
    title: "What's Personality Got To Do With Us? A Lot",
    author: "Richard Kensinger",
    date: "27.01.2021",
    description:
      "Personality is understood as the consistent features we display in regards to our thinking...",
    imgUrl: img3,
  },
  {
    title: "The Brain of an Introvert",
    author: "Viatcheslav Wlassoff",
    date: "13.12.2020",
    description:
      "The introvert’s brain treats interactions with people at the same intensity level...",
      imgUrl: img, 
      },
  {
    title: "How Facebook Preys on Our Mental Health",
    author: "Michael Kaplan",
    date: "22.02.2018",
    description:
      "In an ironic turn, the recent controversy surrounding Facebook and Cambridge...",
      imgUrl: img3,
      },
];

function App() {
  return (
    <div className={classes.app}>
      <h1 className={classes.apptitle}>Articles</h1>
      <div className={classes.cardlist}>
        {articles.map((article, index) => (
          <div key={index} className={classes.card}>
            {article.imgUrl && (
              <img
                src={article.imgUrl}
                alt={article.title}
                className={classes.cardimage}
              />
            )}
            <div className={classes.cardcontent}>
              <h2 className={classes.cardtitle}>{article.title}</h2>
              <p className={classes.cardauthor}>By {article.author}</p>
              <p className={classes.carddate}>{article.date}</p>
              <p className={classes.carddescription}>{article.description}</p>
              <button className={classes.cardbutton}>Read more</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
