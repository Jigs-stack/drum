function makeSound(key){
  switch(key) {
    case "w":
      var tom1 = new Audio("./sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      var tom2 = new Audio("./sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      var tom3 = new Audio("./sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      var tom4 = new Audio("./sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      var crash = new Audio("./sounds/crash.mp3");
      crash.play();
      break;
    case "k":
      var kickBass = new Audio("./sounds/kick-bass.mp3");
      kickBass.play();
      break;
    case "l":
      var snare = new Audio("./sounds/snare.mp3");
      snare.play();
      break;
    default: console.log(key)
  }
}


function matchKeyWithClass(key){
  var button = $("." + key + ".drum");
  if (button){
    button.css("color", "#FFFFFF");
    setTimeout(() => {
      button.css("color", "#DA0463");
    }, 50);
  }
  console.log(button)
}


$("button").on("click", function(event){
  var theButton = event.target.className[0]
  makeSound(theButton);
  var newButton = $("."+ theButton + ".drum");
  newButton.css("color", "#FFFFFF");
  setTimeout(() => {
  newButton.css("color", "#DA0463");
  }, 50);
})


$(document).keypress(function(event) {
  makeSound(event.key);
  matchKeyWithClass(event.key)
});