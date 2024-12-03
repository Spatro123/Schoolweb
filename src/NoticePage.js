import React, { useState } from "react";
import classes from "./NoticePage.module.css";

const NoticePage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const notices = [
    { id: 1, title: "9 - Ph.D Notification of MADHUSMITA MOHAPATRA in Biotechnology", date: "2024-11-25" },
    { id: 2, title: "8 - Ph.D Notification of HEISNAM RAMESHWARI DEVI in Biotechnology", date: "2024-11-22" },
    { id: 3, title: "7 - Ph.D Notification of MUTHUKUDA ARACHCHIGE DONA SHIROMA JEEVA SHIRAJANIE in Law", date: "2024-11-22" },
    { id: 4, title: "SCHEDULE FOR ANNUAL EXAMINATION-2024 (3rd Professional Part-I MBBS Programme)", date: "2024-11-20" },
    { id: 5, title: "ENROLLMENT DATES FOR ANNUAL EXAMINATION-2024 (3rd Professional Part-I MBBS Programme)", date: "2024-11-20" },
    { id: 6, title: "SCHEDULE FOR AUTUMN END SEMESTER EXAMINATION-2024 (1st/3rd/5th/7th/9th Semester B.A.LLB/BBA.LLB/B.SC.LLB & 1st/3rd Semester LL.M Programmes)", date: "2024-11-14" },
    { id: 7, title: "REGISTRATION FOR AUTUMN END SEMESTER EXAMINATION-2024 (1st/3rd/5th/7th/9th Semester B.A.LLB/BBA.LLB/B.SC.LLB & 1st/3rd Semester LL.M Programmes)", date: "2024-11-14" },
    { id: 8, title: "6 - Ph.D Notification of SUBHASHREE DARSHANA in Computer Science & Engineering", date: "2024-11-13" },
    { id: 9, title: "SCHEDULE FOR AUTUMN END SEMESTER EXAMINATION-2024 (1st Semester B.Tech Programme)", date: "2024-11-11" },
    { id: 10, title: "REGISTRATION FOR AUTUMN END SEMESTER EXAMINATION-2024 (1st Semester B.Tech Programme)", date: "2024-11-11" },
  ];

  const filteredNotices = notices.filter((notice) =>
    notice.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={classes.container}>
      <h1 className={classes.title}>Notices</h1>
      <input
        type="text"
        placeholder="Search notices..."
        className={classes.searchBar}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <table className={classes.noticeTable}>
        <thead>
          <tr>
            <th>SL No</th>
            <th>Subject</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {filteredNotices.length > 0 ? (
            filteredNotices.map((notice, index) => (
              <tr key={notice.id}>
                <td>{index + 1}</td>
                <td>{notice.title}</td>
                <td>{notice.date}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3" className={classes.noResult}>
                No notices found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default NoticePage;
