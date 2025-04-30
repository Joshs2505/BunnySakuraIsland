function spin() {
  const result = Math.floor(Math.random() * 6) + 1;
  document.getElementById("result").innerText = "You spun a " + result + "!";
  // In the full game, this would move your bunny that many spaces!
}

function restart() {
  document.getElementById("result").innerText = "";
  alert("Game restarted! Ready to hop again, Akasha?");
}
