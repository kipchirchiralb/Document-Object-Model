// let ourP = document.getElementById("greet")
let ourP = document.querySelector("#greet");
console.log(typeof ourP);
ourP.style.fontSize = "40px";
ourP.textContent = "Hello there!!!!!";

// let ourButtons = document.getElementsByClassName("btn")
let ourButtons = document.querySelectorAll(".btn");
// differentiate btwn a HTMLCollection VS NodeList -- Assignment

ourButtons.forEach(function (btnelem, index) {
  btnelem.textContent = "click me";
  btnelem.style.margin = "20px";
  if (index % 2 == 0) {
    btnelem.style.backgroundColor = "orangered";
    btnelem.style.color = "white";
  }
});
console.log(ourButtons.length);
// TASK - rewrite this(forEach) using a for loop -- add agreen background on odd buttons
// fot(let ind = 0;ind<)
