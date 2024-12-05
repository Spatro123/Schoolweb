import React, { useState } from "react";
import classes from "./NoticePage.module.css";

const NoticePage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const noticesPerPage = 5; // Number of notices per page

  const notices = [
    { id: 1, title: "Ph.D Notification of MADHUSMITA MOHAPATRA in Biotechnology", date: "11-10-2024" },
    { id: 2, title: "Ph.D Notification of HEISNAM RAMESHWARI DEVI in Biotechnology", date: "11-10-2024" },
    { id: 3, title: "Ph.D Notification of MUTHUKUDA ARACHCHIGE DONA SHIROMA JEEVA SHIRAJANIE in Law", date: "11-10-2024" },
    { id: 4, title: "SCHEDULE FOR ANNUAL EXAMINATION-2024 (3rd Professional Part-I MBBS Programme)", date: "11-10-2024" },
    { id: 5, title: "ENROLLMENT DATES FOR ANNUAL EXAMINATION-2024 (3rd Professional Part-I MBBS Programme)", date: "11-10-2024" },
    { id: 6, title: "SCHEDULE FOR AUTUMN END SEMESTER EXAMINATION-2024 (1st/3rd/5th/7th/9th Semester B.A.LLB/BBA.LLB/B.SC.LLB & 1st/3rd Semester LL.M Programmes)", date: "11-10-2024" },
    { id: 7, title: "REGISTRATION FOR AUTUMN END SEMESTER EXAMINATION-2024 (1st/3rd/5th/7th/9th Semester B.A.LLB/BBA.LLB/B.SC.LLB & 1st/3rd Semester LL.M Programmes)", date: "11-10-2024" },
    { id: 8, title: "Ph.D Notification of SUBHASHREE DARSHANA in Computer Science & Engineering", date: "11-10-2024" },
    { id: 9, title: "SCHEDULE FOR AUTUMN END SEMESTER EXAMINATION-2024 (1st Semester B.Tech Programme)", date: "11-10-2024" },
    { id: 10, title: "REGISTRATION FOR AUTUMN END SEMESTER EXAMINATION-2024 (1st Semester B.Tech Programme)", date: "11-10-2024" },
  ];

  const filteredNotices = notices.filter((notice) =>
    notice.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredNotices.length / noticesPerPage);
  const startIndex = (currentPage - 1) * noticesPerPage;
  const currentNotices = filteredNotices.slice(startIndex, startIndex + noticesPerPage);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

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
      <div className={classes.noticeList}>
        <div className={`${classes.noticeRow} ${classes.headerRow}`}>
          <div className={classes.noticeId}>Notice ID</div>
          <div className={classes.noticeTitle}>Subject</div>
          <div className={classes.noticeAction}>View PDF</div>
          <div className={classes.noticeDate}>Date</div>
        </div>
        {currentNotices.length > 0 ? (
          currentNotices.map((notice) => (
            <div key={notice.id} className={classes.noticeRow}>
              <div className={classes.noticeId}>{`Notice ID - ETC-${String(notice.id).padStart(3, "0")}`}</div>
              <div className={classes.noticeTitlesub}>{notice.title}</div>
              <div className={classes.noticeAction}>
                <button className={classes.viewPdfButton}>View PDF</button>
              </div>
              <div className={classes.noticeDate}>{notice.date}</div>
            </div>
          ))
        ) : (
          <div className={classes.noResult}>No notices found.</div>
        )}
      </div>
      <div className={classes.pagination}>
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default NoticePage;
