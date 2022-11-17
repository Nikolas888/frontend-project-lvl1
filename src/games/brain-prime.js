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

// import readlineSync from 'readline-sync';

// const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

// const getRandomFloat = () => {
//   console.log('\nWelcome to the Brain Games!');
//   console.log(rules);
//   const name = readlineSync.question('\nMay I have your name? ');
//   console.log(`Hello, ${name}!`);
//   console.log('');
//   // const num4 = 1; // результат.
//   let n = 1; // раунды

//   while (n <= 3) {
//     const num = Math.floor(Math.random() * 30);
//     let ans = '';

//     const prime = (a) => {
//       let i = 2;
//       if (a === 2) {
//         ans = 'yes';
//         i += a;
//       } else if (a === 0 || a === 1) {
//         ans = 'no';
//         i += a;
//       } else if (a > 2) {
//         while (i < a) {
//           if (a % i !== 0) {
//             ans = 'yes';
//             i += 1;
//           } else {
//             ans = 'no';
//             i += a;
//           }
//         }
//       }
//     };

//     prime(num);
