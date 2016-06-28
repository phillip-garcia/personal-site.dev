"use strict"
//icon animations//
$(document).ready(function() {
    $('#boltAnimation').hover(
        function() {
            $(this).css('color', 'white');
        },
        function() {
            $(this).css('color', '#FFE048');
        }
    );
});
//$(document).ready(function() {
//    $('#globeAnimation').hover(
//        function() {
//            $(this).css('transform', 'rotate(180deg)');
//        },
//        function() {
//            $(this).css('transform', 'rotate(0deg)');
//        }
//    );
//});
$(document).ready(function() {
    $('#jump').hover(
        function() {
            $(this).css('margin-top', '-15px');
        },
        function() {
            $(this).css('margin-top', '0px');
        }
    );
});
$(document).ready(function() {
    $("#globeImage").hover(function(){
		$(this).toggle("explode", {pieces: 30});
    });	
});






//calculator//
"use strict";

var storeNumber = function(event) {
	var operator = document.getElementById("operator");
	if (operator.value != "") {
		var numberInput = document.getElementById("secondNumber");
		numberInput.value += this.getAttribute('data-value');
	} else { 
		var numberInput = document.getElementById("firstNumber");
		numberInput.value += this.getAttribute('data-value');
	}
}

var storeSecondInput = function(event) {
	var addOperator = document.getElementById("operator");
	addOperator.value = this.getAttribute('data-value');
}

var clearExcess = function() {
	var secondInput = document.getElementById("secondNumber")
	secondInput.value = "";
	var operator = document.getElementById("operator")
	operator.value = "";
}

var equalsOperator = function(event) {
	var firstInput = document.getElementById("firstNumber");
	var secondInput = document.getElementById("secondNumber");
	var operator = document.getElementById("operator");
	var operation;
	switch (operator.value) {
		case "*": 
			operation = parseInt(firstInput.value) *  parseInt(secondInput.value);
			break;
		case "/": 
			operation = parseInt(firstInput.value) / parseInt(secondInput.value);
			break;
		case "+": 
			operation = parseInt(firstInput.value) + parseInt(secondInput.value);
			break;
		case "-": 
			operation = parseInt(firstInput.value) - parseInt(secondInput.value);
			break;
	}
	var answerNum = document.getElementById("firstNumber");
	answerNum.value = operation;
	clearExcess();
}

var addDecimal = function() {
	var firstInput = document.getElementById("firstNumber");
	var secondInput = document.getElementById("secondNumber");
	if (operator.value != "" && secondInput.value != "") {
		var decimalAddition = document.getElementById("secondNumber");
		decimalAddition.value = decimalAddition.value + ".";
	} else {

	}
}

var clearAllFields = function() {
	var firstInput = document.getElementById("firstNumber");
	firstInput.value = "";
	var secondInput = document.getElementById("secondNumber");
	secondInput.value = "";
	var operator = document.getElementById("operator");
	operator.value = "";
}


var makeNumberNegative = function() {
	var firstInput = document.getElementById("firstNumber");
	var secondInput = document.getElementById("secondNumber");
	if (operator.value != "" && secondInput.value != "") {
		var makeSecondNumNeg = document.getElementById("secondNumber");
		makeSecondNumNeg.value = makeSecondNumNeg.value * -1;
	} else if (firstInput.value != "") {
		var makeFirstNumNeg = document.getElementById("firstNumber");
		makeFirstNumNeg.value = makeFirstNumNeg.value * -1;
	}
}

//calc events
var numberInput = document.getElementsByClassName("numberButton");
	for(var i = 0; i < numberInput.length; i++) {
		numberInput[i].addEventListener('click', storeNumber, false);
	}
var operatorInput = document.getElementsByClassName("operatorButtons");
	for(var i = 0; i < operatorInput.length; i++) {
		operatorInput[i].addEventListener('click', storeSecondInput, false);
	} 
var runOperation = document.getElementById("=btn");
runOperation.addEventListener('click', equalsOperator, false);

var clearAll = document.getElementById("clearButton");
clearAll.addEventListener('click', clearAllFields, false);

var makeNeg = document.getElementById("negativePositiveButton");
makeNeg.addEventListener('click', makeNumberNegative, false);

var decimal = document.getElementById("decimalBtn");
decimal.addEventListener('click', addDecimal, false);
//end calculator//












