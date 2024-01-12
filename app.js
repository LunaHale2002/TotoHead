// PENSER AU ####### !!!!
let bouttonPlus = document.querySelector("#bouttonPlus");
let bouttonMoins = document.querySelector("#bouttonMoins");
let bouttonReset = document.querySelector("#bouttonReset");
let counterText = document.querySelector("#counterText")

let counter = 0

function ajouter(){
    counter++

    if (counter > 20){
        counter = 20
    }

    counterText.textContent = counter
    console.log("salut", counter);
}

function soustraire(){
    counter--

    if (counter <-10){
        counter = -10
    }

    counterText.textContent = counter
    console.log("salut", counter);
}
function reset(){
    counter = 0 
    counterText.textContent = counter
    console.log("salut", counter);
    counterText.style.color = "red"
}

bouttonPlus.addEventListener('click', ajouter)
bouttonMoins.addEventListener('click', soustraire)
bouttonReset.addEventListener('click', reset)