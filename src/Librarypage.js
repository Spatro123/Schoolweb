import React from "react";
import classes from "./Library.module.css";

function App() {
  return (
    <div className={classes.librarycontainer}>
      <header className={classes.libraryheader}>
        <h1>Library</h1>
      </header>
      <main className={classes.librarycontent}>
        <section className={classes.librarysection}>
          <h2>About Library</h2>
          <ul>
            <li>There is a large library hall in the school.</li>
            <li>Students are encouraged to read books of their choice for pleasure and information.</li>
            <li>Students from Std. I to V are made to read story books in the library only.</li>
            <li>Students from Std. IV upwards are issued books.</li>
            <li>Books once issued are to be properly cared for and returned within seven days of the date of issue.</li>
            <li>A fine of Rs. 10/- is charged after the expiry of the due date when the book is deposited.</li>
            <li>In case of loss or damage of books, double the price of the book is to be deposited.</li>
            <li>No book is issued to students without the school diary.</li>
            <li>Reference books and encyclopedias are meant for reading in the library only.</li>
            <li>The library remains open from 7:30 a.m. to 1:30 p.m. on every working day.</li>
          </ul>
        </section>
        <section className={classes.librarysection}>
          <h2>Library Rules</h2>
          <ul>
            <li>Silence is a must in the library.</li>
            <li>Books once issued are to be properly cared for and returned within seven days from the date of issue.</li>
            <li>A fine of Rs. 10/- will be charged after the expiry of the due date if the book is not returned.</li>
            <li>If the date of return happens to be a holiday, return the books on the next working day.</li>
            <li>Absence is not an excuse for delay in return of the book.</li>
            <li>In case of loss or damage of books, the cost of the book will be extracted from the student.</li>
            <li>Any sort of marking on the book is strongly forbidden and violation in this regard will be fined.</li>
            <li>Everyone should examine the books carefully at the time of issue of books and report to the librarian if there is any mark or damage.</li>
            <li>One can borrow only one book at a time.</li>
            <li>One-page summary of the book read is to be written by the student and submitted to the librarian.</li>
            <li>Junior class children will be made to read story books in the library only.</li>
            <li>Students are not allowed to bring their bags or personal belongings to the library.</li>
            <li>Library cards must be maintained properly.</li>
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
