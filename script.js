const selectedItems = {

};

const currentBurger = {

};

const itemLists = document.querySelectorAll('.item-list');
const addItemsButtons = document.querySelectorAll('.add-item');
const burger = document.querySelector('.burger-representation');
const resetBurger = document.querySelector('.reset-craft');
const price = document.querySelector('.price');
const mass = document.querySelector('.mass');
const burgerParts = document.querySelector('.burger-parts');

const meatHandler = (meat) => {
    let obj = document.createElement("div");
    switch (meat) {
        case "beef patty": {
            obj.classList.add("beef-patty");
        } break;
        case "breaded chicken fillet": {
            obj.classList.add("breaded-chicken-fillet");
        } break;
        case "grilled chicken fillet": {
            obj.classList.add("grilled-chicken-fillet");
        } break;
    }
    
    return obj;
}

const sauceHandler = (sauce) => {
    let obj = document.createElement("div");
    switch (sauce) {
        case "ketchup": {
            obj.classList.add("ketchup");
        } break;
        case "tartar sauce": {
            obj.classList.add("tartar-sauce");
        } break;
        case "mayonnaise": {
            obj.classList.add("mayonnaise");
        } break;
        case "garlic&bbq sauce": {
            obj.classList.add("garlicBBQ-sauce");
        } break;
        case "sriracha sauce": {
            obj.classList.add("sriracha-sauce");
        } break;
        case "classy sauce": {
            obj.classList.add("classy-sauce");
        } break;
        case "garlic sauce": {
            obj.classList.add("garlic-sauce");
        } break;
    }
    
    return obj;
}

const cheeseHandler = (cheese) => {
    let obj = document.createElement("div");
    switch (cheese) {
        case "cheddar cheese": {
            obj.classList.add("cheddar-cheese");
        } break;
        case "dorblu cheese": {
            obj.classList.add("dorblu-cheese");
        }
    }
    return obj;
}

const toppingHandler = (topping) => {
    let obj = document.createElement("div");
    switch (topping) {
        case "crispy bacon": {
            obj.classList.add("crispy-bacon");
        } break;
        case "fried egg": {
            obj.classList.add("fried-egg");
        } break;
        case "marinated onion": {
            obj.classList.add("marinated-onion");
        } break;
        case "caramel onion": {
            obj.classList.add("caramel-onion");
        } break;
        case "pickles": {
            obj.classList.add("pickles");
        } break;
        case "cucumber": {
            obj.classList.add("cucumber");
        } break;
        case "tomato": {
            obj.classList.add("tomato");
        } break;
        case "iceberg lettuce": {
            obj.classList.add("iceberg-lettuce");
        } break;
    }
    return obj;
}

const burgerItemsHandler = (key, value) => {
    let obj;
    switch (key) {
        case "meat": {
            obj = meatHandler(value);
        } break;
        case "firstSauce": {
            obj = sauceHandler(value);
        } break;
        case "secondSauce": {
            obj = sauceHandler(value);
        } break;
        case "cheese": {
            obj = cheeseHandler(value);
        } break;
        case "more": {
            obj = toppingHandler(value);
        } break;
    }

    return obj;
}

const removeAllChildNodes = (parent) => {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

const partHandler = (part) => {
    let obj = {};
    switch (part) {
        case "brioche": {
            obj = {name: "brioche bun", mass: 60, price: 8};
        } break;
        case "beef patty": {
            obj = {name: "beef patty", mass: 150, price: 35};
        } break;
        case "breaded chicken fillet": {
            obj = {name: "breaded chicken fillet", mass: 100, price: 25};
        } break;
        case "grilled chicken fillet": {
            obj = {name: "grilled chicken fillet", mass: 100, price: 25};
        } break;
        case "ketchup": {
            obj = {name: "ketchup", mass: 20, price: 4};
        } break;
        case "tartar sauce": {
            obj = {name: "tartar sauce",mass: 30, price: 4};
        } break;
        case "mayonnaise": {
            obj = {name: "mayonnaise", mass: 20, price: 4};
        } break;
        case "garlic&bbq sauce": {
            obj = {name: "garlic&bbq sauce", mass: 20, price: 4};
        } break;
        case "sriracha sauce": {
            obj = {name: "sriracha sauce",mass: 20, price: 6};
        } break;
        case "classy sauce": {
            obj = {name: "classy sauce", mass: 20, price: 4};
        } break;
        case "garlic sauce": {
            obj = {name: "garlic sauce", mass: 20, price: 4};
        } break;
        case "cheddar cheese": {
            obj = {name: "cheddar cheese", mass: 20, price: 12};
        } break;
        case "dorblu cheese": {
            obj = {name: "dorblu cheese", mass: 25, price: 15};
        } break;
        case "crispy bacon": {
            obj = {name: "crispy bacon", mass: 10, price: 12};
        } break;
        case "fried egg": {
            obj = {name: "fried egg", mass: 40, price: 10};
        } break;
        case "marinated onion": {
            obj = {name: "marinated onion", mass: 10, price: 2};
        } break;
        case "caramel onion": {
            obj = {name: "caramel onion", mass: 20, price: 4};
        } break;
        case "pickles": {
            obj = {name:"pickles", mass: 30, price: 4};
        } break;
        case "cucumber": {
            obj = {name:"cucumber", mass: 20, price: 4};
        } break;
        case "tomato": {
            obj = {name: "tomato", mass: 40, price: 5};
        } break;
        case "iceberg lettuce": {
            obj = {name: "iceberg lettuce", mass: 15, price: 5};
        } break;
    }

    return obj;
}

const calcPrice = () => {
    let sum = 0;

    for (const key in currentBurger) {
        currentBurger[key].forEach((item) => {
            sum += item.price;
        });
    }

    return sum;
}

const calcMass = () => {
    let sum = 0;

    for (const key in currentBurger) {
        currentBurger[key].forEach((item) => {
            sum += item.mass;
        });
    }

    return sum;
}

itemLists.forEach(item => {
    selectedItems[item.id] = item.value;
    currentBurger[item.id] = [];

    item.addEventListener("change",(event) => {
        const item = event.target.id;
        const value = event.target.value;
        selectedItems[item] = value;

        price.textContent = `${calcPrice()} LEI`;
        mass.textContent = `(${calcMass()} gr)`;
        updateList();
    });
});


addItemsButtons.forEach(item => {
    item.addEventListener("click",() => {
        const part = item.previousElementSibling.id;
        const value = item.previousElementSibling.value;
        const clonnedItem = burgerItemsHandler(part, value);

        if(value === "none") { return; }
        currentBurger[part].push(partHandler(value));
        burger.append(clonnedItem);

        price.textContent = `${calcPrice()} LEI`;
        mass.textContent = `(${calcMass()} gr)`;
        updateList();
    });
});

const updateList = () => {
    removeAllChildNodes(burgerParts);

    for (const key in currentBurger) {
        currentBurger[key].forEach(element => {
            const part = document.createElement("div");
            part.textContent = `${element.name} : ${element.price} LEI (${element.mass} gr)`;
            burgerParts.append(part);
        });
    }
}

currentBurger["bread"].push(partHandler("brioche"));
updateList();

price.textContent = `${calcPrice()} LEI`;
mass.textContent = `(${calcMass()} gr)`;


resetBurger.addEventListener("click",() => {
    removeAllChildNodes(burger);
    itemLists.forEach(item => {
        selectedItems[item.id] = item.value;
        currentBurger[item.id] = [];
    });

    currentBurger["bread"].push(partHandler("brioche"));

    price.textContent = `${calcPrice()} LEI`;
    mass.textContent = `(${calcMass()} gr)`;
    updateList();
});