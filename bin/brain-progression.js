#!/usr/bin/env node
import readlineSync from 'readline-sync';

const getRandomFloat = () => {
  const name = readlineSync.question('May I have your name? ');
  const hello = 'Hello, ';
  const ex = '!';
  const space = ' ';
  const question = 'Question: ';
  console.log(hello + name + ex);
  console.log('');
  let num4 = 1; // результат
  let n = 1; // раунды

  while (n <= 3) {
    const num = Math.floor(Math.random() * 30);
    const num2 = Math.floor(Math.random() * 30);
    const num3 = Math.floor(Math.random() * 9);

    const fn = (a, b) => {
      const bb = b;
      let aa = a;
      let i = 0;
      let str = '';
      while (i <= 9) {
        if (i !== num3) {
          str = str + aa + space;
        } else if (i === num3) {
          str += '.. ';
        }
        aa += bb;
        i += 1;
      }
      return str;
    };

    // const otvet = () => { // функция вычисляет результат num4
    if (num3 === 0) {
      num4 = num;
    } else if (num3 === 1) {
      num4 = num + num2;
    } else if (num3 === 2) {
      num4 = num + num2 + num2;
    } else if (num3 === 3) {
      num4 = num + num2 + num2 + num2;
    } else if (num3 === 4) {
      num4 = num + num2 + num2 + num2 + num2;
    } else if (num3 === 5) {
      num4 = num + num2 + num2 + num2 + num2 + num2;
    } else if (num3 === 6) {
      num4 = num + num2 + num2 + num2 + num2 + num2 + num2;
    } else if (num3 === 7) {
      num4 = num + num2 + num2 + num2 + num2 + num2 + num2 + num2;
    } else if (num3 === 8) {
      num4 = num + num2 + num2 + num2 + num2 + num2 + num2 + num2 + num2;
    } else if (num3 === 9) {
      num4 = num + num2 + num2 + num2 + num2 + num2 + num2 + num2 + num2 + num2;
    } else if (num3 === 10) {
      num4 = num + num2 + num2 + num2 + num2 + num2 + num2 + num2 + num2 + num2 + num2;
    }
    // return num4;
    // };

    // otvet();

    const quest = () => {
      console.log(question + fn(num, num2));
    };

    quest();

    const answer = readlineSync.question('Your answer: ');

    if (Number(answer) === num4 && n <= 3) {
      console.log('Correct!');
      n += 1;
    } else if (answer !== num3) {
      n += 4;
      const wrong = ' is wrong answer ;(. Correct answer was ';
      const tryagain = ' . Let\'s try again, ';
      const kov = "'";
      console.log(kov + answer + kov + wrong + kov + num4 + kov + tryagain + name + ex);
    }
  }

  if (n === 4) {
    const congratulations = 'Congratulations, ';
    console.log(congratulations + name + ex);
  }
};

console.log('\nWelcome to the Brain Games!');
console.log('What number is missing in the progression?');
console.log('');
getRandomFloat();

export default getRandomFloat;
