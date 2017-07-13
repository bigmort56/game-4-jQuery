var computerScore = "";

var buttonValue = randomNumberButton();

var score = 0;

var wins = 0;

var losses = 0;



window.onload = function() {
	randomButton();
	randomCompScore();
	
};
 
$(document).on("click", "button" function() {
	buttonClick();

});


function randomNumberButton () {
	return Math.floor(Math.random() * 12);
}

function randomNumberComputer() {
	var computerScore = Math.floor(Math.random() * 120) + 19;
}


function  buttonClick () {
	 playerScore = score + buttonValue;
	$(".player-score").html(playerScore);
}

function randomButton () {
	buttonValue;
	$("#gem-buttons").val(buttonValue);

}

function randomCompScore () {
	computerScore;
	$(".score-to-guess").html(.text(computerScore);
}

function restart () {
	if (playerScore === computerScore) {
		wins ++;
		alert("You Win!!");
		$("#wins").html("Wins: " + wins);
		playerScore = 0;
		randomCompScore();
		randomButton();
	}

	if (playerScore > computerScore) {
		losses ++;
		alert("You Lose...");
		$("#losses").html("Losses: " + losses);
		playerScore = 0;
		randomCompScore();
		randomButton();
	}

	}



