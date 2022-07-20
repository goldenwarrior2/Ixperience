import React, { useState } from 'react'

import { Book } from '../models/book';

export default function BookInput(props) {

    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [ISBN, setISBN] = useState('');

    function onFormSubmitted(event) {
      event.preventDefault();
      
      // create a new Book

      const newBook = new Book(
        (new Date()).getTime(),
         title,
         author,
         ISBN
      )

      // get onBookCreated from list of props, call it, and pass it a Book object 
      props.onBookCreated(newBook);
      setTitle('');
      setAuthor('');
      setISBN('');
    }

    return (
      <div className="mb-4">
        <form onSubmit={onFormSubmitted}>
          <h3>Title</h3>
          <div className="mb-3">
            <input
              // change value of input to title
              value={title}
              // change title to value of input
              onChange={(event) => {setTitle(event.target.value)}} 
              className="form-control"
            />
          </div>
          <h3>Author</h3>
          <div className="mb-3">
          <input
              // change value of input to author
              value={author}
              // change author to value of input
              onChange={(event) => {setAuthor(event.target.value)}} 
              className="form-control"
            />
          </div>
          <h3>ISBN#</h3>
          <div className="mb-3">
          <input
              // change value of input to ISBN
              value={ISBN}
              // change ISBN to value of input
              onChange={(event) => {setISBN(event.target.value)}} 
              type="number"
              className="form-control"
            />
          </div>
          <div className="d-grid gap-2">
            <button
              type="submit" 
              className="btn btn-outline-dark">Submit
            </button>
          </div>
        </form>
      </div>
  )
}
