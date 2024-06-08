const recipes = {
    "burger": ["bread", "meat", "lettuce", "tomato", "cheese"],
    "chicken fried rice": ["chicken", "rice", "soy sauce", "vegetables"],
    "chicken alfredo pasta": ["chicken", "pasta", "alfredo sauce"],
    "tomato sauce pasta": ["pasta", "tomato sauce"],
    "steak": ["steak"],
    "shawarma": ["chicken", "pita bread", "garlic sauce", "vegetables"],
    "ramen": ["noodles", "broth", "vegetables", "meat"],
    "pizza": ["pizza dough", "tomato sauce", "cheese", "toppings"],
    "mashed potatoes": ["potatoes", "butter", "milk"],
    "tandoori chicken": ["chicken", "yogurt", "spices"],
    "rash malai sweets": ["milk", "sugar", "saffron"],
    "piyaju (bengali fried food)": ["lentils", "onion", "spices"]
};

const recipeInstructions = {
    "burger": "1. Cook the meat patty. 2. Toast the bread. 3. Assemble with lettuce, tomato, and cheese.",
    "chicken fried rice": "1. Cook the chicken. 2. Stir-fry vegetables. 3. Add cooked rice and soy sauce.",
    "chicken alfredo pasta": "1. Cook the chicken. 2. Boil the pasta. 3. Mix with Alfredo sauce.",
    "tomato sauce pasta": "1. Boil the pasta. 2. Heat the tomato sauce. 3. Combine pasta and sauce.",
    "steak": "1. Season the steak. 2. Cook to desired doneness.",
    "shawarma": "1. Marinate and cook the chicken. 2. Assemble with pita bread and vegetables.",
    "ramen": "1. Boil the noodles. 2. Prepare the broth. 3. Add vegetables and meat.",
    "pizza": "1. Prepare the dough. 2. Add tomato sauce and toppings. 3. Bake in the oven.",
    "mashed potatoes": "1. Boil the potatoes. 2. Mash with butter and milk.",
    "tandoori chicken": "1. Marinate the chicken in yogurt and spices. 2. Cook in oven or grill.",
    "rash malai sweets": "1. Boil milk with sugar and saffron. 2. Shape into balls and soak in milk.",
    "piyaju (bengali fried food)": "1. Soak and grind lentils. 2. Mix with onions and spices. 3. Deep fry."
};

const ingredientList = document.getElementById('ingredient-list');
const newIngredientInput = document.getElementById('new-ingredient');
const recipesDiv = document.getElementById('recipes');
const recipeInstructionsDiv = document.getElementById('recipe-instructions');
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
        li.textContent = ingredient;
        const button = document.createElement('button');
        button.textContent = 'x';
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
    Object.keys(recipes).forEach(recipe => {
        const recipeIngredients = recipes[recipe];
        if (recipeIngredients.every(ingredient => ingredients.includes(ingredient))) {
            const recipeElement = document.createElement('div');
            recipeElement.textContent = recipe;
            recipeElement.classList.add('recipe');
            recipeElement.addEventListener('click', () => {
                showRecipeInstructions(recipe);
            });
            recipesDiv.appendChild(recipeElement);
        }
    });
});

function showRecipeInstructions(recipe) {
    recipeInstructionsDiv.textContent = recipeInstructions[recipe];
}
