import readlineSync from 'readline-sync';

const getRandomFloat = () => {

  const name = readlineSync.question('May I have your name? ');
  console.log ('Hello ' + name + '!');
  console.log('');
  let num4 = 1; //результат
  let n = 1; //раунды


  while (n <= 3) {

     const num = Math.floor(Math.random() * 30);
     const num2 = Math.floor(Math.random() * 30);
     const num3 = Math.floor(Math.random() * 9);

     const fn = (num, num2) => {
       let i = 0;
       let str = '';
       while (i <= 9){
        if (i !== num3) {
         str = str + num + ' ';
         num += num2;
         i += 1;
       }
       else if (i === num3){
         str = str + ".." + ' ';
         num += num2;
         i += 1;
       };
       };
      return str;
     };


const otvet = () => { // функция вычисляет результат num4
  if (num3 === 0){
    num4 = num;
  }
  else if (num3 === 1){
    num4 = num + num2;
  }
  else if (num3 === 2){
    num4 = num + num2 + num2;
  }
  else if (num3 === 3){
    num4 = num + num2 + num2 + num2;
  }
  else if (num3 === 4){
    num4 = num + num2 + num2 + num2 + num2;
  }
  else if (num3 === 5){
    num4 = num + num2 + num2 + num2 + num2 + num2;
  }
  else if (num3 === 6){
    num4 = num + num2 + num2 + num2 + num2 + num2 + num2;
  }
  else if (num3 === 7){
    num4 = num + num2 + num2 + num2 + num2 + num2 + num2 + num2;
  }
  else if (num3 === 8){
    num4 = num + num2 + num2 + num2 + num2 + num2 + num2 + num2 + num2;
  }
  else if (num3 === 9){
    num4 = num + num2 + num2 + num2 + num2 + num2 + num2 + num2 + num2 + num2;
  }
  else if (num3 === 10){
    num4 = num + num2 + num2 + num2 + num2 + num2 + num2 + num2 + num2 + num2 + num2;
  }
  return num4;
} ;

otvet();


const quest = () => {

    console.log('Question: ' + fn(num, num2));
 };

quest();


  const answer = readlineSync.question('Your answer: ');

  if ( answer == num4 && n <= 3) {
     console.log('Correct!');
     n += 1;
  }
  else if (answer !== num3) {
     n += 4;
     console.log('\'' + answer + '\' is wrong answer ;(. Correct answer was \'' + num4 + '\' . Let\'s try again, ' + name + '!');
  }
};

if (n === 4) {
console.log('Congratulations, ' + name + '!');
}
};


export default getRandomFloat;
