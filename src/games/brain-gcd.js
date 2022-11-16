import { gameEngine, Rounds } from '../index.js';

const rules = 'Find the greatest common divisor of given numbers.';

// Finding GCD with Euclid's Algorithm and Recursion
// const getRightAnswer = (firstNum, secondNum) => {
//   let rightAnswer;

//   if (firstNum === secondNum) {
//     rightAnswer = firstNum;
//   } else if (firstNum > secondNum) {
//     rightAnswer = getRightAnswer(firstNum - secondNum, secondNum);
//   } else if (firstNum < secondNum) {
//     rightAnswer = getRightAnswer(firstNum, secondNum - firstNum);
//   }

//   return rightAnswer;
// };


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
  }

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

// const getRandomFloat = () => {
//   console.log('\nWelcome to the Brain Games!');
//   console.log(rules);
//   const name = readlineSync.question('\nMay I have your name? ');
//   console.log(`Hello, ${name}!`);
//   console.log('');
//   let num3 = 1; // общий делитель
//   let n = 1; // раунды

//   function nod(num, num2) {
//     let a = num;
//     let b = num2;
//     if (a === 0) return b;
//     while (b !== 0) {
//       if (a > b) {
//         a -= b;
//       } else b -= a;
//     }
//     return a;
//   }
//   // console.log(nod(5, 10));

//   while (n <= 3) {
//     const num = Math.floor(Math.random() * 30);
//     const num2 = Math.floor(Math.random() * 30);
//     // const arr = [num+num2, num-num2, num*num2];
//     // const rand = Math.floor(Math.random() * arr.length);

//     // const quest = () => {
//     console.log(`Question: ${num} ${num2}`);
//     num3 = nod(num, num2);
//     // };

//     // quest();

//     const answer = readlineSync.question('Your answer: ');

//     if (Number(answer) === num3 && n <= 3) {
//       console.log('Correct!');
//       n += 1;
//     } else if (answer !== num3) {
//       n += 4;
//       console.log(`'${answer}' is wrong answer ;(. Correct answer was '${num3}' . Let's try again, ${name}!`);
//     }
//   }

//   if (n === 4) {
//     console.log(`Congratulations, ${name}!`);
//   }
// };

// export default getRandomFloat;
