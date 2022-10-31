#!/usr/bin/env node
import readlineSync from 'readline-sync';

const getRandomFloat = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('');
  const sory = `\n'yes' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${name}!`;
  const sory2 = `\n'no' is wrong answer ;(. Correct answer was 'yes'.\nLet's try again, ${name}!`;
  let n = 1;

  while (n <= 3) {
    const num = Math.floor(Math.random() * 30);
    console.log(`Question: ${num}`);
    const answer = readlineSync.question('Your answer: ');

    if (num % 2 === 0 && answer === 'yes' && n <= 3) {
      console.log('Correct!');
      n += 1;
    } else if (num % 2 !== 0 && answer === 'no' && n <= 3) {
      console.log('Correct!');
      n += 1;
    } else if (num % 2 === 0 && answer !== 'yes') {
      n += 4;
      console.log(sory2);
    } else if (num % 2 !== 0 && answer !== 'no') {
      console.log(sory);
      n += 4;
    }
  }

  if (n === 4) {
    console.log(`Congratulations, ${name}!`);
  }
};

console.log('\nWelcome to the Brain Games!');
console.log('Answer "yes" if the number is even, otherwise answer "no".');
console.log('');
getRandomFloat();

export default getRandomFloat;
