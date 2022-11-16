import { gameEngine, Rounds } from '../index.js';

const rules = 'Find the greatest common divisor of given numbers.';

const getRightAnswer = (firstNum, secondNum) => {
  let a = firstNum;
  let b = secondNum;
  if (a === 0) return b;
  while (b !== 0) {
    if (a > b) {
      a -= b;
    } else b -= a;
  }
  return a;
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
