var playerName = window.prompt("What is your robot's name")
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["BB-8", "R2-D2", "Seethreepio"];
var enemyHealth = 50;
var enemyAttack = 12;

//Game States
//"WIN" - Player robot has defeated all enemy robots
//  *Fight all enemy robots
//  *Defeat each enemy robot
//"LOSE" - Player robot's health is 0 or less

// Alert users that they are starting the round
window.alert("Welcome to Robot Gladiators!");

var fight = function(enemyName) {
    //repeat and execute as long as the enemy robot is alive
    while(enemyHealth > 0 && playerHealth > 0) {
        //ask user if they'd like to fight or run
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

        //if user picks "skip" confirm and then stop the loop
        if (promptFight === "skip" || promptFight === "SKIP") {
            //confirm user wants to skip
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");

            //if yes (true), leave the fight
            if (confirmSkip) {
                window.alert(playerName + " has decided to skip this fight.  Goodbye!");        
                //subtract money from playerMoney for skipping
                playerMoney = playerMoney - 10;
                console.log("playerMoney", playerMoney);
                break;
            }
        } 

        //if player chooses to fight, then fight
        if (promptFight === "fight" || promptFight==="FIGHT") {
            //remove enemy's health by subtracting the amount set in the playerAttack variable.
            enemyHealth = enemyHealth - playerAttack;
            console.log(
                playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
            );

            //check enemy's health
            if (enemyHealth <= 0) {
                window.alert(enemyName + " has died!");
                break;
            } else {
                window.alert(enemyName + " still has " + enemyHealth + " health left.");
            }

            //remove player's health by subtracting the amount set in the enemyAttack variable.
            playerHealth = playerHealth - enemyAttack;
            console.log(
                enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
            );

            //check player's health
            if (playerHealth <= 0) {
                window.alert(playerName + " has died!");
                break;
            } else {
                window.alert(playerName + " still has " + playerHealth + " health left.");
            }
       } else {
        fight();
        //if no (false), ask question again by running fight() again
        else {
                window.alert("You need to pick a valid option.  Try again!");
            }
    } 
    //    

         
        
        
    }
};

for(var i = 0; i < enemyNames.length; i++) {
    debugger;
    var pickedEnemyName = enemyNames[i];
    enemyHealth = 50;
    //call fight function with enemy robot
    fight(enemyNames[i])
}
//initiate battle
//fight();