// PROJECT PART 2 — TUTORIAL 9 REQUIREMENTS

function showDateTime() {
    const now = new Date();
    console.log("Current Date:", now.toLocaleDateString());
    console.log("Current Time:", now.toLocaleTimeString());
}
showDateTime();

alert("Welcome! Please fill out the form.");

let randomNumber = Math.floor(Math.random() * 100);
console.log("Random Number:", randomNumber);

setTimeout(() => {
    console.log("This message appears after 3 seconds.");
}, 3000);

let num = 25;
let text = num.toString();
console.log("Converted to text:", text);

function countdown(start) {
    let current = start;
    let timer = setInterval(() => {
        console.log(current);
        current--;
        if (current < 0) {
            clearInterval(timer);
            console.log("Countdown finished!");
        }
    }, 1000);
}

countdown(5);
