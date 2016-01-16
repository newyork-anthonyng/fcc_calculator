var myCalculation = 0;
var firstOperand;
var secondOperand;
var currentInput = '0';
var currentOperator;

$(function() {

  // pressing on a number
  $('.number').click(function() {
    if(currentOperator === 'equal') {
      firstOperand = undefined;
    }
    pushNumber($(this).data('number'));
    updateDisplay();
  });

  // *** Clear calculator *** //
  $('#clear').click(function() {
    clearCalculator();
    updateDisplay();
  });

  $('.operation').click(function() {
    switch($(this).attr('id')) {
      case 'plus':
        add();
        break;
      case 'minus':
        minus();
        break;
      case 'multiply':
        multiply();
        break;
      case 'divide':
        divide();
        break;
      case 'equal':
        equal();
        break;
      default:
        console.log('Invalid operator');
    }
  });
});

function pushNumber(num) {
  if(currentInput === '0') {
    currentInput = '' + num;
  } else {
    currentInput += '' + num;
  }
};

function updateDisplay(num) {
  $('.text-box').html('' + currentInput);
};

function clearCalculator() {
  currentInput = '0';
  firstOperand = undefined;
  secondOperand = undefined;
};

function calculateFirstOperand() {
  switch(currentOperator) {
    case 'add':
      firstOperand += parseInt(currentInput);
      break;
    case 'minus':
      firstOperand -= parseInt(currentInput);
      break;
    case 'multiply':
      firstOperand *= parseInt(currentInput);
      break;
    case 'divide':
      firstOperand /= parseInt(currentInput);
      break;
    default:
      console.log('Invalid operator');
      break;
  }

  currentInput = firstOperand;
  updateDisplay();
};

function equal() {
  calculateFirstOperand();
  currentInput = '0';
  currentOperator = 'equal';
};

function add() {
  parseInput();
  currentOperator = 'add';
};

function minus() {
  parseInput();
  currentOperator = 'minus';
};

function multiply() {
  parseInput();
  currentOperator = 'multiply';
};

function divide() {
  parseInput();
  currentOperator = 'divide';
};

function parseInput() {

  if(firstOperand === undefined) {
    firstOperand = parseInt(currentInput);
  } else if(secondOperand === undefined) {
    calculateFirstOperand();
  }

  currentInput = '0';
}
