var inviteUser = prompt("Would you like to play a game with two characters?");
var userWins = 0;
var userHealth = 40;
var grantHealth = 10;

if (inviteUser.toLowerCase() === "yes") {
	var userName = prompt("What would you like to name your character?");
	while (userHealth > 0 && userWins < 3) {
		var grantDamage = Math.floor((Math.random() * 2) + 1);
		var userDamage = Math.floor((Math.random() * 2) + 1);
		grantHealth -= grantDamage;
		userHealth -= userDamage;
		console.log(userName + " has " + userHealth + " health left.");
		console.log("Grant the almighty has " + grantHealth + " health left.");
		if (grantHealth <= 0) {
			userWins += 1;
			grantHealth = 10;
			// console.log("grant's health reset to " + grantHealth);
			console.log(userName + " has " + userWins + " wins!");
		}
	if (userHealth <= 0) {
		console.log("Grant is the winner!");
	}
	if (userWins >= 3) {
		console.log(userName + " is the winner!");
	}
	}	
};