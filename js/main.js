'use strict';

function isNumber(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}
const startGame = confirm('Сыграем в игру?');

const game = function() {
  const randomNumber = Math.floor((Math.random() * 100) + 1);
  console.log(randomNumber);
  function repeat() {
    let customNumber = prompt('Введите число от 1 до 100!');
    if (isNumber(customNumber)) {
      if (customNumber > randomNumber) {
        alert('Загаданное число меньше!');
        repeat();
      } else if (customNumber < randomNumber) {
        alert('Загаданное число больше!');
        repeat();
      } else {
        alert('Угадали!');
      }
    } else if (customNumber === null) {
      alert('Игра окончена');
    } else if (!isNumber(customNumber)) {
      alert('Введите число!');
      repeat();
    }
  }
  repeat();
};

if (startGame === true) {
        game();
      }
