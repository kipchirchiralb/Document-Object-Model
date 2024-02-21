const headingOne = document.querySelector("h1");

console.log(headingOne.classList.contains("heading"));
headingOne.classList.remove("heading");

console.log(headingOne.classList.contains("heading"));

const tryMeBtn = document.querySelector("#try-me");
let newNumber = 0;

tryMeBtn.addEventListener("click", () => {
  //code to execute when the button is clicked
  console.log("Try me btn clicked!!!!!!!");
  newNumber++; // adds one to the new number - like saying newNumber = newNumber + 1
  console.log(newNumber);
  headingOne.style.textDecoration = "underline";
  document.getElementById("main-nav").style.display = "flex";
});

// create a button , call it close nav ,
// select the element in js (use querySelector or getElementByID)
// add an event listener to the button(click event)
// set display to none on the main nav when this button is clicked
const closeNavBtn = document.getElementById("close-nav");

closeNavBtn.addEventListener("click", (ev) => {
  document.getElementById("main-nav").style.display = "none";
  console.log((ev.target.previousSibling.textContent = "maajabu"));
});

document.getElementById("youtube").addEventListener("mouseover", (eve) => {
  eve.preventDefault();
  newNumber++; // adds one to the new number - like saying newNumber = newNumber + 1
  console.log(newNumber);
  console.log("undeoing the normal");
});

// event propagation / bubbling

document.getElementById("pass").addEventListener("keypress", (event) => {
  //   console.log(String.fromCharCode(event.keyCode));
  let password = document.getElementById("pass").value;
  if (password.length < 8) {
    document.querySelector("#error").textContent = "Password is Too short";
  } else if (password.includes("$") || password.includes("@")) {
    document.querySelector("#error").textContent = "Password is Strong";
    document.querySelector("#error").style.color = "green";
  } else {
    document.querySelector("#error").textContent = "Password is too Weak";
  }
});
