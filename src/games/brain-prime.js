import readlineSync from 'readline-sync';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getRandomFloat = () => {
  console.log('\nWelcome to the Brain Games!');
  console.log(rules);
  const name = readlineSync.question('\nMay I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('');
  // const num4 = 1; // результат.
  let n = 1; // раунды

  while (n <= 3) {
    const num = Math.floor(Math.random() * 30);
    let ans = '';

    const prime = (a) => {
      let i = 2;
      if (a === 2) {
        ans = 'yes';
        i += a;
      } else if (a === 0 || a === 1) {
        ans = 'no';
        i += a;
      } else if (a > 2) {
        while (i < a) {
          if (a % i !== 0) {
            ans = 'yes';
            i += 1;
          } else {
            ans = 'no';
            i += a;
          }
        }
      }
    };

    prime(num);

    const quest = () => {
      console.log(`Question: ${num}`);
    };

    quest();

    const answer = readlineSync.question('Your answer: ');

    if (answer === ans && n <= 3) {
      console.log('Correct!');
      n += 1;
    } else if (answer !== ans) {
      n += 4;
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${ans}' . Let's try again, ${name}!`);
    }
  }

  if (n === 4) {
    console.log(`Congratulations, ${name}!`);
  }
};

export default getRandomFloat;
