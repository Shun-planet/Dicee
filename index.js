
                //  x = randomNumber1
var x = Math.floor(Math.random()*6)+1;                   // 1-6

var randomDiceImage = "dice" + x + ".png";               //dice1.png - dice6.png

var randomImageSource = "images/" + randomDiceImage;     //images/dice1.png - images/dice6.png

var imageOne = document.querySelectorAll("img")[0];        // brings out all the "img" as an Array. [leftImage(0),rightImage(1)]

imageOne.setAttribute("src",randomImageSource); 
                // set a new attribute for the left images i.e imageOne, from the original source to randomImageSource



                //  y = randomNumber2
var y = Math.floor(Math.random()*6)+1;                   // 1-6

       
var randomDiceImage2 = "dice" + y + ".png";              //dice1.png - dice6.png

var randomImageSource2 = "images/" + randomDiceImage2;   //images/dice1.png - images/dice6.png


var imageTwo = document.querySelectorAll("img")[1];        // brings out all the "img" as an Array. [leftImage(0),rightImage(1)]

imageTwo.setAttribute("src",randomImageSource2); 
// set a new attribute for the left images i.e imageTwo, from the original source to randomImageSource

//If one player wins
if (x>y){
    document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
} else if (y>x){
    document.querySelector("h1").innerHTML = "🚩 Play 2 Wins!";
} else{
    document.querySelector("h1").innerHTML = "Draw!";
}