//getting the type of roll from the URL
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

function setBasePrice(rollType) {
    const detailBasePrice = document.querySelector(".price");
    detailBasePrice.innerHTML = "$" + rolls[rollType]["basePrice"];
}


//will populate the page according to output of this function
let rollType = getRoll();
setHeader(rollType);
setImage(rollType);
setBasePrice(rollType);




