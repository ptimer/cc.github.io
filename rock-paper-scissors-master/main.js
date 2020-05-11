/* open modal */
    rules_button.addEventListener("click", function(){
      document.getElementById("rules_modal").style.display = "block";
      document.getElementById("changeContainer").style.opacity = "0.1";
    });
    
/* close modal */ 
    icon_close.addEventListener("click", function(){
      document.getElementById("rules_modal").style.display = "none";
      document.getElementById("changeContainer").style.opacity = "1";
    });

/* THE WAY IT BEHAVES WHEN CLICKING AT PAPER SCISSORS OR ROCK */


		listenerPickBlock(pickBlock__paper, "paper");
		listenerPickBlock(pickBlock__scissors, "scissors");
		listenerPickBlock(pickBlock__rock, "rock");
		
		function listenerPickBlock(pickBlockId, clientPl)
		{
			pickBlockId.addEventListener("click", function(){
				/* game */
				let clientPlayer = clientPl;
				let clientPC = PcIntelligent(clientPlayer);
				let resultOfTheGame = game(clientPlayer + " " + clientPC);

				/* styles */
				YouPickedBlock.style.display = "grid";
				pickBlock.style.display = "none";

				/*show Player card */
				showPlayer(clientPlayer);

				/*show PC card and score */
				setTimeout(function(){
					showPcPlayer(clientPC);
					showScore();
				}, 1000);

				/* show text */
				setTimeout(function(){
					showFinalWindow(resultOfTheGame);
				}, 2000);
			});
		}

/* game logic */

var score = 0;
var rules = [
	"paper rock",
	"rock scissors",
	"scissors paper"
];

var textWin = "You win";
var textLose = "You lose";
	
function PcIntelligent(clientPlayer){
	let statesPc = ["paper", "scissors", "rock"];
	let clientPc = statesPc[Math.floor(Math.random() * statesPc.length)];
	if(clientPlayer == clientPc)
	{
		return PcIntelligent(clientPlayer);
	}
	else
	{
		return clientPc;
	}
}

function game(whoWin){

	for(let i = 0; rules.length > i; i++){
		if(whoWin == rules[i]){
			scoreUp();
			return textWin;
			break;
		}
	}

	scoreDown();
	return textLose;

}

function scoreUp(){
	score += 1;
}

function scoreDown(){
	if(score <= 0){
		score = 0;
	}else{
		score -= 1;
	}
}

function getScore(){
	return score;
}

function showScore(){
	scoreState.innerText = getScore();
}

/* show PC card */

function showPcPlayer(clientPC){
	circle.style.display = "none";
	PCChoosen.style.display = "flex";

	switch (clientPC){
		case "paper":
			PCChoosen.classList.add("pickBlock__paper_step2");
			img_pc_player.src = "images/icon-paper.svg"
			break;
		case "scissors":
			PCChoosen.classList.add("pickBlock__scissors_step2");
			img_pc_player.src = "images/icon-scissors.svg"
			break;
		case "rock":
			PCChoosen.classList.add("pickBlock__rock_step2");
			img_pc_player.src = "images/icon-rock.svg"
			break; 
	}
}

/* show Player card */

function showPlayer(clientPlayer){
	switch (clientPlayer){
		case "paper":
			PlayerChoosen.classList.add("pickBlock__paper_step2");
			img_player_player.src = "images/icon-paper.svg"
			break;
		case "scissors":
			PlayerChoosen.classList.add("pickBlock__scissors_step2");
			img_player_player.src = "images/icon-scissors.svg"
			break;
		case "rock":
			PlayerChoosen.classList.add("pickBlock__rock_step2");
			img_player_player.src = "images/icon-rock.svg"
			break; 
	}
}

/* show final window step 4 win or lose */

function showFinalWindow(text){
	winOrLoseText.innerText = text;
	WinOrLoseBlock.style.display = "block";
	YouPickedBlock.style.width = "940px";
	YouPickedBlock.style.gridTemplateColumns = "repeat(3, 1fr)";
}


/* play again button */

