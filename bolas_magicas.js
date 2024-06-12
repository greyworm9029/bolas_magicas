// Definindo o nome de usuário
let userName = 'Daniel';

// Condição do nome de usuário
userName ? console.log(`Olá, ${userName}!`) : console.log('Nome incorreto!');

// Pergunta do usuário
let userQuestion = `${userName}: Quando vou ser o melhor programador do mercado?'`;

// Impressão da Pergunta
console.log(userQuestion);

// Gerador de número entre 1 e 7
const randomNumber = Math.floor(Math.random() * 8);

// 8 bolas mágicas
let eightBall = '';

// Condição entre as diferentes opções geradas pela variável
switch (randomNumber) {
  case 1:
  eightBall = 'It is certain';
  break;

  case 2: 
  eightBall = 'It is decidedly so';
  break;

  case 3:
  eightBall = 'Reply hazy try again';
  break;

  case 4: 
  eightBall = 'Cannot predict now';
  break;

  case 5: 
  eightBall = 'Do not count on it';
  break;

  case 6: 
  eightBall = 'My sources say no';
  break;

  case 7: 
  eightBall = 'Outlook not so good';
  break;

  case 8: 
  eightBall = 'Signs point to yes';
  break;

  default: 
  eightBall = 'You\'ve selected an incorrect option! Please try again!';
  break;
}

// Resultado 
console.log(eightBall);