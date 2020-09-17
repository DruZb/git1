let arr = [4, 8, 15, 16, 23, 42]
const even = (element) => element % 2 === 0;
console.log(arr.some(even));

// Задача выполнена неверно, скорее всего, вы неправильно поняли условие. По заданию нужно было написать код, который определяет, одинаковые элементы в массиве или нет. Ваш код решает совсем другую задачу: определяет, все ли элементы в массиве четные.
// Верное решение ниже:

const arr = [1, 2, 3, 3];

let isEqual = true;
const reference = arr[0];

for (let item of arr) {
	if (item !== reference) {
		isEqual = false;
	}
}

console.log(isEqual);
