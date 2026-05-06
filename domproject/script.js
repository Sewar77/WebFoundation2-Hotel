// //get elements
// const counterText = document.getElementById("counter")
// const add = document.querySelector("#add")
// const addTen = document.querySelector("#addTen")
// const minus = document.querySelector("#minus")
// const reset = document.querySelector("#reset")
// const color = document.querySelector("#color")
// const bgcolor = document.querySelector("#bgcolor")
// const fs = document.querySelector("#fs")
// const container = document.querySelector(".container")


// let counter = 0;


// // add listenr
// add.addEventListener("click", () => {
//     counter++;
//     counterText.textContent = counter
// })
// addTen.addEventListener("click", () => {
//     counter += 10;
//     counterText.textContent = counter
// })
// //define function
// function decrease() {
//     counter--;
//     counterText.textContent = counter
//     if (counter <= 0) {
//         counter = 0
//         counterText.textContent = counter
//     }
// }

// reset.addEventListener("click", () => {
//     counter = 0
//     counterText.textContent = counter
// })


// function chanageColor() {
//     counterText.style.color = "purple"
// }

// function chanagebgColor() {
//     counterText.style.background = "pink"
// }

// function changeFontSize() {
//     counterText.style.fontSize = "40px"
// }

//random number
let secret = Math.floor(Math.random() * 100) + 1

console.log(secret);

const input = document.getElementById("guess")
const btn = document.getElementById("check")
const message = document.getElementById("message")
const tryText = document.getElementById("try")
const userTry = document.getElementById("userTry")

let tries = 5
tryText.textContent = tries
function checkGuess() {
    const userGuess = Number(input.value);
    const dif = Math.abs(secret - userGuess)
    tries--
    tryText.textContent = tries

    const li = document.createElement("li")
    li.textContent = "You trie: " + userGuess
    userTry.appendChild(li)

    if (userGuess === secret) {
        message.textContent = "Congrat! you guess the number"
        message.style.color = "orange"
        return
    }
    if (dif <= 10) {
        message.textContent = "Close to the number"
        message.style.color = "green"
    }
    else if (userGuess > secret) {
        message.textContent = "Too High"
        message.style.color = "red"
    }
    else if (userGuess < secret) {
        message.textContent = "Too Low"
        message.style.color = "yellow"
        message.style.background = "pink"
    }
    if (tries === 0) {
        message.textContent = "You have lost, the number was: " + secret
        return;
    }
}

