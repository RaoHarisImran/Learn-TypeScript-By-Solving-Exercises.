"use strict";
function orderSandwich(...items) {
    if (items.length === 0) {
        console.log("You ordered an empty sandwich. Please select some ingredients.");
    }
    else {
        console.log("You ordered a sandwich with the following items:");
        for (const item of items) {
            console.log(`- ${item}`);
        }
    }
}
orderSandwich("Turkey", "Cheese", "Lettuce", "Tomato");
orderSandwich("Ham", "Swiss Cheese");
orderSandwich();
