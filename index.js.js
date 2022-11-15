var randomNumber = Math.floor(Math.random(0,6)*6);
alert(randomNumber);

var randomNumber2 = Math.floor(Math.random(0,6)*6);
document.querySelector("div .img1").setAttribute("src","img/dice"+randomNumber+".png");

document.querySelector("div .img2").setAttribute("src","img/dice"+randomNumber2+".png");

if (randomNumber > randomNumber2 ) {
    document.querySelector("h1").innerHTML = "Player 1 Wins"
}

else if (randomNumber < randomNumber2 ) {
        document.querySelector("h1").innerHTML = "Player 2 Wins"
}