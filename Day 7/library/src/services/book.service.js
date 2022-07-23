import {
  collection,
  addDoc,
  query,
  getDocs, 
} from 'firebase/firestore';

import { firestore } from '../firebase/firebase';
import { Book } from '../models/book';

class BookService {

  async createBook(book) {
    // get a reference to the collection we are adding to
    const collectionReference = collection(firestore, 'books');
    // get a reference to the book we just added
    const docRef = await addDoc(collectionReference, {
      title: book.title,
      author: book.author,
      isbn: book.isbn
    });
    // set the book id to the new firebase id that was given to it
    book.id = docRef.id;
    // return the book with the new id
    return book;
  }

  async readBooks() {
    // get a reference to the collection we want to read from
    const collectionReference = collection(firestore, 'books');
    // fetch all the docs within that collection
    const q = query(collectionReference);
    // get all the docs from the collection
    const querySnapshot = await getDocs(q);

    const books = [];

    // loop through all the documents and get the data for each book and add it to our list of books and then return the list of books
    querySnapshot.forEach((doc) => {
      
      const data = doc.data();
      const book = new Book(
        doc.id,
        data.title,
        data.author,
        data.isbn
      );
      books.push(book);
    });

    return books;
  }

  async updateTask(task) {

  }

  async deleteTask(task) {

  }
}

const service = new BookService();
export default service;