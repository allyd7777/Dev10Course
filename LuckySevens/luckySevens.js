function rollDice() {
	return Math.floor(Math.random() * 6) + 1;
}

function playGame() {
	var initialBet = Number(document.forms["diceGame"]["bet1"].value);
	var money = initialBet;
	var turns = 0;
	var maxMoney = initialBet;
	var maxTurns = 0;
	var dice1;
	var dice2;
	var diceSum;
	if(initialBet == "" || isNaN(initialBet) || initialBet <=0){
		alert("Starting bet must be a number greater than 0.");
	}
	else{
		while(money>0){
			dice1 = rollDice();
			dice2 = rollDice();
			diceSum = dice1 + dice2;
			turns++;
			if (diceSum == 7){
				money = money + 4;
				console.log("win. You now have $" + money + ".");
				if (money > maxMoney){
					maxMoney = money;
					maxTurns = turns;
				}
			}
			else{
				money--;
				console.log("Lose. You now have $" + money + ".");
			}
		}
	}
	document.getElementById("results").style.display = "block";
	document.getElementById("playButton").innerText = "Play Again";
	document.getElementById("initbet").innerText = initialBet;
	document.getElementById("totalRolls").innerText = turns;
	document.getElementById("highestWon").innerText = maxMoney;
	document.getElementById("highestWonRollCount").innerText = maxTurns;
	return false;
}
	