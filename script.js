document.addEventListener('DOMContentLoaded', function() {
    const fridge = [];
    const recipes = {
        'Peanut Butter and Jelly Sandwich': ['bread', 'jelly', 'peanut butter'],
        'Lemonade': ['sugar', 'water', 'lemons'],
        "
        // Add more recipes here
    };

    const ingredientList = document.getElementById('ingredient-list');
    const newIngredientInput = document.getElementById('new-ingredient');
    const recipeList = document.getElementById('recipe-list');
    const generateButton = document.getElementById('generate-recipes');

    function renderFridge() {
        ingredientList.innerHTML = '';
        fridge.forEach((ingredient, index) => {
            const li = document.createElement('li');
            li.className = 'ingredient';
            const span = document.createElement('span');
            span.textContent = ingredient;
            const button = document.createElement('button');
            button.textContent = 'x';
            button.addEventListener('click', () => {
                fridge.splice(index, 1);
                renderFridge();
            });
            li.appendChild(span);
            li.appendChild(button);
            ingredientList.appendChild(li);
        });
    }

    newIngredientInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            const newIngredient = event.target.value.trim().toLowerCase();
            if (newIngredient && !fridge.includes(newIngredient)) {
                fridge.push(newIngredient);
                renderFridge();
                event.target.value = '';
            }
        }
    });

    generateButton.addEventListener('click', function() {
        recipeList.innerHTML = '';
        for (const recipe in recipes) {
            const ingredientsNeeded = recipes[recipe];
            const canMake = ingredientsNeeded.every(ingredient => fridge.includes(ingredient));
            if (canMake) {
                const li = document.createElement('li');
                li.textContent = recipe;
                recipeList.appendChild(li);
            }
        }
    });

    renderFridge();
});
