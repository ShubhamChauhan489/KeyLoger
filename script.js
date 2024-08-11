let startButton = document.getElementById("start");
let stopButton = document.getElementById("stop");
let leftCon = document.querySelector(".teller-left");
let rightCon = document.querySelector(".teller-right");

startButton.style.opacity = 0.3;
startButton.addEventListener("click", () => {
  startButton.style.opacity = 1;
  stopButton.style.opacity = 0.3;
  AddEvent();
});

stopButton.addEventListener("click", () => {
  stopButton.style.opacity = 1;
  startButton.style.opacity = 0.3;
  RemoveEvent();
});

function handleKeypress(e) {
  leftCon.innerHTML = `key ${e.key} is pressed`;
}
function handleKeyDown(e) {
  rightCon.innerHTML = `key Down`;
}
function handleKeyRealeased(e) {
  rightCon.innerHTML = `key Up`;
  leftCon.innerHTML = `key ${e.key} is released`;
}
function AddEvent() {
  window.addEventListener("keypress", handleKeypress);
  window.addEventListener("keydown", handleKeyDown);
  window.addEventListener("keyup", handleKeyRealeased);
}
function RemoveEvent() {
  window.removeEventListener("keypress", handleKeypress);
  window.removeEventListener("keydown", handleKeyDown);
  window.removeEventListener("keyup", handleKeyRealeased);
}
