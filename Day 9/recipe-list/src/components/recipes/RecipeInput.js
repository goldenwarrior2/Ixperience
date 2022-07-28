import React, { useState } from 'react'
import { Recipe } from '../../models/recipe';
import Spinner from '../common/Spinner';

export default function RecipeInput(props) {
  
  const [recipeName, setName] = useState('');
  const [saving, setSaving] = useState(false);
  const [recipeIngredients, setIngredients] = useState('');
  const [recipeInstructions, setInstructions] = useState('');

  async function onFormSubmit(event) {
    // so page doesn't reload when user submits a form
    event.preventDefault();

    const recipe = new Recipe(
      (new Date()).getTime(),
      recipeName,
      recipeIngredients,
      recipeInstructions
    );
    
    setSaving(true);
    try {
      await props.onRecipeCreated(recipe);
    } catch (err) {
      console.log(err);
    }
    setSaving(false);

    setName('');
    setIngredients('');
    setInstructions('');
  }

  return (
    <div className='mt-4'>
      <form onSubmit={onFormSubmit}>
        <div className='mb-3'>
          <input
            value={recipeName}
            onChange={(e) => setName(e.target.value)}
            type="text"
            className="form-control"
            placeholder="Recipe name"/>
        </div>
        <div className="mb-3 input-group">
        <textarea
          value={recipeIngredients}
          onChange={(e) => setIngredients(e.target.value)}
          type='text'
          className='form-control'
          placeholder='Recipe Ingredients'>
        </textarea>
        </div>
        <div className='mb-3 input-group'>
          <textarea
            value={recipeInstructions}
            onChange={(e) => setInstructions(e.target.value)}
            type='text'
            className='form-control'
            placeholder='Recipe Instructions'>
          </textarea>
        </div>
        <div className='d-grid'>
          <button
            type='submit'
            className='btn btn-outline-warning'>
              {
                saving ?
                <Spinner variant='primary'></Spinner>
                :
                'Submit'
              }
          </button>
        </div>
      </form>
    </div>
  )
}
