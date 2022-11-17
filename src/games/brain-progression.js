import { gameEngine, Rounds } from '../index.js';

const rules = 'What number is missing in the progression?';

const progressionGenerator = (firstNumber, secondNumber) => {
  const numberOfDigits = 9;
  let a1 = firstNumber;
  const d1 = secondNumber;
  const numbersArray = [];

  numbersArray.push(a1);
  for (let i = 0; i < numberOfDigits; i += 1) {
    a1 += d1;
    numbersArray.push(a1);
  }

  return numbersArray;
};

const brainProgression = () => {
  const questionAndAnswerPairs = [];

  for (let i = 0; i < Rounds; i += 1) {
    const bufferArray = [];
    const handlerArray = [];
    const a = Math.floor(Math.random() * 30);
    const d = Math.floor(Math.random() * 30);

    bufferArray.push(progressionGenerator(a, d));
    const randomItemIndex = Math.floor(Math.random() * 9);
    const rightAnswer = bufferArray[0][randomItemIndex];

    bufferArray[0][randomItemIndex] = '..';
    handlerArray.push(bufferArray[0].join(' '));
    handlerArray.push(String(rightAnswer));
    questionAndAnswerPairs.push(handlerArray);
  }
  gameEngine(questionAndAnswerPairs, rules);
};

export default brainProgression;
