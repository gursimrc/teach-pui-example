let cart = retrieveCartFromLocalStorage();

class Roll {
    constructor(rollType, rollGlazing, packSize, basePrice) {
        this.type = rollType;
        this.glazing =  rollGlazing;
        this.size = packSize;
        this.basePrice = basePrice;
        this.element = null;
    }
}


//will populate the page according to output of this function
function getRoll() {
    const queryString = window.location.search;
    const params = new URLSearchParams(queryString);
    const rollType = params.get("roll");
    return rollType;
}

//setting header to the type of cinnamon roll
function setHeader(rollType) {
    const detailHeader = document.querySelector("h1");
    detailHeader.innerText = rollType + " cinnamon roll";
}

//setting image to the type of cinnamon roll
function setImage(rollType) {
    const detailImage = document.querySelector("#detail-image");
    detailImage.src = "./products/" + rolls[rollType]["imageFile"];
}

//setting base price by the type of cinnamon roll
function setBasePrice(rollType) {
    const detailBasePrice = document.querySelector(".price");
    detailBasePrice.innerHTML = "$" + rolls[rollType]["basePrice"];
}

//used to convert the glazing dropdown value to the string to be displayed 
const glazingStrings = 
{
  keepOriginal: "Original",
  sugarMilk: "Sugar Milk",
  vanillaMilk: "Vanilla Milk",
  doubleChocolate: "Double Chocolate"
}

//adding to cart
function addToCart() {
    const glazingDropdown = document.querySelector("#select-glazing");
    selectedGlazing = glazingDropdown.value;

    const packSizeDropdown = document.querySelector("#select-pack-size");
    selectedPackSize = packSizeDropdown.value;

    let myRoll = new Roll(rollType, glazingStrings[selectedGlazing], parseInt(selectedPackSize), rolls[rollType]["basePrice"]);
    cart.push(myRoll);
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


//populating the page
let rollType = getRoll();
setHeader(rollType);
setImage(rollType);
setBasePrice(rollType);

//taking action when the Add to Cart button is clicked
const btnAddToCart = document.querySelector("#add-to-cart");
btnAddToCart.addEventListener("click", addToCart);


