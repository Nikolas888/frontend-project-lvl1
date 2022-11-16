import { gameEngine, Rounds } from '../index.js';

const rules = 'What is the result of the expression?';

const operators = ['+', '-', '*'];

const getRightAnswer = (firstNum, secondNum, operator) => {
  if (operator === '+') {
    return firstNum + secondNum;
  } if (operator === '-') {
    return firstNum - secondNum;
  }
  return firstNum * secondNum;
};

const brainCalc = () => {
  const questionAnswerPairs = [];

  for (let i = 0; i < Rounds; i += 1) {
    const firstNum = Math.floor(Math.random() * 30);
    const secondNum = Math.floor(Math.random() * 30);
    const arr = [firstNum + secondNum, firstNum - secondNum, firstNum * secondNum];
    const rand = Math.floor(Math.random() * arr.length);
    const randomOperator = operators[rand];
    const operator = randomOperator;

    // Get string with expression
    const expressionString = `${firstNum} ${operator} ${secondNum}`;

    // Creating buffer array and add items
    const bufferArray = [];
    bufferArray.push(expressionString);
    const rightAnswer = getRightAnswer(firstNum, secondNum, operator);
    bufferArray.push(rightAnswer.toString());

    // Adding a buffer array to an question and answer pair array
    questionAnswerPairs.push(bufferArray);
  }
  gameEngine(questionAnswerPairs, rules);
};

export default brainCalc;
