import React, { useState, useEffect } from 'react'

import RecipeInput from './RecipeInput';
import RecipeTable from './RecipeTable';

import recipeService from '../../services/recipe.service';

export default function RecipePage() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetchRecipes();
  }, []);

  async function fetchRecipes() {
    try {
      const recipes = await recipeService.readRecipes();
      setRecipes(recipes);
    } catch (err) {
      console.log(err)
    }
  }

  async function onRecipeCreated(recipe) {
    try {
      recipe = await recipeService.createRecipe(recipe);
       // update recipe list with new recipe
      setRecipes([...recipes, recipe]);
    } catch (err) {
      console.log(err);
    }
  }

  async function onRecipeRemove(recipe) {

    try {
      await recipeService.deleteRecipe(recipe);

      const newRecipes = recipes.filter((r) => {
        // return a list of all the recipes that are not the one we are trying to remove
        return r.id !== recipe.id;
      })
      setRecipes(newRecipes);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className='container mt-5'>
      <div className='card card-body'>
        <h1>Recipe List</h1>

        <RecipeInput onRecipeCreated={onRecipeCreated}></RecipeInput>
      </div>
      <div className='mt-5 card card-body'>
        <RecipeTable recipes={recipes} onRecipeRemove={onRecipeRemove}></RecipeTable>
      </div>
    </div>
  
  )
}
