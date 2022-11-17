import { gameEngine, Rounds } from '../index.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isNumberPrime = (randomNum) => {
  let result = true;

  if (randomNum === 1) {
    return false;
  }

  for (let i = 2; i < randomNum; i += 1) {
    if (randomNum % i === 0) {
      result = false;
      break;
    }
  }

  return result;
};

const brainPrime = () => {
  const questionAndAnswerPairs = [];

  for (let i = 0; i < Rounds; i += 1) {
    const bufferArray = [];
    const randomNum = Math.floor(Math.random() * 30);
    bufferArray.push(String(randomNum));
    const rightAnswer = isNumberPrime(randomNum) ? 'yes' : 'no';
    bufferArray.push(rightAnswer);
    questionAndAnswerPairs.push(bufferArray);
  }
  gameEngine(questionAndAnswerPairs, rules);
};
export default brainPrime;
