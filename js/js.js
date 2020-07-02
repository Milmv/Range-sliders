let red = document.querySelector("#rangeRed");
let green = document.querySelector("#rangeGreen");
let blue = document.querySelector("#rangeBlue");

function changeColor() {
  let wrapper = document.querySelector(".wrapper");
  let circle = document.querySelector(".circle");

  let color = `rgb(${red.value},${green.value},${blue.value})`;

  circle.style.backgroundColor = color;
  wrapper.style.color = color;
  red.style.backgroundColor = color;
  green.style.backgroundColor = color;
  blue.style.backgroundColor = color;

  document.querySelector(".colorOutput").innerHTML = `: ${color}`;
}

changeColor();
red.addEventListener("input", changeColor);
green.addEventListener("input", changeColor);
blue.addEventListener("input", changeColor);
