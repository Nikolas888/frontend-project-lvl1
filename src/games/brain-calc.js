import readlineSync from 'readline-sync';
// import * as random from '../src/random.js';

const rules = 'What is the result of the expression?';

const getRandomFloat = () => {
  console.log('\nWelcome to the Brain Games!');
  console.log(rules);
  // console.log('');
  const name = readlineSync.question('\nMay I have your name? ');
  console.log(`Hello, ${name}!\n`);
  let num3 = 1; //  результат случайного вычисления случайных чисел.
  let n = 1; // раунды

  while (n <= 3) {
    const num = Math.floor(Math.random() * 30);
    const num2 = Math.floor(Math.random() * 30);
    const arr = [num + num2, num - num2, num * num2];
    const rand = Math.floor(Math.random() * arr.length);

    // const quest = () => {
    if (rand === 0) {
      console.log(`Question: ${num} + ${num2}`);
      num3 = num + num2;
    } else if (rand === 1) {
      console.log(`Question: ${num} - ${num2}`);
      num3 = num - num2;
    } else if (rand === 2) {
      console.log(`Question: ${num} * ${num2}`);
      num3 = num * num2;
    }
    // };

    // quest();

    const answer = readlineSync.question('Your answer: ');

    if (Number(answer) === num3 && n <= 3) {
      console.log('Correct!');
      n += 1;
    } else if (answer !== num3) {
      n += 4;
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${num3}' . Let's try again, ${name}!`);
    }
  }

  if (n === 4) {
    console.log(`Congratulations, ${name}!`);
  }
};

export default getRandomFloat;
