import { gameEngine, Rounds } from '../index.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

function isEven(number) {
  return number % 2;
}

const brainEven = () => {
  const questionAnswerPairs = [];

  for (let i = 0; i < Rounds; i += 1) {
    const randomNum = Math.floor(Math.random() * 30);

    // Geting right answer
    const rightAnswer = isEven(randomNum) ? 'no' : 'yes';

    // Creating buffer array and add items
    const bufferArray = [];
    bufferArray.push(randomNum);
    bufferArray.push(rightAnswer);

    // Adding a buffer array to an question and answer pair array
    questionAnswerPairs.push(bufferArray);
  }
  gameEngine(questionAnswerPairs, rules);
};

export default brainEven;
