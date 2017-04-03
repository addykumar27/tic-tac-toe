$(document).ready(function() {
	var player = 1;
	$( ".board" ).click(function() {
  		resetBoard();
	});
	$(".column").on("click", function(event) {

		var columnSelected = $(this);
		if (columnSelected.hasClass("x") || columnSelected.hasClass('o')) {
			alert("this box has already been selected");
		} else {
			if (player === 1) {
				columnSelected.addClass("x");
				$(this).prepend('<img class="image" src="images/x.png" />');
				if (checkIfPlayerWon("x")) {
					alert ("Congrats! Player " + player + " has won!");
				} else {
					player = 2;
				}

			} else {
				columnSelected.addClass("o");
				$(this).prepend('<img class="image" src="images/o.png" />');
				if (checkIfPlayerWon("o")) {
					alert ("Congrats! Player " + player + " has won!");
				} else {
					player = 1;
				}
			}
		}
		var count = isBoardFull();
		if(count === 9) {
			alert("Board is full, its a DRAW");
			resetBoard();
		}
	});

	function isBoardFull() {

		var count = 0;
		if ($(".sq1").hasClass("x") || $(".sq1").hasClass("o")) count++;
		if ($(".sq2").hasClass("x") || $(".sq2").hasClass("o")) count++;
		if ($(".sq3").hasClass("x") || $(".sq3").hasClass("o")) count++;
		if ($(".sq4").hasClass("x") || $(".sq4").hasClass("o")) count++;
		if ($(".sq5").hasClass("x") || $(".sq5").hasClass("o")) count++;
		if ($(".sq6").hasClass("x") || $(".sq6").hasClass("o")) count++;
		if ($(".sq7").hasClass("x") || $(".sq7").hasClass("o")) count++;
		if ($(".sq8").hasClass("x") || $(".sq8").hasClass("o")) count++;
		if ($(".sq9").hasClass("x") || $(".sq9").hasClass("o")) count++;

		return count;
	}

	function resetBoard() {
		$(".image").remove();
		$(".sq1").removeClass("x o");
		$(".sq2").removeClass("x o");
		$(".sq3").removeClass("x o");
		$(".sq4").removeClass("x o");
		$(".sq5").removeClass("x o");
		$(".sq6").removeClass("x o");
		$(".sq7").removeClass("x o");
		$(".sq8").removeClass("x o");
		$(".sq9").removeClass("x o");
	}

	function checkIfPlayerWon(symbol){
		if ($(".sq1").hasClass(symbol) && $(".sq2").hasClass(symbol) && $(".sq3").hasClass(symbol)) {
		return true;
		} else if ($(".sq4").hasClass(symbol) && $(".sq5").hasClass(symbol) && $(".sq6").hasClass(symbol)) {
		return true;
		} else if ($(".sq7").hasClass(symbol) && $(".sq8").hasClass(symbol) && $(".sq9").hasClass(symbol)) {
		return true;
		}  else if ($(".sq1").hasClass(symbol) && $(".sq4").hasClass(symbol) && $(".sq7").hasClass(symbol)) {
		return true;
		} else if ($(".sq2").hasClass(symbol) && $(".sq5").hasClass(symbol) && $(".sq8").hasClass(symbol)) {
		return true;
		} else if ($(".sq3").hasClass(symbol) && $(".sq6").hasClass(symbol) && $(".sq9").hasClass(symbol)) {
		return true;
		} else if ($(".sq1").hasClass(symbol) && $(".sq5").hasClass(symbol) && $(".sq9").hasClass(symbol)) {
		return true;
		} else if ($(".sq3").hasClass(symbol) && $(".sq5").hasClass(symbol) && $(".sq7").hasClass(symbol)) {
		return true;
		} else {
		return false;
		}
	}
});
