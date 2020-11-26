'use strict';

function isNumber(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}
const startGame = confirm('Сыграем в игру?');

const game = function() {
  const randomNumber = Math.floor((Math.random() * 100) + 1);
  function repeat(tryGame) {
    const customNumber = prompt('Введите число от 1 до 100!');
    tryGame--;
    let question2;
    let question3;
    if (isNumber(customNumber)) {
      if (customNumber > randomNumber && tryGame > 0) {
        alert(`Загаданное число меньше! Осталось попыток ${tryGame}`);
        repeat(tryGame);
      } else if (customNumber < randomNumber && tryGame > 0) {
        alert(`Загаданное число больше! Осталось попыток ${tryGame}`);
        repeat(tryGame);
      } else if (tryGame === 0) {
          question2 = confirm('Попытки закончились, хотите сыграть еще?');
          if (question2 === true) {
            game();
          }
      } else {
        alert('Угадали!');
        question3 = confirm('Хотите сыграть еще раз?');
        if (question3 === true) {
          game();
        }
      }
    } else if (customNumber === null) {
      alert('Игра окончена');
    } else if (!isNumber(customNumber)) {
      alert('Введите число!');
      repeat(tryGame);
    }
  }
  repeat(10);
};

if (startGame === true) {
    game();
  }
