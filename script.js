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

function startGame() {
	inviteUser = prompt("Would you like to play a game with two characters?");
	if (inviteUser.toLowerCase() === "yes") {
		userObj.name = prompt("What would you like to name your character?");
		console.log(userObj.name);
		startCombat();
	}
}

function startCombat() {
	while ((userObj.health) > 0 && userObj.wins < 5) {
		var takeTurn = prompt("Would you like to attack, heal, or quit?");
		if (takeTurn.toLowerCase() === "attack") {
			grantObj.health -= userObj.generateAttackDamage();
			userObj.health -= grantObj.generateAttackDamage();
			console.log(userObj.name + " has " + userObj.health + " health left.");
			console.log("Grant the almighty has " + grantObj.health + " health left.");
			if (grantObj.health <= 0) {
				userObj.wins += 1;
				grantObj.health = 10;
				// console.log("grant's health reset to " + grantHealth);
				console.log(userObj.name + " has " + userObj.wins + " wins! You need " + (3 - userObj.wins) + " more wins!");
			}
			if (userObj.health <= 0) {
				console.log("Grant is the winner!");
			}
			if (userObj.wins >= 5) {
				console.log(userObj.name + " is the winner!");
			}
		} else if (takeTurn.toLowerCase() === "heal") {
			if (userObj.healsRemaining > 0) {
				userObj.health += userObj.heal();
				console.log("heals remaining: " + userObj.healsRemaining);
				console.log("user health: " + userObj.health);
				// console.log(userObj.name + " was healed "  + " health points.");
				// console.log(userObj.name + " has " +  + " heals remaining.");
			}
		} else if (takeTurn.toLowerCase() === "quit") {
			return;
		}
	}
}

startGame();


