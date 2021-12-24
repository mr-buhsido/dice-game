// FOR DICE 1 that's on the left side
var randomNumber1 = Math.floor(Math.random() * 7);

switch (randomNumber1) {
	case 1:
		document.querySelector(".img1").setAttribute("src", "images/dice1.png");
		break;
	case 2:
		document.querySelector(".img1").setAttribute("src", "images/dice2.png");
		break;
	case 3:
		document.querySelector(".img1").setAttribute("src", "images/dice3.png");
		break;
	case 4:
		document.querySelector(".img1").setAttribute("src", "images/dice4.png");
		break;
	case 5:
		document.querySelector(".img1").setAttribute("src", "images/dice5.png");
		break;
	case 6:
		document.querySelector(".img1").setAttribute("src", "images/dice6.png");
		break;
}

// FOR DICE 2 that's on the right side
var randomNumber2 = Math.floor(Math.random() * 7);

switch (randomNumber2) {
	case 1:
		document.querySelector(".img2").setAttribute("src", "images/dice1.png");
		break;
	case 2:
		document.querySelector(".img2").setAttribute("src", "images/dice2.png");
		break;
	case 3:
		document.querySelector(".img2").setAttribute("src", "images/dice3.png");
		break;
	case 4:
		document.querySelector(".img2").setAttribute("src", "images/dice4.png");
		break;
	case 5:
		document.querySelector(".img2").setAttribute("src", "images/dice5.png");
		break;
	case 6:
		document.querySelector(".img2").setAttribute("src", "images/dice6.png");
		break;
}

// check the winner or if it's draw
if (randomNumber1 > randomNumber2) {
	document.querySelector("h1").innerHTML = "Player 1 WON! 🏆";
} else if (randomNumber2 > randomNumber1) {
	document.querySelector("h1").innerHTML = "Player 2 WON! 🏆";
} else {
	document.querySelector("h1").innerHTML = "IT's a DRAW! 😔";
}
