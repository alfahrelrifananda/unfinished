// PROFILE WINDOW CONTROL
const profileClose = document.getElementById("profile-close");
const profileBoard = document.getElementById("the-Profile");
const profileTab = document.getElementById("profile-Tab");

profileClose.addEventListener("click", function(){
  profileBoard.classList.remove("show");
  profileTab.classList.remove("click");
})
profileTab.addEventListener("click", function(){
  profileBoard.classList.add("show");
  profileTab.classList.add("click");
})


// PROFILE DRAG
dragElement(document.getElementById("the-Profile"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "-drag")) {
    document.getElementById(elmnt.id + "-drag").onmousedown = dragMouseDown;
  } else {
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

const toggleOff = document.getElementsByClassName("fa-toggle-off")[0];
const toggleOn = document.getElementsByClassName("fa-toggle-on")[0];
const logActive = document.getElementById("logInActive");
const SignActive = document.getElementById("signInActive");
const logIn = document.getElementsByClassName("logIn")[0];
const signIn = document.getElementsByClassName("signIn")[0];

toggleOff.addEventListener("click", function(){
  toggleOff.style.display="none";
  toggleOn.style.display="block";
  logActive.style.textDecoration="none";
  SignActive.style.textDecoration="underline";
  logIn.style.display="none";
  signIn.style.display="block";
})
toggleOn.addEventListener("click", function(){
  toggleOff.style.display="block";
  toggleOn.style.display="none";
  logActive.style.textDecoration="underline";
  SignActive.style.textDecoration="none";
  logIn.style.display="block";
  signIn.style.display="none";
})