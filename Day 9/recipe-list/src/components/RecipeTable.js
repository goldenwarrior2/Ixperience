import React from 'react'

export default function RecipeTable(props) {

  function onRecipeRemove(recipe) {
    props.onRecipeRemove(recipe);
  }

  return (
    <div className='mt-3'>
      <table className='table'>
        <thead>
          <tr>
            <th>Recipe Name</th>
            <th>Ingredients</th>
            <th>Instructions</th>
            <th>Remove Recipe</th>
          </tr>
        </thead>
        <tbody>

          {
            props.recipes.map((recipe) =>
            <tr key={recipe.id}>
              <td>{recipe.name}</td>
              <td>{recipe.ingredients}</td>
              <td>{recipe.instructions}</td>
              <td>
                <button
                  onClick={(e) => onRecipeRemove(recipe)}
                  className='btn btn-sm btn-outline-danger'>
                  <i class="bi bi-x-circle"></i>
                </button>
              </td>
            </tr>)
          }
        </tbody>
      </table>
    </div>
  )
}
