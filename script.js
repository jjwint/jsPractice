var userObj = {
	name: null,
	health: 40,
	healsRemaining: 2,
	wins: 0
};
userObj.generateAttackDamage = function() {
	return damage = Math.floor((Math.random() * 3) + 1);
};
userObj.heal = function() {
	userObj.healsRemaining -= 1;
	return healAmount = Math.floor((Math.random() * 10) + 1);
};

var grantObj = {
	name: "Grant the Almighty",
	health: 10
};

grantObj.generateAttackDamage = function() {
	return damage = Math.floor((Math.random() * 5) + 1);
};

var inviteUser = null;


document.getElementById("startBtn").addEventListener("click", function() {
	document.getElementById("startBtn").classList.add("hidden");
	startGame();
});

function startGame() {
	inviteUser = prompt("Would you like to play a game with two characters?");
	if (inviteUser.toLowerCase() === "yes") {
		userObj.name = prompt("What would you like to name your character?");
		displayStats();
	}
}

function displayStats(){
	document.getElementById("userNameEl").innerHTML = "Name: " + userObj.name;
	document.getElementById("userHealthEl").innerHTML = "Health: " + userObj.health;
	document.getElementById("userHealsEl").innerHTML = "Heals remaining: " + userObj.healsRemaining;
	document.getElementById("userWinsEl").innerHTML = "User wins: " + userObj.wins;
	document.getElementById("grantNameEl").innerHTML = "Opponent name: " + grantObj.name;
	document.getElementById("grantHealthEl").innerHTML = "Opponent health: " + grantObj.health;
	document.getElementById("attackBtnEl").innerHTML = "<button>Attack</button>";
	document.getElementById("healBtnEl").innerHTML = "<button>Heal</button>";
	document.getElementById("quitBtnEl").innerHTML = "<button>Quit</button>";
}

document.getElementById("attackBtnEl").addEventListener("click", function() {
	if ((userObj.health) > 0 && userObj.wins < 5) {
		grantObj.health -= userObj.generateAttackDamage();
		userObj.health -= grantObj.generateAttackDamage();
		console.log(userObj.name + " has " + userObj.health + " health left.");
		console.log("Grant the almighty has " + grantObj.health + " health left.");
		if (grantObj.health <= 0) {
			userObj.wins += 1;
			grantObj.health = 10;
			// console.log("grant's health reset to " + grantHealth);
			console.log(userObj.name + " has " + userObj.wins + " wins! You need " + (5 - userObj.wins) + " more wins!");
		}
		if (userObj.health <= 0) {
			console.log("Grant is the winner!");
		}
		if (userObj.wins >= 5) {
			console.log(userObj.name + " is the winner!");
		}
	}
});

document.getElementById("healBtnEl").addEventListener("click", function() {
	if (userObj.healsRemaining > 0) {
		userObj.health += userObj.heal();
		console.log("heals remaining: " + userObj.healsRemaining);
		console.log("user health: " + userObj.health);
	}
});

document.getElementById("quitBtnEl").addEventListener("click", function() {
	console.log("quit!");
	document.getElementById("gameContainerEl").classList.add("hidden");
	document.getElementById("quitMessageEl").innerHTML = "<h1>You have quit the game! Refresh the page to play again.</h1>";
});




