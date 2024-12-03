import React, { useState } from 'react';
import classes from './RulesandRegulations.module.css';

const RulesAndRegulations = () => {
  const [activeCategory, setActiveCategory] = useState(null);

  const categories = [
    {
      title: "Policies",
      items: [
        { name: "Sustainability Policy", pdfLink: "/pdfs/sustainability-policy.pdf" },
        { name: "Policy Against Smoking, Drug Abuse and Alcohol Consumption", pdfLink: "/pdfs/smoking-drug-policy.pdf" },
        { name: "University policy for good food in the campus", pdfLink: "/pdfs/good-food-policy.pdf" },
        { name: "Policy Against Ragging and Harassment", pdfLink: "/pdfs/ragging-harassment-policy.pdf" },
        { name: "Grievance Redressal Policy", pdfLink: "/pdfs/grievance-policy.pdf" },
        { name: "Equal Opportunities Cell", pdfLink: "/pdfs/equal-opportunities.pdf" },
        { name: "Leave Rule", pdfLink: "/pdfs/leave-rule.pdf" },
        { name: "Research and Development Policy", pdfLink: "/pdfs/research-policy.pdf" },
        { name: "Code of Conduct", pdfLink: "/pdfs/code-of-conduct.pdf" },
        { name: "Code of Ethics", pdfLink: "/pdfs/code-of-ethics.pdf" },
        { name: "Code of Ethics for Research", pdfLink: "/pdfs/research-ethics.pdf" },
        { name: "Consultancy Policy", pdfLink: "/pdfs/consultancy-policy.pdf" },
        { name: "HR Policy", pdfLink: "/pdfs/hr-policy.pdf" },
        { name: "Equal Opportunity Policy", pdfLink: "/pdfs/equal-opportunity-policy.pdf" },
        { name: "E-Governance Policy", pdfLink: "/pdfs/egovernance-policy.pdf" },
        { name: "Energy Policy", pdfLink: "/pdfs/energy-policy.pdf" },
        { name: "Student Mentoring and Counselling Policy", pdfLink: "/pdfs/student-mentoring-policy.pdf" },
        { name: "Poverty Reduction Policy", pdfLink: "/pdfs/poverty-reduction-policy.pdf" },
        { name: "Women Application and Entry Policy", pdfLink: "/pdfs/women-application-policy.pdf" },
        { name: "Policy to protect Individuals Reporting Discrimination", pdfLink: "/pdfs/report-discrimination-policy.pdf" },
        { name: "Policy to Ensure Sustainably Harvested Aquatic Food", pdfLink: "/pdfs/aquatic-food-policy.pdf" },
        { name: "Policy On Water Discharge Guidelines and Standards", pdfLink: "/pdfs/water-discharge-policy.pdf" },
        { name: "Policy on Preventing Marine Pollution", pdfLink: "/pdfs/marine-pollution-policy.pdf" },
        { name: "Policy on Hazardous Waste Disposal", pdfLink: "/pdfs/hazardous-waste-policy.pdf" },
        { name: "Policy of Non-Discrimination Against Women", pdfLink: "/pdfs/non-discrimination-women-policy.pdf" },
        { name: "Non-Discriminatory Admissions Policy", pdfLink: "/pdfs/non-discriminatory-admissions-policy.pdf" },
        { name: "Maternity & Paternity Policy", pdfLink: "/pdfs/maternity-paternity-policy.pdf" },
        { name: "Lifelong Learning Access Policy", pdfLink: "/pdfs/lifelong-learning-policy.pdf" },
        { name: "IUCN Species Conservation Policy", pdfLink: "/pdfs/iucn-conservation-policy.pdf" },
        { name: "Equality and Diversity and Inclusion Policy", pdfLink: "/pdfs/equality-diversity-policy.pdf" },
        { name: "Disability Accommodation Policy", pdfLink: "/pdfs/disability-accommodation-policy.pdf" },
        { name: "Clean Energy Policy", pdfLink: "/pdfs/clean-energy-policy.pdf" },
        { name: "Anti-Discrimination and Anti-Harassment Policy", pdfLink: "/pdfs/anti-discrimination-policy.pdf" },
        { name: "Alien Species Mitigation Policy", pdfLink: "/pdfs/alien-species-policy.pdf" },
        { name: "Divestment Policy", pdfLink: "/pdfs/divestment-policy.pdf" }
      ]
    },
    {
      title: "Committees",
      items: [
        { name: "Anti Ragging Committee", pdfLink: "/pdfs/anti-ragging-committee.pdf" },
        { name: "Committee Against Sexual Harassment", pdfLink: "/pdfs/sexual-harassment-committee.pdf" },
        { name: "Disciplinary Committee", pdfLink: "/pdfs/disciplinary-committee.pdf" },
        { name: "Committee for SC & ST", pdfLink: "/pdfs/sc-st-committee.pdf" },
        { name: "Student Grievance Redressal Committee", pdfLink: "/pdfs/student-grievance-committee.pdf" },
        { name: "Women Council Committee", pdfLink: "/pdfs/women-council-committee.pdf" },
        { name: "Gender Champion", pdfLink: "/pdfs/gender-champion.pdf" },
        { name: "Minutes of Fee Fixation Committee", pdfLink: "/pdfs/fee-fixation-committee.pdf" },
        { name: "Internal Committee for Differently Abled", pdfLink: "/pdfs/differently-abled-committee.pdf" },
        { name: "University Research Committee", pdfLink: "/pdfs/university-research-committee.pdf" },
        { name: "Equity, Diversity, and Inclusion (EDI) Committee", pdfLink: "/pdfs/edi-committee.pdf" }
      ]
    }
  ];

  const toggleCategory = (index) => {
    setActiveCategory(activeCategory === index ? null : index);
  };

  return (
    <div className={classes.rulesAndRegulations}>
      <div className={classes.contactInfo}>
        <p><strong>National Anti-Ragging Helpline</strong></p>
        <p>24×7 Toll Free: <a href="tel:18001805522">1800-180-5522</a></p>
        <p>Email: <a href="mailto:helpline@antiragging.in">helpline@antiragging.in</a> | Website: <a href="http://www.antiragging.in" target="_blank" rel="noopener noreferrer">www.antiragging.in</a></p>
        <p><strong>UGC Monitoring Agency Centre for Youth (C4Y)</strong></p>
        <p>Email: <a href="mailto:antiragging@c4yindia.org">antiragging@c4yindia.org</a> | Website: <a href="http://www.c4yindia.org" target="_blank" rel="noopener noreferrer">www.c4yindia.org</a></p>
      </div>

      <h1>Rules & Regulations</h1>

      {categories.map((category, index) => (
        <div key={index} className={classes.category}>
          <h2 onClick={() => toggleCategory(index)} className={classes.categoryTitle}>
            {category.title} {activeCategory === index ? '-' : '+'}
          </h2>
          {activeCategory === index && (
            <ul className={classes.rulesList}>
              {category.items.map((item, idx) => (
                <li key={idx}>
                  <a href={item.pdfLink} target="_blank" rel="noopener noreferrer">{item.name}</a>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};

export default RulesAndRegulations;
