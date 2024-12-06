import React, { useState } from "react";
import classes from "./Library.module.css";
import img1 from './bookcover.jpg';
import img2 from "./bookcover.jpg";
import img3 from "./bookcover.jpg";
import img4 from "./bookcover.jpg";
import friend from "./boy.png";

const allBooksData = {
  Home: [
    { id: 5, title: "The Alchemist", author: "Paulo Coelho", image: img1, summary: "A magical fable about following your dreams." },
    { id: 6, title: "Atomic Habits", author: "James Clear", image: img2, summary: "An easy way to build good habits and break bad ones." },
    { id: 7, title: "Dune", author: "Frank Herbert", image: img3, summary: "A science fiction masterpiece about politics and power." },
    { id: 8, title: "1984", author: "George Orwell", image: img4, summary: "A dystopian novel about surveillance and freedom." },
    { id: 9, title: "Brave New World", author: "Aldous Huxley", image: img2, summary: "A chilling dystopian vision of the future." },
  ],
  Favorites: [{ id: 1, title: "Steve Jobs", author: "Walter Isaacson", image: img1, summary: "The inspiring biography of Steve Jobs." },
    { id: 2, title: "Radical", author: "David Platt", image: img2, summary: "A call to reject materialism and embrace Jesus' teachings." },],
  "Top Books": [
    { id: 1, title: "Steve Jobs", author: "Walter Isaacson", image: img1, summary: "The inspiring biography of Steve Jobs." },
    { id: 2, title: "Radical", author: "David Platt", image: img2, summary: "A call to reject materialism and embrace Jesus' teachings." },
  ],
  Discover: [
    { id: 3, title: "Ender’s Game", author: "Orson Scott Card", image: img3, summary: "A young boy is trained to defend Earth in an intergalactic war." },
    { id: 4, title: "The Hobbit", author: "J.R.R. Tolkien", image: img4, summary: "The tale of Bilbo Baggins' epic adventure." },
  ],
};

const friends = [
  { id: 1, name: "Neil Patrick Harris", status: "Fantasy Life" },
  { id: 2, name: "Robert Downey, Jr.", status: "It’s Just a Good Day" },
  { id: 3, name: "Russell Crowe", status: "This Town" },
];

const Library = () => {
  const [allBooks, setAllBooks] = useState(allBooksData);
  const [activeCategory, setActiveCategory] = useState("Home");
  const [selectedBook, setSelectedBook] = useState(null);
  const [showAllHomeBooks, setShowAllHomeBooks] = useState(false);
  const [showAllRecommendedBooks, setShowAllRecommendedBooks] = useState(false);

  const handleSidebarClick = (category) => {
    setActiveCategory(category);
  };

  const handleBookClick = (book) => {
    setSelectedBook(book);
  };

  const handleCloseModal = () => {
    setSelectedBook(null);
  };

  const handleLikeBook = (book) => {
    setAllBooks((prev) => ({
      ...prev,
      Favorites: [...prev.Favorites, book],
    }));
    alert(`${book.title} added to Favorites!`);
  };

  return (
    <div className={classes.container}>
      <header className={classes.header}>
        <h1>LIBRARY</h1>
      </header>
      <div className={classes.content}>
      <div className={classes.sidebar}>
        <h3>Browse</h3>
        <ul>
          {Object.keys(allBooks).map((category) => (
            <li
              key={category}
              className={activeCategory === category ? classes.active : ""}
              onClick={() => handleSidebarClick(category)}
            >
              {category}
            </li>
          ))}
        </ul>
        <h3>Your Books</h3>
        <ul>
          <li>Reading</li>
          <li>Favorite Reads</li>
          <li>History</li>
        </ul>
        <h3>Shelves</h3>
        <button>Create a Shelf</button>
      </div>

      <div className={classes.mainContent}>
        <div className={classes.section}>
          <h2>{activeCategory}</h2>
          <div className={classes.booksGrid}>
            {(showAllHomeBooks
              ? allBooks.Home
              : allBooks.Home.slice(0, 5)
            ).map((book) => (
              <div
                key={book.id}
                className={classes.bookCard}
                onClick={() => handleBookClick(book)}
              >
                <img src={book.image} alt={book.title} />
                <h4>{book.title}</h4>
                <p>{book.author}</p>
                <button
                  className={classes.likeButton}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleLikeBook(book);
                  }}
                >
                  ❤️ Like
                </button>
              </div>
            ))}
          </div>
          {!showAllHomeBooks && (
            <button
              className={classes.viewAllButton}
              onClick={() => setShowAllHomeBooks(true)}
            >
              View All
            </button>
          )}
        </div>

        <div className={classes.section}>
          <h2>Recommended Books</h2>
          <div className={classes.booksGrid}>
            {(showAllRecommendedBooks
              ? allBooks["Top Books"]
              : allBooks["Top Books"].slice(0, 5)
            ).map((book) => (
              <div key={book.id} className={classes.bookCard}>
                <img src={book.image} alt={book.title} />
                <h4>{book.title}</h4>
                <p>{book.author}</p>
              </div>
            ))}
          </div>
          {!showAllRecommendedBooks && (
            <button
              className={classes.viewAllButton}
              onClick={() => setShowAllRecommendedBooks(true)}
            >
              View All
            </button>
          )}
        </div>

        <div className={classes.friendsSection}>
          <h2>Your Friends</h2>
          {friends.map((friendData) => (
            <div key={friendData.id} className={classes.friend}>
              <img src={friend} alt={friendData.name} />
              <p>
                {friendData.name} <br />
                <small>{friendData.status}</small>
              </p>
            </div>
          ))}
        </div>
      </div>

      {selectedBook && (
        <div className={classes.modal} onClick={handleCloseModal}>
          <div
            className={classes.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <h3>{selectedBook.title}</h3>
            <p>
              <strong>Author:</strong> {selectedBook.author}
            </p>
            <p>{selectedBook.summary}</p>
            <button className={classes.closeButton} onClick={handleCloseModal}>
              Close
            </button>
          </div>
        </div>
      )}
      </div>
    </div>
  );
};

export default Library;
