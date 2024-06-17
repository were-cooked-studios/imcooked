class HeadChef {
    // Base class for logging 
    log(message) {
        console.log(message);
    }
}

class IngredientChef extends HeadChef {
    constructor(ingredientListId, newIngredientInputId, clearIngredientsButtonId) {
        super();
        // Initialize ingredients and getting everything from Html also getting elements from DOM
        this.ingredients = JSON.parse(localStorage.getItem('ingredients')) || [];
        this.ingredientList = document.getElementById(ingredientListId);
        this.newIngredientInput = document.getElementById(newIngredientInputId);
        this.clearIngredientsButton = document.getElementById(clearIngredientsButtonId);
        this.updateIngredientList();
        this.clearIngredientsButton.textContent = `Clear All Ingredients (${this.ingredients.length})`;

        // Using Event listener to add ingredient when 'Enter' key is pressed and not when you just enter it
        this.newIngredientInput.addEventListener('keypress', (event) => {
            if (event.key === 'Enter') {
                this.addIngredient(event.target.value.trim());
                event.target.value = '';
            }
        });

        // so you can clear the ingredients 
        this.clearIngredientsButton.addEventListener('click', () => {
            this.clearIngredients();
        });
    }

    // adds new ingredients to the list
    addIngredient(ingredient) {
        if (ingredient && this.ingredients.every(ing => ing.toUpperCase() !== ingredient.toUpperCase())) {
            this.ingredients.push(ingredient);
            this.updateIngredientList();
            localStorage.setItem('ingredients', JSON.stringify(this.ingredients));
            this.clearIngredientsButton.textContent = `Clear All Ingredients (${this.ingredients.length})`;
            this.log(`Added ingredient: ${ingredient}`);
        } else {
            this.highlightInputField();
        }
    }

    // makes whole bar read if ingredient is already entered and moves a little bit
    highlightInputField() {
        const inputField = this.newIngredientInput;
        inputField.style.backgroundColor = "#ff877d";
        inputField.classList.add('alreadyadded');
        setTimeout(() => {
            inputField.style.backgroundColor = "white";
            inputField.classList.remove('alreadyadded');
        }, 200);
    }

    // allows when pressing x next to the word it removes the ingredient
    removeIngredient(index) {
        this.ingredients.splice(index, 1);
        this.updateIngredientList();
        localStorage.setItem('ingredients', JSON.stringify(this.ingredients));
        this.clearIngredientsButton.textContent = `Clear All Ingredients (${this.ingredients.length})`;
    }

    // Update the list of ingredients displayed in the UI
    updateIngredientList() {
        this.ingredientList.innerHTML = '';
        const fragment = document.createDocumentFragment();
        this.ingredients.sort((a, b) => a.localeCompare(b)).forEach((ingredient, index) => {
            const li = document.createElement('li');
            li.textContent = ingredient.toUpperCase();
            const button = document.createElement('button');
            button.textContent = 'X';
            button.addEventListener('click', () => {
                this.removeIngredient(index);
            });
            li.appendChild(button);
            fragment.appendChild(li);
        });
        this.ingredientList.appendChild(fragment);
    }

    // Allows you to clear all ingredients when pressing the clear all ingredients button
    clearIngredients() {
        this.ingredients = [];
        this.updateIngredientList();
        localStorage.setItem('ingredients', JSON.stringify(this.ingredients));
        this.clearIngredientsButton.textContent = `Clear All Ingredients (${this.ingredients.length})`;
    }
}

//uses inheritance so they can both use same class functions
class RecipesSousChef extends HeadChef {
    constructor(sheetUrl, recipesDivId, additionalIngredientsDivId) {
        super();
        // Initialize recipes from headchef so that sous chef can use them and gets elements from DOM
        this.SHEET_URL = sheetUrl;
        this.recipes = {};
        this.recipeInstructions = {};
        this.recipeImages = {};
        this.recipesDiv = document.getElementById(recipesDivId);
        this.additionalIngredientsDiv = document.getElementById(additionalIngredientsDivId);

        this.fetchRecipes();
    }

    // Gets the recipies from the google sheets 
    async fetchRecipes() {
        try {
            const response = await fetch(this.SHEET_URL);
            const data = await response.json();
            const rows = data.values;

            // gets the recipies and saves them 
            rows.slice(1).forEach(row => {
                const [recipe, ingredients, instructions, image] = row;
                this.recipes[recipe] = ingredients.split(', ');
                this.recipeInstructions[recipe] = instructions;
                this.recipeImages[recipe] = image;
                this.log(`Fetched recipe: ${recipe}`);
            });
        } catch (error) {
            console.error('Error fetching recipes:', error);
        }
    }

    // Creates the recipies based of the ingredients that corelate to the recipe
    generateRecipes(ingredients) {
        this.recipesDiv.innerHTML = '';
        this.additionalIngredientsDiv.innerHTML = '';
        Object.keys(this.recipes).sort((a, b) => a.localeCompare(b)).forEach(recipe => {
            const recipeIngredients = this.recipes[recipe];
            const missingIngredients = recipeIngredients.filter(ingredient => !ingredients.includes(ingredient));
            if (recipeIngredients.every(ingredient => ingredients.map(ing => ing.toUpperCase()).includes(ingredient.toUpperCase()))) {
                this.createRecipeElement(recipe);
            } else if (missingIngredients.length <= 2) {
                this.createSuggestionElement(recipe, missingIngredients);
            }
        });
    }

    // Creates recipe element to display the recipe
    createRecipeElement(recipe) {
        const recipeElement = document.createElement('div');
        recipeElement.classList.add('recipe');
        const img = document.createElement('img');
        img.src = this.recipeImages[recipe] || "https://via.placeholder.com/50";
        const text = document.createElement('span');
        text.innerHTML = recipe;
        text.classList.add('lineheight');
        recipeElement.classList.add('centeralign');
        const backbutton = document.createElement('img');
        backbutton.src = "images/minimize.png";
        backbutton.style.cssText = 'width: 20px; height: 20px; border: 0px; padding-right: 10px; display: none';

        // Giving the ability to minimize the recipe 
        backbutton.addEventListener('click', (event) => {
            event.stopPropagation();
            text.innerHTML = recipe;
            recipeElement.classList.remove('expanded');
            recipeElement.classList.add('centeralign');
            backbutton.style.display = 'none';
            recipeElement.dataset.showingInstructions = 'false';
        });

        recipeElement.appendChild(img);
        recipeElement.appendChild(text);
        recipeElement.dataset.showingInstructions = 'false';

        // So that you can see the recipe instructions
        recipeElement.addEventListener('click', () => {
            if (recipeElement.dataset.showingInstructions === 'false') {
                text.innerHTML = this.showRecipeInstructions(recipe);
                recipeElement.classList.add('expanded');
                recipeElement.classList.remove('centeralign');
                backbutton.style.display = 'block';
                recipeElement.appendChild(backbutton);
                recipeElement.dataset.showingInstructions = 'true';
            }
        });

        this.recipesDiv.appendChild(recipeElement);
    }

    // so that you are able to see missing ingredient next the the correct recipe 
    setSuggestionText(textElement, recipe, missingIngredients) {
        if (missingIngredients.length === 1) {
            textElement.textContent = `${recipe} (add ${missingIngredients[0]})`;
        } else if (missingIngredients.length === 2) {
            textElement.textContent = `${recipe} (add ${missingIngredients[0]} and ${missingIngredients[1]})`;
        }
    }

    // using an element that that the missing ingredient recipe shows up 
    createSuggestionElement(recipe, missingIngredients) {
        const suggestionElement = document.createElement('div');
        suggestionElement.classList.add('suggestion');
        const img = document.createElement('img');
        img.src = this.recipeImages[recipe] || "https://via.placeholder.com/50";
        const text = document.createElement('span');
        this.setSuggestionText(text, recipe, missingIngredients);
        suggestionElement.classList.add('centeralign');
        const backbutton = document.createElement('img');
        backbutton.src = "images/minimize.png";
        backbutton.style.cssText = 'width: 20px; height: 20px; border: 0px; padding-right: 10px; display: none';

        //so I can also minimize the intructions list 
        backbutton.addEventListener('click', (event) => {
            event.stopPropagation();
            this.setSuggestionText(text, recipe, missingIngredients);
            suggestionElement.classList.remove('expanded');
            suggestionElement.classList.add('centeralign');
            suggestionElement.classList.remove('lineheight');
            backbutton.style.display = 'none';
            suggestionElement.dataset.showingInstructions = 'false';
        });

        suggestionElement.appendChild(img);
        suggestionElement.appendChild(text);
        suggestionElement.dataset.showingInstructions = 'false';

        // to show the intructions 
        suggestionElement.addEventListener('click', () => {
            if (suggestionElement.dataset.showingInstructions === 'false') {
                text.innerHTML = this.showRecipeInstructions(recipe);
                suggestionElement.classList.add('expanded');
                suggestionElement.classList.remove('centeralign');
                suggestionElement.classList.add('lineheight');
                backbutton.style.display = 'block';
                suggestionElement.appendChild(backbutton);
                suggestionElement.dataset.showingInstructions = 'true';
            }
        });

        this.additionalIngredientsDiv.appendChild(suggestionElement);
    }

    // So I can see the full instructions properly formatted 
    showRecipeInstructions(recipe) {
        const recipeDetails = this.recipeInstructions[recipe];
        const ingredientsPart = recipeDetails.split('. ')[0];
        const instructionsPart = recipeDetails.split('. ').slice(1).join('. ');

        const ingredients = ingredientsPart.split('- ').filter(Boolean).map(instruction => `- ${instruction}`).join('<br>');
        const instructions = instructionsPart.split('. ').filter(Boolean).map((instruction, index) => `${index + 1}. ${instruction}`).join('<br><br>');
        return ((recipe.fontsize(5)).bold() + ('<br><br>') + (`${ingredients}<br><br>${instructions}`).fontsize(3));
    }
}

// Main script initialization from the google sheets 
window.addEventListener('load', () => {
    const ingredientChef = new IngredientChef('ingredient-list', 'new-ingredient', 'clear-ingredients');
    const recipesSousChef = new RecipesSousChef(`https://sheets.googleapis.com/v4/spreadsheets/${"1UM8zCP-wjmAHEIdT7o7DOq92O5pruH5odHx88yKfo7g"}/values/Sheet1?key=${"AIzaSyDlteAC9zgCiRHZVVgXYLbL1UDdTTnnYsM"}`,
        'recipes', 'additional-ingredients');

    // To generate recipes based on current ingredients
    document.getElementById('generate-recipes').addEventListener('click', () => {
        recipesSousChef.generateRecipes(ingredientChef.ingredients);
    });
});
