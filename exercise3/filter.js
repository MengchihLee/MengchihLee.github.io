// define a food category map
const foodMap = {
    "dessert": [
        "The Food Lab's Chocolate Chip Cookies",
        "Shakshuka (North African–Style Poached Eggs in Spicy Tomato Sauce)",
        "Fluffy Steamed Buns filled with Sweet Red Beans",
        "Shaved Ice with Sweet Red Beans and Fruit"
    ],
    "staple": [
        "Baked Puttanesca Risotto with Olives, Lemon and Parsley",
        "Grilled Cheese With Kimchi Recipe",
        "Hands-Off Pork and Beans",
        "Kimchi Pancake",
        "Spaghetti with Melted Cauliflower Sauce",
        "The Ultimate Beef Stroganoff Recipe",
        "Vegetarian Carbonara with Mushrooms, Miso and Parmesan"
    ],
    "vegetarian": [
        "Baked Puttanesca Risotto with Olives, Lemon and Parsley",
        "Caprese Salad with Slow-Roasted Tomatoes, Rocket and Basil Gremolata",
        "Crispy Enoki and Onion Fritters with Thai Curry Mayo Recipe",
        "Vegetarian Carbonara with Mushrooms, Miso and Parmesan"
    ]
};
function filterCategory(filterBy, name) {
    // get all recipe cards
    const cards = [...document.querySelectorAll(".RecipeCardWrapper")];
    // handle author filter
    if (filterBy === 'author') {
        cards.forEach((card) => {
            if (card.querySelector('.RecipeAuthor').textContent.indexOf(name) === -1) {
                card.classList.add("hide");
            } else {
                card.classList.remove("hide");
            }
        });
        // handle food categories filter
    } else if (filterBy === 'food') {
        cards.forEach((card) => {
            // use Array.some to filter out what is in the category
            if (foodMap[name].some((value) => card.querySelector(".RecipeTitle").textContent.indexOf(value) !== -1)) {
                card.classList.remove("hide");
            } else {
                card.classList.add("hide");
            }
        });
    }
}

