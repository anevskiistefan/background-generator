var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var button = document.querySelector(".btn");
var h3 = document.querySelector("h3");
var body = document.querySelector("body");


button.addEventListener("click", changeBackground);


function changeBackground() {
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
    h3.textContent = body.style.background + ";";
}