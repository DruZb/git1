let x = 10;
let result = x + Math.random([0, 100]);

console.log(result)

// Неверно, т.к. по заданию нужно было найти случайное целое число, а ваш код возвращает дроби. Верный вариант решения:

const random = Math.floor(Math.random() * 101);