import React, { useState, useEffect} from 'react'

import 'bootstrap/dist/css/bootstrap.css';

import BookInput from './components/BookInput';
import BookTable from './components/BookTable';

import bookService from './services/book.service.js';

export default function App() {

  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchBooks();
  }, []);

  async function fetchBooks() {
    try {
      const books = await bookService.readBooks();
       setBooks(books);
    } catch (err) {
      console.log(err);
    }
  }

  // function that we pass to BookInput as a prop
  async function onBookCreated(book) {

    //create a book in firebase and set our book to it
    try {
      book = await bookService.createBook(book);

      // create empty book array, add all old books + new book to it
      const newBooks = [...books, book];
      setBooks(newBooks);
    } catch (err) {
      console.log(err);
    }
  }


  return (
    <div className="container mt-5">
      <h1 className = "mt-4">Add Book: </h1>
      <BookInput onBookCreated={onBookCreated}></BookInput>
      <BookTable books={books}> </BookTable>
    </div>
  )
}
