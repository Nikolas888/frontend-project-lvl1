import readlineSync from 'readline-sync';

const getRandomFloat = () => {

  const name = readlineSync.question('May I have your name? ');
  console.log ('Hello ' + name + '!');
  console.log('');
  const sory = '\n\'yes\' is wrong answer ;(. Correct answer was \'no\'.\nLet\'s try again, ' + name + '!';
  let n = 1;


  while (n <= 3) {

     const num = Math.floor(Math.random() * 30);
     console.log ('Question: ' + num);
     const answer = readlineSync.question('Your answer:');

  if (num % 2 == 0 && answer == 'yes' && n <= 3) {
     console.log('Correct!');
     n += 1;

  }
  else if (num % 2 !== 0 && answer == 'no' && n <= 3) {
     console.log('Correct!');
     n += 1;

  }
  else if (num % 2 == 0 && answer !== 'yes') {
     n += 3;
     console.log(sory);
  }
  else if (num % 2 !== 0 && answer !== 'no') {
     console.log(sory);
     n += 3;
  };
};

if (n = 3) {
console.log('Congratulations, ' + name + '!');
};
};


export default getRandomFloat;
