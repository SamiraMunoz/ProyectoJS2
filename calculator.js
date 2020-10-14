let operatorA;
let operatorB;
let operationProgress;
let resultScreen = document.getElementById("result-screen");
let history = document.getElementById('history');
let existResult = false; 

function number(num) {
	if (num == '.' && resultScreen.textContent.includes(".")) {
		alert('No puede agregar un nuevo . al numero');
	}else{
		if (existResult) {
			cleanResult();
			resultScreen.textContent += num;
		}else{
			resultScreen.textContent += num;
		}
	}
}

function operation(op) {
	operatorA = resultScreen.textContent;
	operationProgress = op;
	cleanResult();
}

function igual() {
	let result = 0;
	operatorB = resultScreen.textContent;
	if (operatorA == 0) {
		alert('Lo sentimos, no podemos realizar su operacion.');
		cleanAllOp();
	}else{
		switch(operationProgress){
    case "+":
      result = parseFloat(operatorA) + parseFloat(operatorB);
      break;

    case "-":
        result = parseFloat(operatorA) - parseFloat(operatorB);
        break;

    case "*":
      result = parseFloat(operatorA) * parseFloat(operatorB);
      break;

    case "/":
      result = parseFloat(operatorA) / parseFloat(operatorB);
      break;
  }
  existResult = true;
  addOperation(operatorA, operationProgress, operatorB, result);
  cleanAllOp();
  resultScreen.textContent = result;
	}
}

function addOperation(opA, opProgress, opB, res) {
	let stringOperation =  `<li>${opA} ${opProgress} ${opB} = ${res} </li>`

  history.innerHTML += stringOperation; 
}

function cleanResult() {
	resultScreen.textContent = '';
}


function cleanAllOp() {
	resultScreen.textContent = '';
	operatorA = 0;
	operatorB = 0;
	operationProgress = '';
}

function cleanHistory() {
  history.innerHTML = ""; 
}

function clean() {
	cleanAllOp();
	cleanHistory();
}