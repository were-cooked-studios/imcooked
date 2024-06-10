const recipes = {
    "burger": ["bread", "meat", "lettuce", "tomato", "cheese"],
    "chicken fried rice": ["chicken", "rice", "soy sauce", "vegetables"],
    "chicken alfredo pasta": ["chicken", "pasta", "alfredo sauce"],
    // Add other recipes here...
};

const recipeInstructions = {
    "burger": "1. Cook the meat patty. 2. Toast the bread. 3. Assemble with lettuce, tomato, and cheese.",
    "chicken fried rice": "1. Cook the chicken. 2. Stir-fry vegetables. 3. Add cooked rice and soy sauce.",
    "chicken alfredo pasta": "1. Cook the chicken. 2. Boil the pasta. 3. Mix with Alfredo sauce.",
    // Add other recipe instructions here...
};

const recipeImages = {
    "burger": "https://preview.redd.it/1b1nwi90rs7a1.jpg?auto=webp&s=1928ad163d819b7936a3b5288e8d90eddba72746",
    "chicken fried rice": "https://photos.bigoven.com/recipe/hero/chicken-fried-rice-54.jpg?h=300&w=300",
    "chicken alfredo pasta": "https://via.placeholder.com/50",
    // Add other recipe images here...
};

const ingredientList = document.getElementById('ingredient-list');
const newIngredientInput = document.getElementById('new-ingredient');
const recipesDiv = document.getElementById('recipes');
const recipeInstructionsDiv = document.getElementById('recipe-instructions');
const additionalIngredientsDiv = document.getElementById('additional-ingredients');
let ingredients = [];

newIngredientInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        const ingredient = event.target.value.trim();
        if (ingredient && !ingredients.includes(ingredient)) {
            ingredients.push(ingredient);
            updateIngredientList();
        }
        event.target.value = '';
    }
});

function updateIngredientList() {
    ingredientList.innerHTML = '';
    ingredients.forEach((ingredient, index) => {
        const li = document.createElement('li');
        li.textContent = ingredient.toUpperCase();
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
                showRecipeInstructions(recipe);
            });
            recipesDiv.appendChild(recipeElement);
        } else if (missingIngredients.length === 1) {
            const suggestionElement = document.createElement('div');
            suggestionElement.classList.add('suggestion');
            const img = document.createElement('img');
            img.src = recipeImages[recipe] || "https://via.placeholder.com/50";
            const text = document.createElement('span');
            text.textContent = `${recipe} (add ${missingIngredients[0]})`;
            suggestionElement.appendChild(img);
            suggestionElement.appendChild(text);
            suggestionElement.addEventListener('click', () => {
                showRecipeInstructions(recipe);
            });
            additionalIngredientsDiv.appendChild(suggestionElement);
        }
    });
});

function showRecipeInstructions(recipe) {
    recipeInstructionsDiv.textContent = recipeInstructions[recipe];
}
