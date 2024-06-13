const SHEET_URL = `https://sheets.googleapis.com/v4/spreadsheets/${"1UM8zCP-wjmAHEIdT7o7DOq92O5pruH5odHx88yKfo7g"}/values/Sheet1?key=${"AIzaSyDlteAC9zgCiRHZVVgXYLbL1UDdTTnnYsM"}`;

let recipes = {};
let recipeInstructions = {};
let recipeImages = {};

const ingredientList = document.getElementById('ingredient-list');
const newIngredientInput = document.getElementById('new-ingredient');
const recipesDiv = document.getElementById('recipes');
const recipeInstructionsDiv = document.getElementById('recipe-instructions');
const additionalIngredientsDiv = document.getElementById('additional-ingredients');
let ingredients = [];

window.addEventListener('load', () => {
    const storedIngredients = localStorage.getItem('ingredients');
    if (storedIngredients) {
        ingredients = JSON.parse(storedIngredients);
        updateIngredientList();
    }
});

newIngredientInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        const ingredient = event.target.value.trim();
        if (ingredient && !ingredients.includes(ingredient)) {
            ingredients.push(ingredient);
            updateIngredientList();
            //sets the localStorage to remember the list the user has inputted
            localStorage.setItem('ingredients', JSON.stringify(ingredients));
        }
        event.target.value = '';
    }
});

function updateIngredientList() {
    ingredientList.innerHTML = '';
    //sorts alphabetically
    ingredients.sort((a, b) => a.localeCompare(b));
    ingredients.forEach((ingredient, index) => {
        //list of ingredients user has inputted
        const li = document.createElement('li');
        li.textContent = ingredient.toUpperCase();
        //delete item buttons
        const button = document.createElement('button');
        button.textContent = 'X';
        button.addEventListener('click', () => {
            ingredients.splice(index, 1);
            updateIngredientList();
            
        });
        li.appendChild(button);
        ingredientList.appendChild(li);
    });
}

document.getElementById('clear-ingredients').addEventListener('click', function() {
    ingredients.length = 0;
    updateIngredientList();
});
//AOIDJOWIAJDOAIWJDOPWAJDAWDIJAWDJAWPDIAWDPOJAWDPOIJAWDPOI



document.getElementById('generate-recipes').addEventListener('click', function() {
    recipesDiv.innerHTML = '';
    additionalIngredientsDiv.innerHTML = '';
    Object.keys(recipes).forEach(recipe => {
        const recipeIngredients = recipes[recipe];
        const missingIngredients = recipeIngredients.filter(ingredient => !ingredients.includes(ingredient));
        if (recipeIngredients.every(ingredient => ingredients.includes(ingredient))) {
            const recipeElement = document.createElement('div');
            recipeElement.classList.add('recipe');
            const img = document.createElement('img');
            img.src = recipeImages[recipe] || "https://via.placeholder.com/50";
            const text = document.createElement('span');
            text.textContent = recipe;
            recipeElement.appendChild(img);
            recipeElement.appendChild(text);
            recipeElement.addEventListener('click', () => {
                text.textContent = recipeInstructions[recipe];
            });
            recipesDiv.appendChild(recipeElement);
        } else if (missingIngredients.length <= 2) {
            const suggestionElement = document.createElement('div');
            suggestionElement.classList.add('suggestion');
            const img = document.createElement('img');
            img.src = recipeImages[recipe] || "https://via.placeholder.com/50";
            const text = document.createElement('span');
            if (missingIngredients.length === 1){
                text.textContent = `${recipe} (add ${missingIngredients[0]})`;
            } else if (missingIngredients.length === 2){
                text.textContent = `${recipe} (add ${missingIngredients[0]} and ${missingIngredients[1]})`;
            }
            
            suggestionElement.appendChild(img);
            suggestionElement.appendChild(text);
            suggestionElement.addEventListener('click', () => {
                text.textContent = recipeInstructions[recipe];
            });
            additionalIngredientsDiv.appendChild(suggestionElement);
        }
    });
});

function showRecipeInstructions(recipe) {
    recipeInstructionsDiv.textContent = recipeInstructions[recipe];
}

async function fetchRecipes() {
    try {
        const response = await fetch(SHEET_URL);
        const data = await response.json();
        const rows = data.values;

        // Skip the header row
        rows.slice(1).forEach(row => {
            const [recipe, ingredients, instructions, image] = row;
            recipes[recipe] = ingredients.split(', ');
            recipeInstructions[recipe] = instructions;
            recipeImages[recipe] = image;
        });
    } catch (error) {
        console.error('Error fetching recipes:', error);
    }
}

// Fetch recipes when the page loads
fetchRecipes();
