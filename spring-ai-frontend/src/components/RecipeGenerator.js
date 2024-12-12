import React, { useState } from 'react';

const RecipeGenerator = () => {
  const [ingredients, setIngredients] = useState('');
  const [cuisine, setCuisine] = useState('any');
  const [dietaryRestrictions, setDietaryRestrictions] = useState('');
  const [recipe, setRecipe] = useState('');

  const createRecipe = async () => {
    try {
      const response = await fetch(
        `http://localhost:8082/recipe-creator?ingredients=${ingredients}&cuisine=${cuisine}&dietaryRestrictions=${dietaryRestrictions}`
      );
      const data = await response.text();
      setRecipe(data);
      console.log("Recipe: ", data);
    } catch (error) {
      console.error("Error generating recipe: ", error);
    }
  };

  return (
    <div className="recipe-generator">
      <h1>Generate Cool Recipes</h1>
      <div className="input-container">
        <input
          type="text"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          placeholder="Enter ingredients (comma separated)"
          className="input-field"
        />
        <input
          type="text"
          value={cuisine}
          onChange={(e) => setCuisine(e.target.value)}
          placeholder="Enter cuisine type"
          className="input-field"
        />
        <input
          type="text"
          value={dietaryRestrictions}
          onChange={(e) => setDietaryRestrictions(e.target.value)}
          placeholder="Enter dietary restrictions"
          className="input-field"
        />
        <button onClick={createRecipe} className="generate-btn">
          Create Recipe
        </button>
      </div>
      <div className="output">
        <h2>Recipe:</h2>
        <pre className="recipe-text">{recipe || "Your recipe will appear here!"}</pre>
      </div>
    </div>
  );
};

export default RecipeGenerator;
