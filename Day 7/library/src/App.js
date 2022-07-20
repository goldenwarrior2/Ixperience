import React, { useState } from 'react'

import 'bootstrap/dist/css/bootstrap.css';

import BookInput from './components/BookInput';
import BookTable from './components/BookTable';

export default function App() {

  const [books, setBooks] = useState([]);

  // function that we pass to BookInput as a prop
  function onBookCreated(book) {
    // create empty book array, add all old books + new book to it
    const newBooks = [];
    for (let b of books) {newBooks.push(b)};
    newBooks.push(book);
    // change the state of books to the new array
    setBooks(newBooks);
  }

  return (
    <div className="container mt-5">
      <h1 className = "mt-4">Add Book: </h1>
      <BookInput onBookCreated={onBookCreated}></BookInput>
      <BookTable books={books}> </BookTable>
    </div>
  )
}
