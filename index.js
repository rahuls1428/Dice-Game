let randomNumber1 = Math.floor(Math.random() * 6);
let randomNumber2 = Math.floor(Math.random() * 6);
let arr = [
  "images/dice1.png",
  "images/dice2.png",
  "images/dice3.png",
  "images/dice4.png",
  "images/dice5.png",
  "images/dice6.png",
];
//if page has not been refreshed and is being loaded for very first time,
//      should shorten the size of "Refresh Page to Play" - h1 text
if (performance.getEntriesByType("navigation")[0].type === "navigate") {
  document.querySelector("h1").style.fontSize = "7rem";
}

// if window is refreshed run function rollDice() else if its first time, then
//    show the landing/(refresh me) page
if (performance.getEntriesByType("navigation")[0].type === "reload") {
  rollDice();
}

function rollDice() {
  document.querySelector(".img1").setAttribute("src", arr[randomNumber1]);
  document.querySelector(".img2").setAttribute("src", arr[randomNumber2]);

  if (randomNumber1 < randomNumber2)
    document.querySelector("h1").textContent = "Player 2 wins! 🚩";
  else if (randomNumber1 > randomNumber2)
    document.querySelector("h1").innerHTML = "🚩 Player 1 wins!";
  else document.querySelector("h1").textContent = "Draw";
}
