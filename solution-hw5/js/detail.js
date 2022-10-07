let cart = [];

class Roll {
    constructor(rollType, rollGlazing, packSize, basePrice) {
        this.type = rollType;
        this.glazing =  rollGlazing;
        this.size = packSize;
        this.basePrice = basePrice;
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

//adding to cart
function addToCart() {
    const glazingDropdown = document.querySelector("#select-glazing");
    selectedGlazing = glazingDropdown.value;

    const packSizeDropdown = document.querySelector("#select-pack-size");
    selectedPackSize = packSizeDropdown.value;

    let myRoll = new Roll(rollType, selectedGlazing, selectedPackSize, rolls[rollType]["basePrice"]);
    cart.push(myRoll);
    console.log(cart);

}


//populating the page
let rollType = getRoll();
setHeader(rollType);
setImage(rollType);
setBasePrice(rollType);

//taking action when the Add to Cart button is clicked
const btnAddToCart = document.querySelector("#add-to-cart");
btnAddToCart.addEventListener("click", addToCart);


