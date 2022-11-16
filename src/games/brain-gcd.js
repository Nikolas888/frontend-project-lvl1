import { gameEngine, Rounds } from '../index.js';

const rules = 'Find the greatest common divisor of given numbers.';

// Finding GCD with Euclid's Algorithm and Recursion
const getRightAnswer = (firstNum, secondNum) => {
  let rightAnswer;

  if (firstNum === secondNum) {
    rightAnswer = firstNum;
  } else if (firstNum > secondNum) {
    rightAnswer = getRightAnswer(firstNum - secondNum, secondNum);
  } else if (firstNum < secondNum) {
    rightAnswer = getRightAnswer(firstNum, secondNum - firstNum);
  }

  return rightAnswer;
};

const brainGcd = () => {
  const questionAnswerPairs = [];

  for (let i = 0; i < Rounds; i += 1) {
    const bufferArray = [];

    const firstNum = Math.floor(Math.random() * 30);
    const secondNum = Math.floor(Math.random() * 30);
    const question = `${firstNum} ${secondNum}`;

    // Adding question and answer to an buffer array
    bufferArray.push(question);
    bufferArray.push(getRightAnswer(firstNum, secondNum).toString());

    // Adding a buffer array to an question and answer pair array
    questionAnswerPairs.push(bufferArray);
  }
  gameEngine(questionAnswerPairs, rules);
};

export default brainGcd;
