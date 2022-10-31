#!/usr/bin/env node
import readlineSync from 'readline-sync';

const getRandomFloat = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('');
  let num3 = 1; // общий делитель
  let n = 1; // раунды

  function nod(num, num2) {
    let a = num;
    let b = num2;
    if (a === 0) return b;
    while (b !== 0) {
      if (a > b) {
        a -= b;
      } else b -= a;
    }
    return a;
  }
  // console.log(nod(5, 10));

  while (n <= 3) {
    const num = Math.floor(Math.random() * 30);
    const num2 = Math.floor(Math.random() * 30);
    // const arr = [num + num2, num - num2, num * num2];
    // const rand = Math.floor(Math.random() * arr.length);

    // const quest = () => {
    console.log(`Question: ${num} ${num2}`);
    num3 = nod(num, num2);
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

console.log('\nWelcome to the Brain Games!');
console.log('Find the greatest common divisor of given numbers.');
console.log('');
getRandomFloat();

export default getRandomFloat;
