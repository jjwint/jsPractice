var inviteUser = null;
var userName = null;
var userWins = 0;
var userHealth = 40;
var grantHealth = 10;

function startGame() {
	inviteUser = prompt("Would you like to play a game with two characters?");
	if (inviteUser.toLowerCase() === "yes") {
		userName = prompt("What would you like to name your character?");
		startCombat();
	}
}

function startCombat() {
	while (userHealth > 0 && userWins < 3) {
		var takeTurn = prompt("Would you like to attack or quit?");
		if (takeTurn.toLowerCase() === "attack") {
			grantHealth -= getDamage();
			userHealth -= getDamage();
			console.log(userName + " has " + userHealth + " health left.");
			console.log("Grant the almighty has " + grantHealth + " health left.");
			if (grantHealth <= 0) {
				userWins += 1;
				grantHealth = 10;
				// console.log("grant's health reset to " + grantHealth);
				console.log(userName + " has " + userWins + " wins! You need " + (3 - userWins) + " more wins!");
			}
			if (userHealth <= 0) {
				console.log("Grant is the winner!");
			}
			if (userWins >= 3) {
				console.log(userName + " is the winner!");
			}
		} else if (takeTurn.toLowerCase() === "quit") {
			return;
		}
	}
}

function getDamage() {
	return damage = Math.floor((Math.random() * 2) + 1);
}

startGame();