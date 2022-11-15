var randomNumber = Math.floor(Math.random()*6) + 1;

var randomName = "dice" + randomNumber + ".png";


var randomNumber2 = Math.floor(Math.random()*6) + 1;

var randomName2 = "dice" + randomNumber2 + ".png"


document.querySelector("div .img1").setAttribute("src","images/"+randomName);

document.querySelector("div .img2").setAttribute("src","images/"+randomName2);

if (randomNumber > randomNumber2 ) {
    document.querySelector("h1").innerHTML = "🚩Player 1 Wins"
}
else if (randomNumber < randomNumber2 ) {
    document.querySelector("h1").innerHTML = "Player 2 Wins🚩"
}
else {
    document.querySelector("h1").innerHTML = "🤷 It's a Tie 🤷"
}
console.log(randomNumber);