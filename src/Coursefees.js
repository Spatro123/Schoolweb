import React from 'react';
import classes from './CourseFees.module.css';

const CourseFees = () => {
  return (
    <div className={classes.courseFeesContainer}>
      <h2>COURSE FEES FOR 2025-26</h2>
      <p>
        We are pleased to present the finalized course fees for the academic year 2025-26. Fees are available in different
        payment modes: Annually, Quarterly, and Monthly (EMI). In addition to the regular classes, we are introducing
        Foundation Classes for students in standards 5th to 10th.
      </p>

      <h3>Course Fee Structure: Regular classes</h3>
      <div className={classes.tableWrapper}>
        <table className={classes.feeTable}>
          <thead>
            <tr>
              <th>Standard</th>
              <th>Duration</th>
              <th>Annual Fees (ICSE)</th>
              <th>Annual Fees (CBSE)</th>
              <th>Advance EMI (ICSE)</th>
              <th>Monthly EMI (ICSE)</th>
              <th>Advance EMI (CBSE)</th>
              <th>Monthly EMI (CBSE)</th>
              <th>Quarterly Fee (ICSE)</th>
              <th>Quarterly Fee (CBSE)</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["5th", "₹ 35,000", "₹ 30,000", "₹ 8,750", "₹ 2,917", "₹ 7,500", "₹ 2,500", "₹ 8,750", "₹ 7,500"],
              ["6th", "₹ 40,000", "₹ 35,000", "₹ 10,000", "₹ 3,333", "₹ 8,750", "₹ 2,917", "₹ 10,000", "₹ 8,750"],
              ["7th", "₹ 45,000", "₹ 40,000", "₹ 11,250", "₹ 3,750", "₹ 10,000", "₹ 3,333", "₹ 11,250", "₹ 10,000"],
              ["8th", "₹ 50,000", "₹ 45,000", "₹ 12,500", "₹ 4,167", "₹ 11,250", "₹ 3,750", "₹ 12,500", "₹ 11,250"],
              ["9th", "₹ 55,000", "₹ 50,000", "₹ 13,750", "₹ 4,583", "₹ 12,500", "₹ 4,167", "₹ 13,750", "₹ 12,500"],
              ["10th", "₹ 60,000", "₹ 55,000", "₹ 15,000", "₹ 5,000", "₹ 13,750", "₹ 4,583", "₹ 15,000", "₹ 13,750"]
            ].map((row, idx) => (
              <tr key={idx}>
                <td>{row[0]}</td>
                <td>1 year</td>
                {row.slice(1).map((cell, i) => (
                  <td key={i}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h3>Foundation Classes:</h3>
      <ul className={classes.foundationList}>
        <li><strong>Fees:</strong> ₹15,000</li>
        <li><strong>Eligibility:</strong> Only applicable for students with above 80% marks in the previous academic year.</li>
      </ul>

      <h4>Additional Course Details:</h4>
      <div className={classes.foundationList}>
        <li>Puzzle Club for Students (Based on Mathematics)</li>
        <li>Communication Development</li>
        <li>Science Club Facilities</li>
        <li>Robotics & Event Activities</li>
        <li>Smart Class Activities (For PPT Presentation)</li>
      </div>

      <h4>Payment Modes Available:</h4>
      <div className={classes.foundationList}>
        <li>Annual Payment (Full Payment for the entire year)</li>
        <li>Quarterly Payment (Paid every 3 months)</li>
        <li>Monthly Payment (EMI): Monthly payments available for both ICSE and CBSE courses, with varying advance payments.</li>
      </div>

      <p><strong>Note:</strong> Please ensure the timely payment of fees as per the selected mode to avoid any late payment charges.
      For EMI payments, the first instalment is due on the start of the course year, with subsequent payments due each month/quarter.</p>

      {/* <p className={classes.auth}>Authorised By: <br /> <strong>Essential tutorial Classes (ETC)</strong></p> */}
    </div>
  );
};

export default CourseFees;
