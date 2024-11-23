import {useState} from 'react';

function RecipeGenerator() {
    const [ingredients, setIngredients] = useState('');
    const [cuisine, setCuisine] = useState('any');
    const[dietaryRestrictions, setDietaryRestrictions] = useState('');
    const [recipe, setRecipe] = useState('');

    const createRecipe = async () => {
        try{
            const response = await fetch(`http://localhost:8082/recipe-creator?ingredients=${ingredients}&cuisine=${cuisine}&dietaryRestrictions=${dietaryRestrictions}`);
            const data = await response.text();
            setRecipe(data);
            console.log("Recipe: ", data);
        }
        catch(error){
            console.error("Error generating recipe: ", error);
        }
    };

    return (
        <div>
            <h1>Generate cool recipes!!!</h1>
            <input
                type='text'
                value={ingredients}
                onChange={(e) => setIngredients(e.target.value)}
                placeholder='Enter ingredients (comma separated)'
            />
            <input
                type='text'
                value={cuisine}
                onChange={(e) => setCuisine(e.target.value)}
                placeholder='Enter cuisine type'
            />

            <input
                type='text'
                value={dietaryRestrictions}
                onChange={(e) => setDietaryRestrictions(e.target.value)}
                placeholder='Enter dietary restrictions'
            />
                
            <button onClick={createRecipe}>Create Recipe</button>
            <div className='output'>
                <pre className='recipe-text'>{recipe}</pre>
            </div>
            
            </div>


        
        
    );
}

export default RecipeGenerator;