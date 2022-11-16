import readlineSync from 'readline-sync';

export const Rounds = 3;

export const gameEngine = (array, rules) => {
    console.log('Welcome to the Brain Games!\n');
    const name = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${name}!\n\n${rules}`);
  
    // Compresion answers
    for (let i = 0; i < Rounds; i += 1) {
      const [question, rightAnswer] = array[i];
  
      const userAnswer = readlineSync.question(`Question: ${question}\nYour answer: `);
  
      if (rightAnswer !== userAnswer) {
        console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'\nLet's try again, ${name}!`);
        return;
      }
      console.log('Correct!');
    }
  
    console.log(`Congratulations, ${name}!`);
  };
  