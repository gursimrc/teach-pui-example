
//initializing array for items in cart

let cart = [];

class Roll {
    constructor(rollType, rollGlazing, packSize, basePrice) {
        this.type = rollType;
        this.glazing =  rollGlazing;
        this.size = packSize;
        this.basePrice = basePrice;
    }

    // addRollToCart() {
    //     cart.push(this);
    //     console.log(cart);
    // }
}

function addRollToCart(){
    let myRoll = new Roll("hi", "hi", "hi", "ji");
    cart.push(myRoll);
    console.log(cart);
}


const btnAddToCart = document.querySelector("#add-to-cart");
btnAddToCart.onclick = addRollToCart();


