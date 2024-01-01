// first create an array [] has colors

let colors = ["red", "green", "#f15025", "rgb(122,133,456)"];

// select element to create an function

let btn = document.querySelector("button");
let color = document.querySelector(".color");

btn.addEventListener("click", function () {
    let randomNumber = getRandomNumber();
    document.body.style.background = colors[randomNumber];
    color.textContent = colors[randomNumber]
});

function getRandomNumber() {
    return Math.floor(Math.random()*colors.length)
};





































