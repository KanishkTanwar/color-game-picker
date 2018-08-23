//functions
//*****************
function init(mode){
  colors = randColor();
  end.style.background = "steelblue";
  if (mode.name === "hard"){
    whichMode = true;
    tri.textContent = "";
    easy.classList.remove("selected");
    mode.classList.toggle("selected");
    randPosition = Math.floor(Math.random()*6);
  for (var i = 0; i < 6; i++) {
    square[i].style.background = colors[i];
  }
}

else {
  tri.textContent = "";
  whichMode = false;
  hard.classList.remove("selected");
  mode.classList.toggle("selected");
  randPosition = Math.floor(Math.random()*3);
  for (var i = 0; i < 6; i++) {
    if (i <= 2){
    square[i].style.background = colors[i];
    }
  else{
    square[i].style.background = "#232323";
    }
  }
}
  h1.textContent = colors[randPosition];
}
function winningColor(){
  for (var i = 0; i < square.length; i++) {
    square[i].style.background = colors[randPosition];
  }

}

function randColor(){
  var colors = [];
  for (var i = 0; i < 6; i++) {
    var r = Math.floor(Math.random()*256);
    var g = Math.floor(Math.random()*256);
    var b = Math.floor(Math.random()*256);
    colors.push("rgb(" + r + ", " + b + ", " + g + ")");
  }
  return colors;
}

function endGame(){
  for (var i = 0; i < square.length; i++) {
    square[i].addEventListener("click", function(){
      if (this.style.background === colors[randPosition]) {
        winningColor();
        tri.textContent = "Correct";
        end.style.background = colors[randPosition];
        newColors.textContent = "Play again?";

      }
      else {
        this.style.background = "#232323";
        tri.textContent = "Try again";
      }
    })
  }
}
//*************

//variables
//******************
// colors = randColor();
// randPosition = Math.floor(Math.random()*6);
var square = document.querySelectorAll(".squares");
var h1 = document.getElementById("colorDisplay");
var end = document.getElementById("end");
var tri = document.getElementById("try");
var hard = document.getElementById("hard");
var easy = document.getElementById("easy");
var newColors = document.getElementById("newColors")
var whichMode;

//************

//Game starts here
//*********
init(hard)
endGame()

//Game reset to hard mode

hard.addEventListener("click", function(){
  init(hard);
})

//Game reset to easy mode

easy.addEventListener("click", function(){
  init(easy);
})

//Game reset with conjection with if it is easy/hard

newColors.addEventListener("click", function(){
  newColors.textContent = "New colors";
  if (whichMode){
  hard.classList.remove("selected");
  init(hard);
  tri.textContent = "";
}
  else{
  newColors.textContent = "New colors";
  easy.classList.remove("selected");
  init(easy);
  tri.textContent = "";

}
})
//*************
