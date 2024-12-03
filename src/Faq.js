import React, { useState } from "react";
import classes from "./Addmission.module.css";

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "What is the last date for application?",
      answer: "The last date for application is 31st December 2024.",
    },
    {
      question: "What documents are required for admission?",
      answer:
        "You will need to upload your photograph, signature, and your latest marksheet.",
    },
    {
      question: "Is there an entrance test for all programs?",
      answer:
        "Yes, an entrance test is mandatory for all programs to ensure fair selection.",
    },
    {
      question: "How will I know if my application is successful?",
      answer:
        "Once your application is submitted, you will receive a confirmation email.",
    },
  ];

  return (
    <div className={classes.faqSection}>
      <h2 className={classes.header}>FAQs</h2>
      <div className={classes.faqList}>
        {faqData.map((faq, index) => (
          <div key={index} className={classes.faqItem}>
            <button
              className={classes.faqQuestion}
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              <span className={classes.faqToggle}>
                {activeIndex === index ? "-" : "+"}
              </span>
            </button>
            {activeIndex === index && (
              <p className={classes.faqAnswer}>{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQs;
