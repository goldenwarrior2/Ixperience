import React from 'react';

import 'bootstrap/dist/css/bootstrap.css';

import RecipeInput from './components/RecipeInput';
//import RecipeTable from './components/RecipeTable';

export default function App() {
  return (
    <div className='container mt-5'>
      <div className='card card-body'>
        <h1>Recipe List</h1>

        <RecipeInput></RecipeInput>
      </div>
    </div>
  )
}
