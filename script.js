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
    "piyaju (bengali fried food)": ["lentils", "onion", "spices"],
    "grilled cheese sandwich": ["bread", "cheese", "butter"],
    "spaghetti carbonara": ["spaghetti", "eggs", "bacon", "parmesan"],
    "caesar salad": ["lettuce", "croutons", "parmesan", "caesar dressing"],
    "beef tacos": ["ground beef", "taco shells", "lettuce", "cheese"],
    "chicken soup": ["chicken", "carrots", "celery", "broth"],
    "omelette": ["eggs", "cheese", "ham", "bell pepper"],
    "french toast": ["bread", "eggs", "milk", "cinnamon"],
    "pancakes": ["flour", "milk", "eggs", "sugar"],
    "banana bread": ["bananas", "flour", "sugar", "eggs"],
    "guacamole": ["avocados", "onion", "tomato", "lime"],
    "hummus": ["chickpeas", "tahini", "lemon juice", "garlic"],
    "stuffed bell peppers": ["bell peppers", "rice", "ground beef", "cheese"],
    "quesadilla": ["tortilla", "cheese", "chicken", "salsa"],
    "bbq ribs": ["ribs", "bbq sauce"],
    "chili": ["ground beef", "beans", "tomatoes", "spices"],
    "beef stew": ["beef", "potatoes", "carrots", "broth"],
    "tuna salad": ["tuna", "mayo", "celery", "onion"],
    "fried chicken": ["chicken", "flour", "spices", "oil"],
    "egg salad": ["eggs", "mayo", "mustard", "celery"],
    "spring rolls": ["rice paper", "vegetables", "shrimp", "soy sauce"],
    "apple pie": ["apples", "flour", "sugar", "butter"],
    "chocolate chip cookies": ["flour", "sugar", "butter", "chocolate chips"],
    "lasagna": ["lasagna noodles", "ricotta", "tomato sauce", "ground beef"],
    "meatloaf": ["ground beef", "breadcrumbs", "egg", "ketchup"],
    "baked ziti": ["ziti", "ricotta", "tomato sauce", "mozzarella"],
    "french onion soup": ["onions", "broth", "bread", "cheese"],
    "pad thai": ["rice noodles", "chicken", "peanuts", "bean sprouts"],
    "pasta primavera": ["pasta", "vegetables", "parmesan", "olive oil"],
    "eggplant parmesan": ["eggplant", "tomato sauce", "mozzarella", "parmesan"],
    "fish tacos": ["fish", "taco shells", "cabbage", "lime"],
    "clam chowder": ["clams", "potatoes", "celery", "cream"],
    "pesto pasta": ["pasta", "pesto", "parmesan"],
    "baked salmon": ["salmon", "lemon", "dill"],
    "fajitas": ["chicken", "bell peppers", "onions", "tortillas"],
    "chicken curry": ["chicken", "curry powder", "coconut milk", "vegetables"],
    "mango smoothie": ["mango", "yogurt", "milk"],
    "chicken caesar wrap": ["chicken", "lettuce", "caesar dressing", "tortilla"],
    "shrimp scampi": ["shrimp", "butter", "garlic", "pasta"],
    "mac and cheese": ["macaroni", "cheese", "milk", "butter"],
    "beef stir fry": ["beef", "vegetables", "soy sauce", "rice"],
    "lobster bisque": ["lobster", "cream", "broth", "vegetables"],
    "chicken parmesan": ["chicken", "tomato sauce", "mozzarella", "parmesan"],
    "grilled chicken salad": ["chicken", "lettuce", "tomato", "cucumber"],
    "roast beef": ["beef", "garlic", "rosemary"],
    "spinach and artichoke dip": ["spinach", "artichoke", "cream cheese", "parmesan"],
    "tiramisu": ["mascarpone", "coffee", "ladyfingers", "cocoa powder"],
    "baked beans": ["beans", "bacon", "molasses"],
    "falafel": ["chickpeas", "onion", "spices"],
    "bruschetta": ["bread", "tomato", "basil", "olive oil"],
    "ratatouille": ["eggplant", "zucchini", "tomato", "bell pepper"],
    "chicken enchiladas": ["chicken", "tortillas", "cheese", "enchilada sauce"],
    "beef burritos": ["beef", "tortillas", "beans", "cheese"],
    "paella": ["rice", "seafood", "saffron", "vegetables"],
    "gumbo": ["shrimp", "sausage", "okra", "rice"],
    "crab cakes": ["crab", "breadcrumbs", "egg", "mayo"],
    "chocolate mousse": ["chocolate", "cream", "sugar"],
    "shrimp cocktail": ["shrimp", "cocktail sauce"],
    "quiche": ["eggs", "cream", "cheese", "pie crust"],
    "banana smoothie": ["bananas", "milk", "honey"],
    "beef wellington": ["beef", "puff pastry", "mushrooms"],
    "chicken wings": ["chicken wings", "buffalo sauce"],
    "moussaka": ["eggplant", "ground beef", "tomato sauce", "béchamel"],
    "baklava": ["phyllo dough", "nuts", "honey"],
    "cheesecake": ["cream cheese", "sugar", "eggs", "crust"],
    "potato salad": ["potatoes", "mayo", "mustard", "onion"],
    "coleslaw": ["cabbage", "carrots", "mayo", "vinegar"],
    "lentil soup": ["lentils", "carrots", "celery", "broth"],
    "avocado toast": ["avocado", "bread", "lemon"],
    "cornbread": ["cornmeal", "flour", "sugar", "butter"],
    "chicken quesadilla": ["chicken", "tortilla", "cheese", "salsa"],
    "gnocchi": ["potatoes", "flour", "egg"],
    "stuffed mushrooms": ["mushrooms", "cheese", "breadcrumbs"],
    "deviled eggs": ["eggs", "mayo", "mustard"],
    "beet salad": ["beets", "goat cheese", "walnuts"],
    "biryani": ["rice", "chicken", "spices", "yogurt"],
    "croissants": ["flour", "butter", "yeast"],
    "crepes": ["flour", "milk", "eggs", "butter"],
    "chicken piccata": ["chicken", "lemon", "capers", "butter"],
    "gnocchi with pesto": ["gnocchi", "pesto"],
    "pancit": ["noodles", "chicken", "vegetables", "soy sauce"],
    "shrimp fried rice": ["shrimp", "rice", "soy sauce", "vegetables"],
    "oatmeal": ["oats", "milk", "sugar"],
    "chicken shawarma wrap": ["chicken", "pita", "vegetables", "garlic sauce"],
    "tom yum soup": ["shrimp", "lemongrass", "lime", "chilies"],
    "cauliflower rice": ["cauliflower", "olive oil", "spices"],
    "sushi rolls": ["sushi rice", "nori", "fish", "vegetables"],
    "lemon bars": ["flour", "butter", "sugar", "lemons"],
    "blueberry muffins": ["flour", "sugar", "blueberries", "eggs"],
    "beef stroganoff": ["beef", "mushrooms", "sour cream", "onions"],
    "spinach salad": ["spinach", "strawberries", "almonds", "vinaigrette"],
    "pork chops": ["pork chops", "garlic", "thyme"],
    "baked brie": ["brie", "pastry dough", "jam"],
    "prosciutto and melon": ["prosciutto", "melon"],
    "crème brûlée": ["cream", "sugar", "eggs"],
    "fried calamari": ["calamari", "flour", "oil"],
    "gazpacho": ["tomatoes", "cucumbers", "peppers", "garlic"]
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
    "piyaju (bengali fried food)": "1. Soak and grind lentils. 2. Mix with onions and spices. 3. Deep fry.",
    "grilled cheese sandwich": "1. Butter the bread. 2. Place cheese between bread slices. 3. Grill until golden brown.",
    "spaghetti carbonara": "1. Cook the spaghetti. 2. Fry bacon. 3. Mix with eggs and parmesan.",
    "caesar salad": "1. Chop lettuce. 2. Add croutons and parmesan. 3. Toss with caesar dressing.",
    "beef tacos": "1. Cook ground beef. 2. Fill taco shells with beef, lettuce, and cheese.",
    "chicken soup": "1. Cook chicken. 2. Add carrots, celery, and broth. 3. Simmer until vegetables are tender.",
    "omelette": "1. Beat eggs. 2. Pour into pan. 3. Add cheese, ham, and bell pepper. 4. Fold and cook.",
    "french toast": "1. Dip bread in egg mixture. 2. Cook on griddle until golden brown.",
    "pancakes": "1. Mix flour, milk, eggs, and sugar. 2. Pour batter onto griddle. 3. Cook until bubbles form, then flip.",
    "banana bread": "1. Mash bananas. 2. Mix with flour, sugar, and eggs. 3. Bake until golden brown.",
    "guacamole": "1. Mash avocados. 2. Add chopped onion, tomato, and lime juice. 3. Mix well.",
    "hummus": "1. Blend chickpeas, tahini, lemon juice, and garlic until smooth.",
    "stuffed bell peppers": "1. Cook rice and ground beef. 2. Stuff into bell peppers. 3. Bake with cheese on top.",
    "quesadilla": "1. Place cheese and chicken on tortilla. 2. Fold and cook until cheese melts.",
    "bbq ribs": "1. Marinate ribs in bbq sauce. 2. Cook until tender.",
    "chili": "1. Cook ground beef. 2. Add beans, tomatoes, and spices. 3. Simmer until flavors meld.",
    "beef stew": "1. Brown beef. 2. Add potatoes, carrots, and broth. 3. Simmer until meat is tender.",
    "tuna salad": "1. Mix tuna, mayo, celery, and onion.",
    "fried chicken": "1. Coat chicken in flour and spices. 2. Fry until golden brown.",
    "egg salad": "1. Chop boiled eggs. 2. Mix with mayo, mustard, and celery.",
    "spring rolls": "1. Fill rice paper with vegetables and shrimp. 2. Roll tightly and serve with soy sauce.",
    "apple pie": "1. Prepare crust. 2. Fill with apples and sugar. 3. Bake until golden brown.",
    "chocolate chip cookies": "1. Mix flour, sugar, butter, and chocolate chips. 2. Bake until golden brown.",
    "lasagna": "1. Layer lasagna noodles, ricotta, tomato sauce, and ground beef. 2. Bake until bubbly.",
    "meatloaf": "1. Mix ground beef, breadcrumbs, egg, and ketchup. 2. Bake until cooked through.",
    "baked ziti": "1. Cook ziti. 2. Mix with ricotta and tomato sauce. 3. Bake with mozzarella on top.",
    "french onion soup": "1. Caramelize onions. 2. Add broth and simmer. 3. Top with bread and cheese, then broil.",
    "pad thai": "1. Cook rice noodles. 2. Stir-fry chicken and peanuts. 3. Toss with noodles and bean sprouts.",
    "pasta primavera": "1. Cook pasta. 2. Sauté vegetables. 3. Toss with pasta and parmesan.",
    "eggplant parmesan": "1. Bread and fry eggplant. 2. Layer with tomato sauce and mozzarella. 3. Bake until bubbly.",
    "fish tacos": "1. Cook fish. 2. Fill taco shells with fish, cabbage, and lime.",
    "clam chowder": "1. Cook clams, potatoes, and celery in cream.",
    "pesto pasta": "1. Cook pasta. 2. Toss with pesto and parmesan.",
    "baked salmon": "1. Season salmon with lemon and dill. 2. Bake until cooked through.",
    "fajitas": "1. Cook chicken with bell peppers and onions. 2. Serve with tortillas.",
    "chicken curry": "1. Cook chicken with curry powder and coconut milk. 2. Add vegetables and simmer.",
    "mango smoothie": "1. Blend mango, yogurt, and milk.",
    "chicken caesar wrap": "1. Fill tortilla with chicken, lettuce, and caesar dressing.",
    "shrimp scampi": "1. Cook shrimp with butter and garlic. 2. Toss with pasta.",
    "mac and cheese": "1. Cook macaroni. 2. Mix with cheese, milk, and butter.",
    "beef stir fry": "1. Stir-fry beef with vegetables and soy sauce. 2. Serve with rice.",
    "lobster bisque": "1. Cook lobster in cream and broth with vegetables.",
    "chicken parmesan": "1. Bread and fry chicken. 2. Top with tomato sauce and mozzarella. 3. Bake until bubbly.",
    "grilled chicken salad": "1. Grill chicken. 2. Toss with lettuce, tomato, and cucumber.",
    "roast beef": "1. Season beef with garlic and rosemary. 2. Roast until desired doneness.",
    "spinach and artichoke dip": "1. Mix spinach, artichoke, cream cheese, and parmesan. 2. Bake until bubbly.",
    "tiramisu": "1. Layer mascarpone, coffee-soaked ladyfingers, and cocoa powder.",
    "baked beans": "1. Cook beans with bacon and molasses.",
    "falafel": "1. Blend chickpeas with onion and spices. 2. Form into balls and fry.",
    "bruschetta": "1. Top bread with chopped tomato, basil, and olive oil.",
    "ratatouille": "1. Sauté eggplant, zucchini, tomato, and bell pepper.",
    "chicken enchiladas": "1. Fill tortillas with chicken and cheese. 2. Top with enchilada sauce and bake.",
    "beef burritos": "1. Fill tortillas with beef, beans, and cheese.",
    "paella": "1. Cook rice with seafood, saffron, and vegetables.",
    "gumbo": "1. Cook shrimp, sausage, and okra with rice.",
    "crab cakes": "1. Mix crab with breadcrumbs, egg, and mayo. 2. Form into cakes and fry.",
    "chocolate mousse": "1. Mix chocolate with cream and sugar until fluffy.",
    "shrimp cocktail": "1. Cook shrimp. 2. Serve with cocktail sauce.",
    "quiche": "1. Mix eggs, cream, and cheese. 2. Pour into pie crust and bake.",
    "banana smoothie": "1. Blend bananas with milk and honey.",
    "beef wellington": "1. Wrap beef in puff pastry with mushrooms. 2. Bake until golden brown.",
    "chicken wings": "1. Cook chicken wings with buffalo sauce.",
    "moussaka": "1. Layer eggplant with ground beef, tomato sauce, and béchamel. 2. Bake until bubbly.",
    "baklava": "1. Layer phyllo dough with nuts and honey. 2. Bake until golden brown.",
    "cheesecake": "1. Mix cream cheese, sugar, and eggs. 2. Pour into crust and bake.",
    "potato salad": "1. Mix boiled potatoes with mayo, mustard, and onion.",
    "coleslaw": "1. Mix cabbage and carrots with mayo and vinegar.",
    "lentil soup": "1. Cook lentils with carrots, celery, and broth.",
    "avocado toast": "1. Mash avocado. 2. Spread on toast. 3. Top with lemon juice.",
    "cornbread": "1. Mix cornmeal, flour, sugar, and butter. 2. Bake until golden brown.",
    "chicken quesadilla": "1. Fill tortilla with chicken and cheese. 2. Cook until cheese melts.",
    "gnocchi": "1. Mix potatoes with flour and egg. 2. Form into dumplings and cook.",
    "stuffed mushrooms": "1. Fill mushrooms with cheese and breadcrumbs. 2. Bake until tender.",
    "deviled eggs": "1. Mix egg yolks with mayo and mustard. 2. Fill egg whites with mixture.",
    "beet salad": "1. Toss beets with goat cheese and walnuts.",
    "biryani": "1. Cook rice with chicken, spices, and yogurt.",
    "croissants": "1. Roll dough with butter. 2. Bake until golden brown.",
    "crepes": "1. Mix flour, milk, eggs, and butter. 2. Cook in thin layers.",
    "chicken piccata": "1. Cook chicken with lemon, capers, and butter.",
    "gnocchi with pesto": "1. Cook gnocchi. 2. Toss with pesto.",
    "pancit": "1. Cook noodles with chicken and vegetables. 2. Toss with soy sauce.",
    "shrimp fried rice": "1. Cook shrimp with rice, soy sauce, and vegetables.",
    "oatmeal": "1. Cook oats with milk and sugar.",
    "chicken shawarma wrap": "1. Fill pita with chicken, vegetables, and garlic sauce.",
    "tom yum soup": "1. Cook shrimp with lemongrass, lime, and chilies.",
    "cauliflower rice": "1. Sauté cauliflower with olive oil and spices.",
    "sushi rolls": "1. Roll sushi rice with nori, fish, and vegetables.",
    "lemon bars": "1. Mix flour, butter, sugar, and lemons. 2. Bake until golden brown.",
    "blueberry muffins": "1. Mix flour, sugar, blueberries, and eggs. 2. Bake until golden brown.",
    "beef stroganoff": "1. Cook beef with mushrooms, sour cream, and onions.",
    "spinach salad": "1. Toss spinach with strawberries, almonds, and vinaigrette.",
    "pork chops": "1. Cook pork chops with garlic and thyme.",
    "baked brie": "1. Wrap brie in pastry dough with jam. 2. Bake until golden brown.",
    "prosciutto and melon": "1. Wrap prosciutto around melon.",
    "crème brûlée": "1. Mix cream, sugar, and eggs. 2. Bake and top with caramelized sugar.",
    "fried calamari": "1. Coat calamari in flour. 2. Fry until golden brown.",
    "gazpacho": "1. Blend tomatoes, cucumbers, peppers, and garlic."
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
    additionalIngredientsDiv.innerHTML = '';
    Object.keys(recipes).forEach(recipe => {
        const recipeIngredients = recipes[recipe];
        const missingIngredients = recipeIngredients.filter(ingredient => !ingredients.includes(ingredient));
        if (recipeIngredients.every(ingredient => ingredients.includes(ingredient))) {
            const recipeElement = document.createElement('div');
            recipeElement.textContent = recipe;
            recipeElement.classList.add('recipe');
            recipeElement.addEventListener('click', () => {
                showRecipeInstructions(recipe);
            });
            recipesDiv.appendChild(recipeElement);
        } else if (missingIngredients.length === 1) {
            const suggestionElement = document.createElement('div');
            suggestionElement.textContent = `${recipe} (add ${missingIngredients[0]})`;
            suggestionElement.classList.add('suggestion');
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
