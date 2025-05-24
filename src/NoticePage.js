import React, { useState } from "react";
import classes from "./NoticePage.module.css";

const NoticePage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const noticesPerPage = 5; // Number of notices per page

   const notices = [
    { id: 1, title: "Class 10 Science Doubt Clearing Session - Batch A", date: "01-10-2024" },
    { id: 2, title: "Mock Test Series Begins for Class 9 - Schedule Released", date: "02-10-2024" },
    { id: 3, title: "Parent-Teacher Meeting for Class 12 Students", date: "03-10-2024" },
    { id: 4, title: "Notice: Change in Timing for Class 11 Physics Classes", date: "04-10-2024" },
    { id: 5, title: "Special Seminar on Career Planning after Class 10", date: "05-10-2024" },
    { id: 6, title: "Event: Science Quiz Competition for Class 8 to 10", date: "06-10-2024" },
    { id: 7, title: "Holiday Notice: Institute Closed on 7th Oct (Festive Break)", date: "07-10-2024" },
    { id: 8, title: "Updated Syllabus Outline for Class 11 Math - Term 2", date: "08-10-2024" },
    { id: 9, title: "Assignment Submission Deadline Extended - Class 12 Biology", date: "09-10-2024" },
    { id: 10, title: "Workshop on Time Management Skills for Class 9 & 10", date: "10-10-2024" },
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
