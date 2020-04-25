for(var i=0 ; i<document.querySelectorAll(".drum").length; i++){

document.querySelectorAll("button")[i].addEventListener("click",function (){
var buttonInnerHTML = this.innerHTML;
makeSound(buttonInnerHTML);
buttonAnimation(buttonInnerHTML);
});
}
addEventListener("keypress",function(event){
makeSound(event.key);
buttonAnimation(event.key);
});
function makeSound(key){
  switch (key) {
    case "w":
    var tom1 = new Audio("sound/Tom1.wav");
    tom1.play();
      break;
      case"a":
      var tom2 = new Audio("sound/Tom2.wav");
      tom2.play();
      break;
      case"s":
      var tom3 = new Audio("sound/Tom3.wav");
      tom3.play();
      break;
      case"d":
      var tom4 = new Audio("sound/Tom4.wav");
      tom4.play();
      break;
      case"j":
      var crash = new Audio("sound/crash.mp3");
      crash.play();
      break;
      case"k":
      var kickbase = new Audio("sound/kickbase.mp3");
      kickbase.play();
      break;
      case"l":
      var snare = new Audio("sound/snare.wav");
      snare.play();
      break;
    default:

  }


}
function buttonAnimation(currentkey){
var activeButton =  document.querySelector("." + currentkey);
activeButton.classList.add("pressed");
setTimeout(function(){
  activeButton.classList.remove("pressed");},100);
 }
