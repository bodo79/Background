var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.querySelector("button");
css.textContent = "background: linear-gradient(to right, rgb(0,255,0) , rgb(255,0,0));";


function updateColor() {
		body.style.background = 
		"linear-gradient(to right, "
		 + color1.value
		 + ", "
		 + color2.value
		 + ")";
		 css.textContent = "background: " + body.style.background + ";";
}

function randomColors() {
	button.textContent = "Good for you";
}

color1.addEventListener("input", updateColor)

color2.addEventListener("input", updateColor)

button.addEventListener("click", randomColors)