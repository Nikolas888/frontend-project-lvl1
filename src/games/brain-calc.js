import readlineSync from 'readline-sync';
import { gameEngine, Rounds } from '../index.js';

const rules = 'What is the result of the expression?';

const operators = ['+', '-', '*'];

const getRightAnswer = (firstNumber, secondNumber, operator) => {
  if (operator === '+') {
    return firstNumber + secondNumber;
  } else if (operator === '-') {
    return firstNumber - secondNumber;
  } 
    return firstNumber * secondNumber;
}

const brainCalc = () => {
  const questionAnswerPairs = [];

  for (let i = 0; i < Rounds; i += 1) {
    const firstNumber = Math.floor(Math.random() * 30);
    const secondNumber = Math.floor(Math.random() * 30);
    const arr = [firstNumber + secondNumber, firstNumber - secondNumber, firstNumber * secondNumber];
    const rand = Math.floor(Math.random() * arr.length);
    const randomOperator = operators[rand];
    const operator = randomOperator;

        // Get string with expression
    const expressionString = `${firstNumber} ${operator} ${secondNumber}`;

        // Creating buffer array and add items
        const bufferArray = [];
        bufferArray.push(expressionString);
        const rightAnswer = getRightAnswer(firstNumber, secondNumber, operator);
        bufferArray.push(rightAnswer.toString());

        // Adding a buffer array to an question and answer pair array
        questionAnswerPairs.push(bufferArray);

    }
    gameEngine(questionAnswerPairs, rules);
  }

export default brainCalc;
