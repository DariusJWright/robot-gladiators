var playerName = window.prompt("What is your robot's name")
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["BB-8", "R2-D2", "Seethreepio"];
var enemyHealth = 50;
var enemyAttack = 12;

//Game States
//Wrap the game logic in a startGame() function
//When the player is defeated or there are no more enemies, call an endGame() function that:
//  *Alerts the player's total stats
//  *Asks the player if they want to play again
//  *If yes, call startGame() to restart the game
//After the player skips or defeats an enemy (and there are still more robots to fight):
//  *Ask the player is they want to "shop"
//  *If no, continue as normal
//  *if yes, call the shop() function
//  *In the shop() function, ask player if they want to "refill" health, "upgrade" attack, or "leave" the shop
//  *If refill, subtract money and increase health
//  *If upgrade, subtract money and increase attack power
//  *If leave, alert goodbye and exit funtion
//  *If any other invalid option, call shop() again

// Alert users that they are starting the round
//window.alert("Welcome to Robot Gladiators!");

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
                playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.");

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
                enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");

            //check player's health
            if (playerHealth <= 0) {
                window.alert(playerName + " has died!");
                break;
            } else {
                window.alert(playerName + " still has " + playerHealth + " health left.");
            }
       } else {
        window.alert("You need to pick a valid option.  Try again!");
        }
    } 
};

//function to start a new game
var startGame = function() {
    //reset player stats
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;

    for(var i = 0; i < enemyNames.length; i++) {
        if (playerHealth > 0) {
            //tell user which round they're in
            window.alert("Welcome to robot gladiators! Round " + ( i + 1 ) );
            // pick a new enemy to fight
            var pickedEnemyName = enemyNames[i];
            //reset enemy health before new fight
            enemyHealth = 50;
            //use debugger to pause script
            debugger;
            //call fight function with enemy robot
            fight(pickedEnemyName);
        } else {
            window.alert("You have lost your robot in battle! Game Over!");
            break;
        }
    }

    //play again
    endGame();
};

var endGame = function() {
    window.alert("The game has now ended. Let's see how you did!");
    //if player is still alive, player wins!
    if (playerHealth > 0) {
        window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + ",");
    }
    else {
        window.alert("You've lost your robot in battle.");
    }
    //ask to play again
    var playAgainConfirm = window.confirm("Would you like to play again?");

    if (playAgainConfirm) {
        //restart the game
        startGame();
    }
    else {
        window.alert("Thank you for playing Robot Gladiators! Come back soon!");
    }
}
//start the game when the page loads
startGame();