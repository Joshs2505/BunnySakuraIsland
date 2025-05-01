let bunny = document.getElementById("bunny");
let shellCount = 0;
let position = 0;

// Simulate a 3x3 grid of positions (9 spots total)
const gridSize = 3;
const cellSize = 100;

function spin() {
  let move = Math.floor(Math.random() * 4) + 1; // 1–4 spaces
  position = (position + move) % 9;
  let row = Math.floor(position / gridSize);
  let col = position % gridSize;

  bunny.style.top = row * cellSize + 10 + "px";
  bunny.style.left = col * cellSize + 10 + "px";

  document.getElementById("spin-result").innerText = "Bunny hops " + move + " spaces!";
}

function playMiniGame() {
  let win = Math.random() > 0.4; // 60% chance to win
  if (win) {
    shellCount++;
    document.getElementById("mini-game-result").innerText = "You sorted shells! +1 Sakura Shell";
    document.getElementById("shell-count").innerText = shellCount;
  } else {
    document.getElementById("mini-game-result").innerText = "Oops! The shells were too slippery.";
  }
}

function searchForBloom() {
  if (shellCount >= 3) {
    document.getElementById("bloom-result").innerText = "You found the Ocean Bloom! You win!";
  } else {
    document.getElementById("bloom-result").innerText = "You need at least 3 Sakura Shells to search for the Bloom.";
  }
}

function restartGame() {
  shellCount = 0;
  position = 0;
  document.getElementById("shell-count").innerText = shellCount;
  document.getElementById("spin-result").innerText = "";
  document.getElementById("mini-game-result").innerText = "";
  document.getElementById("bloom-result").innerText = "";
  bunny.style.top = "10px";
  bunny.style.left = "10px";
}
