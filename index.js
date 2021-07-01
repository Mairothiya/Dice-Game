var randomNumber=Math.floor(Math.random() * 6)+1;
var randomDiceNumber="dice" + randomNumber +".png";
var randomImage="./images/" +randomDiceNumber;

var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImage);


var randomNumber2=Math.floor(Math.random() * 6)+1;
var randomDiceNumber2="dice" + randomNumber2 +".png";
var randomImage2="./images/" +randomDiceNumber2;

var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randomImage2);


if(randomNumber>randomNumber2){
  document.querySelector("h1").innerHTML= "!! player 1 wins";
}
else if(randomNumber2>randomNumber){
  document.querySelector("h1").innerHTML="player 2 wins !!";
}
else{
  document.queryselector("h1").innerHTML="!!Draw!!";
}
