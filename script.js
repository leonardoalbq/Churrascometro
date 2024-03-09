// Carne = 400g por pessoa; + de 6 horas de churrasco = 650g por pessoa
// Cerveja = 1200ml por pessoa; + de 6 horas de churrasco = 2000ml
// Refrigerante/água = 1000ml por pessoa; + de 6 horas de churrasco = 1500ml

// Crianças valem por 0,5

let inputAdults = document.getElementById("adults");
let inputChildren = document.getElementById("children");
let inputDuration = document.getElementById("duration");

let result = document.getElementById("result");

function calculate(){
    console.log("Calculando...")

    let adults = inputAdults.value;
    let children = inputChildren.value;
    let duration = inputDuration.value;

    let amountMeat = meatPP(duration) * adults + (meatPP(duration)/2) * children;
    let amountBeer = beerPP(duration) * adults;
    let amountSoda = sodaPP(duration) * adults + (sodaPP(duration)/2) * children;

    display(amountMeat, amountBeer, amountSoda);
}

function meatPP(duration){
    if (duration >= 6){
        return 650;
    } else {
        return 400;
    }
}

function beerPP(duration) {
    if (duration >= 6) {
        return 2000;
    } else {
        return 1200;
    }
}

function sodaPP(duration) {
    if (duration >= 6){
        return 1000;
    } else {
        return 1500;
    }
}

function display(meat, beer, soda) {
    result.innerHTML = `<p>${meat / 1000} Kg de carne</p>`;
    result.innerHTML += `<p>${Math.ceil(beer / 355)} latas de cerveja</p>`;
    result.innerHTML += `<p>${Math.ceil(soda / 2000)} Pet's de 2L de refrigerante</p>`;
}

