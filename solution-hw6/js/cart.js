let cart = retrieveCartFromLocalStorage();
//come back and fix it so that the rolls are in the same format as what i used for hw 5
//just capitalization and spacing on roll type and roll glazing

class Roll {
    constructor(rollType, rollGlazing, packSize, basePrice) {
        this.type = rollType;
        this.glazing =  rollGlazing;
        this.size = packSize;
        this.basePrice = basePrice;
        this.element = null;
    }
}

// const roll1 = new Roll('Original', 'Sugar Milk', 1, rolls['Original']["basePrice"]);
// const roll2 = new Roll('Walnut', 'Vanilla Milk', 12, rolls['Walnut']["basePrice"]);
// const roll3 = new Roll('Raisin', 'Sugar Milk', 3, rolls['Raisin']["basePrice"]);
// const roll4 = new Roll('Apple', 'Original', 3, rolls['Original']["basePrice"]);

// cart.push(roll1);
// cart.push(roll2);
// cart.push(roll3);
// cart.push(roll4);

cartItemsPriceArr= [];

for (const roll of cart) {
    createElement(roll); 
}


function createElement(roll) {
    const container = document.querySelector("#roll-list");
    const template = document.querySelector("#roll-in-cart-template");
    const clone = template.content.cloneNode(true);
	roll.element = clone.querySelector("#roll-in-cart");
    container.append(roll.element);
    updateElement(roll);

    const btnDelete = roll.element.querySelector('.remove');
    btnDelete.addEventListener('click', () => {
        removeRoll(roll);
    });
}


function updateElement(roll) { 

    //updating the picture
    const rollImageElement = roll.element.querySelector("#images-cart");
    rollImageElement.src = "./products/" + rolls[roll.type]["imageFile"];
    rollImageElement.alt = "One " + roll.type + " cinnamon roll";

    //updating the name of the item
    const rollTitleElement = roll.element.querySelector("#roll-title-cart");
    rollTitleElement.innerText = roll.type + " cinnamon roll";

    //updating the glazing of the item
    const rollGlazingElement = roll.element.querySelector("#roll-glazing-cart");
    rollGlazingElement.innerText = "Glazing: " + roll.glazing;

    //updating the pack size of the item
    const rollPackSizeElement = roll.element.querySelector("#roll-pack-size-cart");
    rollPackSizeElement.innerText = "Pack Size: " + roll.size;

    //updating the price of the item
    const rollPriceElement = roll.element.querySelector("#roll-price-cart");

    let baseGlazingPrice = rolls[roll.type]["basePrice"];

    const glazingOptions = 
    {
    "Original": baseGlazingPrice,
    "Sugar Milk": (baseGlazingPrice + 0.5),
    "Vanilla Milk": baseGlazingPrice,
    "Double Chocolate": (baseGlazingPrice + 1.5)
    }

    const packSizeOptions = 
    {
    1: 1,
    3: 3,
    6: 5,
    12: 10
    }

    let rollPrice = (glazingOptions[roll.glazing] * packSizeOptions[roll.size]).toFixed(2);
    rollPriceElement.innerText = "$ " + rollPrice;
    cartItemsPriceArr.push(rollPrice);
    totalCartPrice = 0;
    for (let i = 0; i < cartItemsPriceArr.length; i++) {
        totalCartPrice = totalCartPrice + parseFloat(cartItemsPriceArr[i]);
    }
    const totalCartPriceElement = document.querySelector(".cart-price-total");
    totalCartPriceElement.innerText = "$ " + totalCartPrice.toFixed(2);
}


function removeRoll(roll) {

    for (let i = 0; i < cart.length; i++) {
        if (cart[i] === roll) {
            cart.splice(i, 1);
            cartItemsPriceArr.splice(i, 1);
            totalCartPrice = 0;
            for (let i = 0; i < cartItemsPriceArr.length; i++) {
                totalCartPrice = totalCartPrice + parseFloat(cartItemsPriceArr[i]);
            }
            const totalCartPriceElement = document.querySelector(".cart-price-total");
            totalCartPriceElement.innerText = "$ " + totalCartPrice.toFixed(2);
        }
    }
    roll.element.remove();
    saveCartToLocalStorage();
    console.log(localStorage.getItem('cart'));
}

//getting current cart
function retrieveCartFromLocalStorage() {
    //if cart has already populated, retrieves the current cart
    if(localStorage.getItem('cart')) {
        const cartString = localStorage.getItem('cart');
        return JSON.parse(cartString);
    }
    //otherwise, create cart as an empty array
    else {
        return [];
    }
}

//saving current cart
function saveCartToLocalStorage() {
    const cartString = JSON.stringify(cart);
    localStorage.setItem('cart', cartString);
}