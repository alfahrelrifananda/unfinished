// ALL WINDOWS CONTROL
const gameContainer = document.getElementById("game");
const profileContainer = document.getElementById("profile");
const supportContainer = document.getElementById("support");

gameContainer.addEventListener("click", function(){
  gameBoard.classList.add("toFront");
  profileBoard.classList.remove("toFront");
  supportBoard.classList.remove("toFront");
})
profileContainer.addEventListener("click", function(){
  gameBoard.classList.remove("toFront");
  profileBoard.classList.add("toFront");
  supportBoard.classList.remove("toFront");
})
supportContainer.addEventListener("click", function(){
  gameBoard.classList.remove("toFront");
  profileBoard.classList.remove("toFront");
  supportBoard.classList.add("toFront");
})
gameTab.addEventListener("click", function(){
  gameBoard.classList.add("toFront");
  profileBoard.classList.remove("toFront");
  supportBoard.classList.remove("toFront");
  gameTab.classList.add("toFront");
  profileTab.classList.remove("toFront");
  supportTab.classList.remove("toFront");
})
profileTab.addEventListener("click", function(){
  gameBoard.classList.remove("toFront");
  profileBoard.classList.add("toFront");
  supportBoard.classList.remove("toFront");
  gameTab.classList.remove("toFront");
  profileTab.classList.add("toFront");
  supportTab.classList.remove("toFront");
})
supportTab.addEventListener("click", function(){
  gameBoard.classList.remove("toFront");
  profileBoard.classList.remove("toFront");
  supportBoard.classList.add("toFront");
  gameTab.classList.remove("toFront");
  profileTab.classList.remove("toFront");
  supportTab.classList.add("toFront");
})