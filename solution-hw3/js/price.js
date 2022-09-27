let baseGlazingPrice = 2.49;
let currentGlazingPrice = baseGlazingPrice;
let basePackSize = 1;
let currentPackSize = basePackSize;
let totalPrice = 2.49;
const priceSpan = document.querySelector(".price"); 


const glazingOptions = 
{
  keepOriginal: ["Keep original", baseGlazingPrice],
  sugarMilk: ["Sugar milk", (baseGlazingPrice + 0.5)],
  vanillaMilk: ["Vanilla milk", baseGlazingPrice],
  doubleChocolate: ["Double chocolate", (baseGlazingPrice + 1.5)]
}

const packSizeOptions = 
{
  1: 1,
  3: 3,
  6: 5,
  12: 10
}

//populating the options of the glazing selection dropdown
const selectGlazing = document.querySelector("#select-glazing");
for (i in glazingOptions) {
    let opt = document.createElement('option');
    opt.value = i;
    opt.innerText = glazingOptions[i][0];
    selectGlazing.appendChild(opt);
}

//populating the options of the packSize selection dropdown
const selectPackSize = document.querySelector("#select-pack-size");
for (i in packSizeOptions) {
    let opt = document.createElement('option');
    opt.value = i;
    opt.innerText = String(i);
    selectPackSize.appendChild(opt);
}


//updating price of glazing and total price
function glazingChange(element) {
  currentGlazingPrice = glazingOptions[element.value][1];
  totalPrice = (currentGlazingPrice * currentPackSize).toFixed(2);
  priceSpan.textContent = "$" + String(totalPrice);
}

//updating price of pack size and total price
function packSizeChange(element) {
  currentPackSize = packSizeOptions[element.value];
  totalPrice = (currentGlazingPrice * currentPackSize).toFixed(2);
  priceSpan.textContent = "$" + String(totalPrice);
}

