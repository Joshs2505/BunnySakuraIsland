let bunny = document.getElementById("bunny");
let shellCount = 0;
let position = 0;

const gridSize = 3;
const cellSize = 100;
const validShells = ["🐚", "🪸", "🪷"];

function spin() {
  let move = Math.floor(Math.random() * 4) + 1;
  position = (position + move) % 9;
  let row = Math.floor(position / gridSize);
  let col = position % gridSize;

  bunny.style.top = row * cellSize + 10 + "px";
  bunny.style.left = col * cellSize + 10 + "px";

  document.getElementById("spin-result").innerText = "Bunny hops " + move + " spaces!";
}

// Mini-game logic
function generateShells() {
  const shellArea = document.getElementById("shell-area");
  shellArea.innerHTML = "";
  const correctShell = validShells[Math.floor(Math.random() * validShells.length)];

  for (let i = 0; i < 3; i++) {
    const shell = document.createElement("div");
    shell.className = "shell";
    shell.innerText = Math.random() > 0.5 ? correctShell : validShells[Math.floor(Math.random() * validShells.length)];
    shell.setAttribute("draggable", "true");
    shell.setAttribute("data-type", shell.innerText);
    shell.addEventListener("dragstart", drag);
    shellArea.appendChild(shell);
  }

  // Store correct shell type for drop validation
  document.getElementById("drop-zone").setAttribute("data-correct", correctShell);
}

function allowDrop(event) {
  event.preventDefault();
}

function drag(event) {
  event.dataTransfer.setData("text", event.target.dataset.type);
}

function drop(event) {
  event.preventDefault();
  const data = event.dataTransfer.getData("text");
  const correct = event.target.getAttribute("data-correct");

  if (data === correct) {
    shellCount++;
    document.getElementById("shell-count").innerText = shellCount;
    document.getElementById("mini-game-result").innerText = "Great sorting! +1 Sakura Shell";
  } else {
    document.getElementById("mini-game-result").innerText = "Oops! That doesn't match the shell type!";
  }

  document.getElementById("drop-zone").innerText = `You tried to drop: ${data}`;
}

function resetMiniGame() {
  document.getElementById("mini-game-result").innerText = "";
  document.getElementById("drop-zone").innerText = "Drop Matching Shells Here";
  generateShells();
}

function searchForBloom() {
  if (shellCount >= 3) {
    document.getElementById("bloom-result").innerText = "You found the Ocean Bloom! You win!";
  } else {
    document.getElementById("bloom-result").innerText = "You need 3 Sakura Shells to find the Ocean Bloom.";
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
  document.getElementById("drop-zone").innerText = "Drop Matching Shells Here";
  document.getElementById("shell-area").innerHTML = "";
  generateShells();
}

// Generate shells on page load
window.onload = () => {
  generateShells();
};
