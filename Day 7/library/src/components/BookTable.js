import React from 'react'

export default function BookTable(props) {

  console.log(props);

  return (
    <div className="mt-4">
      <table className="table">
        <thead>
          <tr>
            <th>Book</th>
            <th>Author</th>
            <th>ISBN#</th>
          </tr>
        </thead>
        <tbody>
          {
             props.tasks.map((book) => 
             <tr key={book.id}>
               <td>{book.title}</td>
               <td>{book.author}</td>
               <td>{book.ISBN}</td>
             </tr>
             )
          }
        </tbody>
      </table>
    </div>
  )
}
